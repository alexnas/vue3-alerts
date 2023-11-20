<script setup lang="ts">
import { ref } from 'vue'
import type { IVariant } from '@/types'
import DynamicAlert from '@/components/DynamicAlert.vue'
import DynamicButton from '@/components/DynamicButton.vue'

const variant = ref<IVariant>('success')
const title = ref('Lorem ipsum')
const content = ref(
  'Duis ultricies aliquam cras augue tristique commodo enim, pharetra per dui parturient sodales ultrices. '
)
const show = ref(false)

const showAlert = async (propsVariant: IVariant) => {
  show.value = true
  variant.value = propsVariant
}

const hideAlert = () => {
  show.value = false
}
</script>

<template>
  <div class="container">
    <h1 class="mt-10 text-center text-3xl text-gray-600">Dynamic Alerts</h1>
    <DynamicAlert
      v-if="show"
      :variant="variant"
      :title="title"
      :content="content"
      @onhide="hideAlert"
    />

    <div class="w-100 flex justify-center">
      <DynamicButton variant="info" title="Info" :show="show" @onshow="showAlert" />
      <DynamicButton variant="success" title="Success" :show="show" @onshow="showAlert" />
      <DynamicButton variant="warning" title="Warning" :show="show" @onshow="showAlert" />
      <DynamicButton variant="danger" title="Danger" :show="show" @onshow="showAlert" />
    </div>
  </div>
</template>
