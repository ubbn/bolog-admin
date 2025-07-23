/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { Edit, SimpleForm, TextInput, useGetOne, useUpdate } from "react-admin";

const ProfileEdit = () => {
  const { isLoading } = useGetOne("profile", { id: "me" });
  const [update] = useUpdate();

  if (isLoading) return <p>Loading...</p>;

  return (
    <Edit resource="profile" id="me" title="Edit My Profile">
      <SimpleForm onSubmit={(data: any) => update("profile", { id: "me", data })}>
        <TextInput source="username" disabled />
        <TextInput source="email" />
        {/* Add other editable fields here */}
      </SimpleForm>
    </Edit>
  );
};

export default ProfileEdit;
