import { Show, SimpleShowLayout, TextField } from "react-admin";

const OwnerShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="email" />
    </SimpleShowLayout>
  </Show>
);

export default OwnerShow;
