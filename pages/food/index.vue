<template>
  <Gallery :pictures="pictures" :filter="tag" />
</template>

<script>
import foodData from '@/content/albums/food.md'
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
    return { pictures: foodData.pictures }
  }
}
</script>

<style></style>
