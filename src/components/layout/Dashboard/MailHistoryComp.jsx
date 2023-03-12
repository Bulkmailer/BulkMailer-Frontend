function HistoryComp(props){
    return(
        <>
                <div id='flexkro'>
        <div className="groupnamediv">
    <p><span className='groupnames'>Subject : </span> {props.subject}</p>
    <p ><span className='groupnames'>Company : </span> {props.company}</p>
    <p ><span className='groupnames'>Body : </span> {props.body}</p>
    {/* <p><span className='groupnames'>From : </span> {props.from}</p> */}
    {/* <p><span className='groupnames'>To : </span> {props.to}</p> */}
    <p><span className='groupnames'>Status : </span> {props.status}</p>
    {(props.status=='FAILURE')?<p style={{color: "red"}}>Set App Password correctly</p>:null}
    </div>
    </div>
        </>
    )
}
export default HistoryComp;