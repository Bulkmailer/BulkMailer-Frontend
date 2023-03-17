import deleteitem from "../../../../assets/delete.svg";
function TemplateShowComp(props){
return(
<>
<div id='center'>
<div className='template' id={props.id}>{props.name}</div>
<img src={deleteitem}></img>

</div>
</>
)
}
export default TemplateShowComp;