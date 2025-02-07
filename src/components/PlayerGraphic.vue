<template>
  <div class="playergraphic" v-if="columns.length">
    <div class="playergraphic__item" v-for="(column, index) in columns" :key="index">
      <span :class="'span span-' + (index + 1)" :style="`height:${column.height}%`">
        <p>{{ column.number }}</p>
        <h2>{{ column.id }}</h2>
      </span>

    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerGraphic",
  data() {
    return {
      columns: [],
      // APIFAKE
      data: {
        pm: 20000,
        pp: 40000,
        mm: 10000,
        mp: 400,
        vm: 2000,
        vp: 400,
        cm: 2000,
        cp: 400,
        hm: 20000,
        hp: 400,
      }
    };
  },
  methods: {
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
      console.log(this.columns)
    },
    getName(index) {
      const name = ["P", "P", "C", "C", "H", "H", "M", "M", "V", "V"]
      return name[index]
    }
  }
  ,
  created() {//entra aqui logo quando carrega o componente
    this.getItens()
  }
};
</script>

<style scoped lang="scss">
.playergraphic {
  position: relative;
  display: flex;
  border: 2px solid color(cPrimary);
  gap: 16px;
  padding: 16px;
  z-index: 2;
  height: calc(100% - 50px);

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

      p {
        font-size: 16px;
        font-weight: 800;
        color: color(cWhite);
        writing-mode: vertical-lr;
        width: 100%;
      }

      &-1 {
        background: color(cPrimary);
      }

      &-2 {
        background: color(cPrimary);
        opacity: .6;
      }

      &-3 {
        background: color(cCritic);
      }

      &-4 {
        background: color(cCritic);
        opacity: .6;
      }

      &-5 {
        background: color(cHaste);
      }

      &-6 {
        background: color(cHaste);
        opacity: .6;
      }

      &-7 {
        background: color(cMastery);
      }

      &-8 {
        background: color(cMastery);
        opacity: .6;
      }

      &-9 {
        background: color(cVersatility);
      }

      &-10 {
        background: color(cVersatility);
        opacity: .6;
      }

      h2 {
        font-size: 20px;
        font-weight: 800;
        color: color(cWhite);
      }
    }


  }
}
</style>
