<template>
  <div class="flex flex-col md:flex-row">
    <nuxt-link
      :to="{ name: 'food' }"
      class="block mb-4 md:mr-8 w-full md:w-1/2"
    >
      <Picture :src="food.thumbnail" :title="food.title" is-main />
    </nuxt-link>

    <nuxt-link :to="{ name: 'lifestyle' }" class="block mb-4 w-full md:w-1/2">
      <Picture :src="lifestyle.thumbnail" :title="lifestyle.title" is-main />
    </nuxt-link>
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
