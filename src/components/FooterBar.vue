<template>
  <footer class="flex">
    <a
      v-for="(link, index) in links"
      :href="link.url"
      :key="index"
      target="_blank"
      class="pointer"
      rel="noopener"
    >
      <g-image :src="link.icon" :alt="link.name" class="w-10 h-10"></g-image>
    </a>
  </footer>
</template>

<static-query>
  query {
    social: allSocial {
      edges {
        node {
          links {
            name
            icon
            url
          }
        }
      }
    }
  }
</static-query>

<script>
import { get } from "lodash-es";
export default {
  computed: {
    links() {
      return get(this, "$static.social.edges[0].node.links", []);
    }
  }
};
</script>
