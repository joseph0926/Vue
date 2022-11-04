const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      taskList: [],
      show: true,
    };
  },
  methods: {
    addTask() {
      this.taskList.push(this.enteredValue);
    },
    showHandler() {
      this.show = !this.show;
    },
  },
});

app.mount("#assignment");
