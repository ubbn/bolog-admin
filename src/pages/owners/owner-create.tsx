import { Create, required, SimpleForm, TextInput } from "react-admin";

const OwnerCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="email" validate={required()} />
    </SimpleForm>
  </Create>
);

export default OwnerCreate;
