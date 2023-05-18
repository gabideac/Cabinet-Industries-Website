import React, { useEffect, useState } from "react";
import getFeaturedProjects from '../scripts/getFeaturedProjects';
import '../css/projects.css';
import Card from "./card";


function Projects() {
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projects = await getFeaturedProjects();
                setProjectsData(projects);
            } catch (err) {
                console.log(err)
            }
        };

        console.log(projectsData)
        fetchData();
    }, []);

    return (
        < div className='projectsContainer' >
            <p className='projectsTitle'>Proiectele noastre</p>
            <div className='projectCards'>
                {projectsData.map(project => (
                    <Card key={project.id} project={project} />
                ))}
            </div>

        </div >
    )

}

export default Projects;
