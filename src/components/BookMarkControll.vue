<script setup>
const BASE_API                  =       import.meta.env.VITE_API_BASE;
const IMG_ASSETS                =       import.meta.env.VITE_IMG_ASSETS;
const DEFAULT_DIR               =       import.meta.env.VITE_DEFAULT_DIR;
import { NImage }               from    'naive-ui';
import {
    ref,
    defineProps
}                               from    'vue';

//====================== VARIABLES ======================//

//props
const props                      =       defineProps({
    img: {
        type: String,
        default: 'plus-bookmark'
    },
    children: {
        type: Object,
        required: false,
        default: () => ({})
    },
    position: {
        type: Object,
        required: false,
        default: () => ({})
    },
});

const joinString                =       (head, trail) => {
    return `${head}${trail}`;
}


</script>


<template>
    <span 
    class="absolute" 
    :style="{
        top: position.top, 
        right: position.right,
        left: position.left,
        bottom: position.bottom,
        }">
        <NImage :style="children" :src="joinString(BASE_API, img)"></NImage>
    </span>
</template>


<style scoped>

</style>