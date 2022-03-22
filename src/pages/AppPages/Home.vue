<template>
  <div class="hello">
    <img alt="Drexel CCI" src="../../assets/drexel-cci.png" />
    <p>To build and run this app make sure you have the following installed:</p>
    <ul>
      <li>
        <a href="https://nodejs.org/en/" target="_blank" rel="noopener"
          >NodeJS</a
        >
      </li>
      <li>
        <a href="https://yarnpkg.com/cli/node" target="_blank" rel="noopener"
          >yarn</a
        >
      </li>
      <li>
        <a
          href="https://www.typescriptlang.org/#installation"
          target="_blank"
          rel="noopener"
          >typescript</a
        >
      </li>
    </ul>
    <h5>
      This application is built using the Vue framework with Quasar for UX
      Styling
    </h5>
    <h4>Setup Steps</h4>

    <div class="q-pa-md">
      <q-list bordered separator>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>Install project tooling</q-item-label>
            <q-item-label caption>
              <code> yarn global add @quasar/cli </code>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>Pull the repo from github</q-item-label>
            <q-item-label caption>
              <code>
                git clone
                https://github.com/ArchitectingSoftware/se577-web-demo.git
              </code>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>Prep the project dependencies</q-item-label>
            <q-item-label caption>
              <code> yarn install </code>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>Install JSON Server</q-item-label>
            <q-item-label caption>
              <code> yarn global add json-server </code>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>Prep IDE, If VS Code - add Volar Plugin</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>For the API demo, start the server</q-item-label>
            <q-item-label caption>
              <code> yarn quasar dev </code>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <!--
    <b-list-group>
      <b-list-group-item>Pull the repo from github - <code>git clone https://github.com/ArchitectingSoftware/se575-web-design-vue.git</code></b-list-group-item>
      <b-list-group-item>Prep the project dependencies - <code>yarn install</code></b-list-group-item>
      <b-list-group-item>Install JSON Server - <code>yarn global add json-server</code></b-list-group-item>
      <b-list-group-item>Prep IDE, If VS Code - add Vetur Plugin</b-list-group-item>
      <b-list-group-item>For the API demo, start the server - run <code>start-test-server.sh</code> from the <code>/server</code> directory.</b-list-group-item>
    </b-list-group>
    -->

    <h4>HAVE FUN</h4>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  margin: 48px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
