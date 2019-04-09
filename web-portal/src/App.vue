<template>
  <div id="app">
    <!-- TODO: nav component with sidebar -->
    <ii-toolbar />
    <div id="ii-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Toolbar from '@/components/Toolbar.vue'

  export default {
    metaInfo: {
      titleTemplate: '%s - Infinite Sandbox',
      meta: [
        { 'author': 'infinite industries' },
        { 'article:publisher': 'https://www.facebook.com/medium' },
        { 'article:author': 'https://medium.com/@dima_strakovsky' }
      ]
    },
    components: {
      'ii-toolbar': Toolbar
    }
  }
</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=EB+Garamond|Open+Sans:400,600,600i,700');

  body {
    background-color: black;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #ii-container {
    padding-top: 90px;
  }

  .container {
    flex: 1 1 100%;
    margin: auto;
    padding: 24px;
    width: 100%;
  }

  @media only screen and (min-width: 1264px) {
    .container {
      max-width: 1185px
    }
  }

  .admin-page,
  .event-page,
  .info-page {
    background: white;
    color: black;
    border-radius: 10px;
  }

  .info-page {
    width: 85%;
    max-width: 900px;
  }

  @media only screen and (min-width: 993px) {
    .info-page {
      width: 70%;
    }
  }

  h1, h2, h3 {
    font-family: "Open Sans", sans-serif;
    letter-spacing: .02em;
  }

  h1{
    font-size: 1.9em;
    font-weight: bold;
    margin-bottom: 0.7em;
  }

  h2, h3{
    font-size: 1.5em;
    font-weight: 700;
    margin-top: 1.5em;
    margin-bottom: .5em;
  }

  .info-page p {
    font-family: "EB Garamond";
    font-size: 1.25em;
  }

</style>
