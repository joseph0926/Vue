<template>
  <div>
    <h2>Manage Goal</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <Teleport to="body">
      <ErrorModalVue v-if="inputIsInvalid">
        <h2>입력이 유효하지 않습니다!</h2>
        <p>올바르게 다시 입력해주세요~</p>
        <button @click="confirmError">OK</button>
      </ErrorModalVue>
    </Teleport>
  </div>
</template>

<script>
import ErrorModalVue from "./ErrorModal.vue";

export default {
  components: {
    ErrorModalVue,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
