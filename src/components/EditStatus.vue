<template>
  <section class="editstatus">
    <GroupGraphic />
    <PlayerGraphic />
    <form class="editstatus__form">
      <H2>Meta Status</H2>
      <div class="editstatus__form__wrapper">
        <div class="editstatus__form__wrapper__content">
          <input class="input__1" type="number" min="0" max="99999">
          <h2>Primary</h2>
        </div>
        <div class="editstatus__form__wrapper__content">
          <input class="input__2" type="number" min="0" max="99999">
          <h2>Critic</h2>
        </div>
        <div class="editstatus__form__wrapper__content">
          <input class="input__3" type="number" min="0" max="99999">
          <h2>Haste</h2>
        </div>
        <div class="editstatus__form__wrapper__content">
          <input class="input__4" type="number" min="0" max="99999">
          <h2>Mastery</h2>
        </div>
        <div class="editstatus__form__wrapper__content">
          <input class="input__5" type="number" min="0" max="99999">
          <h2>Versatility</h2>
        </div>
      </div>
      <div class="editstatus__form__buttons">
        <CustomButton size="lg" variant="primary">Salvar</CustomButton>
        <CustomButton size="lg" variant="primary">voltar</CustomButton>
      </div>
    </form>
  </section>
</template>

<script>
import PlayerGraphic from "@/components/PlayerGraphic.vue";
import GroupGraphic from "@/components/GroupGraphic.vue";
import CustomButton from "@/components/CustomButton.vue";

export default {
  components: {
    PlayerGraphic,
    GroupGraphic,
    CustomButton,
  }
};
</script>

<style scoped lang="scss">
.editstatus {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 8px;

  &__form {
    height: 100%;
    padding: 0px 16px 16px 16px;
    border: 1px solid color(cPrimary);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      margin-top: 8px;
      text-align: center;
      font-size: 24px;
      font-weight: 400;
      color: color(cWhite);
    }

    &__wrapper {
      display: flex;
      align-items: center;
      width: 100%;
      gap: 8px;

      &__content {
        width: 100%;

        input[type=number] {
          height: 30px;
          width: 100%;
          border: none;
          font-weight: 800;
          color: color(cWhite);
          font-size: 20px;
          text-align: center;

          &::-webkit-inner-spin-button,
          ::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }

        .input {
          &__1 {
            background: color(cPrimary);
          }

          &__2 {
            background: color(cCritic);
          }

          &__3 {
            background: color(cHaste);
          }

          &__4 {
            background: color(cMastery);
          }

          &__5 {
            background: color(cVersatility);
          }
        }

        h2 {
          margin-top: 8px;
          text-align: center;
          font-size: 18px;
          font-weight: 400;
          color: color(cWhite);
        }
      }
    }

    &__buttons {
      display: flex;
      justify-content: center;
      gap: 8px;
    }
  }
}
</style>
