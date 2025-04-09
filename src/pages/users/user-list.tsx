import { Datagrid, List, TextField } from "react-admin";

const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" label="Post Title" />
      <TextField source="email" label="Post Title" />
      <TextField source="phone" label="Post Title" />
    </Datagrid>
  </List>
);

export default UserList;
