<template>
  <div class="row">
    <AboutCardComponent child-class="bg-secondary" title="About Me">
      Hello, my name is Rohit Bhattacharya. I currently work as an IT analyst focused on the process side and working within the ServiceNow platform as our ITSM solution. I am looking to get further understanding regarding Software Architecture in this course as well as building my technical skills and design understanding. Have not worked with single page web applications before so looking forward to learning either Vue or AngularJS (ServiceNow uses AngularJS for there portals) as well as having this SPA interact with an external system in GitHub via there REST API as apoart of this course project.
    </AboutCardComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AboutCardComponent from './AboutCardComponent.vue';

export default defineComponent({
  name: 'AboutSection',
  components: { AboutCardComponent },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
