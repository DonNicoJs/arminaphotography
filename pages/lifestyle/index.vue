<template>
  <Gallery :pictures="pictures" />
</template>

<script>
import lifestyle from '@/content/albums/lifestyle.md'
import Gallery from '@/components/Gallery'

export default {
  components: {
    Gallery
  },
  data() {
    return { pictures: lifestyle.pictures }
  }
}
</script>

<style></style>
