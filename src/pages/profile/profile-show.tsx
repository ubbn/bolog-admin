import {
  EditButton,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
  useGetOne,
} from "react-admin";

const ProfileActions = () => (
  <TopToolbar>
    <EditButton resource="/profile" record={{ id: "me" }} />
  </TopToolbar>
);

const ProfileShow = () => {
  const { isLoading } = useGetOne("profile", { id: "me" });

  if (isLoading) return <p>Loading...</p>;

  return (
    <Show
      resource="profile"
      id="me"
      title="My Profile"
      actions={<ProfileActions />}
    >
      <SimpleShowLayout>
        <TextField source="username" />
        <TextField source="email" />
        <TextField source="roles" />
      </SimpleShowLayout>
    </Show>
  );
};

export default ProfileShow;
