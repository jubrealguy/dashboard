import BodySection from "./BodySection"
import PropTypes from "prop-types";
import './BodySectionWithMarginBottom.css'

const BodySectionWithMarginBottom = (props) => {
    return (
        <div className="BodySectionWithMargin">
            <BodySection {...props} />
        </div>
    )
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  };

export default BodySectionWithMarginBottom