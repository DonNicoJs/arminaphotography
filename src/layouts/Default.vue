<template>
  <div class="font-calibri min-h-screen">
    <NavigationBar
      :selected-tag="tag"
      :tags="tags"
      class="px-8 md:px-32"
      @selected="selectTag"
    />
    <transition name="fade-and-slide" appear>
      <main id="main" class="pt-32 px-8 md:px-32 main-container">
        <slot />
      </main>
    </transition>
    <FooterBar class="px-8 md:px-32 pb-4 pt-8" />
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar";
import FooterBar from "~/components/FooterBar";

export default {
  components: {
    NavigationBar,
    FooterBar
  },
  provide() {
    const selected = {};
    Object.defineProperty(selected, "tag", {
      enumerable: true,
      get: () => this.tag,
      set: valu => this.selectTag(value)
    });

    return {
      setTags: this.setTags,
      selected
    };
  },
  data() {
    return {
      tags: [],
      tag: null
    };
  },
  mounted() {
    this.tag = this.$route.query.tag;
  },
  methods: {
    setTags(tags) {
      this.tags = tags;
    },
    selectTag(tag) {
      this.tag = tag;
      this.$router.replace({ path: this.$route.path, query: { tag } });
    }
  }
};
</script>

<style></style>
