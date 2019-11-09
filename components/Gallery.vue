<template>
  <div class="flex flex-wrap">
    <Picture
      v-for="(pic, index) in pictures"
      :key="index"
      :src="pic.image"
      :title="pic.image"
      class="flex-auto flex-shrink-0 my-2 mx-2"
    />
  </div>
</template>

<script>
import Picture from '@/components/Picture'
export default {
  components: {
    Picture
  },
  props: {
    pictures: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style></style>
