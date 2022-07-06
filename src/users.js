// in src/User.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  ImageField,
} from "react-admin";

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
  </Filter>
);

export const UserList = (props) => (
  <List {...props} filters={<UserFilter />}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="age" />
      <TextField source="createdate" />
      <TextField source="lastupdate" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false}/>
    </Datagrid>
  </List>
);
export const BlogList = (props) => (
  <List {...props} filters={<UserFilter />}>
    <Datagrid>
      <TextField source="Author" />
      <TextField source="Timestamp" />
      <TextField source="createdate" />
      <TextField source="lastupdate" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false}/>
    </Datagrid>
  </List>
);
export const MenuList = (props) => (
  <List {...props} filters={<UserFilter />}>
    <Datagrid>
    <TextField source="id" />

    <TextField source="Dal" />
      <TextField source="Non-Veg-Curry" />
      <TextField source="Rice" />
      <TextField source="Roti" />
      <TextField source="createdate" />
      <TextField source="lastupdate" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false}/>
    </Datagrid>
  </List>
);
export const UserList1 = (props) => (
  <List {...props} filters={<UserFilter />}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="phone" />
      {/* <TextField source="lastupdate" /> */}
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false}/>
    </Datagrid>
  </List>
);

export const CookList = (props) => (
  <List {...props} filters={<UserFilter />}>
    <Datagrid>
      <TextField source="Name" />
      <TextField source="Region" />
      <TextField source="State" />
      <TextField source="Ratings" />

      {/* <TextField source="lastupdate" /> */}
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false}/>
    </Datagrid>
  </List>
);

export const UserShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="isAdmin" />
      <TextField source="isManager.isManager" />
      <TextField source="isManager.Manager" />
      <TextField source="isContent" />

    </SimpleShowLayout>
  </Show>
);
export const BlogShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="Author" />
      <ImageField source="Image" />
      <TextField source="Heading" />
      <TextField source="Content" />
      <TextField source="Timestamp" />
    </SimpleShowLayout>
  </Show>
);
export const MenuShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="isAdmin" />

    </SimpleShowLayout>
  </Show>
);
export const CookShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="Name" />
      <TextField source="Cloud" />
      <TextField source="Ratings" />
      <TextField source="Region" />
      <TextField source="State" />
      <TextField source="Speciality" />
      <TextField source="Year_Of_Experience" />
      
      {/* <TextField source="isAdmin" /> */}

    </SimpleShowLayout>
  </Show>
);

export const UserCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="age" />
    </SimpleForm>
  </Create>
);

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput disabled source="createdate" />
      <TextInput disabled source="lastupdate" />
      <TextInput source="name" />
      <TextInput source="age" />
    </SimpleForm>
  </Edit>
);
