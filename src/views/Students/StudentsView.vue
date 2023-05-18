<template>

        <!------------------------------------ modal ---------------------------------------- -->

<!-- Main modal -->
<div tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden fixed flex bg-[rgba(0,0,0,0.6)] z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full" :class="modal ? 'hidden':''">
    
    <div class="relative flex p-4 pt-0 w-full max-w-[900px] h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative p-0 m-5 bg-white rounded-lg shadow">
            <!-- Modal header -->
            <div class="flex flex-col justify-start p-0 rounded-t border-b">
                <h3 class="text-[15px] w-full px-4 py-2 font-semibold bg-[#4D44B5] rounded-t-md text-white">
                    O'quvchi ma'lumotlari
                </h3>
                <button @click="toggleModal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <form @submit.prevent="createStudent" class="flex flex-col justify-end items-end p-5">
                <div class="grid gap-4 m-4 grid-cols-5">
                    <div class="flex items-center justify-center w-full col-span-1 row-span-3">
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
                        <label for="name" class="block mb-2 text-sm font-bold text-[#4D44B5]">Ism*</label>
                        <input v-model="newStudent.first_name" type="text" name="name" id="name" class="block w-full text-sm text-gray-900 rounded-md border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Jahon" required="">
                    </div>
                    <div class="col-span-2">
                        <label for="brand" class="block mb-2 text-sm font-bold text-[#4D44B5]">Sharif</label>
                        <input v-model="newStudent.last_name" type="text" name="brand" id="brand" class="block w-full text-sm text-gray-900 rounded-md border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Jalilov" required="">
                    </div>

                    <div class="col-span-2">
                        <label for="brand" class="block mb-2 text-sm font-bold text-[#4D44B5]">Tug'ilgan sana*</label>
                        <input v-model="newStudent.birthday" type="date" name="brand" id="brand" class="block w-full text-sm text-gray-900 rounded-md border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="1995.02.25" required="">
                    </div>
                    <div class="col-span-2">
                        <label for="category" class="block mb-2 text-sm font-bold text-[#4D44B5]">Guruhni tanlang*</label>
                        <select v-model="newStudent.group" id="category" class="block w-full text-sm text-gray-900 rounded-md border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
                            <option selected="">Guruhni tanlang</option>
                            <option value="223">223</option>
                            <option value="224">224</option>
                            <option value="225">225</option>
                            <option value="226">226</option>
                          
                        </select>
                    </div>
                    <div class="col-span-2">
                        <label for="brand" class="block mb-2 text-sm font-bold text-[#4D44B5]">Login*</label>
                        <input v-model="newStudent.login" type="text" name="brand" id="brand" class="block w-full text-sm text-gray-900 rounded-md border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="username" required="">
                    </div>
                    <div class="col-span-2">
                        <label for="brand" class="block mb-2 text-sm font-bold text-[#4D44B5]">Parol*</label>
                        <input v-model="newStudent.password" type="password" name="brand" id="brand" class="block w-full text-sm text-gray-900 rounded-md border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="********" required="">
                    </div>
                    
                </div>
                <button type="submit" class="text-white w-32 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">
                    {{ buttonName }}
                </button>
            </form>
        </div>
    </div>
</div>
<!------------------------------------ modal END ---------------------------------------- -->

    <div class="h-[100vh] bg-[#F3F4FF] py-6 px-8">
        <div class="flex justify-between items-center mb-6">
                <Title title="O'quvchilar"/>
                <User/>
        </div>
        <div class="flex justify-between items-center mb-6">
                <Search/>
                <div>
                    <button @click="toggleModal()" class="bg-[#4D44B5] px-14 py-2 rounded-full text-white"><i class='bx bx-plus font-bold mt-1'></i></button>
                </div>
        </div>

        <div class="flex justify-between items-center">
            
                <!-- Start coding here -->
                <div class="bg-white mx-auto relative shadow-md sm:rounded-lg overflow-hidden w-[100%]">
                    
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500">
                            <thead class="text-xs  text-gray-700 bg-[#F9FAFB] ">
                                <tr class="text-[10px]">
                                    <th scope="col" class="px-4 py-3"><input type="checkbox" class="w-4 h-4 rounded accent-pink-700" ></th>
                                    <th scope="col" class="px-4 py-3 font-normal ">F.I.SH.</th>
                                    <th scope="col" class="px-4 py-3 font-normal">Guruh raqami</th>
                                    <th scope="col" class="px-4 py-3 font-normal">Bosqich</th>
                                    <th scope="col" class="px-4 py-3 font-normal">Qo'shilgan sana</th>
                                    <th scope="col" class="px-4 py-3 font-normal">ID raqami</th>
                                    <th scope="col" class="px-4 py-3 font-normal">
                                        <span class="">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="student in list" :key="student.id" class="border-b text-gray-800 font-[500] ">
                                    <td scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"><input type="checkbox" class="w-4 h-4 rounded accent-pink-700"></td>
                                    <td class="px-4 py-3"><Student :student="student"/> </td>
                                    <td class="px-4 py-3 ">{{ student.group }}</td>
                                    <td class="px-4 py-3">{{ student.stage }}</td>
                                    <td class="px-4 py-3">{{ student.createdAt }}</td>
                                    <td class="px-4 py-3">ID {{ student.id }}</td>
                                    <td class="px-4 py-7 text-[18px]">
                                        <i @click="deleteStudent(student.id)" class='bx bx-trash-alt mx-2 text-red-700'></i>
                                        <i @click="updateStudent(student.id)" class='bx bx-edit text-green-600'></i>
                                    </td>
                                </tr>
                              
                            </tbody>
                        </table>
                        <nav class="flex justify-between md:items-center  md:space-y-0 p-4 " aria-label="Table navigation">
                            <button @click="decrement" :disabled="pagination.prev" class=" py-1 px-3 text-gray-700 text-[11px] bg-white rounded-lg border border-gray-400">Avvalgisi</button> 
                            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                                <span class=" text-gray-900 dark:text-white">Jami {{ store.studentList.length }}</span>
                                dan:
                                <span class=" text-gray-900 dark:text-white">{{(pagination.current_page-1)*pagination.limit+1}}-{{ ((pagination.current_page-1)*pagination.limit)+list.length}}</span>
                            </span>

                                   
                            <button @click="increment" :disabled="pagination.next" class="py-1 px-3 text-gray-700 text-[11px] bg-white rounded-lg border border-gray-400">Keyingisi</button> 
                    </nav>
                    </div>
                    
                </div>
        </div>
        
    </div>


