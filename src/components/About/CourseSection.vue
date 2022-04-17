<template>
  <div class="row">
    <AboutCardComponent child-class="bg-primary" title="Course - SE577">
      The course I am taking for this Spring Term 2022 at Drexel is SE 577 - Software Architecture
    </AboutCardComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AboutCardComponent from './AboutCardComponent.vue';

export default defineComponent({
  name: 'CourseSection',
  components: { AboutCardComponent },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
