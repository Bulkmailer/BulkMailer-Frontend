function ScheduleComp(props){
    return(
        <>
        <div className="groupnamediv">
    <p className='groupnames'>Subject:{props.subject}</p>
    <p className='groupnames'>Company:{props.company}</p>
    <p className='groupnames'>Body:{props.body}</p>
    <p className='groupnames'>Date:{props.date} - {props.month} - {props.year}</p>
    <p className='groupnames'>Time:{props.hour} : {props.minute} </p>
    </div>
        </>
    )
}
export default ScheduleComp;