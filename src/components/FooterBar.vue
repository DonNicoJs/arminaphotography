<template>
  <footer>
    <a
      :href="link.url"
      v-for="(link, index) in links"
      :key="index"
      target="_blank"
    >
      <g-image :src="link.icon" :alt="link.name" class="w-8 h-8"></g-image>
    </a>
  </footer>
</template>

<static-query>
query {
  social: allSocial {
    edges {
      node {
        links {
          name,
          icon,
          url
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  computed: {
    links() {
      return this.$static.social.edges[0].node.links;
    }
  }
};
</script>
