import React, { useEffect, useState } from "react";
import axios from "axios";
import '../css/card.css';
import ProjectModal from './ProjectModal';

function Card({ project }) {
    const title = project.title;
    const description = project.description;
    const [titleImage, setTitleImage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    useEffect(() => {
        const fetchTitleImage = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3030/api/projects/getProjectTitleImage/${project.id}`,
                    { responseType: 'arraybuffer' }
                );

                const blob = new Blob([response.data], { type: 'image/jpeg' });
                const titleImageURL = URL.createObjectURL(blob);
                setTitleImage(titleImageURL);
            } catch (error) {
                console.error('Error fetching title image:', error);
            }
        };

        fetchTitleImage();
    }, [project.id]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className='card' onClick={openModal}>
                <div className='teaser'>
                    <p className='title'>{title}</p>
                    <p className='description'>{description}</p>
                </div>
                <img src={titleImage} alt="titlePhoto" className='titlePhoto' />
            </div>
            {isModalOpen && (
                <ProjectModal id={project.id} onClose={closeModal} />
            )}
        </>
    );
}

export default Card;