import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGuruh = defineStore('guruh', () => {

    const guruh = ref([
        {
            id: 1,
            title: "Web Developer",
            number: "Class VII A",
            image: 'https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg'
        },
        {
            id: 2,
            title: "Web Developer",
            number: "Class VII A",
            image: 'https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg'
        },
        {
            id: 3,
            title: "Web Developer",
            number: "Class VII A",
            image: 'https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg'
        },
        {
            id: 4,
            title: "Web Developer",
            number: "Class VII A",
            image: 'https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg'
        },
        {
            id: 5,
            title: "Web Developer",
            number: "Class VII A",
            image: 'https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg'
        },
        
       
        
    ])

    const news = ref([
        {
            id: 1,
            author: "Salimjon Sheraliev",
            content: "Lorem ipsum dolor sit amet..",
            time: "12:45 PM",
            image: 'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg'
        },
        {
            id: 2,
            author: "Salimjon Sheraliev",
            content: "Lorem ipsum dolor sit amet..",
            time: "12:45 PM",
            image: 'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg'
        },
        {
            id: 3,
            author: "Salimjon Sheraliev",
            content: "Lorem ipsum dolor sit amet..",
            time: "12:45 PM",
            image: 'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg'
        },
        {
            id: 4,
            author: "Salimjon Sheraliev",
            content: "Lorem ipsum dolor sit amet..",
            time: "12:45 PM",
            image: 'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg'
        },
       
       
        
    ])
    
  const guruhList = computed(() => guruh.value)
  const newsList = computed(() => news.value)
 

  return { guruhList, newsList }
})
