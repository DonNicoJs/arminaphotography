<template>
  <footer class="flex">
    <a
      :href="link.url"
      v-for="(link, index) in links"
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
