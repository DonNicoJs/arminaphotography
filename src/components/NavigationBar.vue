<template>
  <nav class="fixed top-0 left-0 right-0 bg-white z-10">
    <div class=" flex justify-between items-center flex-col sm:flex-row">
      <div>
        <g-link to="/" class="font-kristi text-5xl">
          armina photography
        </g-link>
      </div>
      <div class="flex items-center">
        <g-link to="/about">
          about
        </g-link>
        <span class="bg-red-armina h-2 w-2 mx-2" />
        <g-link to="/about">
          contact
        </g-link>
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
    },
    selectedTag: {
      type: String,
      default: null
    }
  },

  computed: {
    showTags() {
      return this.tags && this.tags.length > 0;
    },
    parsedTags() {
      return this.tags.map(t => ({ label: t, value: t }));
    }
  },
  methods: {
    selectTag(tag) {
      tag = tag === this.selectedTag ? null : tag;
      this.$emit("selected", tag);
    }
  }
};
</script>

<style></style>
