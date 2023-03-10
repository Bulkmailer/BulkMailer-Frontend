function HistoryComp(props){
    return(
        <>
                <div id='flexkro'>
        <div className="groupnamediv">
    <p><span className='groupnames'>Subject : </span> {props.subject}</p>
    <p className='groupnames'>Company:{props.company}</p>
    <p className='groupnames'>Body:{props.body}</p>
    <p className='groupnames'>From:{props.from}</p>
    <p className='groupnames'>To:{props.to}</p>
    <p className='groupnames'>Status:{props.status}</p>
    {(props.status=='FAILURE')?<p style={{color: "red"}}>Set App Password correctly</p>:null}
    </div>
    </div>
        </>
    )
}
export default HistoryComp;