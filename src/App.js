import * as React from 'react';
import { PostList, PostShow, PostCreate, PostEdit } from './posts';
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
  CookEdit, MenuCreate, MenuEdit, BlogCreate, BlogEdit
} from './users';
import { Admin, Resource } from 'react-admin';
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from 'react-admin-firebase';

import firebase from 'firebase/compat/app';

import UserIcon from '@material-ui/icons/People';
import CommentIcon from '@material-ui/icons/Comment';

import * as Posts from './posts';
import * as Users from './users';
import * as Comments from './comments';

import CustomLoginPage from './CustomLoginPage';
import EventMonitor from './EventMonitor';

// let firebaseConfig;
// try {
//   firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);
// } catch (error) {
//   console.error('Error parsing (maybe quotes aren\'t escaped?): ', {REACT_APP_FIREBASE_CONFIG: process.env.REACT_APP_FIREBASE_CONFIG}, error);
// }
import { firebaseConfig } from './FIREBASE_CONFIG';

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
          loginPage={CustomLoginPage}
          dataProvider={dataProvider}
          authProvider={authProvider}
        >
          <Resource
            name="Managers"
            list={PostList}
            show={PostShow}
            create={PostCreate}
            edit={PostEdit}
          />
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
            icon={UserIcon}
            list={CookList}
            show={CookShow}
            create={CookCreate}
            edit={CookEdit}
          />

          <Resource
            name="customers"
            icon={UserIcon}
            list={UserList}
            show={UserShow}
            create={UserCreate}
            edit={UserEdit}
          />
          <Resource
            name="Cloud Kitchen"
            icon={UserIcon}
            list={UserList}
            show={UserShow}
            create={UserCreate}
            edit={UserEdit}
          />
          <Resource
            name="Menu"
            icon={UserIcon}
            list={MenuList}
            show={MenuShow}
            create={UserCreate}
            edit={UserEdit}
          />
          <Resource
            name="Blogs"
            icon={UserIcon}
            list={BlogList}
            show={BlogShow}
            create={BlogCreate}
            edit={BlogEdit}
          />
        </Admin>
        <EventMonitor />
      </>
    );
  }
}

export default App;
