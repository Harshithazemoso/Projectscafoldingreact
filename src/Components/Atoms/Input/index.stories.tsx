import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./index";
import React from "react";
export default {
  title: "Input",
  component: Input,
  argTypes: {
    variant: {
      control: {
        type: "radio",
      },
      options: ["outlined", "filled", "standard"],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium"],
    },
    color: {
      type: { type: "select" },
      options: ["primary", "secondary", "success", "error", "info", "warning"],
    },
  },
};
const template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
export const Inputs = template.bind({});
Inputs.args = {
  label: "Reset Password",
  color: "primary",
  sx: { width: "100px", height: "100px" },
  focused: false,
};
