<template>
  <div class="titla-bar-wrapper">
    <div class="title-bar-fixed">
      <div v-if="showGoBackButton" class="btn-go-back" @click="goBack()">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <h1 class="page-title">{{title}}</h1>
    </div>
    <div class="title-bar">
      <div v-if="showGoBackButton" class="btn-go-back" @click="goBack()">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <h1 class="page-title">{{title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleBar',

  props: {
    title: String,
    showGoBackButton: Boolean,
  },

  methods: {
    goBack(){
      this.$router.push({ path: '/' })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-bar {
  background-color: #1a17e1;
  overflow: hidden;
  border-radius: 0px 0px 5px 5px;
}
.title-bar-fixed {
  position: fixed;
  z-index: 5;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: #1a17e1;
  overflow: hidden;
  border-radius: 0px 0px 5px 5px;
  box-shadow: 0px 5px 5px rgba(0,0,0,0.5);
}
.btn-go-back {
  position: absolute;
  left: 0px;
  color: #dee117;
  font-size: 1.75rem;
  padding: 10px;
  cursor: pointer;
}
.page-title { 
  color: #dee117;
  text-align: center;
  font-weight: bolder;
  font-size: 1.75rem;
  white-space: nowrap;
  padding: 10px;
  margin: 0px;
}
</style>
