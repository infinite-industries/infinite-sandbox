<template>
  <div class="container">
    <div id="toolbar">
      <ii-logo id="logo" iconColor="#fff" width="140" height="55" style="cursor: pointer" />
      <ii-hamburger id="hamburger" width="55" height="55" style="cursor: pointer" />
    </div>
    <ii-nav />
  </div>
</template>

<script>
  import Logo from './vectors/Logo.vue'
  import Hamburger from './vectors/Hamburger.vue'
  import Navigation from './Nav.vue'

  export default {
    components: {
      'ii-logo': Logo,
      'ii-hamburger': Hamburger,
      'ii-nav': Navigation
    }
  }
</script>

<style scoped>
  #toolbar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 21;
    height: 85px;
    width: 100%;
    background: #000000;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) 20px, rgba(0, 0, 0, 0.75) 40px, rgba(0, 0, 0, 0.5) 60px, rgba(0, 0, 0, 0.25) 75px);
  }

  #hamburger {
    position: absolute;
    right: 30px;
    top: 20px;
  }

  #logo {
    position: absolute;
    left: 30px;
    top: 20px;
  }
</style>
