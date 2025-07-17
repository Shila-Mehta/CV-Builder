import '../styles/ExperienceInfo.css';


export default function ExperienceInfo({experienceInfo,setExperienceInfo,isEditingExperience,setIsEditingExperience,isPreviewMode}){

    
     function handleChange(e){
     const {name,value}=e.target;

     setExperienceInfo((prev)=>({...prev,[name]:value.trim()}))
    }

    return(
        <div className='experience-info'>
            <h2>Experience Info</h2>
            {
                (isPreviewMode)?(
                    <div className='experience-info-preview'>
                    <p> <strong>Company Name:</strong>{experienceInfo.companyName}</p>
                    <p> <strong>Position Title:</strong>{experienceInfo.positionTitle}</p>
                    <p> <strong>Responsiblities:</strong>{experienceInfo.responsibilities}</p>
                    <p> <strong>Date From:</strong>{experienceInfo.dateFrom}</p>
                    <p> <strong>Date Until:</strong>{experienceInfo.dateUntil}</p>
                   </div>
                ):

                (isEditingExperience)?(
                    <div className='experience-info-content'>
                        <label        htmlFor='company-name'          >Company Name</label>
                        <input   type='text'  id='company-name'  name= 'companyName'  value={experienceInfo.companyName}  onChange={handleChange}/>
                        <label     htmlFor='position-title'      >Position Title</label>
                        <input   type='text' id='position-title' name='positionTitle'    value={experienceInfo.positionTitle}  onChange={handleChange} />
                        <label      htmlFor='responsibilities'         >Responsiblities</label>
                        <textarea   type='text' id='responsibilities'   name='responsibilities'  value={experienceInfo.responsibilities} onChange={handleChange}/>
                        <label  htmlFor='date-from'>Date From</label>
                        <input type='date'  id='date-from'  name='dateFrom'  value={experienceInfo.dateFrom} onChange={handleChange}/>
                        <label htmlFor='date-until'>date Until</label>
                        <input type='date' id='date-until' name='dateUntil' value={experienceInfo.dateUntil} onChange={handleChange} />
                        <button onClick={()=>setIsEditingExperience(false)}>Submit</button>

                    </div>

                ):
                (
                   <div className='experience-info-preview'>
                    <p> <strong>Company Name:</strong>{experienceInfo.companyName}</p>
                    <p> <strong>Position Title:</strong>{experienceInfo.positionTitle}</p>
                    <p> <strong>Responsiblities:</strong>{experienceInfo.responsibilities}</p>
                    <p> <strong>Date From:</strong>{experienceInfo.dateFrom}</p>
                    <p> <strong>Date Until:</strong>{experienceInfo.dateUntil}</p>
                    <button  onClick={()=>setIsEditingExperience(true)}>Edit</button>
                   </div>
                )

            }
        </div>
    )

}