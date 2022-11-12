<script setup>
import Heading from "@common/Heading.vue";

const alerts = [
  'alert',
  'alert alert-light',
  'alert alert-success',
  'alert alert-success alert-light',
  'alert alert-error',
  'alert alert-error alert-light',
  'alert alert-info',
  'alert alert-info alert-light',
  'alert alert-warning',
  'alert alert-warning alert-light',
]
</script>

<template>
  <div class="p-4 space-y-10 pb-24">

    <div class="">
      <Heading>Text Colors</Heading>

      <div class="grid grid-cols-2 gap-4 mt-4">
        <div class="" v-for="alert in alerts" :key="tag">
          <pre>.{{ alert }}</pre>
          <div class="alert" :class="alert">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>

    </div>

  </div>
</template>