<template>
  <section class="inputimage">
    <div class="inputimage__grid">
      <label v-for="(image, index) in images" :key="index" class="inputimage__item" :for="`image${index}`"
        :class="{ selected: selectedImageIndex === index }">
        <img :src="image" :alt="'Image' + index" />
        <input type="radio" name="image" v-model="selectedImageIndex" :value="index" />
      </label>
    </div>
    <div class="inputimage__buttons">
      <CustomButton @click.prevent="confirmSelection" :isDisabled="!selectedImageIndex">Select</CustomButton>
      <CustomButton @click.prevent="$emit('closeModal')">Cancel</CustomButton>
    </div>
  </section>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue';

export default {
  components: {
    CustomButton,
  },
  data() {
    return {
      images: [
        require('@/assets/img/groupimage-1.jpg'),
        require('@/assets/img/groupimage-2.jpg'),
        require('@/assets/img/groupimage-3.jpg'),
        require('@/assets/img/groupimage-4.jpg'),
        require('@/assets/img/groupimage-5.jpg'),
        require('@/assets/img/groupimage-6.jpg'),
        require('@/assets/img/groupimage-7.jpg'),
        require('@/assets/img/groupimage-8.jpg'),
        require('@/assets/img/groupimage-9.jpg')
      ],
      selectedImageIndex: null,
    };
  },
  methods: {
    async getGroups() {
      try {
        const response = await this.$api.get('/users')
        if (Array.isArray(response.data.users)) {
          this.userOptions = response.data.users.map(user => user.name);  // Armazenando os nomes dos usuários
        } else {
          this.userOptions = [];
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    confirmSelection() {
      const selectedImage = this.images[this.selectedImageIndex];
      this.$emit('imageSelected', selectedImage);
    },
  },
};
</script>

<style scoped lang="scss">
.inputimage {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background: rgb(28, 26, 29);
  background: linear-gradient(0deg, rgba(28, 26, 29, 0.5) 0%, rgba(28, 26, 29, 1) 50%, rgba(28, 26, 29, 0.4962359943977591) 100%);

  &__grid {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    gap: 8px;
    width: 100%;
    padding: 16px;
  }

  &__item {
    position: relative;
    height: 100%;
    width: 100%;

    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      margin: 0;

    }

    &.selected {
      border: 2px solid blue;
      /* Exemplo de estilo para o input selecionado */
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__buttons {
    margin-top: 16px;
    display: flex;
    gap: 8px;

    button {
      padding: 8px 16px;
    }
  }
}
</style>
