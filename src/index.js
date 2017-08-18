import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import configureStore from './store/configureStore';
import EmployeesContainer from './components/Employees/EmployeesContainer';
import EmployeeContainer from './components/Employee/EmployeeContainer';
import NewsContainer from './components/News/NewsContainer';
import PeopleContainer from './components/People/PeopleContainer';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={EmployeesContainer} />
        <Route path="Employee/(:id)" component={EmployeeContainer} />
        <Route path="/EmployeesContainer" component={EmployeesContainer} />
        <Route path="/News" component={NewsContainer} />
        <Route path="/People" component={PeopleContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// @TODO current router implementation does not support redux. Check out https://github.com/acdlite/redux-router

document.addEventListener(
  'deviceready',
  () => {
    console.log('device is ready');
  },
  false);

/*
* @TODO
* styles.css is injected as /styles.css. Find a way to make this relative.
* also the links to the font files.
* fix the lint issues, so the build doesn't fail.
* Or make it so that the build doesn't failt on lint issues
* Also, don't forget to re-enable the uglifyjs
* */
