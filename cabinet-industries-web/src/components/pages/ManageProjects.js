import React, { useEffect, useState } from "react";
import ManagerNavBar from "../views/managerNavBar";
import getProjects from "../scripts/getProjects";
import DeleteProject from "../scripts/deleteProject";
import '../css/manageProjects.css'

function ManageProjects() {
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
        <div>
            <ManagerNavBar />
            <div>
                <h1>Manage Projects</h1>
                {projectsData.map(project => (
                    <div key={project.id} id="manageProjects">
                        <p>{project.id}</p>
                        <p>{project.title}</p>
                        <p>Featured: {project.featured}</p>
                        <p>Position: {project.position}</p>
                        <button onClick={() => DeleteProject(project.id)}>Delete</button>
                        <a href={`updateform/${project.id}`}>Edit</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ManageProjects;