<template>
  <div class="playergraphic" v-if="columns.length">
    <div v-for="(column, index) in columns" :key="index">
      <p>{{ column.number }}</p>
      <span :class="'span span-' + (index + 1)" :style="`height:${column.height}%`"></span>
      <h2>{{ column.id }}</h2>
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
        pm: 200,
        pp: 400,
        mm: 200,
        mp: 400,
        vm: 200,
        vp: 400,
        cm: 200,
        cp: 400,
        hm: 200,
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
  display: flex;
  gap: 16px;
  width: 100%;
  height: 100%;
}
</style>
