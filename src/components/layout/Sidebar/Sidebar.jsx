import './Sidebar.css'
import dashboard from '../../../assets/dashboard.svg'
import group from '../../../assets/group.svg'
import template from '../../../assets/template.svg'
import history from '../../../assets/history.svg'

function Sidebar(){
return (
    <>
    <div id='sidebar'>
    <h4 id='mainhead'><img src={dashboard} id='dashboardimg2'></img> Dashboard</h4>
     <ul id='sideul'>
        <li>
         <p id='sideoptions'><img src={group} id='groupimg'></img>  Create Group</p> 
        </li>
        <li>
         <p id='sideoptions'><img src={template} id='templateimg'></img> Template</p> 
        </li>
        <li>
         <p id='sideoptions'><img src={history} id='templateimg'></img>  Mail History</p> 
        </li>
        </ul> 
    </div>
    </>
)
}
export default Sidebar;