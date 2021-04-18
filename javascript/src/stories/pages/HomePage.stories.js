import React from "react";
import { MemoryRouter } from "react-router-dom";

import HomePage from "main/pages/HomePage";

export default {
  title: "pages/HomePage",
  component: HomePage,
};

const Template = () => (
  <MemoryRouter>
    <HomePage />
  </MemoryRouter>
);

export const Default = Template.bind({});
