<template>
  <nav class="fixed top- left-0 right-0 bg-white z-10 px-32">
    <div class=" flex justify-between items-center flex-col sm:flex-row">
      <div>
        <nuxt-link :to="{ name: 'index' }" class="font-kristi text-5xl">
          armina photography
        </nuxt-link>
      </div>
      <div class="flex">
        <a
          href="https://www.facebook.com/arminaphotography/"
          target="_blank"
          class="mr-2"
        >
          facebook
        </a>
        <a href="mailto:arminaphotography@gmail.com">
          e-mail
        </a>
      </div>
    </div>
    <div v-if="showTags" class="pb-2">
      <ul class="flex items-center justify-center text-xl">
        <li
          v-for="tag in parsedTags"
          :class="{
            'border-b-0 border-gray-700 mr-4 transition-all transition-250': true,
            'border-b-2': tag.value === selectedTag
          }"
        >
          <button
            @click.prevent="selectTag(tag.value)"
            class="flex items-center focus:outline-none"
          >
            <!-- <img
              :class="{
                'h-0 w-0 opacity-0 transition-all transition-250': true,
                'h-3 w-3 opacity-100': tag.value === selectedTag
              }"
              src="~assets/icons/close.svg"
            /> -->
            <span class="capitalize">{{ tag.label }}</span>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedTag: null
    }
  },
  computed: {
    showTags() {
      return this.tags && this.tags.length > 0
    },
    parsedTags() {
      return this.tags.map(t => ({ label: t, value: t }))
    }
  },
  mounted() {
    this.selectedTag = this.$route.query.tag
  },
  methods: {
    selectTag(tag) {
      tag = tag === this.selectedTag ? null : tag
      this.selectedTag = tag
      this.$router.push({ path: this.$route.path, query: { tag } })
    }
  }
}
</script>

<style></style>
