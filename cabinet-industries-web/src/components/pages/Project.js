import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import axios from 'axios';
import getOneProject from '../scripts/getOneProject';

import 'react-image-gallery/styles/css/image-gallery.css';

function Project({ id }) {
    const [project, setProjectData] = useState([]);
    const [images, setImages] = useState([]);
    const [clientImage, setClientImage] = useState([]);
    const [imageGallery, setImageGallery] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectData = await getOneProject(id);
                setProjectData(projectData);
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
                if (project.clientImage === undefined || project.clientTestamony === "") {
                    return;
                }
                const response = await axios.get(
                    `http://localhost:3030/api/projects/getClientImage/${project.clientImage}`,
                    { responseType: 'arraybuffer' }
                );

                const blob = new Blob([response.data], { type: 'image/jpeg' });
                const clientImageURL = URL.createObjectURL(blob);
                setClientImage(clientImageURL);
                console.log('done')
            } catch (err) {
                console.error(err);
            }
        };

        fetchClientImage();
    }, [project]);

    useEffect(() => {
        if (images.length > 0) {
            const tempImages = images.map((image, index) => ({
                original: image,
                originalAlt: `Image ${index + 1}`,
            }));
            setImageGallery(tempImages);
        }
    }, [images]);

    return (
        <div id="project">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div>
                <ImageGallery items={imageGallery} showThumbnails={false} />
            </div>
            {project.clientTestamony !== "" && <div>
                {project.clientImage !== undefined && <img key={project.id} src={clientImage} alt="clientImage" className='clientImage' />}
                <div>
                    <p>{project.clientName}</p>
                    <p>{project.clientTestamony}</p>
                </div>
            </div>}
            <p>{project.price}</p>
        </div>
    );
}

export default Project;