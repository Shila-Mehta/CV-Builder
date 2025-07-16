import GeneralInfo from "./components/GeneralInfo";

import { useState } from "react";

export default function App(){
  const [generalInfo,setGeneralInfo]=useState(
    {
      fullName:'',
      email:'',
      phone:''

    }
  );

  const [isEditingGeneral,setIsEditingGeneral]=useState(true);

   return(
    <div  className="app">

    <GeneralInfo 
    generalInfo={generalInfo} 
    setGeneralInfo={setGeneralInfo}  
    isEditingGeneral={isEditingGeneral}  
    setIsEditingGeneral={setIsEditingGeneral}
      
    />

    </div>

   )

}