const app = Vue.createApp({
  data() {
    return {
      outputText: "",
      confirmText: "",
    };
  },
  methods: {
    showAlert() {
      alert("output!!!");
    },
    textInput(e) {
      this.outputText = e.target.value;
    },
    textInput2(e) {
      this.confirmText = e.target.value;
    },
  },
});

app.mount("#assignment");
