import * as React from 'react';
import {
  PostList,
  PostShow,
  PostCreate,
  PostEdit,
  ManagerShow,
  ManagerEdit,
} from './posts';

import {
  UserList,
  UserShow,
  UserCreate,
  UserEdit,
  UserList1,
  UserList7,
  UserLists,
  CookList,
  CookShow,
  MenuList,
  MenuShow,
  BlogList,
  BlogShow,
  CookCreate,
  CookEdit,
  MenuCreate,
  MenuEdit,
  BlogCreate,
  BlogEdit,
  CloudKitchenList,
  CloudKitchenShow,
  CloudKitchenCreate,
  CloudKitchenEdit,
} from './users';
import {
  CommentsList,
  CommentShow,
  CommentCreate,
  CommentEdit,
} from './comments';
import MyLayout from './MyLayout';
import {
  Admin,
  Resource,
  ShowGuesser,
  CustomRoutes,
  ListGuesser,
  EditGuesser,
} from 'react-admin';
import { Route } from 'react-router-dom';
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from 'react-admin-firebase';

import styles from './styles.css';
import firebase from 'firebase/compat/app';

import CustomerIcon from '@material-ui/icons/People';
import BlogIcon from '@material-ui/icons/Book';
import MenuIcon from '@material-ui/icons/Menu';
import UserIcon from '@material-ui/icons/Person';
import ManagerIcon from '@material-ui/icons/SupervisorAccount';
import CookIcon from '@material-ui/icons/Restaurant';
import SoupKitchenIcon from '@material-ui/icons/Kitchen';

import * as Posts from './posts';
import * as Users from './users';
import * as Comments from './comments';

import CustomLoginPage from './CustomLoginPage';
import EventMonitor from './EventMonitor';
import Dashboard from './Dashboard';
import Settings from './Settings';
import MyPage from './MyPage';
import CooksMenu from './CooksMenu';
// import Dashboard from './Dashboard_test';

// let firebaseConfig;
// try {
//   firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);
// } catch (error) {
//   console.error('Error parsing (maybe quotes aren\'t escaped?): ', {REACT_APP_FIREBASE_CONFIG: process.env.REACT_APP_FIREBASE_CONFIG}, error);
// }

import { firebaseConfig } from './FIREBASE_CONFIG';
import { defaultTheme, Layout, AppBar, ToggleThemeButton } from 'react-admin';
import { createTheme, Box, Typography } from '@mui/material';
const theme = {
  ...defaultTheme,
  palette: {
    mode: 'light',
  },
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

console.log({ firebaseConfig, firebaseApp });

// const authProvider = FirebaseAuthProvider(firebaseConfig);
const authProvider = {
  login: ({ username, password }) => {
    if (username !== 'admin@foodey.com' || password !== 'adminfoodey') {
      return Promise.reject();
    }
    localStorage.setItem('username', username);
    return Promise.resolve();
  },
  logout: () => {
    localStorage.removeItem('username');
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem('username') ? Promise.resolve() : Promise.reject(),
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  getIdentity: () =>
    Promise.resolve({
      id: 'user',
      fullName: 'Foodey Admin',
    }),
  getPermissions: () => Promise.resolve(''),
};

const dataProvider = FirebaseDataProvider(firebaseConfig, {
  logging: true,
  // rootRef: 'rootrefcollection/QQG2McwjR2Bohi9OwQzP',
  app: firebaseApp,
  // watch: ['posts'];
  // dontwatch: ['comments'];
  persistence: 'local',
  disableMeta: true,
  dontAddIdFieldToDoc: true,
  lazyLoading: {
    enabled: true,
  },
  firestoreCostsLogger: {
    enabled: true,
  },
});

class App extends React.Component {
  render() {
    return (
      <>
        <Admin
          title="Foodey Admin"
          dashboard={Dashboard}
          loginPage={CustomLoginPage}
          dataProvider={dataProvider}
          authProvider={authProvider}
          layout={MyLayout}
        >
          {/* <Resource
            name="Users"
            icon={UserIcon}
            list={UserList}
            show={UserShow}
            create={UserCreate}
            edit={UserEdit}
          /> */}

          <Resource
            name="Users"
            icon={UserIcon}
            list={UserList7}
            show={UserShow}
            create={UserCreate}
            edit={UserEdit}
          />
          <Resource
            name="Cooks"
            icon={CookIcon}
            list={CookList}
            show={CookShow}
            // show={ShowGuesser}
            create={CookCreate}
            edit={CookEdit}
          />

          <Resource
            name="customers"
            icon={CustomerIcon}
            list={UserList}
            show={ShowGuesser}
            // show={UserShow}
            create={UserCreate}
            edit={UserEdit}
          />
          <Resource
            name="Cloud_Kitchen"
            icon={SoupKitchenIcon}
            list={CloudKitchenList}
            show={CloudKitchenShow}
            create={CloudKitchenCreate}
            edit={CloudKitchenEdit}
          />
          <Resource
            name="Menu"
            icon={MenuIcon}
            list={MenuList}
            show={MenuShow}
            create={UserCreate}
            edit={UserEdit}
          />
          <Resource
            name="Blogs"
            icon={BlogIcon}
            list={BlogList}
            show={BlogShow}
            create={BlogCreate}
            edit={BlogEdit}
          />
          <Resource
            name="Managers"
            icon={ManagerIcon}
            list={PostList}
            show={ManagerShow}
            create={PostCreate}
            edit={ManagerEdit}
            // show={ShowGuesser}
            // edit={EditGuesser}
          />
          {/* <Resource
            name="Comments"
            icon={ManagerIcon}
            list={CommentsList}
            show={CommentShow}
            create={CommentCreate}
            edit={CommentEdit}
          /> */}

          <CustomRoutes>
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/CooksMenu" element={<CooksMenu />} />
          </CustomRoutes>
        </Admin>

        <EventMonitor />
      </>
    );
  }
}

export default App;
