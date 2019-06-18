import React from 'react';
import './App.scss';
import FetchImagesForGallery from './components/FetchImagesForGallery';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header/>
        <main className="site-content">  
          <section className="site-main__content-wrapper">
            <FetchImagesForGallery/>
          </section>
        </main>
    </>
  );
}

export default App;
