<template>
    <div class="flex w-[160px] justify-between items-center bg-transparent">
        <img class="w-[45px] h-[45px] rounded-full" :src="student.image ? student.image : 'https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg' " alt="">
        <div class="">
            <p class="text-[12px] text-left text-black font-bold">{{ student.fullname }}</p>
            <p class="text-[10px] text-gray-700 text-left">{{ student.email }}</p>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['student'])
</script>
<style >
    
</style>