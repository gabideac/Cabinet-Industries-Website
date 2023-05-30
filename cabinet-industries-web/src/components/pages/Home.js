import React from 'react';
import Header from '../views/header';
import Projects from '../views/projects'
import MainPageContent from '../views/mainPageConternt';
import Footer from '../views/footer'

function Home() {
    return (
        <div className="App bckPattern">
            <Header />
            <Projects />
            <MainPageContent />
            <Footer />
        </div>
    );
}

export default Home;
