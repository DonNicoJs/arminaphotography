<template>
  <Layout>
    <div v-html="parsed" />
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    page: pages(id: $id) {
      title,
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
