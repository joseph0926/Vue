const app = Vue.createApp({
  data() {
    return {
      friends: [
        { id: "f1", name: "messi", phone: "010 1234 1234", email: "test01@test.com" },
        { id: "f2", name: "pedri", phone: "010 1234 5678", email: "test02@test.com" },
      ],
    };
  },
  methods: {},
});

app.component("friend-contact", {
  template: `
  <li>
    <h2>{{f.name}}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailShow">
      <li><strong>Phone:</strong> {{f.phone}}</li>
      <li><strong>Email:</strong> {{f.email}}</li>
    </ul>
  </li>
`,
  data() {
    return {
      detailShow: false,
      f: {
        id: "f1",
        name: "messi",
        phone: "010 1234 1234",
        email: "test01@test.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailShow = !this.detailShow;
    },
  },
});

app.mount("#app");
