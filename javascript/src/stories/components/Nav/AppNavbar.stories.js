import React from "react";
import { MemoryRouter } from "react-router-dom";

import AppNavbar from "main/components/Nav/AppNavbar";

export default {
  title: "components/Nav/AppNavbar",
  component: AppNavbar,
};

const Template = () => (
  <MemoryRouter>
    <AppNavbar />
  </MemoryRouter>
);

export const Default = Template.bind({});
