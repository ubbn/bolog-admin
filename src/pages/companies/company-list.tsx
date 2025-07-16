import { Datagrid, List, TextField } from "react-admin";

const CompanyList = () => (
  <List>
    <Datagrid>
      <TextField source="name" label="Company Name" />
      <TextField source="email" label="Email" />
      <TextField source="website" label="Website" />
      <TextField source="phone" label="Phone" />
      <TextField source="address" label="Address" />
    </Datagrid>
  </List>
);

export default CompanyList;
