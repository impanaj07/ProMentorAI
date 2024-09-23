import React, { useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import ResourceCard from './ResourceCard';
import { useNavigate } from 'react-router-dom';

const ResourceSection = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [pdfs, setPdfs] = useState([]);
  const navigate = useNavigate();

  // Fetch PDF data
  const fetchPdf = async () => {
    try {
      const response = await fetch('/pdf.json');
      const data = await response.json();
      setPdfs(data);
    } catch (error) {
      console.error('Error in fetching PDFs: ', error);
    }
  };

  useEffect(() => {
    fetchPdf();
  }, []);

  // Handle card button click
  const buttonHandler = (pdfUrl) => {
    navigate('/pdf-viewer', { state: { pdfUrl } });
  };

  return (
    <>
      <h1>Resource Section</h1>

      <Stack direction="horizontal" gap={3} className="flex-wrap">
        { pdfs.map((pdf, index) => (
          <div className="p-2" key={index}>
            <ResourceCard
              img={pdf.img}
              title={pdf.title}
              info={pdf.info}
              Url={pdf.pdfUrl}
              onClick={() => buttonHandler(pdf.pdfUrl)} // Pass a function instead of executing it
            />
          </div>
        ))}
      </Stack>

      
    </>
  );
};

export default ResourceSection;
