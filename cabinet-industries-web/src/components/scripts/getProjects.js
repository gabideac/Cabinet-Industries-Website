import axios from "axios";

const getProjects = () => {
    return new Promise((resolve, reject) => {
        axios
            .get('http://localhost:3030/api/projects/getAll')
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export default getProjects;