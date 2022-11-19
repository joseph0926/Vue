<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role"></user-info>
    <button @click="setSelectedComponent('ActiveGoalVue')">Active Goal</button>
    <button @click="setSelectedComponent('ManageGoalVue')">Manage Goal</button>
    <!-- <ActiveGoalVue v-if="selectedComponent === 'ActiveGoalVue'"></ActiveGoalVue>
    <ManageGoalVue v-if="selectedComponent === 'ManageGoalVue'"></ManageGoalVue> -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeaderVue from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import ActiveGoalVue from "./components/ActiveGoal.vue";
import ManageGoalVue from "./components/ManageGoal.vue";

export default {
  components: {
    "the-header": TheHeaderVue,
    "badge-list": BadgeList,
    "user-info": UserInfo,
    ActiveGoalVue,
    ManageGoalVue,
  },
  data() {
    return {
      selectedComponent: "ActiveGoalVue",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
