<template>
  <ii-list-viewer :calendar-events="events" />
</template>

<script>
  // @ is an alias to /src
  import ListViewer from '@/components/ListViewer.vue'

  export default {
    name: 'home',

    metaInfo: {
      title: 'Infinite Sandbox',
      titleTemplate: null,
      meta: [
        { 'og:title': 'Infinite Sandbox' },
        { 'og:description': 'This is the home page' }
      ]
    },

    computed: {
      events () {
        return this.$store.getters.events || []
      }
    },
    created () {
      // avoid loading events if they have already been loaded server-side
      // unfortunately, as far as I can tell, there isn't a way to identify
      // whether this component is hydrating server-rendered markup, so in
      // order to ensure the list is updated on navigation away and back,
      // it must be cleared on navigation away (see beforeRouteLeave hook)
      if (this.events.length === 0) {
        this.$store.dispatch('loadEvents')
      }
    },
    serverPrefetch () {
      return this.$store.dispatch('loadEvents')
    },
    beforeRouteLeave (to, from, next) {
      this.$store.dispatch('clearEvents')
      next()
    },
    components: {
      'ii-list-viewer': ListViewer
    }
  }
</script>
