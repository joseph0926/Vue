const app = Vue.createApp({
  data() {
    return {
      name: "joseph0926",
      age: 25,
      fNum: Math.random(),
      imageUrl:
        "https://w.namu.la/s/161a12cb2897d1fb48beb49a51f7c9fc7d4e9209b2aa011426522356e11a8e5ca9cea59194fffed5345c3723ac0812543667b107b9fba4dbdf7de116d77fd4c0de4ee9557152959bd69b8c013137e66d867cc6df78798ebbc566f652858340e3",
    };
  },
  methods: {
    agePlus5() {
      return this.age + 5;
    },
  },
});

app.mount("#assignment");
