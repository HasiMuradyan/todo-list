<template>
  <v-container>
    <v-toolbar flat class="mainHeader">
      <v-toolbar-title>ToDo List</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          ><router-link class="text-decoration-none btnsForHeader" to="/">Home</router-link></v-btn
        >
        <v-btn
          ><router-link class="text-decoration-none btnsForHeader" to="/about"
            >About</router-link
          ></v-btn
        >
        <v-btn
          ><router-link class="text-decoration-none btnsForHeader" to="/contact-us"
            >Contact</router-link
          ></v-btn
        >
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<script>
import './header.css'
</script>
