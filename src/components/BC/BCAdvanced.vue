<template>
    <q-card
      flat
      class="my-card"
      :class="hasBeenSolved ? 'bg-green-1' : 'bg-red-1'"
    >
      <q-card-section>
        <div class="text-h6">Block Chain Better Block</div>
        <!-- Form Goes Here -->
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <div class="text-h8 text-left">
            Execution Time: <strong>{{ executionTime }}</strong> ms
          </div>
          <div class="text-h8 text-left">
            Block Solved: <strong>{{ isSolved }}</strong>
          </div>
          <q-input v-model="blockId" label="Block Identifier" />
          <q-input v-model="parentBlock" label="Parent Block" />
          <q-input v-model="blockData" label="Block Data" />
          <q-input v-model="nonce" label="Nonce" />
          <q-input v-model="hash" label="Block Hash" />
          <q-input v-model="solverURL" label="SolverURL" />
          <q-input v-model="solverPrefix" label="SolverPrefix" />
          <q-input v-model="maxTries" label="maxTries" />
          <div>
            <q-btn label="Solve" type="submit" color="primary" />
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed, watch } from 'vue';
  import { v4 as uuidv4 } from 'uuid';
  import axios from 'axios';
  import { BCApiResponse } from 'src/models/AppTypes';
  import sha256 from 'crypto-js/sha256';
  let isSolved = ref(true);
  let nonce = ref(0);
  let hash = ref('');
  let executionTime = ref(0);
  let blockId = ref('');
  let parentBlock = ref('');
  let blockData = ref('');
  let solverURL = ref('');
  let solverPrefix = ref('');
  let maxTries = ref(0);
  const onReset = () => {
    isSolved.value = false;
    nonce.value = 0;
    hash.value = uuidv4();
    executionTime.value = 0;
    blockId.value = uuidv4();
    parentBlock.value = uuidv4();
    blockData.value = 'hello world!';
    solverURL.value = 'http://localhost:9095/bc';
    solverPrefix.value = '000';
    maxTries.value = 1000000;
  };
  const onSubmit = async () => {
    //notice the typing and the result deconstruction vs the basic example
    const { data, status } = await axios.get<BCApiResponse>(solverURL.value, {
      params: {
        q: blockData.value,
        p: parentBlock.value,
        b: blockId.value,
        x: solverPrefix.value,
        m: maxTries.value,
      },
    });
    hash.value = data.blockHash;
    nonce.value = data.nonce;
    console.log('DBG', status);
  };
  export default defineComponent({
    name: 'BCAdvancedComponent',
    setup() {
      const hasBeenSolved = computed(() =>
        hash.value.startsWith(solverPrefix.value)
      );
      watch([blockId, parentBlock, blockData, nonce], () => {
        const baseHash =
          blockId.value + blockData.value + parentBlock.value + nonce.value;
        hash.value = sha256(baseHash).toString();
      });
      return {
        executionTime,
        blockId,
        parentBlock,
        blockData,
        nonce,
        hash,
        solverURL,
        solverPrefix,
        maxTries,
        isSolved,
        hasBeenSolved,
        onSubmit,
        onReset,
      };
    },
    mounted() {
      //load some default values
      onReset();
    },
  });
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped></style>