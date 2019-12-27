// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import VueMasonry from "vue-masonry-css";

import "@/assets/css/tailwind.css";

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  Vue.use(VueMasonry);

  Vue.component("Layout", DefaultLayout);
}
