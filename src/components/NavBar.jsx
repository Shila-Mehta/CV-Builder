import '../styles/NavBar.css';
import { useState } from 'react';

export default function NavBar(){
  const [showLangDropDown,setShowLangDropDown]=useState(false);
  const [showMenuDropDown,setShowMenuDropDown]=useState(false);


    return(
        <div  className='navbar'>
            <div  className='navbar-left'>
             
             <div className='nav-left-part-1'>
                  <img className='cv-box-icon'  src='\box.png'/>
             </div>
            
            <div className='nav-right-part-2'> 
             <h2>Styling Cv</h2>
            <p>Builder</p>
            </div>
            

            </div>

            <div className='navbar-right'>

            <p  className='hide'> <img src='\dashboard.png'/>DashBoard</p>
            <p   className='hide'><img  src='\upgrade.png'/>Upgrade</p>

            <div  className='language-dropdown-wrapper  hide'>
                <span>Languages </span>
                <img  className={`dropdown-icon ${showLangDropDown ? 'rotated' : ''}`} src='\down.png'   onClick={()=>setShowLangDropDown((prev)=>!prev)}/>

                { showLangDropDown   && (
               
                <div className='languages-dropdown  dropdown'>
                    <p > <img  src='\pakistan.png'/> English</p>
                    <hr/>
                    <p> <img  src='\germany.png'/>German</p>
                    <hr/>
                    <p> <img src='\france.png' />French</p>
                    <hr/>
                    <p><img  src='\english.png'/>Urdu</p>
                </div>
                )}
         </div>
           

           

            <img className='profile-img' src='\profile pic.jpg'></img>

            <div className='profile-dropdown-wrapper' >
            <span> <strong>John Doe</strong> </span>

            <img className={`dropdown-icon ${showMenuDropDown ? 'rotated' : ''}`} src='\down.png'  onClick={()=>setShowMenuDropDown((prev)=> !prev)}/>


             { showMenuDropDown &&  (
             <div className='profile-dropdown  dropdown'>
                <p > <img  src='\menu.png'/>Menu</p>
                   <hr/>
                <p> <img src='\edit.png' />Edit </p>
                   <hr/>
                <p> <img  src='\settings.png'/>Settings</p>
                   <hr/>
                <p><img src='\shutdown.png'/>Log out</p>
            </div>)}
            
            <p>Admin</p>

            </div> 
          
            </div>

           
        </div>
    )
}


