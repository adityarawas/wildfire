import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const LocationMarker = ({ lat,lng,onClick }) => {
    return (
        <div className='locationMarker' onClick={onClick}>
            <Icon icon={locationIcon} className='locationIcon' />
        </div>
    )
}

export default LocationMarker
