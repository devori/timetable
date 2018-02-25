<template>
  <div id="app">
    <v-app id="inspire">
      <v-toolbar
        color="blue-grey"
        dark
        fixed
        app
        clipped-right
      >
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Toolbar</v-toolbar-title>
      </v-toolbar>
      <v-navigation-drawer
        fixed
        v-model="drawer"
        app
      >
        <v-list dense>
          <v-list-tile @click="left = !left">
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-content>
        <router-view></router-view>
      </v-content>
      <v-footer color="blue-grey" class="white--text" app>
        <span class="pl-3">Devori</span>
        <v-spacer></v-spacer>
        <span class="pr-3">&copy; 2018</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      left: false,
      right: false,
      drawer: false,
      drawerRight: false,
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
