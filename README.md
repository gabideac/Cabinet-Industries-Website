This is a full-stack project.
To get things started: 
- start the server: cd to 'backend', then type: 'npm run dev' 
- start the react application: cd to 'cabinet-industries-web', then type 'npm start'

I kept the project folders with some projects already in them as a quick demo. Projects can be viewed as teaser cards on the main page(http://localhost:3000/) or on the projects page(/projects)
If you want to add projects go to'/uploadform'. If you want to edit or delete projects go to '/manageprojects'.
A project page can be accessed by clicking on a project card from the main page, or projects page.

The plan with this project is to (slowly but surely) turn it into a valid presentation website for a small furniture business. 
I plan to add authentication and authorization so that only logged in users can publish projects.
The accounts will be managed only by the business owner(can create/delete accounts).
General users will get to see what the furniture business does, and its past projects, and they will also be able to get a rough estimate of the price if they provide the dimensions of the desired furniture.

As of now, I was focused on the api, and making sure requests work, so the project is lacking in terms of style. Authentication and authorization, more functionality for users, and some more content. 
All of this must be added followed by testing, throwing errors, and code refactoring before worrying about deployment.
