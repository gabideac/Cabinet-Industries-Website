import axios from "axios";

const getFeaturedProjects = () => {
    return new Promise((resolve, reject) => {
        axios
            .get('http://localhost:3030/api/projects/featuredProjects')
            .then((res) => {
                resolve(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    });
};

export default getFeaturedProjects;