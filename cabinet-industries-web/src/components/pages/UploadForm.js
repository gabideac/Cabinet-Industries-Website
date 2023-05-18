import React, { useState } from 'react'
import axios from 'axios'

import ManagerNavBar from '../views/managerNavBar'

import '../css/uploadForm.css'
import '../css/toggle.css'

function UploadForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [titleImage, setTitleImage] = useState('');
    const [images, setImages] = useState([]);
    const [featured, setFeatured] = useState(false);
    const [price, setPrice] = useState('');
    const [position, setPosition] = useState(0);
    const [clientName, setClientName] = useState('')
    const [clientTestamony, setClientTestanomy] = useState('')
    const [clientImage, setClientImage] = useState('-')

    const actualTitleImage = titleImage[0];
    const actualClientImage = clientImage[0];

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('clientName', clientName)
        formData.append('clientTestamony', clientTestamony);
        formData.append('price', price);
        formData.append('featured', featured);
        formData.append('position', position)
        formData.append('titleImageName', actualTitleImage.name)
        formData.append('clientImage', actualClientImage.name)
        for (let i = 0; i < images.length; i++) {
            if (images[i].name === actualTitleImage.name) {
                continue
            }
            formData.append('images', images[i]);
        }
        formData.append('images', actualTitleImage)
        formData.append('images', actualClientImage)

        axios.post('http://localhost:3030/api/projects/post', formData)
            .then(res => {
                console.log(formData);
                setTitle('');
                setDescription('');
                setFeatured(false);
                setPosition(0)
                setPrice('')
                setClientName('')
                setClientTestanomy('')
                setClientImage('-')
                setTitleImage('')
                setImages([]);
            })
            .catch(err => {
                console.log('Error');
                console.log(err);
            });
    };
    return (
        <div id='projectUploadForm'>
            <ManagerNavBar />
            <div className='formContainer'>
                <h1 id='title'>Upload Project:</h1>
                <form onSubmit={handleSubmit} action="http://localhost:3030/api/projects/post" method="post" encType="multipart/form-data">
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
                        Title Image:<br />
                        <input type="file" onChange={e => setTitleImage(e.target.files)} name='images' />
                    </label>
                    <br />

                    <label>
                        Images:<br />
                        <input type="file" multiple onChange={e => setImages(e.target.files)} name='images' />
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
                        Client Image:<br />
                        <input type="file" onChange={e => setClientImage(e.target.files)} name='images' />
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

                    <button className='submit' type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UploadForm;
