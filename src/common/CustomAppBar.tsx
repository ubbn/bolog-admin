// CustomAppBar.tsx
import { AppBar, Logout, UserMenu } from "react-admin";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PersonOutline } from "@mui/icons-material";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomUserMenu = (props: any) => {
  const navigate = useNavigate();
  return (
    <UserMenu {...props}>
      <MenuItem onClick={() => navigate("/profile")}>
        <ListItemIcon>
          <PersonOutline />
        </ListItemIcon>
        <ListItemText primary="My Profile" />
      </MenuItem>
      <Logout />
    </UserMenu>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomAppBar = (props: any) => {
  return <AppBar {...props} userMenu={<CustomUserMenu />} />;
};

export default CustomAppBar;
