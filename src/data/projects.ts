import { ProjectData, ProjectItem } from "@/types/project";

export const projects: ProjectItem[] = [
    {
      title: 'Talem',
      slug: "talem",
      imgSrc: '/projects-assets/talem.png',
      hoverImgSrc: '/projects-assets/talem-hover.png',
    },
    {
      title: 'DailySAT',
      slug: "dailysat",
      imgSrc: '/projects-assets/dailysat.png',
      hoverImgSrc: '/projects-assets/dailysat-hover.png',

    },
    {
      title: 'Trashify',
      slug: "trashify",
      imgSrc: '/projects-assets/trashify.png',
      hoverImgSrc: '/projects-assets/trashify-hover.png',
    },
    {
      title: 'Everyone Classroom',
      slug: "everyoneclass",
      imgSrc: '/projects-assets/everyone-stem.png',
      hoverImgSrc: '/projects-assets/everyone-stem-hover.png',
      },
];

export const projectData: ProjectData[] = [
  {
      slug: "talem",
      title: "Talem Website",
      link: "https://talem.org",
      description:
          "Talem is a website all about helping highschoolers with their high school journey. From extracurriculars to post-secondary help, we got you covered!",
      mainImage: "/mockups/talem/talem.png",
      impact: [
          "Built the whole blog platform",
          "Added user authentication using Firebase claim",
          "Updated about page with new UI designs",
      ],
      caseStudyImages: [
          "https://uploads-ssl.webflow.com/5c97a885435bfc2a1950b9ef/5e8cd6e36f24a898cadbf9f5_Habito%20case%20study%201-p-2000.jpeg",
          "/mockups/talem/1.png",
          "/mockups/talem/2.png",
      ],
      stats: [
        {
          stat: "400",
          desc: "daily users"
        },
        {
          stat: "$3,000",
          desc: "funding"
        },
        {
          stat: "300k",
          desc: "total users :)"
        }
      ],
      nextProject: "/dailysat"
  },

  {
    slug: "dailysat",
    title: "DailySAT Platform",
    link: "https://dailysat.org",
    description:
        "DailySAT is the website that helps you with your post-secondary journey! From SAT prep through our extensive list to our financial literacy platform, we got students",
    mainImage: "/mockups/dailysat/dailysat.png",
    impact: [
        "Leading the team through a thorough discovery period",
        "Developing an implementation strategy for the build phase",
        "Bringing together people from various parts of the business to collaborate",
    ],
    caseStudyImages: [
        "https://uploads-ssl.webflow.com/5c97a885435bfc2a1950b9ef/5e8cd6e36f24a898cadbf9f5_Habito%20case%20study%201-p-2000.jpeg",
        "/mockups/dailysat/1.png",
        "/mockups/dailysat/2.png",
    ],
    stats: [
      {
        stat: "70k+",
        desc: "total users"
      },
      {
        stat: "1300",
        desc: "SAT questsions added"
      },
      {
        stat: "130+",
        desc: "members on Discord"
      }
    ],
    nextProject: "/trashify"
},

];