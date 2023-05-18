import React, { useEffect, useState } from "react";
import '../css/ProjectsPage.css';
import Logo from '../../assets/logoCircleWhite.png';
import Footer from '../views/footer';

import getProjects from "../scripts/getProjects";
import Card from '../views/card';



function ProjectsPage() {
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projects = await getProjects();
                setProjectsData(projects);
            } catch (err) {
                console.log(err)
            }
        };

        fetchData();
    }, []);


    return (
        <div className='projectsContainer bckPattern'>
            <div className='top'>
                <img src={Logo} alt="logo" className='logo' />
                <a href='/' className='navlink homepageLink'>Acasă</a>
            </div>
            <p className='projectsTitlePage '>Proiectele noastre</p>
            <div className='projectCards'>
                {projectsData.map(project => (
                    <Card key={project.id} project={project} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default ProjectsPage;