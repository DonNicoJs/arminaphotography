<template>
  <figure>
    <img :src="src" :alt="title" class="object-contain h-64" />
    <!-- <figcaption>{{ title }}</figcaption> -->
  </figure>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style></style>
