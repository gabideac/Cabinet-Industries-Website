import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getOneProject from '../scripts/getOneProject';

function Project({ id }) {
    const [project, setProjectData] = useState([]);
    const [images, setImages] = useState([]);
    const [clientImage, setClientImage] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const project = await getOneProject(id);
                setProjectData(project);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                if (!project.images) {
                    return;
                }

                const imagesArray = [];
                for (const imageName of project.images) {
                    const response = await fetch(
                        `http://localhost:3030/api/projects/getProjectImage/${project.id}/${imageName}`
                    );

                    if (!response.ok) {
                        throw new Error(`Failed to fetch image: ${imageName}`);
                    }

                    const blob = await response.blob();
                    const imageURL = URL.createObjectURL(blob);
                    imagesArray.push(imageURL);
                }

                setImages(imagesArray);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, [project]);

    useEffect(() => {
        const fetchClientImage = async () => {
            try {
                if (!project.clientImage) {
                    return;
                }
                const response = await axios.get(
                    `http://localhost:3030/api/projects/getClientImage/${project.clientImage}`,
                    { responseType: 'arraybuffer' }
                );

                const blob = new Blob([response.data], { type: 'image/jpeg' });
                const clientImageURL = URL.createObjectURL(blob);
                setClientImage(clientImageURL);
            } catch (err) {
                console.error(err);
            }
        };

        fetchClientImage();
    }, [id]);

    return (
        <div>
            {console.log(project)}
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            {images.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
            ))}
            <img key={project.id} src={clientImage} alt='clientImage' />
            <p>{project.clientName}</p>
            <p>{project.clientTestamony}</p>
            <p>{project.price}</p>
        </div>
    );
}

export default Project;