<template>
  <Layout>
    <Gallery :pictures="$page.album.pictures" />
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    album: albums(id: $id) {
     title,
     pictures {
       image,
       title,
       tags
     }
    }
  }
</page-query>

<script>
import { capitalize } from "lodash-es";
import Gallery from "@/components/Gallery";

export default {
  metaInfo() {
    return {
      title: capitalize(this.$page.album.title)
    };
  },
  components: {
    Gallery
  }
};
</script>

<style></style>
