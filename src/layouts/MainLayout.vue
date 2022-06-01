<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> SE577 Project: Single Page Application with Vue.JS interacting with GitHub</q-toolbar-title>

        <div>v 1.4</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link>  |  
          <!-- <router-link to="/about">About</router-link> | -->
          <router-link to="/aboutme">About Me</router-link> |
          <!-- <router-link to="/layout">Layout</router-link> | -->
          <!-- <router-link to="/dynamic">Dynamic</router-link> |
          <router-link to="/props">Props</router-link> | -->
          <!-- <router-link to="/events">Events</router-link> |
          <router-link to="/webservices">Web Services</router-link> | -->
          <!-- <router-link to="/simple_state">Simple State</router-link> | -->
          <!-- <router-link to="/web_state">Web State</router-link> | -->
          <!-- <router-link to="/bc_demo">Block Chain Demo</router-link> | -->
          <router-link to="/github_api">GitHub API</router-link> | 
          <router-link to="/github_info">GitHub Info</router-link>
        </div>
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'My GitHub Repo',
    caption: 'rohitb5',
    icon: 'badge',
    link: 'https://github.com/rohitb5',
  },
  {
    title: 'Course Github',
    caption: 'github.com/ArchitectingSoftware',
    icon: 'code',
    link: 'https://github.com/ArchitectingSoftware/SE577-SoftwareArchitecture',
  },
  {
    title: 'GitHub API',
    caption: 'REST',
    icon: 'sync',
    link: 'https://docs.github.com/en/rest/',
  },
  {
    title: 'Basic HTML Site v1',
    caption: 'Undergrad Drexel Page',
    icon: 'school',
    link: 'https://www.pages.drexel.edu/~rb689/',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  font-size: large;
  font-weight: bold;
}

#app a {
  font-weight: bold;
  font-size: 20px;
  /* color: #42b983; */
  color: silver;
  padding: 5px; 

}

#nav a.router-link-exact-active {
  color: goldenrod;
  pointer-events: none;
  cursor: default;
  font-weight: bolder;
  text-decoration: none; 
}

#app a:hover {
  font-weight: bold;
  color: gold;
}

</style>
