import React from 'react'
import './Notification.css'
import close from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'
import NotificationItem from './NotificationItem'
import PropTypes from 'prop-types'

const Notification = ({displayDrawer = true}) => {
    return (
        <>
        <div>
            <p>Your notifications</p>
        </div>
        {displayDrawer ?
        <div className='notifications'>
            <div className='notifications-panel'>
                <p>Here is the list of notifications</p>
                <ul>
                    <NotificationItem type='default' value='New course available' />
                    <NotificationItem type='urgent' value='New resume avaialable'/>
                    <NotificationItem type='urgent' html={getLatestNotification()} />
                </ul>
            </div>
            <button 
            aria-label='Close' 
            onClick={() => console.log("Close button has been clicked")}
            style={{border: 'none', background: 'none'}}>
                <img src={close} alt='' style={{width: '1rem'}} />
            </button>
        </div> : null}
        </>
    )
}

Notification.propTypes = {
    displayDrawer: PropTypes.bool
}

export default Notification