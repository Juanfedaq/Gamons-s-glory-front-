<template>
  <section class="editstatus">
    <GroupGraphic />
    <PlayerGraphic />
    <form class="editstatus__form">
      <h2>Meta Status</h2>
      <div class="editstatus__form__wrapper">
        <div class="editstatus__form__wrapper__content" v-for="(status, index) in statuses" :key="index">
          <input :class="'input__' + (index + 1)" type="number" min="0" max="99999" placeholder="empty"
            v-model="status.value">
          <h2 :class="{ 'error': !status.value }">{{ status.name }}</h2>
        </div>
      </div>
      <div class="editstatus__form__buttons">
        <CustomButton size="lg" variant="primary">Save</CustomButton>
        <RouterLink to="/groups/test">Back</RouterLink>
      </div>
    </form>
  </section>
</template>

<script>
import PlayerGraphic from "@/components/PlayerGraphic.vue";
import GroupGraphic from "@/components/GroupGraphic.vue";
import CustomButton from "@/components/CustomButton.vue";
import { RouterLink } from "vue-router";

export default {
  components: {
    PlayerGraphic,
    GroupGraphic,
    CustomButton,
  },
  data() {
    return {
      statuses: [
        { name: 'Primary', value: '' },
        { name: 'Critic', value: '' },
        { name: 'Haste', value: '' },
        { name: 'Mastery', value: '' },
        { name: 'Versatility', value: '' },
      ],
    };
  },
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

          &::placeholder {
            font-size: 16px;
            font-weight: 400;
            color: color(cWhite);
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

          &.error {
            animation: blink 1s step-start infinite;
            color: red;
          }
        }
      }
    }

    &__buttons {
      display: flex;
      justify-content: center;
      gap: 8px;

      a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 1rem;
        font-family: font(primary);
        font-weight: 400;
        transition: all 0.3s ease;
        margin-top: 40px;
        border: 1px solid color(cPrimary);
        background: none;
        color: color(cPrimary);

        &:hover {
          background: color(cBlack);
          color: color(cWhite);
        }
      }
    }
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
