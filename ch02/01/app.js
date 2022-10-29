const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "강의를 수강하며 Vue 학습하기!",
      courseGoalB: "강의를 수강하며 Vue 완성하기!!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
