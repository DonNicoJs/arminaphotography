<template>
  <div class="font-calibri min-h-screen">
    <NavigationBar :tags="tags" class="px-8 md:px-32" />
    <div class="pt-32 px-8 md:px-32 main-container">
      <nuxt />
    </div>
    <FooterBar class="px-8 md:px-32" />
  </div>
</template>
<script>
import NavigationBar from '~/components/NavigationBar'
import FooterBar from '~/components/FooterBar'

export default {
  components: {
    NavigationBar,
    FooterBar
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
