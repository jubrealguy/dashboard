import PropTypes from 'prop-types'

const NotificationItem = ({ type = 'default', html, value }) => {
    return (
        <>
            {type && value ? <li data-notification-type= {type}>{value}</li> : null}
            {html ? <li data-urgent dangerouslySetInnerHTML={{__html:html}}></li> : null}
        </>
    )
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    __html: PropTypes.shape({
      html: PropTypes.string,
    }),
  };

export default NotificationItem