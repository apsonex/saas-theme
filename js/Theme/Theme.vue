<script setup>
import {reactive, ref} from "vue";
import BasicUi_Text from "./BasicUi/Text.vue";
import BasicUi_Alert from "./BasicUi/Alert.vue";
import BasicUi_Buttons from "./BasicUi/Buttons.vue";
import BasicUi_FormInputs from "./BasicUi/FormInputs.vue";

const currentMenu = ref(BasicUi_FormInputs)

const pages = reactive({
  'Base UI': {
    Alert: BasicUi_Alert,
    Text: BasicUi_Text,
    Buttons: BasicUi_Buttons,
    'Form Inputs': BasicUi_FormInputs,
  }
})

</script>

<template>
  <div class="flex">
    <div class="w-2/12 min-h-screen">
      <template v-for="(children, pageName, index) in pages" :key="pageName">
        <div class="px-6 pt-4">
          <h2 class="uppercase font-semibold">{{ pageName }}</h2>
          <ul class="">
            <li v-for="(child, childName) in children" :key="pageName + '-' + childName">
              <a class="pl-4 inline-block py-1 w-full text-slate-500"
                 @click.prevent="currentMenu = pages[pageName][childName]" href="#">{{ childName }}</a>
            </li>
          </ul>
        </div>
      </template>
    </div>
    <div class="w-10/12 min-h-screen">
      <component :is="currentMenu"/>
    </div>
  </div>
</template>