const LocationBoxInfo = ({info}) => {
    return (
        <div className='locationInfo'>
            <h2>Event Location info</h2>
            <ul>
                <li>ID:<strong>{info.id}</strong></li>
                <li>TITLE:<strong>{info.title}</strong></li>

            </ul>
        </div>
    )
}

export default LocationBoxInfo
