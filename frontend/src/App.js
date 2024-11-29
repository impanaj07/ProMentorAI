import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResourceSection from './components/ResourceSection';
import PdfViewer from './components/PdfViewer';
import Chatbot from './components/Chatbot';
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<ResourceSection />} />
                <Route path='/pdf-viewer' element={<PdfViewer />} />
                <Route path ='/chatbot' element={<Chatbot/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;
