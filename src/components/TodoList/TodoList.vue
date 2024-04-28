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

  <v-container>
    <v-row>
      <v-col v-for="taskData in tasks" :key="taskData._id" cols="12" md="6" lg="4" xl="3">
        <task :data="taskData" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./todoList.js"></script>
