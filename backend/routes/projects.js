const express = require('express')
const fs = require('fs');
const multer = require('multer')
var Generator = require('id-generator')

const router = express.Router()
const path = require("path");
const { id } = require('date-fns/locale');
const upload = multer({ dest: './../projects/' });
const dataPath = './../projects/projectsData.json';
const clientImagesPath = './../projects/clientImages/'


router.post('/post', upload.array('images', 25), (req, res) => {
    var generator = new Generator();
    const projectId = generator.newId();
    const projectFolder = `./../projects/${projectId}`;
    const projectData = req.body;
    const projectImages = req.files;

    CreateProjectFolder(projectFolder);
    const imagesPaths = HandleImagesAndGetImagesPaths(projectImages, projectFolder, projectData)

    projectData.id = projectId;
    projectData.images = imagesPaths;

    AddProjectDataToProjectsFile(projectData)
    console.log(projectData)
    res.json({ success: true });
});

router.get('/featuredProjects', (req, res) => {
    const featuredProjects = GetFeaturedProjects();
    res.send(featuredProjects)
})


router.get('/getAll', (req, res) => {
    const projectsData = GetProjectsArray();
    res.send(projectsData);
});

router.get('/:id', (req, res) => {
    const id = req.params.id.substring(1);
    res.send(GetProjectFromId(id))
})

router.get('/getProjectImage/:id/:imageName', (req, res) => {
    const projectId = req.params.id;
    const imageName = req.params.imageName;
    const projectImagePath = path.resolve(__dirname, `../../projects/${projectId}/${imageName}`);
    res.sendFile(projectImagePath)

});

router.use('/getClientImage/:imageName', (req, res) => {
    const imageName = req.params.imageName
    const clientImagePath = path.resolve(__dirname, `../../projects/clientImages/${imageName}`);
    res.sendFile(clientImagePath)
})

router.use('/getProjectTitleImage/:id', (req, res) => {
    const projectId = req.params.id;
    project = GetProjectFromId(projectId)
    const projectTitleImagePath = path.resolve(__dirname, `../../projects/${projectId}/${project.titleImageName}`);
    res.sendFile(projectTitleImagePath)
})

router.put('/updateProject/:id', (req, res) => {
    const updatedData = req.body
    const project = GetProjectFromId(updatedData.id)
    project.title = updatedData.title
    project.description = updatedData.description
    project.clientName = updatedData.clientName
    project.clientTestamony = updatedData.clientTestamony
    project.position = updatedData.position
    project.price = updatedData.price
    project.featured = updatedData.featured

    const projects = GetProjectsArray();
    for (i = 0; i < projects.length; i++) {
        if (projects[i].id === updatedData.id) {
            projects.splice(i, 1)
            projects.push(project)
            WriteJsonFile(projects)
            res.send({ success: true })
            return
        }
    }
    res.send({ success: false })

})

router.delete('/deleteProject/:id', (req, res) => {
    const id = req.params.id.substring(1);
    const projects = GetProjectsArray();
    for (i = 0; i < projects.length; i++) {
        if (projects[i].id === id) {
            DeleteClientImage(projects[i])
            DeleteImages(projects[i])
            projects.splice(i, 1)
            WriteJsonFile(projects)
            res.send({ success: true })
            return
        }
    }
    res.send({ success: false })
})


function GetFeaturedProjects() {
    const projects = GetProjectsArray();
    const featuredProjects = [];
    projects.forEach(project => {
        if (project.featured === true || project.featured === 'true') {
            featuredProjects.push(project)
        }
    })
    return featuredProjects
}

function GetProjectFromId(id) {
    const projects = GetProjectsArray();
    for (i = 0; i < projects.length; i++) {
        if (projects[i].id === id) {
            return projects[i];
        }
    }
}

function DeleteImages(project) {
    project.images.forEach(image => {
        fs.unlink(`./../projects/${project.id}/${image}`, err => { if (err) { console.log(err) } })
    })
    fs.rmdir(`./../projects/${project.id}`, err => { if (err) { console.log(err) } })
}

function DeleteClientImage(project) {
    if (project.clientImage === undefined) {
        return
    }
    fs.unlink(clientImagesPath + project.clientImage, err => { if (err) { console.log(err) } })

}

function CreateProjectFolder(projectFolderPath) {
    fs.mkdir(projectFolderPath, (err, data) => {
        if (err) {
            console.error(err);
        }
    })
}

function HandleImagesAndGetImagesPaths(projectImages, targetFolder, projectData) {
    let imagesPaths = [];
    projectImages.forEach(image => {
        if (image.originalname !== projectData.clientImage) {
            imagesPaths.push(image.originalname)
            MoveImagesToDesignatedFolder(image, targetFolder)
        } else {
            MoveImagesToDesignatedFolder(image, clientImagesPath)
        }
    })
    return imagesPaths;
}

function AddProjectDataToProjectsFile(projectData) {
    const allProjects = GetProjectsArray();
    allProjects.push(projectData)
    WriteJsonFile(allProjects)
}

function WriteJsonFile(projects) {
    fs.createWriteStream(dataPath)
    fs.writeFile(dataPath, JSON.stringify(projects), err => {
        if (err) { console.log(err) }
    })
}

function GetProjectsArray() {
    const readProjectsDataJsonFile = fs.readFileSync(dataPath);
    const allProjects = JSON.parse(readProjectsDataJsonFile);
    return allProjects;
}

function MoveImagesToDesignatedFolder(image, targetFolder) {
    fs.copyFile(image.path, path.join(targetFolder, image.originalname), err => {
        if (err) { console.log(err) }
    })
    fs.unlink(image.path, err => {
        if (err) { console.log(err) }
    })
}


module.exports = router;
