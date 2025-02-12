<template>
  <section class="groupgraphic" v-if="columns.length">
    <h2 class="groupgraphic__title">Dungeon Priority</h2>
    <div class="groupgraphic__wrapper">
      <div class="groupgraphic__wrapper__item" v-for="(column, index) in columns" :key="index">
        <span :class="'span span-' + (index + 1)" :style="`height:${column.height}%`">
          <div class="number-stack">
            <p>{{ column.number }}</p>
          </div>
          <h2>{{ column.id }}</h2>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PlayerGraphic",
  data() {
    return {
      columns: [],
      // APIFAKE
      data: this.generateRandomData(),
    };
  },
  methods: {
    generateRandomData() {
      return {
        pm: Math.floor(Math.random() * 10),
        pp: Math.floor(Math.random() * 10),
        mm: Math.floor(Math.random() * 10),
        mp: Math.floor(Math.random() * 10),
        vm: Math.floor(Math.random() * 10),
        vp: Math.floor(Math.random() * 10),
        cm: Math.floor(Math.random() * 10),
        cp: Math.floor(Math.random() * 10),
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
      const name = ["GB", "COT", "MTS", "AK", "SOB", "DB", "NW", "SV"]
      return name[index]
    },
  }
  ,
  created() {//entra aqui logo quando carrega o componente
    this.getItens()
  }
};
</script>

<style scoped lang="scss">
.groupgraphic {
  height: 100%;
  border: 1px solid color(cPrimary);

  &__title {
    text-align: center;
    color: color(cWhite);
    font-weight: 400;
    margin-top: 8px;
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

        &-1 {
          background: #C547FF;
        }

        &-2 {
          background: #591288;
        }

        &-3 {
          background: #5683F4;
        }

        &-4 {
          background: #C41E3A;
        }

        &-5 {
          background: #623309;
        }

        &-6 {
          background: #C8AA4E;
        }

        &-7 {
          background: #47BC66;
        }

        &-8 {
          background: #8E3200;
        }
      }
    }
  }
}
</style>
