import { Create, required, SimpleForm, TextInput } from "react-admin";

const CompanyCreate = () => (
  <Create
    transform={(data) => ({
      ...data,
      ownerId: "6",
    })}
  >
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
