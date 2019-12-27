<template>
  <masonry :cols="{ default: 3, 700: 2, 400: 1 }" gutter="2rem">
    <Picture
      v-for="(pic, index) in filtered"
      :key="index"
      :src="pic.image"
      :title="pic.title"
      class="mb-8"
    />
  </masonry>
</template>

<script>
import Picture from "@/components/Picture";
export default {
  components: {
    Picture
  },
  inject: ["setTags", "selected"],
  props: {
    pictures: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    filter() {
      return this.selected && this.selected.tag;
    },
    filtered() {
      if (!this.filter) {
        return this.pictures;
      }
      return this.pictures.filter(p => p.tags.includes(this.filter));
    },
    tags() {
      const result = new Set();
      this.pictures.forEach(p => {
        result.add(...p.tags);
      });
      return [...result];
    }
  },
  created() {
    this.setTags(this.tags);
  },
  beforeDestroy() {
    this.setTags([]);
  }
};
</script>

<style></style>
