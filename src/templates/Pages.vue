<template>
  <div v-html=""></div>
</template>

<page-query>
  query($id: ID!) {
    page: pages(id: $id) {
      description
    }
  }
</page-query>

<script>
export default {};
</script>

<style></style>
