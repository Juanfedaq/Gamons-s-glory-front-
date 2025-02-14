<template>
  <router-link class="playergraphic custom-cursor-wrapper" v-if="columns.length" to="/:group/:name"
    @mousemove="updateCursor" @mouseleave="removeCursor">
    <h2 class="playergraphic__title">User Name</h2>
    <div class="playergraphic__wrapper">
      <div class="playergraphic__wrapper__item" v-for="(column, index) in columns" :key="index">
        <span :class="'span span-' + (index + 1)" :style="`height:${column.height}%`">
          <div class="number-stack">
            <p>{{ formatNumber(column.number) }}</p>
          </div>
          <h2>{{ column.id }}</h2>
        </span>
      </div>
    </div>
    <div class="custom-cursor custom-cursor--1" ref="cursorY"></div>
    <div class="custom-cursor custom-cursor--2" ref="cursorX" :data-index="index"></div>
  </router-link>

</template>

<script>
export default {
  props: ['index'],
  data() {
    return {
      columns: [],
      // APIFAKE
      data: this.generateRandomData(),
    };
  },
  methods: {
    updateCursor(event) {
      const cursorY = this.$refs.cursorY;
      const cursorX = this.$refs.cursorX;
      let index = cursorX.getAttribute('data-index')
      let size = cursorX.closest('.playergraphic').offsetWidth * parseInt(index)
      let gapSize = 16 + (parseInt(index) * 8)
      if (cursorY, cursorX) {
        let posY = event.clientY - (window.innerHeight / 2) - 32
        cursorY.style.transform = `translateY(${posY}px)`;
        cursorX.style.transform = `translate(${(event.clientX - size - gapSize)}px, ${posY - 15}px)`;
      }

    },
    removeCursor() {
      const cursorY = this.$refs.cursorY;
      const cursorX = this.$refs.cursorX;
      if (cursorY, cursorX) {
        cursorY.style.transform = `initial`;
        cursorX.style.transform = `initial`;
      }
    },
    generateRandomData() {
      return {
        pm: Math.floor(Math.random() * 100000),
        pp: Math.floor(Math.random() * 100000),
        mm: Math.floor(Math.random() * 100000),
        mp: Math.floor(Math.random() * 100000),
        vm: Math.floor(Math.random() * 100000),
        vp: Math.floor(Math.random() * 100000),
        cm: Math.floor(Math.random() * 100000),
        cp: Math.floor(Math.random() * 100000),
        hm: Math.floor(Math.random() * 100000),
        hp: Math.floor(Math.random() * 100000),
      };
    },
    verificarMaior() {
      return Math.max(...this.columns.map(column => column.number));
    },
    getItens() {
      //colocar API aqui
      this.formatIten()
    },
    formatIten() {
      Object.values(this.data).map((item) => {
        this.columns.push({
          height: 0,
          number: item,
          id: ''
        })
      })
      let maior = this.verificarMaior()
      this.columns.map((column, index) => {
        this.columns[index].height = (column.number * 100) / maior
        this.columns[index].id = this.getName(index)
      })
    },
    getName(index) {
      const name = ["P", "P", "C", "C", "H", "H", "M", "M", "V", "V"]
      return name[index]
    },
    formatNumber(value) {
      if (value >= 1000000) {
        return (value / 1000000).toFixed(1).replace(".0", "") + "M"; // Ex: 2.1M
      } else if (value >= 1000) {
        return (value / 1000).toFixed(1).replace(".0", "") + "k"; // Ex: 41.3k
      }
      return value.toString(); // Exibe normal se for menor que 1.000
    },
  }
  ,
  created() {//entra aqui logo quando carrega o componente
    this.getItens()
  }
};
</script>

<style scoped lang="scss">
.playergraphic {
  height: 100%;
  border: 1px solid color(cPrimary);
  overflow: hidden;

  &:hover {
    background: color(cBlack);
  }

  &__title {
    text-align: center;
    color: color(cWhite);
    margin-top: 8px;
    font-weight: 400;
  }

  &__wrapper {
    height: calc(100% - 38px);
    position: relative;
    display: flex;
    gap: 16px;
    padding: 42px 16px 52px;
    z-index: 2;

    &__item {
      display: block;
      width: 100%;
      display: flex;

      .span {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        align-self: flex-end;
        width: 100%;
        position: relative;
        filter: drop-shadow(2px 4px 6px black);

        .number-stack {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: absolute;
          left: 50%;
          top: 0px;
          transform: translate(-50%, calc(-100% - 16px));

          p {
            margin: -3px 0px;
            font-size: 14px;
            font-weight: 400;
            color: color(cWhite);
          }
        }

        h2 {
          font-size: 16px;
          font-weight: 400;
          color: color(cWhite);
          position: absolute;
          left: 50%;
          bottom: 0px;
          transform: translate(-50%, calc(100% + 16px))
        }

        &-2,
        &-4,
        &-6,
        &-8,
        &-10 {
          filter: brightness(.5) drop-shadow(2px 4px 6px black);

          p,
          h2 {
            filter: brightness(1)
          }
        }

        &-1 {
          background: color(cPrimary);
        }

        &-2 {
          background: color(cPrimary);
        }

        &-3 {
          background: color(cCritic);
        }

        &-4 {
          background: color(cCritic);
        }

        &-5 {
          background: color(cHaste);
        }

        &-6 {
          background: color(cHaste);
        }

        &-7 {
          background: color(cMastery);
        }

        &-8 {
          background: color(cMastery);
        }

        &-9 {
          background: color(cVersatility);
        }

        &-10 {
          background: color(cVersatility);
        }
      }
    }
  }
}

.custom-cursor-wrapper {
  cursor: none;
  position: relative;
}


.custom-cursor {
  position: absolute;
  z-index: 3;
  top: -1px;
  left: -1px;
  background: color(cPrimary);
  pointer-events: none;

  &--1 {
    width: 100%;
    height: 1px;

  }

  &--2 {
    width: 1px;
    height: 30px;
  }
}
</style>
