import {
  BooleanInput,
  DateTimeInput,
  Edit,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const PostEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="companyId" reference="companies">
        <SelectInput validate={required()} />
      </ReferenceInput>
      <TextInput source="title" validate={required()} />
      <BooleanInput source="visible" label="Published" />
      <TextInput source="content" multiline rows={10} validate={required()} />
      <DateTimeInput source="publishedAt" />
    </SimpleForm>
  </Edit>
);

export default PostEdit;
