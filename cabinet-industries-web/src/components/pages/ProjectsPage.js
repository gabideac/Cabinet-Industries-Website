import React, { useEffect, useState } from "react";
import Logo from '../../assets/logoCircleWhite.png';
import Footer from '../views/footer';
import '../css/ProjectsPage.css';
import ProjectModal from "../views/ProjectModal";
import getProjects from "../scripts/getProjects";
import Card from '../views/card';
import NavBar from "../views/navbar";



function ProjectsPage() {
    const [projectsData, setProjectsData] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState(null);

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


    const handleProjectClick = (projectId) => {
        setSelectedProjectId(projectId);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProjectId(null);
    };


    return (
        <div id='projectsContainer' className='bckPattern'>
            <NavBar />
            <h2 className='projectsTitlePage'>Proiectele noastre</h2>
            <p className="porjectsIntroText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className='projectCards'>
                {projectsData.map(project => (
                    <Card key={project.id} project={project} onClick={() => console.log('click')} className='project' />
                ))}
                {showModal && (
                    <ProjectModal id={selectedProjectId} onClose={handleCloseModal} />
                )}
            </div>
            <Footer />
        </div>
    );
}

export default ProjectsPage;