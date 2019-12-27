<template>
  <div>
    <masonry :cols="{ default: 3, 700: 2, 400: 1 }" gutter="2rem">
      <Picture
        v-for="(pic, index) in filtered"
        :key="index"
        :src="pic.image"
        :title="pic.title"
        class="mb-8"
        @click.native="showPic = pic"
      />
    </masonry>
    <Portal>
      <transition name="fade" appear>
        <div
          v-if="showPic"
          class="z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center"
        >
          <div class="absolute w-full h-full bg-gray-900 opacity-75"></div>
          <div class="relative md:max-w-1/2  mx-auto rounded shadow-lg z-50">
            <button
              class="absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 z-50 rounded shadow-lg bg-gray-800 p-1 outline-none"
              @click="showPic = null"
            >
              <svg
                class="fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                ></path>
              </svg>
            </button>
            <g-image
              class="w-auto md:max-h-3/4-screen"
              :src="showPic.image"
              :title="showPic.title"
            />
          </div>
        </div>
      </transition>
    </Portal>
  </div>
</template>

<script>
import Picture from "@/components/Picture";
import { Portal } from "@linusborg/vue-simple-portal";

export default {
  components: {
    Picture,
    Portal
  },
  inject: ["setTags", "selected"],
  props: {
    pictures: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      showPic: null
    };
  },
  computed: {
    filter() {
      return this.selected && this.selected.tag;
    },
    filtered() {
      if (!this.filter) {
        return this.pictures;
      }
      return this.pictures.filter(p => p.tags.includes(this.filter));
    },
    tags() {
      const result = new Set();
      this.pictures.forEach(p => {
        result.add(...p.tags);
      });
      return [...result];
    }
  },
  created() {
    this.setTags(this.tags);
  },
  beforeDestroy() {
    this.setTags([]);
  }
};
</script>

<style></style>
