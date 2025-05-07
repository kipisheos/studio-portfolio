import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'

export const useWorksStore = defineStore('works', () => {
  const works = ref([
    {
      title: 'Project 1',
      description: 'Description for project 1',
      image: img1,
      tags: 'thought-leading'
    }                                                                                                                                                                                                                                                                                                                                                                                                                ,
    {
      title: 'Project 2',
      description: 'Description for project 2',
      image: img2,
      tags: 'thought-leading,industrial design'
    },
    {
      title: 'Project 3',
      description: 'Description for project 3',
      image: img3,
      tags: 'web engineering'
    },
  ])

  const getWorks = computed(() => works.value)

  return { works, getWorks }
})
