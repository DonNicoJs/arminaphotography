<template>
  <Layout>
    <div class="container Page">
      <div v-html="parsed" />
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    page: pages(id: $id) {
      title
      description
    }
  }
</page-query>

<script>
import MarkdownIt from "markdown-it";
import { capitalize } from "lodash-es";
const md = MarkdownIt();

export default {
  metaInfo() {
    return {
      title: capitalize(this.$page.page.title)
    };
  },
  computed: {
    parsed() {
      return md.render(this.$page.page.description);
    }
  }
};
</script>

<style lang="scss">
.Page {
  img {
    @apply w-3/4 mb-4;
  }

  h4 {
    @apply text-4xl font-kristi mt-6;
  }

  h3 {
    @apply text-5xl font-kristi mt-6 mb-2;
  }

  h2 {
    @apply text-5xl font-kristi font-bold mt-6 mb-2;
  }

  p {
    @apply my-2 px-4 text-justify;
  }

  ul {
    @apply my-2 px-4;
  }

  li {
    list-style-type: "-  ";
    @apply ml-4;
  }
}
</style>
