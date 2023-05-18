import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStudent = defineStore('student', () => {

    const student = ref([
        {
            id: 1,
            fullname: "John Doe",
            group: "223",
            stage: 'Freelance',
            createdAt: '2023-04-05',
            email: 'johndoe@gmail.com',
            login: 'john doe',
            password: '1234',
            birthday: '1989-02-02'
        },
        {
            id: 2,
            fullname: "John Doe",
            group: "223",
            stage: 'Freelance',
            createdAt: '2023-04-05',
            email: 'johndoe@gmail.com',
            login: 'john doe',
            password: '1234',
            birthday: '1989-02-02'

        },
        {
            id: 3,
            fullname: "John Doe",
            group: "223",
            stage: 'Freelance',
            createdAt: '2023-04-05',
            email: 'johndoe@gmail.com',
            login: 'john doe',
            password: '1234',
            birthday: '1989-02-02'

        },
        {
            id: 4,
            fullname: "John Doe",
            group: "223",
            stage: 'Freelance',
            createdAt: '2023-04-05',
            email: 'johndoe@gmail.com',
            login: 'john doe',
            password: '1234',
            birthday: '1989-02-02'

        },
        {
            id: 5,
            fullname: "John Doe",
            group: "223",
            stage: 'Freelance',
            createdAt: '2023-04-05',
            email: 'johndoe@gmail.com',
            login: 'john doe',
            password: '1234',
            birthday: '1989-02-02'

        },
        {
            id: 6,
            fullname: "John Doe",
            group: "223",
            stage: 'Freelance',
            createdAt: '2023-04-05',
            email: 'johndoe@gmail.com',
            login: 'john doe',
            password: '1234',
            birthday: '1989-02-02'            
        },
        {
            id: 7,
            fullname: "John Doe",
            group: "223",
            stage: 'Freelance',
            createdAt: '2023-04-05',
            email: 'johndoe@gmail.com',
            login: 'john doe',
            password: '1234',
            birthday: '1989-02-02'
        },
        {
            id: 8,
            fullname: "John Doe",
            group: "223",
            stage: 'Freelance',
            createdAt: '2023-04-05',
            email: 'johndoe@gmail.com',
            login: 'john doe',
            password: '1234',
            birthday: '1989-02-02'

        }
        
    ])
    
  const studentList = computed(() => student.value)
    
  const CREATE = (newStudent)=>{
    student.value.push(newStudent);
  }

  const DELETE = (id)=>{
    student.value.forEach((el, index)=>{
        if(el.id == id){
            student.value.splice(index, 1)
            return;
        }
    })
  }

  const UPDATE = (oldStudent)=>{
    student.value.forEach((el, index)=>{
        if(oldStudent.id == el.id){
            student.value[index]=oldStudent;
            return;
        }
    })
  }
  return { studentList , CREATE, DELETE, UPDATE}
})
