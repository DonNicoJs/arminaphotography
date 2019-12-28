<template>
  <Layout>
    <div class="flex flex-col md:flex-row">
      <g-link
        :to="album.node.path"
        :class="{ 'block mb-4 w-full md:w-1/2': true, 'md:mr-8': index === 0 }"
        v-for="(album, index) in $page.albums.edges"
        :key="index"
      >
        <!--  purgecss: block mb-4 w-full md:w-1/2 md:mr-8 -->
        <Picture
          :src="album.node.thumbnail"
          :title="album.node.title"
          is-main
        />
      </g-link>
    </div>
  </Layout>
</template>

<page-query>
  query {
    albums: allAlbums(sortBy: "order", order: ASC) {
      edges {
        node {
          thumbnail
          title
          path
        }
      }
    }
  }
</page-query>

<static-query>
  query {
    metadata: allCustomMetadata {
      edges {
        node {
          title
        }
      }
    }
  }
</static-query>

<script>
import { get } from "lodash-es";
import Picture from "@/components/Picture.vue";

export default {
  components: {
    Picture
  },
  metaInfo() {
    return {
      title: this.metaTitle
    };
  },
  computed: {
    metaTitle() {
      return get(this, "$static.metadata.edges[0].node.title", null);
    }
  }
};
</script>

<style></style>
