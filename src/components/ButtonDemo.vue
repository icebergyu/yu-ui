<template>
  <div>Button示例</div>
  <h1>示例1</h1>
  <div>
    <Button>您好</Button>
    <Button theme="button">您好</Button>
    <Button theme="link">您好</Button>
    <Button theme="text">您好</Button>
  </div>
</template>

<script>
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
};
</script>

<style lang="scss" scoped>
</style>