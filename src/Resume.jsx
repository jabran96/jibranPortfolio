import React from 'react';
import { Document, Page } from 'react-pdf';

const Resume=()=>{
  return (
    <Document file="Files/Resume.pdf">
      <Page pageNumber={1} />
    </Document>
  );
}
export default Resume;