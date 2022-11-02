const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      show: true,
    };
  },
  computed: {
    paraClass() {
      return { user1: this.inputClass === "user1", user2: this.inputClass === "user2", visible: this.show, hidden: !this.show };
    },
  },
  methods: {
    inputUserA() {
      if (this.inputText === "user1") {
        return true;
      }
      return false;
    },
    inputUserB() {
      if (this.inputText === "user2") {
        return true;
      }
      return false;
    },
    showHandler() {
      this.show = !this.show;
    },
  },
});

app.mount("#assignment");
