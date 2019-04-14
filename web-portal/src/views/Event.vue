<template>
  <div class="container event-page">
    <div class="event" v-if="!LOADING">
      <div class="event-image-placeholder"></div>
      <div class="event-heading">
        <h1>{{ event.title }}</h1>
      </div>
      <div class="event-body">
        <div class="event-description">{{ event.description }}</div>
      </div>
    </div>
      <div v-else>
        <ii-loader id="loader" iconColor="#fff" width="100%" height="100%" />
      </div>
    </div>

</template>

<script>
  import Loader from '@/components/vectors/Loader'

  export default {
    metaInfo () {
      return {
        title: this.LOADING ? 'Loading' : this.event.title,
        meta: [
          { 'og:title': this.event.title },
          { 'og:description': this.event.description },
          { 'og:image': 'https://picsum.photos/g/600/600' }
        ]
      }
    },
    props: [
      'eventId'
    ],
    computed: {
      LOADING () {
        return this.$store.getters.GetLoadingStatus
      },
      event () {
        return this.$store.getters.event
      }
    },
    created () {
      if (!this.event || !this.event.id) {
        this.$store.dispatch('loadEvent', this.eventId)
      }
    },
    serverPrefetch () {
      return this.$store.dispatch('loadEvent')
    },
    beforeRouteLeave (to, from, next) {
      this.$store.dispatch('clearEvent')
      next()
    },
    components: {
      'ii-loader': Loader
    }
  }
</script>

<style scoped>
  .event-page {
    padding: 0;
  }

  .event-image-placeholder {
    height: 100px;
  }

  .event-heading {
    padding: 1rem 2rem;
    color: #ffffff;
    background-color: #2a2a2a;
  }

  .event-body {
    padding: 1rem 2rem;
  }
</style>
