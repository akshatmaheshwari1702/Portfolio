import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Portfolio.css'
import { Breadcrumbs } from '@mui/material';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Connect from '../../components/Connect/Connect';

function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      laptopImg:"https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj2laptop",
      //   mobileImg="https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj2mob",
      title:"Basic Ecommerce Website",
      description:"A web app for learning the concepts for ecommerce websites. This project consists of purchase of furnitures, electronics etc. Also added the prod descriptions and check in/out for the users.",
      demoLink:"https://spawn-11wv.onrender.com",
      codeLink:"https://github.com/ils-AkshatM/Ecomm-Spawn",
    },
    {
      laptopImg: 'https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj2laptop',
      mobileImg: 'https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj2mob',
      title: "Resume Generator",
      description: "A web app for resume with a basic layout,featuring a user-friendly interface and a responsive, modern design.",
      demoLink: "https://resume-generator-one.vercel.app/",
      codeLink: "https://github.com/akshatmaheshwari1702/Resume-Generator"
    },
    {
      laptopImg: 'https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj3laptop',
      mobileImg: 'https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj3mob',
      title: "J Curve Media",
      description: "A web app designed to showcase the clients portfolio and clients motive for brands. Includes user-friendly error handling and supports multiple tax rates.",
      demoLink: "https://jcurve-media.vercel.app/",
      codeLink: "https://github.com/akshatmaheshwari1702/Jcurve-Media"
    },
    {
      laptopImg: 'https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj4laptop',
      mobileImg: 'https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj4mob',
      title: "Navrachna",
      description: "An website built for College event Navrachna to showcase the event for techno-events",
      demoLink: "https://navrachanaa.netlify.app",
      codeLink: "https://github.com/akshatmaheshwari1702/Navrachanaa"
    },
    {
      laptopImg: 'https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj5laptop',
      mobileImg: 'https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj5mob',
      title: "User Info Viewer",
      description: "A React-based app showcasing user details fetched from an API. Features include a list of users with avatars, detailed information in a dialog box, and a smooth custom scrollbar for enhanced user experience.",
      // demoLink: "https://userinfoviewer.netlify.app/",
      // codeLink: "https://github.com/Anuj579/User-info-viewer"
    },
    {
      laptopImg: 'https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj6laptop',
      mobileImg: 'https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj6mob',
      title: "Responsive Design",
      description: "A sleek, responsive website built with React and Bootstrap. It showcases my frontend development skills with a clean, professional design and seamless responsiveness across all various devices and screen sizes.",
      // demoLink: "https://responsivereactsite.netlify.app/",
      // codeLink: "https://github.com/Anuj579/Responsive-react-site"
    },
    {
      laptopImg: 'https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj7laptop',
      mobileImg: 'https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj7mob',
      title: "Demo UI Design",
      description: "A professionally designed, responsive website created to highlight front-end development skills. This project utilizes HTML, CSS, and Bootstrap to deliver a visually appealing and functional design.",
      // demoLink: "https://atgworldui.netlify.app/",
      // codeLink: "https://github.com/Anuj579/ATG-World-UI-design"
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <>
    <div className='bg-primary'>

      <section className='portfolio-hero-section relative min-h-[45vh] md:min-h-[65vh] flex flex-col justify-center items-center shadow-lg shadow-black'>
        <h1 className='text-4xl font-cairo md:text-[40px] lg:text-5xl font-bold mb-3 mt-14 text-white'>Portfolio</h1>
        <Breadcrumbs separator={<p className='text-white'>/</p>} className='bg-transparent '>
          <Link to="/" className="opacity-60 text-white text-base" style={{ fontWeight: '400' }}>HOME</Link>
          <Link to="/portfolio" className='text-white text-base' style={{ fontWeight: '400' }}>PORTFOLIO</Link>
        </Breadcrumbs>
      </section>
      <section className='container px-4 mx-auto'>
        <div className='py-20'>
          <div className='flex flex-col items-center'>
            <h1 className='font-cairo font-bold text-4xl text-center mt-10 text-white'>My Recent Works</h1>
            <hr className='border-b-4 border-secondary w-40 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <p className='text-accent'>Explore my portfolio to see a selection of recent projects that highlight my web development and design skills. Each project showcases my commitment to quality and innovation. Check out my work to see how I can bring your ideas to life.</p>
          <div className='flex justify-center items-center flex-wrap gap-20 my-16'>
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={index}
                laptopImg={project.laptopImg}
                mobileImg={project.mobileImg}
                title={project.title}
                description={project.description}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
              />
            ))}
          </div>
          <div className='flex justify-center'>
            <button
              onClick={() => setShowAll(!showAll)}
              className=' text-white load-link flex items-center font-semibold'
            >
              <span>{showAll ? 'Show Less' : 'Load More'}</span><svg xmlns="http://www.w3.org/2000/svg" className='h-[16px] fill-white ms-3' viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
            </button>
          </div>
        </div>

        {/* Let's Connect div */}
        <div className='py-20'>
          <Connect />
        </div>
      </section>
    </div>
    </>
  );
}

export default Portfolio;
