<template>
  <div class="menu-item">
    <router-link :to="page">
      <h1>{{title}}</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    title: String,
    page: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-item {
    display: inline-block;                
    width: 80%;
    border-radius: 10px;
    background-color: #17dee1;
    color: #0000d6;
    text-decoration: underline;
    padding: 5px;
    margin: auto;
    margin-top: 2rem;
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    overflow-x: auto;
}
.menu-item:hover {
    background-color: #1a17e1;
}
.menu-item h1{
  text-align: center;
  font-size: 1.75rem;
  font-weight: bolder;
  color: #0000d6;
  white-space: nowrap;
  padding: 10px;
  margin: 0px;
}
.menu-item h1:hover{
  color: #dee117;
}
</style>