</template>




<script setup>
import Title from '../../components/Title/Title.vue';
import Search from '../../components/Search/Search.vue';
import User from '../../components/User/User.vue';
import Button from '../../components/Button/Button.vue';
import { useStudent } from '../../stores/students/studentStore';
import Student from '../../components/Student/Student.vue';
import {ref, reactive, onMounted, computed} from 'vue'
import { toast } from 'vue3-toastify';


const store = useStudent();
const modal=ref('false')
const toggleModal = () => {
    modal.value = !modal.value
    if(buttonName.value=='Yangilash'){
        buttonName.value="Qo'shish"
        newStudent.last_name='',
        newStudent.first_name= '',
        newStudent.birthday= '',
        newStudent.group= '',
        newStudent.login= '',
        newStudent.password= '',
        newStudent.image= ''
    }
}


const buttonName = ref("Qo'shish");

const deleteStudent = (id)=>{
    store.DELETE(id);
    toast.info('student deleted', {autoClose: 600})
}

const newStudent = reactive({
    first_name: '',
    last_name: '',
    birthday: '',
    group: '',
    login: '',
    password: '',
    image: ''
})

const foundStudent1 = ref('');
const updateStudent = (id)=>{
    toggleModal();

    buttonName.value = "Yangilash"

    let foundStudent
    store.studentList.forEach((el)=>{
        if(el.id == id){
            foundStudent = el;
        }
    })
    newStudent.last_name= foundStudent.fullname.split(' ')[1],
    newStudent.first_name= foundStudent.fullname.split(' ')[0],
    newStudent.birthday= foundStudent.birthday,
    newStudent.group= foundStudent.group,
    newStudent.login= foundStudent.login,
    newStudent.password= foundStudent.password
    foundStudent1.value = foundStudent
}






const createStudent = ()=>{

    if(buttonName.value == 'Yangilash'){
        const user = {
        id:foundStudent1.value.id,
        group: newStudent.group ? newStudent.group : foundStudent1.value.group,
        fullname: newStudent.first_name + " " + newStudent.last_name,
        stage: newStudent.stage ? newStudent.stage : foundStudent1.value.stage,
        createdAt: foundStudent1.value.createdAt,
        email: foundStudent1.value.email,
        image: foundStudent1.value.image,
        login: newStudent.login ? newStudent.login : foundStudent1.value.login,
        password: newStudent.password ? newStudent.password : foundStudent1.value.password,
        birthday: newStudent.birthday ? newStudent.birthday : foundStudent1.value.birthday,
    }

        store.UPDATE(user);
        buttonName.value="Qo'shish"
        toggleModal();
        newStudent.last_name='',
        newStudent.first_name= '',
        newStudent.birthday= '',
        newStudent.group= '',
        newStudent.login= '',
        newStudent.password= '',
        newStudent.image= '',
        toast.success('student updated', {autoClose: 600})
    }

    else{
        const date = new Date(Date.now())
    
        const user = {
            id: Date.now(),
            fullname: newStudent.last_name + ' ' + newStudent.first_name,
            group: newStudent.group,
            stage: 'Freelance',
            createdAt: date.toISOString().substring(0,10),
            email: newStudent.last_name + newStudent.first_name + '@gmail.com',
            image: 'https://i0.wp.com/www.americandatabank.com/wp-content/uploads/2018/10/portrait-square-03.jpg?ssl=1',
            login: newStudent.login,
            password: newStudent.password,
            birthday: newStudent.birthday
        }

        store.CREATE(user)
        toggleModal();
        
        newStudent.last_name='',
        newStudent.first_name= '',
        newStudent.birthday= '',
        newStudent.group= '',
        newStudent.login= '',
        newStudent.password= '',
        newStudent.image= ''
        toast.success('new student created', {autoClose: 600})
    }
    
}

const pagination = reactive({
    current_page: 1,
    total_page: 1,
    limit: 5,
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
    let list1 = store.studentList
    pagination.total_page = Math.ceil(store.studentList.length/pagination.limit)
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


onMounted(() => {
    pagination.total_page = Math.ceil(store.studentList.length/pagination.limit)
})

</script>

<style>
    
</style>