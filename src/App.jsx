import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";

import { useState } from "react";

export default function App(){

  //  useStates for GeneralInfo
  const [generalInfo,setGeneralInfo]=useState(
    {
      fullName:'',
      email:'',
      phone:''

    }
  );

  const [isEditingGeneral,setIsEditingGeneral]=useState(true);


  // useState  for  EduationInfo
  const [educationInfo,setEducationInfo]=useState({
    schoolName:'',
    titleOfStudy:'',
    dateOfStudy:''

  })

  const [isEditingEducation,setIsEditingEducation]=useState(true);

   return(
    <div  className="app">

    <GeneralInfo 
    generalInfo={generalInfo} 
    setGeneralInfo={setGeneralInfo}  
    isEditingGeneral={isEditingGeneral}  
    setIsEditingGeneral={setIsEditingGeneral}
    />

    <EducationInfo
      educationInfo={educationInfo}
      setEducationInfo={setEducationInfo}
      isEditingEducation={isEditingEducation}
      setIsEditingEducation={setIsEditingEducation}
    />
    </div>

   )

}