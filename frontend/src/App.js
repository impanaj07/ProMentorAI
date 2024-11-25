import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/login";
import SignUp from "./components/register";
// import ResourceSection from './components/ResourceSection';
// import PdfViewer from './components/PdfViewer';

import { ToastContainer } from "react-toastify";

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path='/' element={<ResourceSection />} />
//                 <Route path='/pdf-viewer' element={<PdfViewer />} />
//             </Routes>
//         </Router>
//     );
// }

function App() {
    return "Hello World"
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

    
}

export default App;

