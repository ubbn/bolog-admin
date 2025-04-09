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
} from "react-admin";

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
        <TextField source="id" />
        <TextField source="title" label="Post Title" />
        <FunctionField
          label="Excerpt"
          render={(record) => record.body.substring(0, 50) + "..."}
        />
        <ReferenceField source="userId" reference="users" />
        <EditButton label="Edit" />
      </Datagrid>
    </List>
  );
};

export default PostList;
