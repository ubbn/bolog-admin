import {
  BooleanField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import OgnooField from "../../common/OgnooField";

const PostShow = () => (
  <Show>
    <SimpleShowLayout>
      <ReferenceField source="companyId" reference="companies" />
      <TextField source="title" />
      <BooleanField source="visible" label="Published?" />
      <TextField source="content" />
      <OgnooField source="publishedAt" label="Published" />
      <OgnooField source="createdAt" label="Created" />
      <OgnooField source="updatedAt" label="Updated" />
    </SimpleShowLayout>
  </Show>
);

export default PostShow;
