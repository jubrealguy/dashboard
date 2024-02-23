import React from 'react'
import './Notification.css'
import close from '../assets/close-icon.png'
import NotificationItem from './NotificationItem'
import PropTypes from 'prop-types'
import NotificationItemShape from './NotificationItemShape'

const Notification = ({displayDrawer = true, listNotifications}) => {
    return (
        <React.Fragment>
        <div className='menuItem'>
            <p>Your notifications</p>
        </div>
        {displayDrawer ?
        <div className='notifications'>
            <div className='notifications-panel'>
                <p>Here is the list of notifications</p>
                <ul>
                    {
                        listNotifications && listNotifications.length > 0 ? (
                            listNotifications.map(({id, html, type, value}) => 
                                <NotificationItem key={id} type={type} html={html} value={value} />
                            )
                        ) : (
                            <NotificationItem value='No new notification for now' />
                        )
                    }
                </ul>
            </div>
            <button 
            aria-label='Close' 
            onClick={() => console.log("Close button has been clicked")}
            style={{border: 'none', background: 'none'}}>
                <img src={close} alt='' style={{width: '1rem'}} />
            </button>
        </div> : null}
        </React.Fragment>
    )
}

Notification.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

export default Notification