<template>
  <div class="nav bg-white flex p-5 justify-between">
    <img src="../assets/Logo.png" class="logo">
    <button class="btn btn-green">Button</button>
  </div>
</template>

<script>
export default {
  setup() {
    
  },
}
</script>

<style lang="scss" scoped>
.logo {
  width: auto;
  height: 38px;
}
.btn-green {
  @apply text-white bg-green-500 hover:bg-green-700;
}
</style>