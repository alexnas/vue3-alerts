<script setup lang="ts">
import type { IVariant } from '@/types'
import { computed, type PropType } from 'vue'

const props = defineProps({
  variant: {
    type: String as PropType<IVariant>,
    default: 'info'
  },
  title: {
    type: String,
    default: 'Title'
  },
  timeout: {
    type: Number,
    default: 3000
  },
  show: {
    type: Boolean,
    default: false
  }
})

const buttonClass = computed(() => {
  const fixedClasses = 'm-4 rounded-md px-6 py-2 font-medium text-gray-700'
  const dynamicClasses = {
    info: 'bg-blue-200',
    success: 'bg-green-200',
    warning: 'bg-orange-200',
    danger: 'bg-red-200'
  }
  return [fixedClasses, dynamicClasses[props.variant]].join(' ')
})
</script>

<template>
  <button :class="buttonClass" @click="$emit('onshow', props.variant)">
    {{ props.title }}
  </button>
</template>
