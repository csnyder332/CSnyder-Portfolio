import React from "react";
import PDF from "../Resume/CSnyder052422.pdf";

const Resume = () => (
  <embed justify-con
    src={PDF}
    type="application/pdf"
    height={700}
    width={1900}
  />
);

export default Resume;
