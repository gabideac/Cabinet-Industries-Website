import React from 'react';
import Project from '../pages/Project';
import '../css/projectModal.css'

function ProjectModal({ id, onClose }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    X
                </button>
                <Project id={id} />
            </div>
        </div>
    );
}

export default ProjectModal;