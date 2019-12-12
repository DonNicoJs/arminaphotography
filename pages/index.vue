<template>
  <div class="flex flex-col md:flex-row">
    <div class="flex-1 mb-4 md:mr-4">
      <nuxt-link :class="linkClasses" :to="{ name: 'food' }">
        <Picture :src="food.thumbnail" :title="food.title" is-main />
      </nuxt-link>
    </div>
    <div class="flex-1 mb-4">
      <nuxt-link :class="linkClasses" :to="{ name: 'lifestyle' }">
        <Picture :src="lifestyle.thumbnail" :title="lifestyle.title" is-main />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import food from '@/content/albums/food.md'
import lifestyle from '@/content/albums/lifestyle.md'
import Picture from '@/components/Picture'

export default {
  components: {
    Picture
  },
  data() {
    return {
      food,
      lifestyle
    }
  },
  computed: {
    linkClasses() {
      return {
        block: true
      }
    }
  },
  mounted() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            this.$route.push('/admin')
          })
        }
      })
    }
  }
}
</script>

<style></style>
