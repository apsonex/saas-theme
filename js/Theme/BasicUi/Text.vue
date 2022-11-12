<script setup>
import Heading from "../Common/Heading.vue";


const textColors = [
  'text-primary',
  'text-secondary',
  'text-muted',
  'text-heading',
  'text-body',
  'text-success',
  'text-error',
  'text-info',
  'text-warning',
]

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

const backgrounds = {
  'bg-primary' :'text-primary-alt',
  'bg-secondary' :'text-secondary-alt',
  'bg-muted' :'text-muted-alt',
  // 'bg-accent' :'text-accent-alt',
  'bg-success' :'text-success-alt',
  'bg-error' :'text-error-alt',
  'bg-info' :'text-info-alt',
  'bg-warning': 'text-warning-alt',
}

</script>

<template>
  <div class="p-4 space-y-10 pb-24">

    <div class="">
      <Heading>Text Colors</Heading>

      <div class="grid grid-cols-2 gap-4 mt-4">
        <template v-for="color in textColors">
          <div class="">
            <pre>.{{ color }}</pre>
            <p class="" :class="[color]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, blanditiis dolorem eos, eum eveniet explicabo ipsam ipsum laboriosam.
            </p>
          </div>
        </template>
        <div class="">
          <pre>.text-link</pre>
          <a href="#" class="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, blanditiis dolorem eos, eum eveniet explicabo ipsam ipsum laboriosam.
          </a>
        </div>
      </div>
    </div>

    <div class="">
      <Heading>Headings</Heading>

      <div class="grid grid-cols-2 gap-4 mt-4">
        <div class="" v-for="tag in headings" :key="tag">
          <pre>.{{ tag }}</pre>
          <component :is="tag" :class="tag" class="text-heading">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </component>
        </div>
      </div>
    </div>

    <div class="">
      <Heading>Colors</Heading>
      <div class="grid grid-cols-4 mt-4 gap-4">
        <div class="" v-for="(text, bg) in backgrounds">
          <pre>.{{ bg }}</pre>
          <div class="h-20 w-full flex justify-center items-center shadow" :class="bg">
            <span class="" :class="text">{{ text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>