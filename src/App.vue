<template>
  <main id="app">
    <!-- header -->
    <Header />
    <!-- render content -->
    <router-view/>
    <!-- footer -->
    <Footer />
  </main>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: "App",
    components: {
      Header,
      Footer
    },
  }
</script>

<style lang="scss">
  html,
  body {
    display: block;
    position: relative;
    margin: auto;
    padding: 0;
    max-width: 2000px;
  }

  .section {
    position: relative;
    display: block;
    padding: 50px 0;
  }

  .btn-primary {
    position: relative;
    padding: 12px 25px;
    font-size: .8rem;
    background-image: linear-gradient(-90deg, #B539A8, #F4627C);
    border: none;
    border-radius: 8px;
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

  ::selection {
    background-color: #B539A8;
    color: #FFFFFF;
  }
</style>