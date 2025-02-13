<template>
  <div class="userpage">
    <h2 class="userpage__title">Editar Perfil</h2>
    <form @submit.prevent="saveProfile" class="userpage__form">
      <div class="userpage__form__item">
        <label for="userImage">Imagem do Usuário</label>
        <input type="file" id="userImage" @change="onImageChange" />
        <img :src="userImage" alt="User Image" v-if="userImage" class="userpage__form__item__image" />
      </div>
      <div class="userpage__form__item">
        <label for="userName">Nome de Usuário</label>
        <input type="text" id="userName" v-model="userName" />
      </div>
      <div class="userpage__form__item">
        <label for="characterName">Nome do Personagem</label>
        <input type="text" id="characterName" v-model="characterName" />
      </div>
      <button type="submit" class="userpage__form__button">Salvar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userImage: null,
      userName: '',
      characterName: '',
    };
  },
  methods: {
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
    saveProfile() {
      // Aqui você pode adicionar a lógica para salvar o perfil do usuário, como fazer uma chamada de API
      console.log('Perfil salvo:', {
        userImage: this.userImage,
        userName: this.userName,
        characterName: this.characterName,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.userpage {
  border: 1px solid color(cPrimary);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-size: 24px;
    color: color(cPrimary);
    margin-bottom: 16px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 400px;

    &__item {
      display: flex;
      flex-direction: column;
      gap: 8px;

      label {
        font-size: 16px;
        color: color(cPrimary);
      }

      input[type="text"],
      input[type="file"] {
        padding: 8px;
        border: 1px solid color(cPrimary);
        border-radius: 4px;
      }

      &__image {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
        margin-top: 8px;
      }
    }

    &__button {
      padding: 12px;
      background-color: color(cPrimary);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      text-align: center;
    }
  }
}
</style>