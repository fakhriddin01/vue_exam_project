import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTeacher = defineStore('teacher', () => {

    const teacher = ref([
        {
            id: 1,
            fullname: "Asilbek Abdullayev",
            class: "VII A",
            hours: 34,
            subject: 'Mathematics'   
        },
        {
            id: 2,
            fullname: "Ixtiyor Bakhrtiyorov",
            class: "VII A",
            hours: 22,
            subject: 'Science'
        },
        {
            id: 3,
            fullname: "Shavkatjon Salimboev",
            class: "VII A",
            hours: 15,
            subject: 'Art'
        },
        {
            id: 4,
            fullname: "Mirzaev Mirg'ulom",
            class: "VII A",
            hours: 10,
            subject: "Phisics"
        },
        {
            id: 5,
            fullname: "Farangiz Haydarova",
            class: "VII A",
            hours: 5,
            subject: 'Biology'
        },
        {
            id: 6,
            fullname: "John Doe",
            class: "VII A",
            hours: 15,
            subject: 'History'
        }
    ])

    const CREATE = (newTeacher)=>{
        teacher.value.push(newTeacher);
    }

    const teacherList = computed(() => teacher.value)
 
   
    return { teacherList, CREATE }
})
