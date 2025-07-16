import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import PostList from "./pages/posts/post-list";
import PostShow from "./pages/posts/post-show";
import PostEdit from "./pages/posts/post-edit";
import PostCreate from "./pages/posts/post-create";
import { PersonPin, Business, RssFeed } from "@mui/icons-material";
import { HomePage } from "./pages/homepage";
import { authProvider } from "./authProvider";
import CompanyList from "./pages/companies/company-list";
import CompanyShow from "./pages/companies/company-show";
import CompanyCreate from "./pages/companies/company-create";
import CompanyEdit from "./pages/companies/company-edit";
import OwnerCreate from "./pages/owners/owner-create";
import OwnerEdit from "./pages/owners/owner-edit";
import OwnerList from "./pages/owners/owner-list";
import OwnerShow from "./pages/owners/owner-show";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    dashboard={HomePage}
    authProvider={authProvider}
  >
    <Resource
      name="owners"
      create={OwnerCreate}
      edit={OwnerEdit}
      list={OwnerList}
      show={OwnerShow}
      icon={PersonPin}
    />
    <Resource
      name="companies"
      create={CompanyCreate}
      edit={CompanyEdit}
      list={CompanyList}
      show={CompanyShow}
      icon={Business}
    />
    <Resource
      name="posts"
      list={PostList}
      show={PostShow}
      edit={PostEdit}
      create={PostCreate}
      icon={RssFeed}
    />
  </Admin>
);
