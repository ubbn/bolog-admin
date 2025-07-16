import { Edit, required, SimpleForm, TextInput } from "react-admin";

const CompanyEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="email" validate={required()} />
      <TextInput source="website" validate={required()} />
      <TextInput source="phone" />
      <TextInput source="address" />
    </SimpleForm>
  </Edit>
);

export default CompanyEdit;
