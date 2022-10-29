const app = Vue.createApp({
  data() {
    return {
      result: 0,
      totalResult: "",
    };
  },
  watch: {
    result(value) {
      console.log("asdf!");
      const that = this;
      setTimeout(() => {
        this.result = 0;
      }, 5000);
    },
  },
  computed: {
    outputResult() {
      if (this.result <= 37) {
        return (this.totalResult = "아직 부족합니다!");
      } else if (this.result === 37) {
        return this.result;
      } else {
        return (this.totalResult = "너무 과합니다!");
      }
    },
  },
  methods: {
    add5() {
      this.result = this.result + 5;
    },
    add1() {
      this.result = this.result + 1;
    },
  },
});

app.mount("#assignment");
