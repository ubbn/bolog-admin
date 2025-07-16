import { Edit, required, SimpleForm, TextInput } from "react-admin";

const OwnerEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="email" validate={required()} />
    </SimpleForm>
  </Edit>
);

export default OwnerEdit;
