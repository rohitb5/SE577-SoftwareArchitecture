<template>
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">View GISTs</div>
        <!-- Form Goes Here -->
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          
          <q-input v-model="ghID" label="GitHub ID" />
          
          <div class="q-pa-sm q-gutter-sm">
            <test-input required/>
            <q-btn label="Load Public Gists from GitHub User" @click="onGistGithub()" color="primary" />
            <q-btn label="Load My Gist (rohitb5)" @click="onGistTest()" color="secondary" />
            <!-- <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            /> -->
          </div>

          <div v-if="store.gistCount > 0 /*&& display == true*/">
            <div><strong>TOTAL GISTs: </strong>  {{ store.gistCount }}</div>
            <div class="text-left" style="white-space: pre-line;">
        
              <ul>
                  
                <li v-for="r in gist" :key="r">
                  
                    {{r}}
                   
                  <a :href=r target="_blank">View GIST</a>
                 
                    
                </li>
        
              </ul>
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </template>
  
  <script lang="ts">
  export default {
    name: 'GistCardComponent',
  };
  </script>
  
  <script setup lang="ts">
  //NOTICE THE SETUP IN THE SCRIPT TAG, MAKES THINGS EASIER
  import { ref, watch, onMounted } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useSE577Store } from 'stores/se577-store';
  //import axios from 'axios';
  //setup state managment
  const store = useSE577Store();
  const { course, instructor, repos, gist, ghID, ghProxyURL } = storeToRefs(store);
  let localTest = ref('local test');
  let display = ref(true);
  const onReset = () => {
    localTest.value = 'localTest';
    display.value = false;
  };
  const onSubmit = async () => {
    store.loadGHRepos();
    display.value = true;
  };
  const onGistGithub = async () => {
    store.loadGist();
    display.value = true;
  };
  const onGistTest = async () => {
    store.loadTestGist();
    display.value = true;
  };
  watch([course, instructor], () => {
    console.log('state changed');
  });
  onMounted(() => onReset());
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped></style>