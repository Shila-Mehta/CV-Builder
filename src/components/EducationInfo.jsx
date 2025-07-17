import '../styles/EducationInfo.css'

export default function EducationInfo({educationInfo,setEducationInfo,isEditingEducation,setIsEditingEducation,isPreviewMode}){


    function handleChange(e){
     const {name,value}=e.target;

     setEducationInfo((prev)=>({...prev,[name]:value}))
    }

    return(
        <div className='education-info'>
            <h2>Education Info</h2>
            {
                (isPreviewMode)?(

                    <div className='education-info-preview'>
                    <p> <strong>School Name:</strong>{educationInfo.schoolName}</p>
                    <p> <strong>Title Of Study:</strong>{educationInfo.titleOfStudy}</p>
                    <p> <strong>Date Of Study</strong>{educationInfo.dateOfStudy}</p>
                   </div>
                ):

                (isEditingEducation)?(
                    <div className='education-info-content'>
                        <label        htmlFor='school-name'          >School Name</label>
                        <input   type='text'  id='school-name'  name= 'schoolName'  value={educationInfo.schoolName}  onChange={handleChange}/>
                        <label     htmlFor='title-of-study'      >Title Of Study</label>
                        <input   type='text' id='title-of-study' name='titleOfStudy'    value={educationInfo.titleOfStudy}  onChange={handleChange} />
                        <label      htmlFor='date-of-study'         >Date of Study</label>
                        <input   type='date' id='date-of-study'   name='dateOfStudy'  value={educationInfo.dateOfStudy} onChange={handleChange}/>
                        <button onClick={()=>setIsEditingEducation(false)}>Submit</button>

                    </div>

                ):
                (
                   <div className='education-info-preview'>
                    <p> <strong>School Name:</strong>{educationInfo.schoolName}</p>
                    <p> <strong>Title Of Study:</strong>{educationInfo.titleOfStudy}</p>
                    <p> <strong>Date Of Study</strong>{educationInfo.dateOfStudy}</p>
                    <button  onClick={()=>setIsEditingEducation(true)}>Edit</button>
                   </div>
                )

            }
        </div>
    )


}