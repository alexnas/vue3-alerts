<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { cva } from 'class-variance-authority'
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
  return cva('mx-4 mt-4 flex space-x-3 rounded-md p-4', {
    variants: {
      variant: {
        info: 'bg-blue-100',
        success: 'bg-green-100',
        warning: 'bg-orange-100',
        danger: 'bg-red-100'
      }
    }
  })({
    variant: props.variant
  })
})

const iconClass = computed(() => {
  return cva('h-6 w-6', {
    variants: {
      variant: {
        info: 'text-blue-700',
        success: 'text-green-600',
        warning: 'text-orange-400',
        danger: 'text-red-500'
      }
    }
  })({
    variant: props.variant
  })
})

const titleClass = computed(() => {
  return cva('font-medium', {
    variants: {
      variant: {
        info: 'text-blue-900',
        success: 'text-green-900',
        warning: 'text-orange-900',
        danger: 'text-red-900'
      }
    }
  })({
    variant: props.variant
  })
})

const contentClass = computed(() => {
  return cva('text-sm', {
    variants: {
      variant: {
        info: 'text-blue-800',
        success: 'text-green-800',
        warning: 'text-orange-800',
        danger: 'text-red-800'
      }
    }
  })({
    variant: props.variant
  })
})

const closeButtonClass = computed(() => {
  return cva('-m-1 rounded-md p-0.5', {
    variants: {
      variant: {
        info: 'text-blue-900/70 hover:bg-blue-200 hover:text-blue-900',
        success: 'text-green-900/70 hover:bg-green-200 hover:text-green-900',
        warning: 'text-orange-900/70 hover:bg-orange-200 hover:text-orange-900',
        danger: 'text-red-900/70 hover:bg-red-200 hover:text-red-900'
      }
    }
  })({
    variant: props.variant
  })
})

const iconComponent = computed(() => {
  const icons = {
    info: InformationCircleIcon,
    success: CheckCircleIcon,
    warning: ExclamationTriangleIcon,
    danger: XCircleIcon
  }

  return icons[props.variant]
})
</script>

<template>
  <div :class="containerClass">
    <div class="shrink-0">
      <component :is="iconComponent" :class="iconClass" />
    </div>
    <div class="flex-1 space-y-2">
      <div :class="titleClass">{{ $props.title }}</div>
      <div :class="contentClass">{{ $props.content }}</div>
    </div>
    <div class="shrink-0">
      <button :class="closeButtonClass">
        <XMarkIcon class="h-6 w-6" @click="$emit('onhide')" />
      </button>
    </div>
  </div>
</template>
