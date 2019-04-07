<template>
  <div class="card-container">
    <div class="infinite-card">
      <div class="info-container">
        <h3>{{ event.title | truncate(40) }}</h3>
        <p class="description">{{ event.description | truncate(120) }} </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: [
      'event'
    ],
    filters: {
      truncate: function (text, stop, clamp = '...') {
        return text.slice(0, stop) + (stop < text.length ? clamp : '')
      }
    }
  }
</script>

<style scoped>
  .card-container {
    min-width: 240px;
    min-height: 200px;

    padding:5px;
  }

  .infinite-card {
    position: relative;
    display:flex;

    width: 240px;
    min-height: 200px;

    border-radius: 10px;

    background-color: white;
    color: black;
  }

  .info-container {
    position: absolute;
    top: 75px;
    left: 0;

    min-height: 115px;
    min-width: 200px;

    padding: 20px;
    padding-top: 15px;
  }

  .info-container h3 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 15px;
    margin-top: 0px;

    padding-right: 10px;
  }

  .info-container .description {
    font-family: 'EB Garamond', serif;
    font-size: 11px;
    padding-right: 12px;

    margin-top: 10px;
  }
</style>
