<template>
  <main id="app">
    <!-- header -->
    <Header />
    <!-- render content -->
    <router-view/>
  </main>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    name: "App",
    components: {
      Header
    },
  }
</script>

<style lang="scss">
  html,
  body {
    display: block;
    position: relative;
    max-width: 2000px;
    margin: auto;
    padding: 0;
  }

  .section {
    position: relative;
    display: block;
    padding: 50px 0;
  }

  .btn-primary {
    position: relative;
    padding: 10px 25px;
    font-size: .8rem;
    background-image: linear-gradient(-90deg, #B539A8, #F4627C);
    border: none;
    -webkit-transition: all .15s ease-in-out;
    -moz-transition: all .15s ease-in-out;
    -ms-transition: all .15s ease-in-out;
    -o-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;
    
    &:hover {
      -webkit-transform: translate(0, -5px);
      -moz-transform: translate(0, -5px);
      -ms-transform: translate(0, -5px);
      -o-transform: translate(0, -5px);
      transform: translate(0, -5px);
    }
  }
</style>