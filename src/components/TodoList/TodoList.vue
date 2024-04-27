<template>
  <v-container>
    <task-modal
      v-if="isTaskModalOpen"
      :isOpen="isTaskModalOpen"
      @close="toggleTaskModal"
      @taskSave="onTaskSave"
    />
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn size="large" color="blue-accent-2" @click="toggleTaskModal"> Add new task</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./todoList.js"></script>
