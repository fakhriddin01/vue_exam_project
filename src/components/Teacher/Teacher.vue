<template >
    <div class="">
        <div class="flex flex-col justify-center relative items-center p-4 bg-white  rounded-xl">
            <img class="w-[90px] h-[90px] rounded-full mb-3" :src="teacher.image ? teacher.image : 'https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg'" alt="">
            <p class="text-[12px] font-bold text-[#4D44B5] text-center mb-3">{{ teacher.fullname }}</p>
            <p class="text-[11px] text-gray-300 text-center mb-4">{{ teacher.subject }}</p>
            <div class="flex mb-4">
                <i class='bx bx-phone-call bg-[#4D44B5] text-white w-[30px] h-[30px] text-center text-[20px] rounded-full pt-[5px] mr-2'></i>
                <i class='bx bx-envelope bg-[#4D44B5] text-white w-[30px] h-[30px] text-center text-[20px] rounded-full pt-[5px]'></i>
            </div>
            <i class='bx bx-dots-horizontal-rounded absolute top-2 right-2 text-[18px] text-gray-500'></i>
    </div>
    </div>
   
</template>
<script setup>
const props = defineProps(['teacher'])
</script>
<style>
    
</style>