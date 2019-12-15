<template>
  <figure :class="{ relative: true, 'inline-block': isMain }">
    <img
      v-lazy="src"
      :alt="title"
      :class="{
        'w-full h-auto': true
      }"
    />
    <figcaption
      :class="{
        'absolute top-0 left-0 right-0 bottom-0  bg-shadow transition-all': true,
        'opacity-0 hover:opacity-100': !isMain,
        'opacity-100 hover:opacity-0': isMain
      }"
    >
      <span
        :class="{
          'absolute translate-center-y top-1/2 left-0 font-kristi text-white capitalize text-center right-0 px-2': true,
          'text-3xl': !isMain,
          'text-6xl': isMain
        }"
        >{{ title }}</span
      >
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
}
</script>

<style></style>
