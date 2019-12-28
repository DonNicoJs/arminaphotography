<template>
  <div class="font-calibri min-h-screen">
    <NavigationBar
      :selected-tag="tag"
      :tags="tags"
      class="px-8 md:px-32"
      @selected="selectTag"
    />
    <transition name="fade-and-slide" appear>
      <main id="main" class="pt-48 md:pt-32 px-8 md:px-32 main-container">
        <slot />
      </main>
    </transition>
    <FooterBar class="px-8 md:px-32 pb-4 pt-8" />
  </div>
</template>

<static-query>
  query {
    metadata: allCustomMetadata {
      edges {
        node {
          description
        }
      }
    }
  }
</static-query>

<script>
import { get, capitalize } from "lodash-es";
import NavigationBar from "~/components/NavigationBar.vue";
import FooterBar from "~/components/FooterBar.vue";

export default {
  components: {
    NavigationBar,
    FooterBar
  },
  metaInfo() {
    return {
      meta: [{ name: "description", content: this.metaDescription }]
    };
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
  computed: {
    metaDescription() {
      return get(this, "$static.metadata.edges[0].node.description", null);
    }
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
