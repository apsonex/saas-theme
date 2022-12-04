<script setup>
import Heading from "@common/Heading.vue";

const buttons = [
  'btn btn-primary',
  'btn btn-primary btn-processing',
  'btn btn-primary btn-light',
  'btn btn-primary btn-light btn-processing',
  'btn btn-secondary',
  'btn btn-secondary btn-processing',
  'btn btn-secondary btn-light',
  'btn btn-secondary btn-light btn-processing',
  'btn btn-muted',
  'btn btn-muted btn-processing',
  'btn btn-muted btn-light',
  'btn btn-muted btn-light btn-processing',
  'btn btn-disabled',
  'btn btn-disabled btn-light',
  'btn btn-link',
  'btn btn-link btn-processing',
]

</script>

<template>
  <div class="p-4 space-y-10 pb-24">

    <div class="">
      <Heading>Default Button</Heading>

      <div class="grid grid-cols-4 gap-6 mt-4">
        <div class="">
          <pre class="text-xs">.btn</pre>
          <button @click.prevent type="button" class="btn">
            Button
          </button>
        </div>
      </div>
    </div>

    <div class="">
      <Heading>Buttons</Heading>

      <div class="grid grid-cols-4 gap-6 mt-4">
        <div class="" :key="btn" v-for="btn in buttons">
          <pre class="text-xs">{{ btn }}</pre>
          <button @click.prevent type="button" :class="btn">
            Button
          </button>
        </div>
      </div>
    </div>

    <div class="">
      <Heading>Buttons Sizes</Heading>

      <div class="grid grid-cols-4 gap-6 mt-4">
        <div class="" :key="btn" v-for="btn in buttons">
          <pre class="text-xs">{{ btn }}</pre>
          <button @click.prevent type="button" :class="btn + ' btn-sm'">
            Button
          </button>
        </div>
      </div>
    </div>
  </div>
</template>