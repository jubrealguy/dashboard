import React from 'react'
import './Notification.css'
import close from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'

const Notification = () => {
    return (
        <div className='notifications'>
            <div className='notifications-panel'>
                <p>Here is the list of notifications</p>
                <ul>
                    <li data='default'>New course available</li>
                    <li data='urgent'>New resume available</li>
                    <li data='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
                </ul>
            </div>
            <button 
            aria-label='Close' 
            onClick={() => console.log("Close button has been clicked")}
            style={{border: 'none', background: 'none'}}>
                <img src={close} alt='' style={{width: '1rem'}} />
            </button>
        </div>
    )
}

export default Notification