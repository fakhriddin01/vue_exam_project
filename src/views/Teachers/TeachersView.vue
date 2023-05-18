<template>

    <!------------------------------------ modal ---------------------------------------- -->

    <div tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden fixed flex bg-[rgba(0,0,0,0.6)] z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full" :class="modal ? 'hidden':''">

        <div class="relative flex p-4 pt-0 w-full max-w-[900px] h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative p-0 m-5 bg-white rounded-lg shadow">
                <!-- Modal header -->
                <div class="flex flex-col justify-start p-0 rounded-t border-b">
                    <h3 class="text-[15px] w-full px-4 py-2 font-semibold bg-[#4D44B5] rounded-t-md text-white">
                        O'qituvchi ma'lumotlari
                    </h3>
                    <button @click="toggleModal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <form @submit.prevent="createTeacher" class="flex flex-col justify-end items-end p-5">
                    <div class="grid gap-4 m-4 grid-cols-4">
                      
                        <div class="col-span-2">
                            <label for="name" class="block mb-2 text-sm font-bold text-[#4D44B5]">Ism*</label>
                            <input v-model="newTeacher.first_name" type="text" name="name" id="name" class="block w-full text-sm text-gray-900 rounded-md border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Maria" required="">
                        </div>
                        <div class="col-span-2">
                            <label for="brand" class="block mb-2 text-sm font-bold text-[#4D44B5]">Sharif*</label>
                            <input v-model="newTeacher.last_name" type="text" name="brand" id="brand" class="block w-full text-sm text-gray-900 rounded-md border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Historia" required="">
                        </div>

                        <div class="col-span-2">
                            <label for="brand" class="block mb-2 text-sm font-bold text-[#4D44B5]">Login*</label>
                            <input v-model="newTeacher.login" type="text" name="brand" id="brand" class="block w-full text-sm text-gray-900 rounded-md border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="historia@mail.com" required="">
                        </div>
                        <div class="col-span-2">
                            <label for="brand" class="block mb-2 text-sm font-bold text-[#4D44B5]">Parol*</label>
                            <input v-model="newTeacher.password" type="password" name="brand" id="brand" class="block w-full text-sm text-gray-900 rounded-md border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="*********" required="">
                        </div>
                      
                        <div class="col-span-2">
                            <label for="brand" class="block mb-2 text-sm font-bold text-[#4D44B5]">Ma'lumot*</label>
                            <textarea v-model="newTeacher.information" rows="6"  type="text" name="brand" id="brand" class="block w-full text-sm text-gray-900 rounded-md border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " required=""></textarea>
                        </div>
                        <div class="flex items-start justify-center w-full col-span-1 row-span-1 mt-6">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-100">
                                
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p class="mb-2 text-[10px] text-gray-500 text-center"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 text-center">SVG, PNG, JPG</p>
                                </div>
                                <input id="dropzone-file" type="file" class="hidden" />
                            </label>
                        </div>
                        <div class="col-span-2">
                            <label for="brand" class="block mb-2 text-sm font-bold text-[#4D44B5]">Tug'ilgan sanasi*</label>
                            <input v-model="newTeacher.birthday" type="date" name="brand" id="brand" class="block w-full text-sm text-gray-900 rounded-md border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="username" required="">
                        </div>
                        <div class="col-span-2">
                            <label for="brand" class="block mb-2 text-sm font-bold text-[#4D44B5]">Fan nomi*</label>
                            <input v-model="newTeacher.subject" type="text" name="brand" id="brand" class="block w-full text-sm text-gray-900 rounded-md border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="********" required="">
                        </div>
                        
                    </div>
                    <button type="submit" class="text-white w-32 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">
                        Qo'shish
                    </button>
                </form>
            </div>
        </div>
    </div>
    <!------------------------------------ modal END ---------------------------------------- -->

    <div class="h-[100vh] bg-[#F3F4FF] py-6 px-8 relative">
        <div class="flex justify-between items-center mb-6">
                <Title title="O'qituvchilar"/>
                <User/>
        </div>
        <div class="flex justify-between items-center mb-6">
                <Search/>
                <div>
                    <button @click="toggleModal" class="bg-[#4D44B5] px-14 py-2 rounded-full text-white"><i class='bx bx-plus font-bold mt-1'></i></button>
                </div>
        </div>

        <div class="flex justify-between items-center">
            
                <!-- Start coding here -->
                <div class="grid grid-cols-5 gap-x-10 gap-y-5 bg-[#F3F4FF] sm:rounded-lg w-[100%]">
                    
                   <Teacher v-for="teacher in list" :teacher="teacher"></Teacher>
                    
                </div>

                
        </div>

        <div class="absolute bottom-0 w-[90%]">
            <nav class="flex justify-between md:items-center  md:space-y-0 p-4 " aria-label="Table navigation">
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <span class=" text-gray-900 dark:text-white">{{ store.teacherList.length }}</span>
                    dan
                    <span class=" text-gray-900 dark:text-white">{{(pagination.current_page-1)*pagination.limit+1}}-{{ ((pagination.current_page-1)*pagination.limit)+list.length}}</span>
                </span>

                <div class="flex text-gray-400 items-center">
                    <button @click="decrement" :disabled="pagination.prev" class="flex items-center justify-center h-full py-1 px-1 ml-0 text-gray-500 bg-transparent rounded-l-lg"><img class="h-[15px] w-[15px]" src="../../assets/icons/arrow_left.svg" alt=""></button> 
                        
                        <p v-for="el in pagination.total_page" :key="el" @click="changePage(el)" class="border border-gray-500 w-[30px] h-[30px] rounded-full text-center pt-[3px] ml-1" :class="(pagination.current_page === el) ? 'bg-blue-500 text-white' : ''"> 
                        {{ el }}
                        </p>
                        
                    <button @click="increment" :disabled="pagination.next" class="flex items-center justify-center h-full py-1.5 px-2 ml-0 text-gray-500 bg-transparent rounded-l-lg"><img class="h-[15px] w-[15px]" src="../../assets/icons/arrow_right.svg" alt=""></button> 
                </div>
            
            </nav>
        </div>
        
    </div>


