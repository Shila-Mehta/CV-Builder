import GeneralInfo from '../components/GeneralInfo';
import EducationInfo from '../components/EducationInfo';
import ExperienceInfo from '../components/ExperienceInfo';


export default function  DisplayForm({
    activeForm,isPreviewMode,
    generalInfo ,setGeneralInfo, isEditingGeneral,setIsEditingGeneral,
    educationInfo, setEducationInfo,isEditingEducation, setIsEditingEducation,
    experienceInfo,setExperienceInfo, isEditingExperience, setIsEditingExperience
}){

    return(

        <div className="form-display">
              {activeForm === 'general' && (
                <GeneralInfo
                  generalInfo={generalInfo}
                  setGeneralInfo={setGeneralInfo}
                  isEditingGeneral={isEditingGeneral}
                  setIsEditingGeneral={setIsEditingGeneral}
                  isPreviewMode={isPreviewMode}
                />
              )}
    
              {activeForm === 'education' && (
                <EducationInfo
                  educationInfo={educationInfo}
                  setEducationInfo={setEducationInfo}
                  isEditingEducation={isEditingEducation}
                  setIsEditingEducation={setIsEditingEducation}
                  isPreviewMode={isPreviewMode}
                />
              )}
    
              {activeForm === 'experience' && (
                <ExperienceInfo
                  experienceInfo={experienceInfo}
                  setExperienceInfo={setExperienceInfo}
                  isEditingExperience={isEditingExperience}
                  setIsEditingExperience={setIsEditingExperience}
                  isPreviewMode={isPreviewMode}
                />
              )}
        </div>
     )
    

}