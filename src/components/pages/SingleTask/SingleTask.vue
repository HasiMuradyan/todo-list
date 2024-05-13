<template>
  <task-modal
    v-if="isEditModalOpen"
    :isOpen="isEditModalOpen"
    :editingTask="task"
    @close="toggleTaskModal"
    @taskSave="onSave"
  />

  <v-card v-if="task" class="mx-auto my-8 w-100" elevation="10" max-width="400" min-height="300">
    <v-card-item class="pa-2 pl-4">
      <v-card-title class="text-wrap" align="center" justify="center">
        {{ task.title }}</v-card-title
      >
    </v-card-item>
    <v-card-text class="pa-2 pl-4" align="center" justify="center"
      >{{ task.description }}
    </v-card-text>
    <v-card-text class="pa-2 pl-15"> <b>Status: </b>{{ task.status }} </v-card-text>
    <v-card-text class="pa-2 pl-15"> <b>Created At: </b> {{ createdAt }} </v-card-text>
    <v-card-text class="pa-2 pl-15"> <b>Due Date: </b> {{ dueDate }} </v-card-text>

    <v-card-actions>
      <div class="singleTaskButtons">
        <v-btn :color="active ? 'success' : 'info'" variant="elevated" @click="statusChange">
          <v-icon v-if="active" icon="mdi-check-outline" />
          <v-icon v-else icon="mdi-reload" />
        </v-btn>

        <v-btn color="warning" variant="elevated" @click="toggleTaskModal">
          <v-icon icon="mdi-archive-edit-outline" />
        </v-btn>
        <v-btn color="error" variant="elevated" @click="onDelete">
          <v-icon icon="mdi-delete-outline" />
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
  <h4 v-else>Task not found!</h4>
</template>

<script src="./singleTask.js"></script>
<style scoped>
.singleTaskButtons {
  margin: 15px auto;
}
</style>
