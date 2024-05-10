import CourseListRow from "./CourseListRow"
import './CourseList.css'
import PropTypes from 'prop-types'
import CourseShape from "./CourseShape"

const CourseList = ({listCourses}) => {
    return (
        <table id='Courselist'>
            <thead>
                <CourseListRow textFirstCell='Available courses' textSecondCell={null} />
                <CourseListRow textFirstCell='Course name' textSecondCell='Credit' />
            </thead>
            <tbody>
                {
                    listCourses.length > 0 ? (
                        listCourses.map(({id, name, credit}) => 
                        <CourseListRow key={id} isHeader={false} textFirstCell={name} textSecondCell={credit} />)
                    ): (
                        <CourseListRow textFirstCell="No course available yet" />
                    )
                }
                </tbody>
        </table>
    )
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
  };

export default CourseList