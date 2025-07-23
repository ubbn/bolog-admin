import { Create, required, SimpleForm, TextInput } from "react-admin";

const CompanyCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="email" validate={required()} />
      <TextInput source="website" validate={required()} />
      <TextInput source="phone" />
      <TextInput source="address" />
    </SimpleForm>
  </Create>
);

export default CompanyCreate;
