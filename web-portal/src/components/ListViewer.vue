<template>
  <div class="list-container">
    <div class="list-viewer" ref="list" v-if="!LOADING">
      <div v-for= "calendar_event in calendarEvents" :key="calendar_event.id" class="outer-countainer">
         <ii-card :event="calendar_event" />
      </div>
      <div id="shim" ref="shim"></div>
    </div>
    <div v-else class="spinner-container">
      <ii-loader id="loader" iconColor="#fff" width="100%" height="100%" />
    </div>
  </div>
</template>

<script>
  import Card from '@/components/Card.vue'
  import Loader from '@/components/vectors/Loader.vue'

  const VERTICAL_CARD_SIZE = 250 // 240px + 5px padding each side

  export default {
    props: [
      'calendarEvents'
    ],
    data () {
      return { }
    },
    mounted () {
      // Adjust the row size
      if (!this.$isServer) {
        this.$nextTick(function () {
          this.adjustCardSpacing()
          window.addEventListener('resize', this.adjustCardSpacing)
        })
      }
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.adjustCardSpacing)
    },
    computed: {
      LOADING () {
        return this.$store.getters.GetLoadingStatus
      }
    },
    watch: {
      LOADING (value) {
        if (!value && !this.$isServer) {
          this.$nextTick(function () {
            this.adjustCardSpacing()
          })
        }
      }
    },
    methods: {
      adjustCardSpacing () {
        // list is hidden while loading, cannot measure width
        if (this.LOADING) return

        if (window.innerWidth > 480) {
          let cardWidth = VERTICAL_CARD_SIZE
          let cardTotal = this.calendarEvents.length
          let listViewerWidth = this.$refs.list.clientWidth

          // number of cards that fit in one row is the width of the list divided by the width of a card
          let rowLength = Math.floor(listViewerWidth / cardWidth)
          let shimEquiv = cardTotal % rowLength

          // when the total divides evenly into the row length, there's no need for the shim,
          // and it actively interferes with resize by preventing the list container from adjusting
          let shimWidth = '0'
          if (shimEquiv > 0) {
            shimWidth = (rowLength - shimEquiv) * cardWidth
          }

          // console.log(cardTotal + " cards with width " + cardWidth + "px");
          // console.log(rowLength + " cards will fit in " + listViewerWidth + "px");
          // console.log("shim is equivalent to " + shimEquiv + " cards with width " + shimWidth + "px");

          this.$refs.shim.style.width = shimWidth + 'px'
          this.$refs.shim.style.display = ''
        } else {
          // console.log("single column, shim not necessary");
          this.$refs.shim.style.display = 'none'
        }
      }
    },
    components: {
      'ii-card': Card,
      'ii-loader': Loader
    }

  }
</script>

<style scoped>

  .list-container {
    width: 100%;
    padding: 0px;
  }

  .spinner-container {
    text-align: center;

  }

  @media only screen and (min-width: 481px) {
    .list-container {
      display: flex;
      justify-content: center;
    }
  }

  .list-viewer {
    /* max-width: 90%; */
    padding-top: 25px;

    display:flex;
    flex-wrap: wrap;
    justify-content: center;

  }

  @media only screen and (max-width: 480px) {
    .outer-countainer{
      border-top-left-radius:10px;
      border-bottom-left-radius: 10px;
      width: 100%;
    }
  }

</style>
