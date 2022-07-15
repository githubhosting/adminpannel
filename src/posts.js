import * as React from 'react';
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  DateField,
  ImageField,
  ImageInput,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  DeleteWithConfirmButton,
  RichTextField,
  ReferenceField,
  SelectInput,
  ReferenceInput,
  FileInput,
  FileField,
  ArrayInput,
  ReferenceArrayField,
  SimpleFormIterator,
  DateInput,
  ArrayField,
  SimpleList,
  SelectField,
  SingleFieldList,
  ChipField,
} from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';
import {
  FirebaseReferenceField,
  FirebaseReferenceInput,
} from './FirebaseReferenceFields';

// const PostFilter = (props) => (
//   <Filter {...props}>
//     <TextInput label="Search" source="title" alwaysOn />
//   </Filter>
// );

// const ReferenceFilter = (props) => (
//   <Filter {...props}>
//     <ReferenceInput
//       label="Organization"
//       source="user.id"
//       reference="users"
//       allowEmpty
//     >
//       <SelectInput optionText="name" />
//     </ReferenceInput>
//   </Filter>
// );

export const PostList = (props) => (
  <List
    {...props}
    // filters={<ReferenceFilter />}
    // filter={{ updatedby: "test@example.com" }}
  >
    <Datagrid rowClick="show">
      {/* <TextField source="id" /> */}
      <TextField source="Name" />
      {/* <TextField source="publishing_state" /> */}
      {/* <TextField source="updatedby" /> */}
      {/* <TextField source="createdby" /> */}
      {/* <RichTextField source="body" /> */}
      {/* <ReferenceField
        label="User Ref"
        source="user_ref.___refid"
        reference="Cooks"
      >
        <TextField source="Name" />
      </ReferenceField> */}

      {/* <ShowButton label="" /> */}
      <EditButton sx={{ fontWeight: 'bold' }} label="Edit" />
      <DeleteWithConfirmButton
        sx={{ fontWeight: 'bold' }}
        label="Delete"
        redirect={false}
      />
    </Datagrid>
  </List>
);

// const ConditionalEmailField = ({}) =>
//   record && record.hasEmail ? (
//     <EmailField source="email" record={record} {...rest} />
//   ) : null;
export const PostShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="Name" />
      <TextField source="Cloud" />
      {/* <TextField source="Cooks" /> */}
      {/* <TextField source="createdate" />
      <TextField source="lastupdate" />
      <TextField source="title" />
      <RichTextField source="body" /> */}

      {/* <ReferenceField label="User Id" source="user_id" reference="users">
        <TextField source="name" />
      </ReferenceField> */}

      <ReferenceField
        label="User Ref"
        source="user_ref.___refid"
        reference="Cooks"
      >
        <TextField source="Cooks" />
      </ReferenceField>
      {/* Or use the easier <FirebaseReferenceField> */}
      <FirebaseReferenceField
        label="User (Reference Doc)"
        source="user_ref"
        reference="Cooks"
      >
        <TextField source="Name" />
      </FirebaseReferenceField>

      <FileField
        source="files_multiple.src"
        title="files_multiple.title"
        multiple
      />
    </SimpleShowLayout>
  </Show>
);

