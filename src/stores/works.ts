import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import img1 from '../assets/img1.jpeg';
import heretoo1 from '../assets/here-too/heretoo1.png';
import heretoo2 from '../assets/here-too/heretoo2.jpg';
import heretoo3 from '../assets/here-too/heretoo3.png';
import vegetables1 from '../assets/vegetables/vegetables1.png';
import vegetables2 from '../assets/vegetables/vegetables2.png';
import vegetables3 from '../assets/vegetables/vegetables3.png';
import vegetables4 from '../assets/vegetables/vegetables4.png';
import vegetables5 from '../assets/vegetables/vegetables5.png';
import vegetables6 from '../assets/vegetables/vegetables6.png';
import vegetables11 from '../assets/vegetables/vegetables11.png';
import vegetables13 from '../assets/vegetables/vegetables13.png';

import sodastream1 from '../assets/sodastream/sodastream1.png';
import sodastream2 from '../assets/sodastream/sodastream2.png';
import sodastream3 from '../assets/sodastream/sodastream3.png';
import sodastream4 from '../assets/sodastream/sodastream4.png';
import sodastream5 from '../assets/sodastream/sodastream5.png';
import sodastream6 from '../assets/sodastream/sodastream6.png';
import sodastream7 from '../assets/sodastream/sodastream7.png';
import smeg1 from '../assets/smeg/smeg1.png';
import smeg2 from '../assets/smeg/smeg2.png';
import smeg3 from '../assets/smeg/smeg3.png';
import smeg4 from '../assets/smeg/smeg4.png';
import smeg5 from '../assets/smeg/smeg5.png';
import smeg6 from '../assets/smeg/smeg6.png';
import smeg7 from '../assets/smeg/smeg7.png';
import smeg8 from '../assets/smeg/smeg8.png';

import allergy1 from '../assets/allergy1.png';
import toys1 from '../assets/toys1.png';
import metalBench1 from '../assets/metalBench1.png';
import toteBags1 from '../assets/toteBags1.png';
import luca1 from '../assets/luca/luca1.png';
import luca2 from '../assets/luca/luca2.png';
import luca3 from '../assets/luca/luca3.png';
import luca4 from '../assets/luca/luca4.png';
import luca5 from '../assets/luca/luca5.png';
import luca6 from '../assets/luca/luca6.png';
import luca7 from '../assets/luca/luca7.png';
import luca8 from '../assets/luca/luca8.png';

import type { IMainWork, IProject } from "@/types.ts";
import {Tags} from "@/types.ts";

