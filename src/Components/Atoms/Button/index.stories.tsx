import { MuiButton } from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "Button",
  component: MuiButton,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["text", "contained", "outlined"],
    },
    color: {
      control: { type: "select" },
      options: ["info", "primary", "success", "error", "warning"],
    },
    size: { control: { type: "radio" }, options: ["small", "medium", "large"] },
  },
} as ComponentMeta<typeof MuiButton>;

const template: ComponentStory<typeof MuiButton> = (args) => (
  <MuiButton {...args} />
);
export const MyButton = template.bind({});
MyButton.args = {
  variant: "contained",
  children: "sell",
  size: "small",
  color: "secondary",
  disabled: true,

};
