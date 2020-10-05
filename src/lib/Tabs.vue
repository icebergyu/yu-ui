<template>
  <div>
    <div class="yu-tabs">
      <div class="yu-tabs-nav">
        <div
          class="yu-tabs-nav-item"
          v-for="(t, index) in titles"
          :key="index"
          @click="select(t)"
          :class="{ selected: t === selected }"
        >
          {{ t }}
        </div>
      </div>
      <div class="yu-tabs-content">
        <component
          class="yu-tabs-content-item"
          v-for="(c, index) in defaults"
          :is="c"
          :class="{ selected: c.props.title === selected }"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs的子标签必须是Tab");
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit("update:selected", title);
    };
    return { defaults, titles, select };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.yu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>