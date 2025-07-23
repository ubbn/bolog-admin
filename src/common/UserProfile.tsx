// UserProfile.tsx
import { Card, CardContent, Typography } from "@mui/material";
import { useGetIdentity } from "react-admin";

const UserProfile = () => {
  const { data: identity, isLoading } = useGetIdentity();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">User Profile</Typography>
        <Typography variant="body1">Name: {identity?.fullName}</Typography>
        <Typography variant="body1">Email: {identity?.email}</Typography>
        <Typography variant="body1">Role: {identity?.roles}</Typography>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