</template>




<script setup>
import Title from '../../components/Title/Title.vue';
import Search from '../../components/Search/Search.vue';
import User from '../../components/User/User.vue';
import Button from '../../components/Button/Button.vue';
import {ref, reactive, onMounted, computed} from 'vue'
import { useTeacher } from '../../stores/teachers/teacherStore';
import Teacher from '../../components/Teacher/Teacher.vue';
import { toast } from 'vue3-toastify';

const store = useTeacher();

const modal=ref('false')
const toggleModal = () => {
    modal.value = !modal.value
    newTeacher.last_name='',
    newTeacher.first_name= '',
    newTeacher.birthday= '',
    newTeacher.group= '',
    newTeacher.login= '',
    newTeacher.password= '',
    newTeacher.information= '',
    newTeacher.subject= ''
}

const newTeacher = reactive({
    first_name: '',
    last_name: '',
    birthday: '',
    information: '',
    login: '',
    password: '',
    image: 'https://www.shutterstock.com/image-photo/young-caucasian-teacher-portrait-blackboard-260nw-135948689.jpg',
    subject: ''
})



const createTeacher = ()=>{
    const teacher = {
        id: Date.now(),
        fullname: newTeacher.last_name + ' ' + newTeacher.first_name,
        information: newTeacher.information,
        image: newTeacher.image,
        login: newTeacher.login,
        password: newTeacher.password,
        subject: newTeacher.subject,
        birthday: newTeacher.birthday,
    }

    store.CREATE(teacher);
    toggleModal();

    newTeacher.last_name='',
    newTeacher.first_name= '',
    newTeacher.birthday= '',
    newTeacher.group= '',
    newTeacher.login= '',
    newTeacher.password= '',
    newTeacher.information= '',
    newTeacher.subject= ''
    toast.success('new teacher created', {autoClose: 600})
}

const pagination = reactive({
    current_page: 1,
    total_page: 1,
    limit: 10,
    prev: false,
    next: false
})

const increment =() =>{
    pagination.current_page=pagination.current_page + 1;
}

const decrement =() =>{

    pagination.current_page=pagination.current_page - 1;
}

const list = computed(()=>{
    let list1 = store.teacherList
    pagination.total_page = Math.ceil(store.teacherList.length/pagination.limit)
    let skip = (pagination.current_page-1)*pagination.limit
    if(pagination.current_page == pagination.total_page){
        pagination.next = true;
    }
    else{
        pagination.next = false;
    }
    if(pagination.current_page == 1){
        pagination.prev = true;
    }
    else{
        pagination.prev = false;
    }
    return list1.slice(skip, skip+pagination.limit);

})

const changePage = (number)=>{
    pagination.current_page = number
}

onMounted(() => {
    pagination.total_page = Math.ceil(store.teacherList.length/pagination.limit)
})

</script>

<style>

</style>