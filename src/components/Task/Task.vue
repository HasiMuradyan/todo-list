<template>
  <v-card
    class="mx-auto my-8 w-100"
    elevation="10"
    max-width="350"
    height="400"
    color="gray-lighten-5"
  >
    <v-card-item class="pa-2 pl-4">
      <v-checkbox class="mb-n6 mx-n1"></v-checkbox>
      <v-card-title> {{ data.title }}</v-card-title>
    </v-card-item>

    <v-card-text class="description">{{ data.description }} </v-card-text>

    <v-card-text>Status:{{ data.status }} </v-card-text>

    <v-card-text>Created At: {{ createdAt }} </v-card-text>

    <v-card-text>Due Date:{{ dueDate }} </v-card-text>

    <v-card-text><RouterLink :to="`/task/${data._id}`">Show more...</RouterLink></v-card-text>

    <v-card-actions>
      <v-btn
        :color="data.status === 'active' ? 'success' : 'info'"
        variant="elevated"
        @click="statusChange"
      >
        <v-icon v-if="data.status === 'active'" icon="mdi-check-outline" />
        <v-icon v-else icon="mdi-reload" />
      </v-btn>

      <v-btn color="warning" variant="elevated" @click="onEdit">
        <v-icon icon="mdi-archive-edit-outline" />
      </v-btn>
      <v-btn color="error" variant="elevated" @click="onDelete">
        <v-icon icon="mdi-delete-outline" />
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script src="./task.js"></script>

<style scoped>
.description {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
