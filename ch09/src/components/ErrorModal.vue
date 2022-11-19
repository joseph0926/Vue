<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style>
dialog {
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 40%;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  z-index: 10;
}
</style>
