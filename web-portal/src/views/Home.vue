<template>
  <ii-list-viewer :calendar-events="events" />
</template>

<script>
  // @ is an alias to /src
  import ListViewer from '@/components/ListViewer.vue'

  export default {
    name: 'home',

    computed: {
      events () {
        return this.$store.getters.events || []
      }
    },
    created () {
      this.$store.dispatch('loadEvents')
    },
    components: {
      'ii-list-viewer': ListViewer
    }
  }
</script>
