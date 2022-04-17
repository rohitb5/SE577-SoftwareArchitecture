<template>
    <div class="q-pa-md">
        <h4>GitHub API Demonstration Page</h4>

        <q-btn
                  @click="buttonPressToggle = !buttonPressToggle"
                  :color="buttonPressToggle ? 'white' : 'teal'"
                  :text-color="!buttonPressToggle ? 'white' : 'black'"
                  :disabled="!buttonPressToggle"
                  label="Under Construction"
                /> 
                <!-- :disabled="!buttonPressToggle" -->

    
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { ref } from 'vue';

const BindingSetup = () => {
  return {
    bindingUserText: ref(''),
  };
};

const ShowHideSetup = () => {
  return {
    showMeToggle: ref(false),
    buttonPressToggle: ref(false),
  };
};


  export default defineComponent({
    name: 'GithubApi',
    setup() {
    const { bindingUserText } = BindingSetup();
    const { showMeToggle, buttonPressToggle } = ShowHideSetup();

    // const { reactLoop } = ReactSetup();

    console.log('Hello world! 2 bindingUserText: '+bindingUserText.value+'/');
    return {
      bindingUserText,
      showMeToggle,
      buttonPressToggle,
      
    //   reactLoop,

    };
  },
  });
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  

  </style>
  