const WORKS_TEXTS = {
  sodastream: {
    title: 'SODASTREAM\'S ENSO PREMIUM BRAND',
    subtitle: 'Art Direction',
    description: 'Designing and creating SodaStream’s premium tier, featuring the newest machine designed by Naoto Fukasawa, presented an intriguing challenge. It involved crafting a tier that both resonated with SodaStream’s essence while elevating it to a distinctly premium level.',
  },
  allergy: {
    title: 'title placeholder',
    description: 'description placeholder',
  },
  toys: {
    title: 'title placeholder',
    description: 'description placeholder',
  },
  metalBench: {
    title: 'MODULAR METAL BENCH',
    subtitle: 'Product Design',
    description: 'An individual seat that when connects makes a communal, extendable bench Suitable for 5 people. I welded and bent the metal, resulting in a strong seating solution for indoors or out.',
  },
  stybel: {
    title: 'title placeholder',
    description: 'description placeholder',
  },
  luca: {
    title: 'LUCA GELATO BEYOND THE SCOOP',
    subtitle: 'Social Media',
    description: 'We set out to position a small neighborhood gelato shop within the worlds of design and contemporary culture. Rather than follow typical food branding, we treated the gelato as an emotional object. In a category full of ‘sameness’, Luca carves its place as a cultural and creative brand.',
  },
  smeg: {
    title: 'SMEG DESIGN WEEK - DESIGN HOLDS MEMORIES',
    subtitle: 'Campaign',
    description: '“Design Holds Memories” is a campaign created for SMEG, based on the idea that design is emotional. Refrigerators aren’t just appliances they hold everyday memories that shape how we see the world. Three artists reimagined SMEG fridges through personal memories, and we built the campaign narrative around showing how design connects us to meaningful moments.',
  },
  hereToo: {
    title: 'HERE TOO',
    description: 'Stickers for responding to sexual assault in public spaces. Placing a sticker offers victims an immediate response after the assault, aiding in emotional coping. Marking the space creates a sense of unity within a larger movement.  When widely distributed, these stickers act as infographics, mapping concentrations of assault in public spaces. This data analysis enables targeted actions, bringing attention to the issue and dispelling its invisibility.',
  },
  vegetables: {
    title: 'VEGGIES 2.0',
    subtitle: 'Speculative Design',
    description: 'I ventured into speculative design to create the \'Vegetables of the Future\'. My exploration involved utilizing GMO technology with McDonald\'s as a test case. As GMO technology advances into uncharted territories, it encourages us to reflect on the evolving implications of this emerging reality.'
  },
}
export const useWorksStore = defineStore('works', () => {
  const projects = ref<IProject[]>([
    {
      ...WORKS_TEXTS.luca,
      group: 'luca',
      year: 2025,
      works: [
        {
          image: luca1,
          imageStyle: {
            tile: {
              x: 50,
              y: 35,
              scale: 150,
            },
            full: {
              x: 50,
              y: 20,
            }
          },
          tags: [Tags.BOLD_THINKING],
          location: {
            x: 550,
            y: 550,
          }
        },
        {
          image: luca2,
          tags: [Tags.BRANDING],
          location: {
            x: 800,
            y: 500,
          }
        },
        {
          image: luca3,
        },
        {
          image: luca4,
        },
        {
          image: luca5,
        },
        {
          image: luca6,
        },
        {
          image: luca7,
        },
        {
          image: luca8,
        },
      ]
    },
    {
      ...WORKS_TEXTS.vegetables,
      group: 'vegetables',
      year: 2025,
      works: [
        {
          image: vegetables2,
          tags: [Tags.THOUGHT_LEADING, Tags.CURIOSITY],
          location: {
            x: 300,
            y: 100,
          },
          imageStyle: {
            tile: {
              x: 50,
              y: 50,
              scale: 250,
            },
          },
        },
        {
          image: vegetables5,
          tags: [Tags.CURIOSITY],
          location: {
            x: 1050,
            y: 600,
          },
        },
        {
          image: vegetables4,
        },
        // {
        //   image: vegetables1,
        //
        //   location: {
        //     x: 300,
        //     y: 100,
        //   },
        //   imageStyle: {
        //     full: {
        //       scale: 150,
        //     }
        //   }
        // },
        {
          image: vegetables3,
        },
        {
          image: vegetables11,
        },
        {
          image: vegetables6,
        },
        {
          image: vegetables13,
        }
      ]
    },
    {
      ...WORKS_TEXTS.metalBench,
      group: 'metalBench',
      year: 2025,
      works: [
        {
          image: metalBench1,
          tags: [Tags.INDUSTRIAL_DESIGN],
          location: {
            x: 700,
            y: 30,
          }
        }
      ]
    },
    {
      ...WORKS_TEXTS.sodastream,
      group: 'sodastream',
      year: 2025,
      works: [
        {
          image: sodastream1,
          tags: [Tags.ART_DIRECTOR],
          location: {
            x: 100,
            y: 200,
          }
        },
        {
          image: sodastream2,
          location: {
            x: 500,
            y: 100,
          }
        },
        {
          image: sodastream3,
          location: {
            x: 200,
            y: 400,
          }
        },
        {
          image: sodastream4,
        },
        {
          image: sodastream5,
        },
        {
          image: sodastream6,
        },
        {
          image: sodastream7,
          tags: [Tags.ART_DIRECTOR],
          location: {
            x: 200,
            y: 500,
          }
        },
      ]
    },
    {
      ...WORKS_TEXTS.smeg,
      group: 'smeg',
      year: 2025,
      works: [
        {
          image: smeg1,
          tags: [Tags.ART_DIRECTOR],
          location: {
            x: 200,
            y: 150,
          },
          imageStyle: {
            tile: {
              x: 69,
              y: 50,
            }
          }
        },
        {
          image: smeg4,
        },
        {
          image: smeg2,
        },
        {
          image: smeg3,
        },
        {
          image: smeg6,
        },
        {
          image: smeg7,
        },
        {
          image: smeg8,
        }
      ]
    },
    {
      ...WORKS_TEXTS.hereToo,
      group: 'hereToo',
      year: 2025,
      works: [
        {
          image: heretoo1,
          tags: [Tags.MEANINGFUL_EXPERIENCES, Tags.BOLD_THINKING],
          location: {
            x: 900,
            y: 100,
          }
        },
        {
          image: heretoo2,
        },
        {
          image: heretoo3,
        }
      ]
    },
    {
      ...WORKS_TEXTS.stybel,
      group: 'stybel',
      year: 2025,
      works: [
        {
          image: img1,
        },
        {
          image: toteBags1,
          tags: [Tags.INDUSTRIAL_DESIGN],
          location: {
            x: 100,
            y: 600,
          }
        }
      ]
    },
    {
      ...WORKS_TEXTS.allergy,
      group: 'allergy',
      year: 2025,
      works: [
        {
          image: allergy1,
          tags: [Tags.MEANINGFUL_EXPERIENCES],
          location: {
            x: 1000,
            y: 250,
          }
        }
      ]
    },
    {
      ...WORKS_TEXTS.toys,
      group: 'toys',
      year: 2025,
      works: [
        {
          image: toys1,
          tags: [Tags.PLAYFULNESS],
          location: {
            x: 400,
            y: 300,
          }
        }
      ]
    },
  ])

  // the first work of each project
  const getMainWorks = computed<IMainWork[]>(() => {
    return projects.value.map((project: IProject) => {
      return {
        work: project.works[0],
        projectInfo: {
          title: project.title,
          subtitle: project.subtitle,
          description: project.description,
          year: project.year,
          group: project.group,
        }
      };
    });
  });

  const floatingWorks = ref<IMainWork[]>([]);
  for (const project of projects.value) {
    for (const work of project.works) {
      if (work.location) {
        floatingWorks.value.push({
          work,
          projectInfo: {
            title: project.title,
            subtitle: project.subtitle,
            description: project.description,
            year: project.year,
            group: project.group,
          }
        });
      }
    }
  }

  const getProjectByGroup = (group: string): IProject => {
    return projects.value.find(project => project.group === group)!;
  }

  return { projects, getMainWorks, floatingWorks, getProjectByGroup }
})
