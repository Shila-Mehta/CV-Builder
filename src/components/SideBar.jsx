
import '../styles/SideBar.css';

export default function SideBar({setActiveForm}){

    return(

        <aside className="sidebar">
              <div className="sidebar-item" onClick={() => setActiveForm('general')}>
                <img src="/info.png" alt="General Info" />
                <div>General Info</div>
              </div>
    
              <div className="sidebar-item" onClick={() => setActiveForm('education')}>
                <img src="/open-book.png" alt="Education Info" />
                <div>Education Info</div>
              </div>
    
              <div className="sidebar-item" onClick={() => setActiveForm('experience')}>
                <img src="/industry.png" alt="Experience Info" />
                <div>Experience Info</div>
              </div>
            </aside>

    )
     
}