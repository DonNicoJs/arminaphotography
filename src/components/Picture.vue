<template>
  <figure :class="{ relative: true, 'inline-block': isMain }">
    <g-image :src="src" :alt="title" class="w-full h-auto" />

    <figcaption
      :class="{
        'absolute top-0 left-0 right-0 bottom-0  bg-shadow transition-all': true,
        'opacity-0 hover:opacity-100': !isMain,
        'opacity-100 hover:opacity-0': isMain
      }"
    >
      <!--  purgecss: opacity-0 hover:opacity-100 opacity-100 hover:opacity-0 absolute top-0 left-0 right-0 bottom-0  bg-shadow transition-all -->
      <span
        :class="{
          'absolute translate-center-y top-1/2 left-8 font-kristi text-white capitalize text-center right-8': true,
          'text-3xl': !isMain,
          'text-6xl': isMain
        }"
        >{{ title }}</span
      >
      <!--  purgecss: absolute translate-center-y top-1/2 left-8 font-kristi text-white capitalize text-center right-8 text-3xl text-6xl -->
    </figcaption>
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
    },
    isMain: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style></style>
