<template>

    <div class="q-pa-md">
      <q-banner class="bg-secondary text-white">
        <h6>GitHub API Demo</h6>
      </q-banner>
      
      <div class="row">
        <!-- <div class="centerow"> -->
          <div class="col-3 q-pa-sm">
          
        </div>
          <div class="col-6 q-pa-sm">
          <StateCardComponent />
        </div> -->
        <div class="col-3 q-pa-sm">
          
        </div>
      </div>

      <div class="row">
        <!-- <div class="centerow"> -->
          <div class="col-3 q-pa-sm">
          
        </div>
          <div class="col-6 q-pa-sm">
          <UserPropertiesComponent />
        </div> -->
        <div class="col-3 q-pa-sm">
          
        </div>
      </div>
    </div>
    <!-- </div> -->

   
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { ref } from 'vue';
  
</script>

<script setup lang="ts">

  import StateCardComponent from 'src/components/StateCard.vue';
  import UserPropertiesComponent from 'src/components/UserPropertiesComponent.vue';

</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
  