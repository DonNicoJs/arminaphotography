<template>
  <Layout>
    <div v-html=""></div>
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
import { capitalize } from "lodash-es";
export default {
  metaInfo() {
    return {
      title: capitalize(this.$page.page.title)
    };
  }
};
</script>

<style></style>
