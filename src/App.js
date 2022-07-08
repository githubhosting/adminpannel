import * as React from 'react';
import { PostList, PostShow, PostCreate, PostEdit, ManagerShow } from './posts';

import {
  UserList,
  UserShow,
  UserCreate,
  UserEdit,
  UserList1,
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
} from './users';
import {
  CommentsList,
  CommentShow,
  CommentCreate,
  CommentEdit,
} from './comments';
import MyLayout from './MyLayout';
import { Admin, Resource } from 'react-admin';
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
// import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';

import CommentIcon from '@material-ui/icons/Comment';

import * as Posts from './posts';
import * as Users from './users';
import * as Comments from './comments';

import CustomLoginPage from './CustomLoginPage';
import EventMonitor from './EventMonitor';
import Dashboard from './Dashboard';

// let firebaseConfig;
// try {
//   firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);
// } catch (error) {
//   console.error('Error parsing (maybe quotes aren\'t escaped?): ', {REACT_APP_FIREBASE_CONFIG: process.env.REACT_APP_FIREBASE_CONFIG}, error);
// }
import { firebaseConfig } from './FIREBASE_CONFIG';
// import { defaultTheme } from 'react-admin';
import { defaultTheme, Layout, AppBar, ToggleThemeButton } from 'react-admin';
import { createTheme, Box, Typography } from '@mui/material';
const theme = {
  ...defaultTheme,
  palette: {
    mode: 'dark', // Switching the dark mode on is a single property value change.
  },
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

console.log({ firebaseConfig, firebaseApp });

const authProvider = FirebaseAuthProvider(firebaseConfig);
const dataProvider = FirebaseDataProvider(firebaseConfig, {
  logging: true,
  // rootRef: 'rootrefcollection/QQG2McwjR2Bohi9OwQzP',
  app: firebaseApp,
  // watch: ['posts'];
  // dontwatch: ['comments'];
  persistence: 'local',
  // disableMeta: true
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
          // theme={theme}
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
            list={UserList1}
            show={UserShow}
            create={UserCreate}
            edit={UserEdit}
          />
          <Resource
            name="Cooks"
            icon={CookIcon}
            list={CookList}
            show={CookShow}
            create={CookCreate}
            edit={CookEdit}
          />

          <Resource
            name="customers"
            icon={CustomerIcon}
            list={UserList}
            show={UserShow}
            create={UserCreate}
            edit={UserEdit}
          />
          <Resource
            name="Cloud Kitchen"
            icon={SoupKitchenIcon}
            list={UserList}
            show={UserShow}
            create={UserCreate}
            edit={UserEdit}
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
            edit={PostEdit}
          />
          {/* <Resource
            name="Comments"
            icon={ManagerIcon}
            list={CommentsList}
            show={CommentShow}
            create={CommentCreate}
            edit={CommentEdit}
          /> */}
        </Admin>
        <EventMonitor />
      </>
    );
  }
}

export default App;
