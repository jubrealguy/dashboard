import React from 'react';
import './App.css'
import Notification from '../Notifications/Notification'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

function App({isLoggedIn = true}) {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  const listNotifications = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume avaialable'},
    {id: 3, type: 'urgent', html: getLatestNotification()}
  ]

  return (
    <React.Fragment>
      <Notification listNotifications={listNotifications} />
      <div className="App">
        <Header />
        <main className='App-body'>
          {isLoggedIn ? (
          <BodySectionWithMarginBottom title='Course List'>
            <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>) : (
          <BodySectionWithMarginBottom title='Course List'>
            <Login />
          </BodySectionWithMarginBottom>)}
        </main>
        <Footer />
      </div>
    </React.Fragment>
)}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
}

export default App;
