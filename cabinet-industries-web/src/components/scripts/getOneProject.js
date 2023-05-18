import axios from "axios";

const getOneProject = (id) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`http://localhost:3030/api/projects/:${id}`)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                console.log(err)
            });
    });
};

export default getOneProject;