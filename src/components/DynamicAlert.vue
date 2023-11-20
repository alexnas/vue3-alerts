<script setup lang="ts">
import { computed, type PropType } from 'vue'
import {
  InformationCircleIcon,
  XMarkIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon
} from '@heroicons/vue/24/solid'
import type { IVariant } from '@/types'

const props = defineProps({
  variant: {
    type: String as PropType<IVariant>,
    default: 'info'
  },
  title: {
    type: String,
    default: 'Title'
  },
  content: {
    type: String,
    default: 'Content'
  }
})

const containerClass = computed(() => {
  const fixedClasses = 'mx-auto m-4 max-w-lg w-[500px] flex space-x-3 rounded-md p-4'
  const dynamicClasses = {
    info: 'bg-blue-100',
    success: 'bg-green-100',
    warning: 'bg-orange-100',
    danger: 'bg-red-100'
  }
  return [fixedClasses, dynamicClasses[props.variant]].join(' ')
})

const iconClass = computed(() => {
  const fixedClasses = 'h-8 w-8'
  const dynamicClasses = {
    info: 'text-blue-700',
    success: 'text-green-600',
    warning: 'text-orange-400',
    danger: 'text-red-500'
  }
  return [fixedClasses, dynamicClasses[props.variant]].join(' ')
})

const titleClass = computed(() => {
  const fixedClasses = 'font-medium'
  const dynamicClasses = {
    info: 'text-blue-900',
    success: 'text-green-900',
    warning: 'text-orange-900',
    danger: 'text-red-900'
  }
  return [fixedClasses, dynamicClasses[props.variant]].join(' ')
})

const contentClass = computed(() => {
  const fixedClasses = 'text-sm'
  const dynamicClasses = {
    info: 'text-blue-800',
    success: 'text-green-800',
    warning: 'text-orange-800',
    danger: 'text-red-800'
  }
  return [fixedClasses, dynamicClasses[props.variant]].join(' ')
})

const closeButtonClass = computed(() => {
  const fixedClasses = '-m-1 rounded-md p-0.5'
  const dynamicClasses = {
    info: 'text-blue-900/70 hover:bg-blue-200 hover:text-blue-900',
    success: 'text-green-900/70 hover:bg-green-200 hover:text-green-900',
    warning: 'text-orange-900/70 hover:bg-orange-200 hover:text-orange-900',
    danger: 'text-red-900/70 hover:bg-red-200 hover:text-red-900'
  }
  return [fixedClasses, dynamicClasses[props.variant]].join(' ')
})

const iconComponent = computed(() => {
  const dynamicComponent = {
    info: InformationCircleIcon,
    success: CheckCircleIcon,
    warning: ExclamationTriangleIcon,
    danger: XCircleIcon
  }
  return dynamicComponent[props.variant]
})
</script>

<template>
  <div :class="containerClass">
    <div class="shrink-0">
      <component :is="iconComponent" :class="iconClass" />
    </div>
    <div class="flex-1 space-y-2">
      <div :class="titleClass">{{ props.title }}</div>
      <div :class="contentClass">{{ props.content }}</div>
    </div>
    <div class="shrink-0">
      <button :class="closeButtonClass">
        <XMarkIcon class="h-6 w-6" @click="$emit('onhide')" />
      </button>
    </div>
  </div>
</template>
