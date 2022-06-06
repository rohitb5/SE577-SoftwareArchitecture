<template>
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">User Info</div>
        <!-- Form Goes Here -->
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input v-model="githubUserProp" label="Enter GitHub ID" />
          
          <div class="q-pa-sm q-gutter-sm">
            <test-input required/>
            <q-btn label="Load from GitHub" type="submit" color="primary" />
            <!-- <q-btn label="Load from Test" @click="onTest()" color="secondary" /> -->
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            /> 
          </div>

          <div v-if="store.userPropInfoCount > 0 && display == true">
            <div><strong>GitHub User Properties </strong> </div>
            <div class="text-left" style="white-space: pre-line;">
              <ul>
                <li v-for="(r, idx) in githubUserPropInfo" :key="idx">
                  {{ r }}
                </li>
              </ul>
            </div>
          </div>

        </q-form>
      </q-card-section>
          <hr>
          <q-card-section>
        <div class="text-h6">User Properties for rohitb5</div>
       
        Select type of call to GitHub below to see what gets returned.
        <br>
        <br>
        <!-- Form Goes Here -->
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-btn label="Authenticated" @click="githubAuth()" color="primary" />
          <q-btn label="Unauthenticated" @click="githubNoAuth()" color="secondary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
          
          <div v-if="store.userPropCount > 0 && display == true">
            <div><strong>User Properties from rohitb5: </strong>  {{ store.userPropCount }}</div>
            <div class="text-left" style="white-space: pre-line;">
              <ul>
                <li v-for="(r, idx) in githubUserInfo" :key="idx">
                  {{ r }}
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
    name: 'UserPropertiesComponent',
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
  const { course, instructor, repos, githubUserInfo, ghID, ghProxyURL, githubUserProp, githubUserPropInfo } = storeToRefs(store);
  let localTest = ref('local test');
  let display = ref(true);
  const onReset = () => {
    localTest.value = 'localTest';
    display.value = false;
  };
  const onSubmit = async () => {
    store.returnGithubUserProp();
    display.value = true;
  };
  const onTest = async () => {
    store.loadTestRepos();
    display.value = true;
  };
  const githubAuth = async () => {
    store.githubAuthStore();
    display.value = true;
  };
  const githubNoAuth = async () => {
    store.githubNoAuth();
    display.value = true;
  };
  watch([course, instructor], () => {
    console.log('state changed');
  });
  onMounted(() => onReset());
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped></style>