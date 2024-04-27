<template>
  <v-card class="mx-auto my-8" elevation="16" max-width="344">
    <v-checkbox></v-checkbox>
    <v-card-item>
      <v-card-title> {{ data.title }}</v-card-title>
    </v-card-item>

    <v-card-text>{{ data.description }} </v-card-text>

    <v-card-text> <span class="titleOfCard">Status:</span>{{ data.status }} </v-card-text>

    <v-card-text> <span class="titleOfCard">Created At:</span> {{ createdAt }} </v-card-text>

    <v-card-text> <span class="titleOfCard">Due Date:</span> {{ dueDate }} </v-card-text>

    <v-card-actions>
      <v-btn color="success" variant="elevated">
        <v-icon icon="mdi-check-outline" />
      </v-btn>
      <v-btn color="warning" variant="elevated">
        <v-icon icon="mdi-archive-edit-outline" />
      </v-btn>
      <v-btn color="error" variant="elevated">
        <v-icon icon="mdi-delete-outline" />
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script src="./task.js"></script>

<style>
.titleOfCard {
  font-size: medium;
  color: blue;
}
</style>
