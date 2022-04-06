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

        <q-toolbar-title> SE577 Demonstration App </q-toolbar-title>

        <div>v 0.1</div>
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
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/about2">About2</router-link> |
          <router-link to="/layout">Layout</router-link> |
          <router-link to="/dynamic">Dynamic</router-link> |
          <router-link to="/props">Props</router-link> |
          <router-link to="/events">Events</router-link> |
          <router-link to="/webservices">Web Services</router-link> |
          <router-link to="/simple_state">Simple State</router-link> |
          <router-link to="/web_state">Web State</router-link> |
          <router-link to="/bc_demo">Block Chain Demo</router-link>
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
    title: 'Quasar Docs',
    caption: 'quasar.dev',
    icon: 'web',
    link: 'https://quasar.dev',
  },
  {
    title: 'Course Github',
    caption: 'github.com/ArchitectingSoftware',
    icon: 'code',
    link: 'https://github.com/ArchitectingSoftware/SE577-SoftwareArchitecture',
  },
  {
    title: 'Course Chat Channel',
    caption: 'slack',
    icon: 'chat',
    link: 'https://drexel-se577-2022.slack.com/',
  },
  {
    title: 'Course Materials',
    caption: 'Blackboard',
    icon: 'school',
    link: 'https://learn.dcollege.net/',
  },
  {
    title: 'Twitter',
    caption: '@ArchitectingSoftware',
    icon: 'rss_feed',
    link: 'https://twitter.com/DrBrianMitchell',
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
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
