import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import PostList from "./pages/posts/post-list";
import PostShow from "./pages/posts/post-show";
import PostEdit from "./pages/posts/post-edit";
import PostCreate from "./pages/posts/post-create";
import { Article, PersonPin } from "@mui/icons-material";
import { HomePage } from "./pages/homepage";
import { authProvider } from "./authProvider";
import CompanyList from "./pages/companies/company-list";
import CompanyShow from "./pages/companies/company-show";
import CompanyCreate from "./pages/companies/company-create";
import CompanyEdit from "./pages/companies/company-edit";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    dashboard={HomePage}
    authProvider={authProvider}
  >
    <Resource
      name="companies"
      create={CompanyCreate}
      edit={CompanyEdit}
      list={CompanyList}
      show={CompanyShow}
      icon={PersonPin}
    />
    <Resource
      name="posts"
      list={PostList}
      show={PostShow}
      edit={PostEdit}
      create={PostCreate}
      icon={Article}
    />
  </Admin>
);
