import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResourceSection from './components/ResourceSection';
import PdfViewer from './components/PdfViewer';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<ResourceSection />} />
                <Route path='/pdf-viewer' element={<PdfViewer />} />
            </Routes>
        </Router>
    );
}

export default App;
