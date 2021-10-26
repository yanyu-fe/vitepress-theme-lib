<template>
  <div class="code-demo">
    <slot>
      <component></component>
    </slot>
    <div class="code-demo__title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="code-demo__desc">
      <slot name="desc">{{ desc }}</slot>
    </div>
    <div class="code-demo__format-code">
      <slot name="code">{{ code }}</slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"
const props = defineProps<{
  src?:string,
  code?:string,
  desc?:string,
  title?:string,
  copySource?:string
}>()
// 动态加载组件
</script>