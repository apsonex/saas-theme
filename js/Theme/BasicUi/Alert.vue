<script setup>
import Heading from "@common/Heading.vue";
import flash from '@themeLib/Flash/Flash'

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

        <!-- Alerts -->

        <div class="">
            <Heading>Alert Colors</Heading>

            <div class="grid grid-cols-2 gap-4 mt-4">
                <div class="" v-for="alert in alerts" :key="alert">
                    <pre>.{{ alert }}</pre>
                    <div class="alert" :class="alert">
                        Lorem ipsum dolor sit amet
                    </div>
                </div>
            </div>
        </div>

        <div class="">
            <Heading>Trigger Alerts</Heading>
            <div class="grid grid-cols-4 gap-4 mt-4">
                <div class="" v-for="type in ['success', 'error', 'info', 'warning', 'default']" :key="type">
                    <button class="btn w-full" :class="`btn-${type}`" type="button" @click.prevent="flash[type]({title: `Message type: ${type}`})">
                        {{ type }}
                    </button>
                </div>
            </div>
        </div>

        <div class="">
            <!--            <div class="fixed left-1/4 w-1/2 bottom-0 block ">-->
            <!--                <div class="flex shadow-xl px-6 py-5 fixed left-1/4 w-1/2 bottom-0 opacity-10 block alert alert-success w-full transition-all duration-150 ease-in-out" @click.stop="(e) => {e.target.classList.remove(...'fixed left-1/4 w-1/2 bottom-0 opacity-10'.split(' ')); e.target.classList.add(...'my-10 opacity-100'.split(' '));}">-->
            <!--                    <div class="mr-2 mt-0.5">-->
            <!--                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">-->
            <!--                            <path fill="currentColor"-->
            <!--                                  d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"-->
            <!--                            />-->
            <!--                        </svg>-->
            <!--                    </div>-->
            <!--                    <div class="">-->
            <!--                        <div class="font-semibold">Lorem ipsum dolor sit amet</div>-->
            <!--                        <div class="text-sm mt-1 opacity-90">Consectetur adipisicing elit. Aperiam architecto assumenda et minus neque repellat, rerum vel. Assumenda dolor esse illo, itaque natus nisi numquam possimus quasi quibusdam quo sunt.</div>-->
            <!--                        &lt;!&ndash;                    <div class="flex justify-end mt-4">&ndash;&gt;-->
            <!--                        &lt;!&ndash;                        <button type="button" class="bg-white text-slate-700 text-sm px-4 rounded">Dismiss</button>&ndash;&gt;-->
            <!--                        &lt;!&ndash;                    </div>&ndash;&gt;-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
        </div>

    </div>
</template>
