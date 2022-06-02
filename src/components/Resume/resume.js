import React from "react";
import PDF from "../Resume/CSnyder052422.pdf";

const Resume = () => (
  <embed justify-con
    src={PDF}
    type="application/pdf"
    height={500}
    width={800}
  />
);

export default Resume;
