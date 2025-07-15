import {
  BooleanInput,
  Create,
  DateTimeInput,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="companyId" reference="companies">
        <SelectInput validate={required()} />
      </ReferenceInput>
      <TextInput source="title" validate={required()} />
      <BooleanInput source="visible" />
      <TextInput source="content" multiline rows={10} validate={required()} />
      <DateTimeInput source="publishedAt" />
    </SimpleForm>
  </Create>
);

export default PostCreate;
