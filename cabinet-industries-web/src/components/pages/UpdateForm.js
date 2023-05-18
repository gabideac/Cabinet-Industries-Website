import React, { useState, useEffect } from 'react'
import axios from 'axios'
import getOneProject from '../scripts/getOneProject';

import ManagerNavBar from '../views/managerNavBar'

import '../css/uploadForm.css'
import '../css/toggle.css'

function UpdateForm({ id }) {
    const [project, setProjectData] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [clientName, setClientName] = useState('');
    const [clientTestamony, setClientTestanomy] = useState('');
    const [price, setPrice] = useState('');
    const [position, setPosition] = useState('');
    const [featured, setFeatured] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const project = await getOneProject(id);
                setProjectData(project);

                setTitle(project.title)
                setDescription(project.description)
                setClientName(project.clientName)
                setClientTestanomy(project.clientTestamony)
                setPrice(project.price)
                setPosition(project.position)
                setFeatured(false);

            } catch (err) {
                console.log(err)
            }
        };

        fetchData();
    }, [id]);

    console.log(project)



    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedData = {
            title: title,
            description: description,
            clientName: clientName,
            clientTestamony: clientTestamony,
            price: price,
            featured: featured,
            position: position,
            id: id
        }

        axios.put(`http://localhost:3030/api/projects/updateProject/${id}`, updatedData)
        console.log(updatedData)
    };

    return (
        <div id='projectUploadForm'>
            <ManagerNavBar />
            <div className='formContainer'>
                <h1 id='title'>Update Project:</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Title:<br />
                        <input className='textInput' type="text" value={title} onChange={e => setTitle(e.target.value)} />
                    </label>
                    <br />

                    <label>
                        Description:<br />
                        <textarea id='textarea' className='textInput' value={description} onChange={e => setDescription(e.target.value)} />
                    </label>
                    <br />

                    <label>
                        Client Name:<br />
                        <input className='textInput' type="text" value={clientName} onChange={e => setClientName(e.target.value)} />
                    </label>
                    <br />

                    <label>
                        Client Testimony:<br />
                        <textarea id='textarea' className='textInput' value={clientTestamony} onChange={e => setClientTestanomy(e.target.value)} />
                    </label>
                    <br />

                    <label>
                        Price:<br />
                        <input className='textInput' type="text" value={price} onChange={e => setPrice(e.target.value)} />
                    </label>
                    <br />

                    <label>
                        Position:<br />
                        <input className='textInput' type="number" value={position} onChange={e => setPosition(e.target.value)} />
                    </label>
                    <br />

                    <div className='togglerContainer'>
                        <p>Featured on Frontpage:</p>
                        <label id='check' className="toggler-wrapper style-19">
                            <input className='checkbox' type="checkbox" checked={featured} onChange={e => setFeatured(e.target.checked)} />
                            <div className="toggler-slider">
                                <div className="toggler-knob"></div>
                            </div>
                        </label>
                    </div>

                    <button className='submit' type="submit">Edit Project</button>

                </form>
            </div>
        </div>
    )
}

export default UpdateForm;
