const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName: "",
    };
  },
  methods: {
    addHandler(num) {
      return (this.counter = this.counter + num);
    },
    reduceHandler(num) {
      return (this.counter = this.counter - num);
    },
    setName(e, lastName) {
      this.name = e.target.value + " " + lastName;
    },
    submitForm() {
      alert("제출완료!");
    },
    confirmInput() {
      this.confirmName = this.name;
    },
  },
});

app.mount("#events");
