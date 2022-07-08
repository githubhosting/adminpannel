// in src/User.js
import * as React from 'react';
import styles from './styles.css';
import useMediaQuery from '@mui/material/useMediaQuery';
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
  DeleteWithConfirmButton,
  Toolbar,
  SaveButton,
  useRecordContext,
  ImageField,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  AutocompleteInput,
  DateField,
  DateInput,
  RichTextField,
  NumberField,
  NumberInput,
  BooleanField,
  BooleanInput,
  SimpleList,
  ReferenceArrayInput,
  ArrayField,
  ImageInput,
} from 'react-admin';
import {
  RichTextInput,
  ArrayInput,
  SimpleFormIterator,
  FileInput,
  FileField,
} from 'ra-input-rich-text';

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
  </Filter>
);
// ......
// Users Section
// ......

export const UserList = (props) => (
  <List {...props} filters={<UserFilter />}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="age" />
      <TextField source="createdate" />
      <TextField source="lastupdate" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton
        confirmContent="You will not be able to recover this record. Are you sure?"
        // translateOptions={{ name: record.name }}
        label=""
        redirect={false}
      />
    </Datagrid>
  </List>
);
export const UserShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <BooleanField source="isAdmin" />
      <BooleanField source="isManager.isManager" />
      <BooleanField source="isManager.Manager" />
      <BooleanField source="isContent" />
    </SimpleShowLayout>
  </Show>
);
export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="phone" />
      <TextInput source="email" />
      <BooleanInput source="isAdmin" />
      <BooleanInput source="isManager.isManager" />
      <BooleanInput source="isContent" />
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
      <TextInput source="phone" />
      <TextInput source="email" />
      <BooleanInput source="isAdmin" />
      <BooleanInput source="isManager.isManager" />
      <BooleanInput source="isContent" />
    </SimpleForm>
  </Edit>
);

// ......................
// Blog Section
// ......................

export const BlogList = (props) => (
  <List {...props} filters={<UserFilter />}>
    <Datagrid>
      <TextField source="Author" />
      <TextField source="Timestamp" />
      {/* <TextField source="createdate" /> */}
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteWithConfirmButton label="" redirect={false} />
    </Datagrid>
  </List>
);
export const BlogShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout >
      <TextField source="id" />
      <TextField source="Author" />
      <ImageField source="Image" />
      <TextField source="Heading" />
      <RichTextField source="Content" />
      <DateField source="Timestamp" />
      <TextField source="lastupdate" />
    </SimpleShowLayout>
  </Show>
);
export const BlogEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="Author" />
      {/* <ImageInput source="Image" /> */}
      <TextInput source="Heading" />
      <RichTextInput source="Content" />
      <DateInput source="Timestamp" />
    </SimpleForm>
  </Edit>
);
export const BlogCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      {/* <TextInput disabled source="id" /> */}
      <TextInput source="Author" />
      <TextInput source="Heading" />
      <RichTextInput source="Content" />
      <DateInput source="Timestamp" />
    </SimpleForm>
  </Create>
);

// ......................
// Menu Section
// ......................

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
      <DeleteWithConfirmButton label="" redirect={false} />
    </Datagrid>
  </List>
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

export const UserList1 = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const record = useRecordContext();
  return (
    <List {...props} filters={<UserFilter />}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => `Email: ${record.email}`}
          tertiaryText={(record) => `Phone: ${record.phone}`}
          linkType={(record) => (record.canEdit ? 'edit' : 'show')}
        />
      ) : (
        <Datagrid>
          <TextField source="name" />
          <TextField source="email" />
          <TextField source="phone" />
          {/* <TextField source="lastupdate" /> */}
          <ShowButton label="" />
          <EditButton label="" />
          <DeleteWithConfirmButton
            confirmContent="You will not be able to recover this record. Are you sure?"
            label=""
            translateOptions={(record) => record.name}
            redirect={false}
          />
        </Datagrid>
      )}
    </List>
  );
};

// ...........
// Cook Section
// ...........

export const CookList = (props) => (
  <List {...props} filters={<UserFilter />}>
    <Datagrid>
      <TextField source="Name" />
      <TextField source="Region" />
      <TextField source="State" />
      <NumberField source="Ratings" />
      {/* <TextField source="lastupdate" /> */}
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteWithConfirmButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const CookShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="Name" />
      <TextField source="Cloud" />
      <NumberField source="Ratings" />
      <TextField source="Region" />
      <TextField source="State" />
      <TextField source="Speciality" />
      <TextField source="Year_Of_Experience" />
      {/* <TextField source="isAdmin" /> */}
    </SimpleShowLayout>
  </Show>
);
export const CookCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="Name" />
      <TextInput source="Cloud" />
      <NumberInput source="Ratings" />
      <TextInput source="Region" />
      <TextInput source="State" />
      <TextInput source="Speciality" />
      <NumberInput source="Year_Of_Experience" />
    </SimpleForm>
  </Create>
);
export const CookEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput disabled source="createdate" />
      <TextInput disabled source="lastupdate" />
      <TextInput source="Name" />
      <TextInput source="Cloud" />
      <NumberInput source="Ratings" />
      <TextInput source="Region" />
      <TextInput source="State" />
      <TextInput source="Speciality" />
      <NumberInput source="Year_Of_Experience" />
    </SimpleForm>
  </Edit>
);
export const UserCreated = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="age" />
    </SimpleForm>
  </Create>
);
