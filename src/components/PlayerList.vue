<template>
  <form class="playerlist">
    <InputImage @imageSelected="onImageSelected" @closeModal="modal = false" v-show="modal" />
    <div class="playerlist__title">
      <figure class="playerlist__title__figure">
        <span class="playerlist__title__figure__button" @click="modal = true">
          <img class="playerlist__title__figure__button__img" src="@/assets/img/edit.svg" alt="">
        </span>
        <img class="playerlist__title__figure__image" :src="userImage" alt="User Image" v-if="userImage" />
      </figure>
      <input class="playerlist__title__input" type="text" placeholder="Group Name" v-model="groupName" />
    </div>
    <div class="playerlist__wrapper">
      <div class="playerlist__wrapper__item" v-for="(user, index) in users" :key="index">
        <figure class="playerlist__wrapper__item__userimage">
          <img src="@/assets/img/default.jpg" />
        </figure>
        <div class="playerlist__wrapper__item__edit">
          <DropDown :options="userOptions" v-model="selectedUsers[index]" @input="setValue($event, index)" />
        </div>
      </div>
    </div>
    <CustomButton @click.prevent="SaveGroup">Save</CustomButton>
  </form>
</template>

<script>
import DropDown from '@/components/DropDown.vue';
import InputImage from '@/components/InputImage.vue';
import CustomButton from '@/components/CustomButton.vue';

export default {
  components: {
    DropDown,
    InputImage,
    CustomButton,
  },
  data() {
    return {
      modal: false,
      groupName: '',
      userImage: null,
      users: Array(5).fill(null),
      selectedUsers: Array(5).fill(''),
      userOptions: [], // Agora vai armazenar objetos de usuário
    };
  },
  methods: {
    // Função para pegar os usuários cadastrados via API
    validate() {
      if (this.groupName === '') {
        alert('Group name is required')
        return false
      } else if (this.selectedUsers.includes('')) {
        alert('All users must be selected')
        return false
      } else if (this.selectedUsers.length !== new Set(this.selectedUsers).size) {
        alert('All users must be different')
        return false
      }
      return true
    },
    async SaveGroup() {
      try {
        const id = this.$route.params.groupId;
        const payload = {
          users: this.selectedUsers,
          name: this.groupName,
          image: this.userImage,
        }
        if (this.validate()) {
          if (id) {
            const response = await this.$api.put(`/groups/${id}`, payload)

          } else {
            const response = await this.$api.post(`/groups`, payload)
          }
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async getGroups() {
      try {
        const id = this.$route.params.groupId;
        const response = await this.$api.get(`/groups/${id}`)
        this.groupName = response.data.group.name
        this.userImage = response.data.group.image
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async getUsers() {
      try {
        const response = await this.$api.get('/users')
        if (Array.isArray(response.data.users)) {
          this.userOptions = response.data.users.map(user => { return { name: user.name, id: user.id } });  // Armazenando os nomes dos usuários
        } else {
          this.userOptions = [];
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    onImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.userImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    onImageSelected(image) {
      this.userImage = image;
      this.modal = false;
    },
    setValue(value, index) {
      this.selectedUsers[index] = value;
    },
  },
  created() {
    this.getUsers(); // Busca os usuários quando o componente for criado
    if (this.$route.params.groupId) {
      this.getGroups()
    }
  },
};
</script>

<style scoped lang="scss">
.playerlist {
  border: 1px solid color(cPrimary);
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  gap: 16px;
  position: relative;
  z-index: 4;

  &__title {
    display: flex;
    justify-content: center;
    width: 100%;

    &__figure {
      height: 128px;
      width: 128px;
      border: 1px solid color(cPrimary);
      position: relative;
      object-fit: cover;

      &__button {
        position: absolute;
        width: 32px;
        height: 32px;
        top: -16px;
        right: -16px;
        background: color(cBlack);
        border-bottom: 1px solid color(cPrimary);
        border-left: 1px solid color(cPrimary);
        display: flex;
        justify-content: center;
        align-items: center;

        &__input {
          height: 32px;
          opacity: 0;
        }

        &__img {
          position: absolute;
          width: 16px;
          height: 16px;
        }
      }

      &__image {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
    }

    &__input {
      font-size: 64px;
      background: none;
      color: color(cWhite);
      font-weight: 400;
      border: none;
      border-bottom: 1px solid color(cPrimary);
    }
  }

  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    &__item {
      border: 1px solid color(cPrimary);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      padding: 16px 8px;
      width: 100%;

      &__userimage {
        width: 64px;
        height: 64px;
        border: 1px solid color(cPrimary);
        position: relative;

        img {
          width: 100%;
          height: 100%;
        }
      }

      &__edit {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
    }
  }
}
</style>
