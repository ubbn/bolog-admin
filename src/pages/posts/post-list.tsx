import {
  Datagrid,
  List,
  ReferenceField,
  TextField,
  FunctionField,
  useRecordContext,
  EditButton,
  TextInput,
  ReferenceInput,
  BooleanField,
} from "react-admin";
import OgnooField from "../../common/OgnooField";

const PostPanel = () => {
  const record = useRecordContext();
  return (
    <div>
      <div>{record?.body}</div>
    </div>
  );
};

const PostList = () => {
  const postFilters = [
    <TextInput label="Search" source="q" key={0} alwaysOn />,
    <ReferenceInput source="userId" reference="users" key={1} />,
  ];

  return (
    <List filters={postFilters}>
      <Datagrid
        sx={{
          backgroundColor: "#fff",
          ".RaDatagrid-headerCell": {
            padding: "0.5em 1em",
            fontSize: "1.2em",
          },
        }}
        expand={<PostPanel />}
      >
        <TextField source="title" label="Title" />
        <FunctionField
          label="Excerpt"
          render={(record) => record.content?.substring(0, 30) + "..."}
        />
        <BooleanField source="visible" label="Published" />
        <OgnooField source="createdAt" label="Created" />
        <OgnooField source="updatedAt" label="Updated" />
        <OgnooField source="publishedAt" label="Published" />
        <ReferenceField source="companyId" reference="companies" />
        <EditButton label="Edit" />
      </Datagrid>
    </List>
  );
};

export default PostList;
