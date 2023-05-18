import React from 'react';
import Header from '../views/header';
import Projects from '../views/projects'
import Footer from '../views/footer'

function Home() {
    return (
        <div className="App bckPattern">
            <Header />
            <Projects />
            <Footer />
        </div>
    );
}

export default Home;
