<template>
  <Gallery :pictures="pictures" :filter="tag" />
</template>

<script>
import lifestyle from '@/content/albums/lifestyle.md'
import Gallery from '@/components/Gallery'

export default {
  components: {
    Gallery
  },
  watchQuery: ['tag'],
  asyncData({ query }) {
    return {
      tag: query.tag || null
    }
  },
  data() {
    return { pictures: lifestyle.pictures }
  }
}
</script>

<style></style>
