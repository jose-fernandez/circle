import React from 'react';
import { Provider } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
import configureStore from './store/configureStore';
import EmployeeContainerNative from './components/Employees/EmployeesContainerNative';
import EmployeeCardNative from './components/Employee/EmployeeCardNative';
import NewsContainerNative from './components/News/NewsContainerNative';
import NewsItemNative from './components/News/NewsItemNative';
import Drawer from 'react-native-drawer';
import SideMenu from './components/ReactNativeComponents/sideMenu';


const store = configureStore();

const styles = {
  drawer: {
    top: 73,
    borderWidth: 0.5,
    borderColor: '#bce8f1',
    borderRadius: 3,
    backgroundColor: 'white',
  },
};

const App = () =>
  <Provider store={store}>
    <Drawer
      styles={styles}
      type="overlay"
      content={<SideMenu />}
      tapToClose
      openDrawerOffset={0.2} // 20% gap on the right side of drawer
      closedDrawerOffset={-3}
    >
      <Router>
        <Scene key="root" >
          <Scene key="employees" title="Employees" type="reset" >
            <Scene
              key="employeesContainer"
              component={EmployeeContainerNative}
              title="Employees List"
              initial
            />
            <Scene
              key="employee"
              component={EmployeeCardNative}
              title="Employee Card"
            />
          </Scene>
          <Scene key="news" title="News" type="reset">
            <Scene
              key="newsContainer"
              component={NewsContainerNative}
              title="News"
            />
            <Scene
              key="newsDetail"
              component={NewsItemNative}
              title="News Details"
            />
          </Scene>
          <Scene
            key="moreNews"
            component={NewsContainerNative}
            title="More News"
            type="reset"
          />
          <Scene
            key="circle"
            component={EmployeeContainerNative}
            title="Circle"
            // hideNavBar
            type="reset"
          />
        </Scene>
      </Router>
    </Drawer>
  </Provider>
;

export default App;
