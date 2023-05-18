import React, { useEffect, useState } from "react";
import axios from "axios";
import '../css/card.css';

function Card({ project }) {
    const title = project.title;
    const description = project.description
    const [titleImage, setTitleImage] = useState('');
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

    return (
        <a href={`project/${project.id}`}><div className='card'>
            <div className='teaser'>
                <p className='title'>{title}</p>
                <p className='description'>{description}</p>
            </div>
            <img src={titleImage} alt="titlePhoto" className='titlePhoto' />
        </div></a>
    );
}

export default Card;