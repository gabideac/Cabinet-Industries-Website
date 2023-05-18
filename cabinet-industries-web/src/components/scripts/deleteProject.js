import axios from "axios";

const DeleteProject = (id) => {
    axios.delete(`http://localhost:3030/api/projects/deleteProject/:${id}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        });
};

export default DeleteProject;