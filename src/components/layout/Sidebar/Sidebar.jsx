import './Sidebar.css'
import dashboard from '../../../assets/dash2.svg'
import group from '../../../assets/group.svg'
import template from '../../../assets/template.svg'
import history from '../../../assets/history.svg'
import { Link } from 'react-router-dom'

function Sidebar(){
return (
    <>
    <div id='sidebar'>
    <h4 id='mainhead'><img src={dashboard} id='dashboardimg2'></img> Dashboard</h4>
     <ul id='sideul'>
        <Link to='/creategroup'><li>
         <p id='sideoptions'><img src={group} id='groupimg'></img> Create Group</p> 
        </li>
        </Link>
        <Link to='/template'><li>
         <p id='sideoptions'><img src={template} id='templateimg'></img> Template</p> 
        </li>
        </Link>
        <Link to='/mailhistory'><li>
         <p id='sideoptions'><img src={history} id='templateimg'></img>Mail History</p> 
        </li>
        </Link>
        </ul> 
    </div>
    </>
)
}
export default Sidebar;