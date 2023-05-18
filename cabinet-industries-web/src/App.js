import React, { useState } from 'react';
import { createRoot } from 'react-dom/client'

import Home from './components/pages/Home'
import ProjectsPage from './components/pages/ProjectsPage';
import UploadForm from './components/pages/UploadForm';
import ManageProjects from './components/pages/ManageProjects';
import UpdateForm from './components/pages/UpdateForm';
import Project from './components/pages/Project';

function App() {
  return (<>
    <Route path="/" component={Home} />
    <Route path="/projects" component={ProjectsPage} />
    <Route path="/project/:id" component={(props) => <Project id={props.id} />} />
    <Route path="/uploadform" component={UploadForm} />
    <Route path="/manageprojects" component={ManageProjects} />
    <Route path="/updateform/:id" component={(props) => <UpdateForm id={props.id} />} />
  </>
  );
}

const Route = ({ path, component }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const match = currentPath.match(new RegExp(`^${path.replace(':id', '(.*)')}$`));

  return match ? component({ id: match[1] }) : null;
};

createRoot(document.getElementById('root')).render(<App />)

export default App;
