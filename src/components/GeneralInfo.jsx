import '../styles/GeneralInfo.css';

export default function GeneralInfo({generalInfo,setGeneralInfo,isEditingGeneral,setIsEditingGeneral, isPreviewMode}){

    function handleChange(e){
        const {name,value}=e.target;
        setGeneralInfo((prev)=>({...prev,[name]:value.trim()}));

    }

    
 return (
   <div  className="general-info">

    <h2>General Information</h2>

    { (isPreviewMode)?

    (
      <div className="general-info-preview">
       <p><strong>Name: </strong>{generalInfo.fullName}</p>
       <p><strong>Email: </strong>{generalInfo.email}</p>
       <p><strong>Phone: </strong>{generalInfo.phone}</p>
       </div>
    ):

    (isEditingGeneral)?(

    <div  className="general-info-content">

      <label htmlFor='user-name'>Name</label>
      <input type='text' id='user-name'    name='fullName' value={generalInfo.fullName}   onChange={handleChange}/>
      <label  htmlFor='user-email'>Email</label>
      <input type='email' id='user-email'   name='email' value={generalInfo.email}   onChange={handleChange} />
      <label  htmlFor='user-phone'>Phone</label>
      <input  type='tel' id='user-phone' name='phone' value={generalInfo.phone}   onChange={handleChange}/>
      <button    onClick={()=>setIsEditingGeneral(false)}> Submit</button>

      </div>

     ):(
       <div className="general-info-preview">
       <p><strong>Name: </strong>{generalInfo.fullName}</p>
       <p><strong>Email: </strong>{generalInfo.email}</p>
       <p><strong>Phone: </strong>{generalInfo.phone}</p>
       <button  onClick={()=> setIsEditingGeneral(true)}>Edit</button>
       </div>
      

     )
      
     
    }

   </div>
 )

}