import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Writer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },

    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Social Media Marketing Intern",
      company_name: "Nblik",
      
      iconBg: "#383E56",
      date: "July 2021 - August 2021",
      points: [
        "Worked to onboard various users to the app",
        "Contributed ideas, to how the number of users can be increased",
        "Made posts to be shared across platforms",
      ],
    },
    {
      title: "Open Source Contributor",
      company_name: "GSSOC",
      
      iconBg: "#E6DEDD",
      date: "May 2023 - July 2023",
      points: [
        "Actively contribute code to open-source projects",
        "Pointing out bugs and improve the software's reliability",
        "Learning about new technologies"
      ],
    },
    {
      title: "Web Developer",
      company_name: "CodSoft",
      
      iconBg: "#383E56",
      date: "August 2023 - September 2023(present)",
      points: [
        "Developing web applications using React.js and other related technologies.",
        "Learning new technologies and enhancing my knowledge",
        "Implementing responsive design",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "https://www.linkedin.com/ in/sanchita-bhardwaj-913883250/",
      name: "LinkedIn",
      designation: "",
      company: "",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEUMZMX///8AYcQAWcFDf8nL3PIAWrzQ3vMAYcI0eclZjtAucslAgsz6/v3x9/sgbclOhM8AX8QAYsAAX70AV70AWMLm7vgAXb4sdsw5fsoRbsVmltK6z+iUt+AMZcGDrN3c6fNvnddiltWqwuPA0+r0+vyOrt+lweR9pduuyueUst9Lh81pldd1mtYdbcunxOXO4u7Z4fGRyVlRAAAEKUlEQVR4nO3ce1faMBzG8SblEpSCiUUuQrkMhsCc+v7f3Ko4KjW/yLY0WXOez9mf4Ml3vSW1NYoAAAAAAAAAAAAAAAAAAAAAAAAAAADgYiriIsqU72FURcapGnXHk5aMue+xVCCT6n56x960Z2OpMt8jsozz+Xve0Xqc+h6SXbKzYOeSfex7UBap+J591lThHI3awPxw5KGcVFUj0RayaRrI6UaUj8GTpfA9NivknApkvTC2YdwjC9lc+h6dBWpFB7JFCIXx1FDIRr6HZ0Fq2EkZewjgXNMnLhVH34a+x/fPeMdYOK3/gchvTIFsXf/ZKR+bC+u/DcW1cS/d1f84jFobU+H3ANYXadNU2PU9PAvkd0Ngz/forMgMhU/1P5Xm4h0ZmHQCOAzz68WEPNdsg9iE+ZH4QATeBTApPYqf9PvoKIh99E2qOxQ3jVvf47JHDT5fMl5GAQW+3tNvnF/4N3shwrhJc8Ljw/Q0Q13MJ4GcRc8IORjP99vZfpWlQe2gH3EZx7Gs/4IJAADqQ3DJX/+FM38vqHyKlA5Hhx+Pj49X43468P34CheEiz9Z+pTMlrvFaQ6YbNrblRpKf6vNbHRNKX2yT/kwSVd5XluzGGs//Ew9NfIGS/RYs3X2yUGzp7dpnMYu+zPql1mbp46f+XxeSCkVxrpt8+bmWJgJOTPeYP7m5QkWi4Wye0d94t3m3sNmtFao5OyLvle7zPnRaKlQCb6+IDBfXvddJ1oq5BH5WE7JXd/xwWilUKnJpYGM9a7dPk5mpfCWP18cmO+okdOtaKVwYHxm5ZP1wOWNPBuFneUfBTK2dHkzyEbhwfirco3NxOF+aqPw8rPMbzuHV34bhX+h4e6q6KnQ4ZM6ngrZyNlG9FXo7hfMvgp7zt7o8FXIDq52U2+FznbTKgovmgAsalq4mB0mQqjJYfvler98o6sWhevuYPh2C5jz4WD1ReMPR4soi4W91dmtXy7MK469o7mpvcLn8nRaSWPi9PzH/++FCXvW3LuXpoXxi6MllK1tqHtGLBMd0zccLYNtFR60W8T0wkqv7yTQVuGTfpfLuvRXkms3sxo7hQlx/yy7NayOO3Uq3MXExY148PFY6OZyYafwihqsXNJfGteoMCGXQoYfzxo1KmxSO2kkJvTLcXUq3BreraFnp3UqNLwT3aJPpnUqPNBjTV+CKDScFVv0t+pUaLiytegXq1BoCQoLKNRDYfVQWEChHgqrh8ICCvVQWD0UFlCoh8LqobCAQj0UVg+FBRTqobB6KCygUA+F1UNhAYV6KKweCgso1ENh9VBYQKEeCquHwkKAhe1SIf2UoaFwSP+/dB29FtTvUsbnH+Q3VxTDmxOq+zffskqJiOtFpZda+OV/M6uQKepLof0NWAAAAAAAAAAAAAAAAAAAAAAAAAAAgAr8Aj5RWY0PDbn2AAAAAElFTkSuQmCC",
    },
    {
      testimonial:
        "https://github.com/ sanchitaa14",
      name: "GitHub",
      designation: "",
      company: "",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
    },
    {
      testimonial:
        "https://medium.com/ @sakshibhardwaj14",
      name: "Medium",
      designation: "",
      company: "",
      image: "data:image/png;base64,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",
    },
  ];
  
  const projects = [
    {
      name: "Amazon-clone",
      description:
        "An Amazon-clone, hich focuses on making a simple and easy-to-navigate website or app that allows people to search for products, add items to their cart, and safely buy them online.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      
      source_code_link: "https://github.com/sanchitaa14/amazon-clonee",
    },
   
    {
      name: "Disha",
      description:
        "A web-app which connects tourists to certified guides, still working on improving the site and adding more to it along with improving it.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      
      source_code_link: "https://github.com/sanchitaa14/moonstone",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };