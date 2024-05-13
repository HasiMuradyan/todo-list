<template>
  <v-card
    class="mx-auto my-8 w-100"
    elevation="10"
    max-width="350"
    min-height="400"
    color="gray-lighten-5"
  >
    <v-card-item class="pa-2 pl-4">
      <v-checkbox class="mb-n6 mx-n1" @click="onSelect" :checked="isSelected"></v-checkbox>
      <v-card-title> {{ data.title }}</v-card-title>
    </v-card-item>

    <v-card-text class="description">{{ data.description }} </v-card-text>

    <v-card-text> <span>Status:</span>{{ data.status }} </v-card-text>

    <v-card-text> <span>Created At:</span> {{ createdAt }} </v-card-text>

    <v-card-text><span>Due Date:</span>{{ dueDate }} </v-card-text>

    <v-card-text><RouterLink :to="`/task/${data._id}`">Show more...</RouterLink></v-card-text>

    <v-card-actions>
      <div class="cardButtonsForTask">
        <v-btn :color="active ? 'success' : 'info'" variant="elevated" @click="statusChange">
          <v-icon v-if="active" icon="mdi-check-outline" />
          <v-icon v-else icon="mdi-reload" />
        </v-btn>

        <v-btn color="warning" variant="elevated" @click="onEdit">
          <v-icon icon="mdi-archive-edit-outline" />
        </v-btn>
        <v-btn color="error" variant="elevated" @click="onDelete">
          <v-icon icon="mdi-delete-outline" />
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script src="./task.js"></script>

<style scoped>
.description {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  min-height: 35px;
}
.cardButtonsForTask {
  margin: auto;
}
</style>
