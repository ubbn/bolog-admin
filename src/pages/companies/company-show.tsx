import { Show, SimpleShowLayout, TextField } from "react-admin";

const CompanyShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="website" />
      <TextField source="phone" />
      <TextField source="address" />
    </SimpleShowLayout>
  </Show>
);

export default CompanyShow;
