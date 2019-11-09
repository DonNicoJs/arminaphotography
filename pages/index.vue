<template>
  <div class="flex flex-row">
    <div class="flex-1">
      <nuxt-link :to="{ name: 'food' }">
        <Picture :src="food.thumbnail" :title="food.title" />
      </nuxt-link>
    </div>
    <div class="flex-1">
      <nuxt-link :to="{ name: 'lifestyle' }">
        <Picture :src="lifestyle.thumbnail" :title="lifestyle.title" />
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
