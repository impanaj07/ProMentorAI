import React from 'react';
import { useLocation } from 'react-router-dom';

const PdfViewer = () => {
  const location = useLocation();
  const { pdfUrl } = location.state || {}; // Get the passed PDF URL from state
  console.log(location.state);
  if (!pdfUrl) {
    return <div>No PDF selected</div>;
  }

  return (
    <div className='fixed-pdf-view'>
      <iframe
        src={pdfUrl}
        width="100%"
        height="600px"
        title="PDF Viewer"
      ></iframe>
    </div>
  );
};

export default PdfViewer;
