<template>
    <div class="card-wrapper">
      <app-image class="image__wrapper" v-if="image" :image="image" />
      <app-title class="title__wrapper" :title="title" />
      <app-description
        class="description__wrapper"
        :description="description"
      />
      <slot name="button"></slot>
      <slot name="counter"></slot>
    </div>
</template>

<script>
import AppTitle from "@/components/AppTitle.vue";
import AppDescription from "@/components/AppDescription.vue";
import AppImage from "@/components/AppImage.vue";
export default {
    name: "AppCard",
    props: {
        image: {
            type: String
        },
        title:{
            type: String
        },
        description:{
            type: String
        },
    },
    components: {
    AppTitle,
    AppDescription,
    AppImage,
  },
}
</script>