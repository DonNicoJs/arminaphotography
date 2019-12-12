<template>
  <div class="font-calibri">
    <NavigationBar :tags="tags" />
    <div class="pt-32 px-4">
      <nuxt />
    </div>
  </div>
</template>
<script>
import NavigationBar from '~/components/NavigationBar'

export default {
  components: {
    NavigationBar
  },
  provide() {
    return {
      setTags: this.setTags
    }
  },
  data() {
    return {
      tags: []
    }
  },
  methods: {
    setTags(tags) {
      this.tags = tags
    }
  }
}
</script>

<style></style>
