import type { ReactNode } from "react";
import { Layout as RALayout, CheckForApplicationUpdate } from "react-admin";
import CustomAppBar from "./CustomAppBar";

export const Layout = ({ children }: { children: ReactNode }) => (
  <RALayout appBar={CustomAppBar}>
    {children}
    <CheckForApplicationUpdate />
  </RALayout>
);