export const ManagerShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField sx={{ fontWeight: 'bold' }} source="Name" />
      <TextField source="Cloud" />

      {/* <TextField source="Cooks" /> */}

      {/* <ReferenceArrayField label="Cooks Id" source="Cooks" reference="Cooks">
        
      </ReferenceArrayField> */}

      <ReferenceArrayField
        label="Cooks Assigned"
        reference="Cooks"
        source="Cooks"
      >
        <Datagrid rowClick="show" isRowSelectable={(record) => false}>
          {/* <TextField source="id" /> */}
          <TextField source="Name" />
          {/* <ShowButton label="Show" /> */}
        </Datagrid>
        {/* <SingleFieldList
          sx={{
            mt: 2,
            mb: 3,
          }}
        >
          <ChipField
            sx={{
              borderRadius: '0.5rem',
              boxShadow: '0 0 0.3rem rgba(0,0,0,0.1)',
            }}
            source="Name"
          />
        </SingleFieldList> */}
      </ReferenceArrayField>

      {/* Or use the easier <FirebaseReferenceField> */}
      {/* <FirebaseReferenceField
        label="User (Reference Doc)"
        source="user_ref"
        reference="Cooks"
      >
        <TextField source="Name" />
      </FirebaseReferenceField>

      <FileField
        source="files_multiple.src"
        title="files_multiple.title"
        multiple
      /> */}
    </SimpleShowLayout>
  </Show>
);

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      {/* <TextInput source="id" /> */}
      <TextInput source="Name" />
      {/* <RichTextInput source="body" /> */}
      {/* <DateInput source="date" parse={(val) => new Date(val)} /> */}
      {/* <ReferenceInput
        label="Cooks   Id"
        source="user_id"
        reference="Cooks"
        // filter={{ isAdmin: true }}
      >
        <SelectInput optionText="Name" />
      </ReferenceInput> */}

      {/* <ReferenceInput
        label="User Ref"
        source="user_ref.___refid"
        reference="users"
      >
        <SelectInput optionText="name" />
      </ReferenceInput> */}

      {/* Or use the easier <FirebaseReferenceInput> */}

      {/* <FirebaseReferenceInput
        label="User Ref (Firebase)"
        source="user_ref"
        reference="Users"
      >
        <SelectInput optionText="name" />
      </FirebaseReferenceInput> */}

      {/* <FileInput source="files_multiple" multiple label="Files with (multiple)">
        <FileField source="src" title="title" />
      </FileInput>
      <ArrayInput source="files">
        <SimpleFormIterator>
          <FileInput source="file" label="Array Form Files">
            <FileField source="src" title="title" />
          </FileInput>
        </SimpleFormIterator>
      </ArrayInput> */}

      <ArrayInput source="Cooks">
        <SimpleFormIterator>
          <ReferenceInput
            label="Cooks Id"
            // source="Cooks"
            reference="Cooks"
            // filter={{ isAdmin: true }}
          >
            <SelectInput optionText="Name" />
          </ReferenceInput>
          {/* <FileInput source="file" label="Array Form Files">
            <FileField source="src" title="title" />
          </FileInput> */}
        </SimpleFormIterator>
      </ArrayInput>

      {/* <ArrayInput source="sections.mySection.items" label="Section items">
        <SimpleFormIterator>
          <TextInput source="name" label="Name" />
          <ImageInput source="image" label="Image" accept="image/*">
            <ImageField source="src" title="title" />
          </ImageInput>
        </SimpleFormIterator>
      </ArrayInput> */}
    </SimpleForm>
  </Create>
);

export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <DateField source="createdate" />
      <DateField source="lastupdate" />
      <TextInput source="title" />
      <RichTextInput source="body" />
      <ReferenceInput
        label="User Id"
        source="user_id"
        reference="users"
        // filter={{ isAdmin: true }}
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput
        label="User Ref"
        source="user_ref.___refid"
        reference="users"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <FirebaseReferenceInput
        label="User Ref (Firebase)"
        source="user_ref"
        reference="users"
      >
        <SelectInput optionText="name" />
      </FirebaseReferenceInput>
      <FileInput source="files_multiple" multiple label="Files with (multiple)">
        <FileField source="src" title="title" />
      </FileInput>
      <ArrayInput source="files">
        <SimpleFormIterator>
          <FileInput source="file" label="Array Form Files">
            <FileField source="src" title="title" />
          </FileInput>
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="sections.mySection.items" label="Section items">
        <SimpleFormIterator>
          <TextInput source="name" label="Name" />
          <ImageInput source="image" label="Image" accept="image/*">
            <ImageField source="src" title="title" />
          </ImageInput>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);
