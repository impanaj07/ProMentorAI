import React from 'react';
<<<<<<< Updated upstream:frontend/src/App.js
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
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import login from "./components/login";
import Signup from "./components/Signup";
// import ResourceSection from './components/ResourceSection';
// import PdfViewer from './components/PdfViewer';

//import { ToastContainer } from "react-toastify";
import { Container } from 'react-bootstrap';



function App() {
    return(
        <Container 
            className="d-flex align-items-center justify-content-center"
            style={{minHeight: "100vh"}}
        
        >
            <div className="w-100" style={{ maxWidth: '400px'}}>
                <Signup/>
            </div>
            
        </Container>
    )

    // return (
    //     <Router>
    //         <div className="App">
    //             <div className="auth-wrapper">
    //                 <div className="auth-inner">
    //                     <Routes>
    //                         <Route path="/" element={<Login />}/>
    //                         <Route path="/login" element={<Login />}/>
    //                         <Route path="/register" element={<SignUp />}/>
    //                     </Routes>
    //                     <ToastContainer />
    //                 </div>
    //             </div>
    //         </div>
    //     </Router>
    //);

    
>>>>>>> Stashed changes:frontend/src/components/App.js
}

export default App;
