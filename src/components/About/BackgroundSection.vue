<template>
  <div class="row">
    <AboutCardComponent child-class="bg-accent" title="Background">
      <div id="link">Linkedin: <a target="_blank" href="https://www.linkedin.com/in/rohit-bhattacharya/">https://www.linkedin.com/in/rohit-bhattacharya/</a>
      </div>
    </AboutCardComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AboutCardComponent from './AboutCardComponent.vue';

export default defineComponent({
  name: 'BackgroundSection',
  components: { AboutCardComponent },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#link a {
  font-size: small;
  color: "pink";
}
</style>
