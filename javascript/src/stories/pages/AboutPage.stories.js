import React from "react";
import { MemoryRouter } from "react-router-dom";

import AboutPage from "main/pages/AboutPage";

export default {
  title: "pages/AboutPage",
  component: AboutPage,
};

const Template = () => (
  <MemoryRouter>
    <AboutPage />
  </MemoryRouter>
);

export const Default = Template.bind({});
