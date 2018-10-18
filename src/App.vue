<template>
 <v-app id="app">

 <v-toolbar>
 <v-toolbar-title>Proton</v-toolbar-title>
 <v-spacer></v-spacer>
 <v-toolbar-items>
  <v-btn flat>Aufträge</v-btn>
  <v-btn flat>Ergebnisse</v-btn>
  <v-btn flat>Berichte</v-btn>
  <v-btn flat>Rechnungen</v-btn>
  <v-btn flat>Audit Trail</v-btn>
  <v-btn flat>Stammdaten</v-btn>
  <v-btn flat>Account</v-btn>
 </v-toolbar-items>
 </v-toolbar>

 <router-view></router-view>
 </v-app>
</template>

<script>


export default {
  name: "App"
};
</script>

<style>
#footer {
  position:absolute;
   bottom:0;
   width:100%;
   }
#loading {
  position: absolute;
    height: 100px;
    width: 100px;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
    background: url(/link/to/your/image);
    background-size: 100%;
}

</style>
