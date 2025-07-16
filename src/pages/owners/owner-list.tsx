import { Datagrid, List, TextField } from "react-admin";

const OwnerList = () => (
  <List>
    <Datagrid>
      <TextField source="name" label="Owner Name" />
      <TextField source="email" label="Email" />
    </Datagrid>
  </List>
);

export default OwnerList;
