<template>
    <div class="q-pa-md">

        <div class="q-pa-md">
      <q-list bordered class="rounded-borders">
        <!-- BINDING EXPANSION -->
        <q-expansion-item
          dark
          expand-separator
          header-class="bg-purple text-white"
          label="View GitHub Source URL"
        >
          <q-card>
            <h6>
                <a target="_blank" href="https://github.com/rohitb5/SE577-SoftwareArchitecture/tree/main">https://github.com/rohitb5/SE577-SoftwareArchitecture/tree/main</a>
            </h6>
          </q-card>
        </q-expansion-item>
        <hr>

        <q-expansion-item
          dark
          expand-separator
          header-class="bg-secondary text-white"
          label="Search & Open GitHub User"
        >
          <q-card>
            <q-card-section>
              <q-input  
              bottom-slots 
              v-model="bindingUserText"
              :disabled="!buttonPressToggle"
              :dense="true"
              label="Enter GitHub User" >
                <template v-slot:prepend>
                    <q-icon name="question_mark" />
                </template>
                <template v-slot:append>
                    <q-icon
                      name="close"
                      class="cursor-pointer"
                      @click="bindingUserText=''"
                    />
                  </template> 
                  </q-input>
                  <br>
              <!-- <hr /> -->
              <div v-if="bindingUserText!=''">
                <q-btn
                
                  @click="buttonPressToggle = !buttonPressToggle"
                  :color="buttonPressToggle ? 'white' : 'teal'"
                  :text-color="!buttonPressToggle ? 'white' : 'black'"
                  :disabled="!buttonPressToggle&&bindingUserText==''"
                  label="Generate URL"
                /> 
                <!-- :disabled="!buttonPressToggle" -->
                <div>
                  <h5 v-show="buttonPressToggle">
                    <!-- <h5><strong>GitHub URL2: </strong> https://github.com/{{ bindingUserText }}</h5> -->
                    <a target="_blank" :href="'https://github.com/'+ bindingUserText">https://github.com/{{ bindingUserText }}</a>
                  </h5>
                </div>
                
              </div>
    
        
              <!-- <h5><strong>GitHub URL3: </strong> https://github.com/{{ bindingUserText }}</h5> -->
            </q-card-section>
          </q-card>
        </q-expansion-item>
       
        <hr />
        <q-expansion-item
          dark
          expand-separator
          header-class="bg-purple text-white"
          label="GIST"
        >
          <q-card>
            <h6>
                <a target="_blank" href="https://github.com/rohitb5/SE577-SoftwareArchitecture/tree/main">https://github.com/rohitb5/SE577-SoftwareArchitecture/tree/main</a>
            </h6>
            <q-input  
              bottom-slots 
              v-model="gistUserText"
              :disabled="!buttonPressToggle"
              :dense="true"
              :readonly="true"
              label="Source GitHub User" >
                <template v-slot:prepend>
                    <q-icon name="question_mark" />
                </template>
                <template v-slot:append>
                    <q-icon
                      name="close"
                      class="cursor-pointer"
                      @click="bindingUserText=''"
                    />
                  </template> 
                  </q-input>

                  <div v-if="gistUserText!=''">
                <q-btn
                
                  @click="gistPressToggle = !gistPressToggle"
                  :color="gistPressToggle ? 'white' : 'teal'"
                  :text-color="!gistPressToggle ? 'white' : 'black'"
                  :disabled="!gistPressToggle&&gistUserText==''"
                  label="Display GISTs Widget"
                /> 
                <!-- :disabled="!buttonPressToggle" -->
                <div>
                  <h5 v-show="gistPressToggle">
                    <!-- <h5><strong>GitHub URL2: </strong> https://github.com/{{ bindingUserText }}</h5> -->
                    <a target="_blank" :href="'https://github.com/'+ bindingUserText">https://github.com/{{ bindingUserText }}</a>
                    <div class="col-6 q-pa-sm">
                      <GistCardComponent />
                    </div>

                  </h5>
                </div>
                
              </div>
          </q-card>
        </q-expansion-item>
        </q-list>
        
        </div>

    
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { ref } from 'vue';
  import GistCardComponent from 'src/components/GistCard.vue';
  


const BindingSetup = () => {
  //  bindingUserText: ref('');
  return {
    bindingUserText: ref(''),
    gistUserText: ref('rohitb5'),
//   bindingUserText,
//     clearPressFn: () => {
//         bindingUserText = '';
      
//     },
  };
};

const ShowHideSetup = () => {
  return {
    showMeToggle: ref(false),
    gistPressToggle: ref(false),
    buttonPressToggle: ref(false),
  };
};






  export default defineComponent({
    name: 'GithubInfo',
    components: {
      GistCardComponent,
  
    // PublicationsSection,
    // PhotosSection,
    },
    setup() {

    

    const { bindingUserText, gistUserText } = BindingSetup(); 
    
    const { showMeToggle, buttonPressToggle, gistPressToggle} = ShowHideSetup();

    
    // const { reactLoop } = ReactSetup();
    
    
    console.log('Hello world! 2 bindingUserText: '+bindingUserText.value+'/');
    return {
      bindingUserText,
      gistUserText,
      gistPressToggle,
      showMeToggle,
      buttonPressToggle,
      GistCardComponent,
      
    //   reactLoop,

    };
    
    
  }
  });
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  

  </style>
  