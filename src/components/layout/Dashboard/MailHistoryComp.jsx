function HistoryComp(props){
    return(
        <>
        <div className="groupnamediv">
    <p className='groupnames'>Subject:{props.subject}</p>
    <p className='groupnames'>Company:{props.company}</p>
    <p className='groupnames'>Body:{props.body}</p>
    </div>
        </>
    )
}
export default HistoryComp;