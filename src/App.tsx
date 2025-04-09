import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import PostList from "./pages/posts/post-list";
import UserList from "./pages/users/user-list";
import PostShow from "./pages/posts/post-show";
import UserShow from "./pages/users/user-show";
import PostEdit from "./pages/posts/post-edit";
import PostCreate from "./pages/posts/post-create";
import { Article, PersonPin } from "@mui/icons-material";
import { HomePage } from "./pages/homepage";
import { authProvider } from "./authProvider";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    dashboard={HomePage}
    authProvider={authProvider}
  >
    <Resource
      name="posts"
      list={PostList}
      show={PostShow}
      edit={PostEdit}
      create={PostCreate}
      icon={Article}
    />
    <Resource name="users" list={UserList} show={UserShow} icon={PersonPin} />
  </Admin>
);
