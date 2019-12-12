<template>
  <div class="flex flex-wrap flex-col md:flex-row items-center justify-center">
    <div
      v-for="(pic, index) in repeated"
      class="my-1 mx-2 md:max-w-1/3 lg:max-w-1/2"
    >
      <Picture :key="index" :src="pic.image" :title="pic.title" />
    </div>
  </div>
</template>

<script>
import Picture from '@/components/Picture'
export default {
  components: {
    Picture
  },
  inject: ['setTags'],
  props: {
    pictures: {
      type: Array,
      default: () => []
    },
    filter: {
      type: String,
      default: null
    }
  },
  computed: {
    filtered() {
      if (!this.filter) {
        return this.pictures
      }
      return this.pictures.filter(p => p.tags.includes(this.filter))
    },
    repeated() {
      const result = []
      for (let i = 0; i < 20; i++) {
        result.push(...this.filtered)
      }
      return result
    },
    tags() {
      const result = new Set()
      this.pictures.forEach(p => {
        result.add(...p.tags)
      })
      return [...result]
    }
  },
  created() {
    this.setTags(this.tags)
  },
  beforeDestroy() {
    this.setTags([])
  }
}
</script>

<style></style>
