<template>
    <!-- <div class="q-pa-md"> -->
        <!-- <h4>GitHub API Demonstration Page</h4> -->

        <!-- <q-btn
                  @click="buttonPressToggle = !buttonPressToggle"
                  :color="buttonPressToggle ? 'white' : 'teal'"
                  :text-color="!buttonPressToggle ? 'white' : 'black'"
                  :disabled="!buttonPressToggle"
                  label="Under Construction"
                />  -->
                <!-- :disabled="!buttonPressToggle" -->

    
    <!-- </div> -->

    <div class="q-pa-md">
      <q-banner class="bg-secondary text-white">
        <h6>GitHub Repo Demo</h6>
      </q-banner>
      
      <div class="row">
        <!-- <div class="centerow"> -->
          <div class="col-3 q-pa-sm">
          
        </div>
          <div class="col-6 q-pa-sm">
          <StateCardComponent />
        </div> -->
        <div class="col-3 q-pa-sm">
          <!-- <StateCardComponent /> -->
        </div>
      </div>
    </div>
    <!-- </div> -->

   
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { ref } from 'vue';

  //import StateCardComponent from 'src/components/StateCard.vue';
  // const fastify = require('fastify')({ logger: true })
  // const PORT = 8081;
  // fastify.get('/githubrepo', (req: any, reply: { send: (arg0: { test: string; }) => void; }) => {
  //   reply.send({ test: 'Hello GitHub from Fastify' })
  // })

  // const start = async () => {
  //   try {
  //     await fastify.listen(PORT)
  //   } catch (error) {
  //     fastify.log.error(error)
  //     process.exit(1)
      
  //   }
  // }

  // start()

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

// export default defineComponent({
//     name: 'GithubApi',
//     setup() {
//     const { bindingUserText } = BindingSetup();
//     const { showMeToggle, buttonPressToggle } = ShowHideSetup();

//     // const { reactLoop } = ReactSetup();

//     console.log('Hello world! 2 bindingUserText: '+bindingUserText.value+'/');
//     return {
//       bindingUserText,
//       showMeToggle,
//       buttonPressToggle,
      
//     //   reactLoop,

//     };
//   },
// });
  
</script>

<script setup lang="ts">

  import StateCardComponent from 'src/components/StateCard.vue';
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
  