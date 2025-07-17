import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import DisplayForm from "./components/DisplayForm";
import StylePanel from "./components/StylePanel";


import { useState } from "react";
import './App.css';

export default function App() {
  const [activeForm, setActiveForm] = useState('general');
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  // General Info
  const [generalInfo, setGeneralInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
  });
  const [isEditingGeneral, setIsEditingGeneral] = useState(true);

  // Education Info
  const [educationInfo, setEducationInfo] = useState({
    schoolName: '',
    titleOfStudy: '',
    dateOfStudy: '',
  });
  const [isEditingEducation, setIsEditingEducation] = useState(true);

  // Experience Info
  const [experienceInfo, setExperienceInfo] = useState({
    companyName: '',
    positionTitle: '',
    responsibilities: '',
    dateFrom: '',
    dateUntil: '',
  });
  const [isEditingExperience, setIsEditingExperience] = useState(true);

  // Font styling
  const [fontStyle, setFontStyle] = useState({
    backgroundColor: '#f3eeeeff',
    color: '#000000',
    fontSize: 16,
    lineHeight: 1.5,
    fontFamily: 'Arial',
  });

  function handleFontStyle(e) {
    const { name, value } = e.target;
    setFontStyle(prev => ({
      ...prev,
      [name]: name === 'fontSize' || name === 'lineHeight' ? parseFloat(value) : value
    }));
  }

  return (
    <div className="app">
      <NavBar />

      <div className="main" style={{
        backgroundColor: fontStyle.backgroundColor,
        color: fontStyle.color,
        fontSize: `${fontStyle.fontSize}px`,
        lineHeight: fontStyle.lineHeight,
        fontFamily: fontStyle.fontFamily
      }}>

       
       <SideBar  setActiveForm={setActiveForm}/>

       <DisplayForm
                  activeForm={activeForm}  isPreviewMode={isPreviewMode}
      
                  generalInfo={generalInfo}
                  setGeneralInfo={setGeneralInfo}
                  isEditingGeneral={isEditingGeneral}
                  setIsEditingGeneral={setIsEditingGeneral}


                   educationInfo={educationInfo}
                  setEducationInfo={setEducationInfo}
                  isEditingEducation={isEditingEducation}
                  setIsEditingEducation={setIsEditingEducation}

                   experienceInfo={experienceInfo}
                  setExperienceInfo={setExperienceInfo}
                  isEditingExperience={isEditingExperience}
                  setIsEditingExperience={setIsEditingExperience}


       />

     <StylePanel  
          fontStyle={fontStyle}
          handleFontStyle={handleFontStyle}
          isPreviewMode={isPreviewMode}
          setIsPreviewMode={setIsPreviewMode}
     />
        

      
      </div>
    </div>
  );
}
