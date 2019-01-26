<template>
  <div class="item-box">
    <li @click="toggle">
      <div
        v-for="(value, key) in model"
        v-if="['orgName','orgUserNum','fullTimeNum','orgAs','leaderId'].indexOf(key) !== -1"
        :class="[key === 'orgName' ? 'w620' : '']"
      >{{value === '' ? '--' : value}}</div>
    </li>
    <items
      v-for="item in model.children"
      :key="item.orgId"
      :model="item"
      v-if="isFolder"
      v-show="open"
    ></items>
  </div>
</template>

<script>
export default {
  // 树形表格组件
  name: "items",
  props: ["model"],
  data() {
    return {
      open: false //是否展开
    };
  },
  computed: {
    isFolder: function() {
      return this.model.children && this.model.children.length;
    }
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>

<style scoped lang="less">
.item-box div{
    display: inline-block;
    margin-right: 60px;
}
</style>
