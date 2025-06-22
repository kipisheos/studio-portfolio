import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.png';
import vegetables1 from '../assets/vegetables1.png';
import vegetables2 from '../assets/vegetables2.png';
import sodastream1 from '../assets/sodastream1.png';
import sodastream2 from '../assets/sodastream2.png';
import sodastream3 from '../assets/sodastream3.png';
import sodastream4 from '../assets/sodastream4.png';
import sodastream5 from '../assets/sodastream5.png';
import sodastream6 from '../assets/sodastream6.png';
import sodastream7 from '../assets/sodastream7.png';
import smeg1 from '../assets/smeg1.png';
import smeg2 from '../assets/smeg2.png';
import smeg3 from '../assets/smeg3.png';
import allergy1 from '../assets/allergy1.png';
import toys1 from '../assets/toys1.png';
import metalBench1 from '../assets/metalBench1.png';
import toteBags1 from '../assets/toteBags1.png';
import luca1 from '../assets/luca1.png';

export const useWorksStore = defineStore('works', () => {
  const works = ref([
    {
      title: 'Project 1',
      description: 'Description for project 1',
      image: luca1,
      tags: '',
      group: 'luca',
      year: 2025,
    },
    {
      title: 'Project 1',
      description: 'Description for project 1',
      image: img1,
      tags: '',
      group: 'stybel',
      year: 2025,
    }                                                                                                                                                                                                                                                                                                                                                                                                                ,
    {
      title: 'Project 2',
      description: `Designing and creating SodaStream\'s premium tier, featuring the newest machine designed by Naoto Fukasawa, presentea an Tnurigulng charlenge. It. involved craftina a tier that both resonated with SodaStream\'s essence while elevating it to a dis-`,
      image: img2,
      tags: '',
      group: 'hereToo',
      year: 2025,
    },
    {
      title: 'Project 3',
      description: 'Description for project 3',
      image: vegetables1,
      tags: '',
      group: 'vegetables',
      year: 2025,
    },
    {
      title: 'Project 3',
      description: 'Description for project 3',
      image: vegetables2,
      tags: 'thought-leading',
      group: 'vegetables',
      year: 2025,
      location: {
        x: 300,
        y: 100,
      }
    },
    {
      title: 'SODASTREAM\'S ENSO PREMIUM BRAND',
      subtitle: 'Art Direction',
      description: 'Designing and creating SodaStream’s premium tier, featuring the newest machine designed by Naoto Fukasawa, presented an intriguing challenge. It involved crafting a tier that both resonated with SodaStream’s essence while elevating it to a distinctly premium level.',
      image: sodastream1,
      tags: 'art director',
      group: 'sodastream',
      year: 2025,
      location: {
        x: 100,
        y: 200,
      }
    },
    {
      title: 'title placeholder',
      description: 'description placeholder',
      image: sodastream2,
      tags: '',
      group: 'sodastream',
      year: 2025,
      location: {
        x: 500,
        y: 100,
      }
    },
    {
      title: 'title placeholder',
      description: 'description placeholder',
      image: sodastream3,
      tags: '',
      group: 'sodastream-guidelines',
      year: 2025,
      location: {
        x: 200,
        y: 400,
      }
    },
    {
      title: 'title placeholder',
      description: 'description placeholder',
      image: sodastream4,
      tags: '',
      group: 'sodastream',
      year: 2025,
    },
    {
      title: 'title placeholder',
      description: 'description placeholder',
      image: sodastream5,
      tags: '',
      group: 'sodastream-metal-bottle',
      year: 2025,
    },
    {
      title: 'title placeholder',
      description: 'description placeholder',
      image: sodastream7,
      tags: 'art director',
      year: 2025,
      group: 'sodastream',
      location: {
        x: 200,
        y: 500,
      }
    },
    {
      title: 'title placeholder',
      description: 'description placeholder',
      image: sodastream6,
      tags: '',
      group: 'sodastream',
      year: 2025,
    },
    {
      title: 'title placeholder',
      description: 'description placeholder',
      image: smeg1,
      group: 'smeg',
      tags: '',
      year: 2025,
    },
    {
      title: 'title placeholder',
      description: 'description placeholder',
      image: smeg2,
      group: 'smeg',
      tags: '',
      year: 2025,
    },
    {
      title: 'title placeholder',
      description: 'description placeholder',
      image: smeg3,
      group: 'smeg',
      tags: '',
      year: 2025,
    },
    {
      title: 'title placeholder',
      description: 'description placeholder',
      image: allergy1,
      tags: 'meaningful experiences',
      group: 'allergy',
      year: 2025,
    },
    {
      title: 'title placeholder',
      description: 'description placeholder',
      image: toys1,
      tags: 'playfulness',
      group: 'toys',
      year: 2025,
      location: {
        x: 400,
        y: 300,
      }
    },
    {
      title: 'title placeholder',
      description: 'description placeholder',
      image: metalBench1,
      tags: 'industrial design',
      group: 'metalBench',
      year: 2025,
      location: {
        x: 400,
        y: 300,
      }
    },
    {
      title: 'title placeholder',
      description: 'description placeholder',
      image: toteBags1,
      tags: 'industrial design',
      group: 'stybel',
      year: 2025,
      location: {
        x: 100,
        y: 600,
      }
    },
  ])

  const getWorks = computed(() => works.value)

  return { works, getWorks }
})
