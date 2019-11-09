<template>
  <Gallery :pictures="pictures" />
</template>

<script>
import foodData from '@/content/albums/food.md'
import Gallery from '@/components/Gallery'

export default {
  components: {
    Gallery
  },
  data() {
    return { pictures: foodData.pictures }
  }
}
</script>

<style></style>
