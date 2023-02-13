import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MuiAvatar } from "./index";
import Profile1 from "../../../../public/Assets/Profile.svg";
export default {
  title: "Avatar",
  component: MuiAvatar,
  argTypes: {
    src: {
      control: { type: "select" },
      options: [`${Profile1}`],
    },
  },
} as ComponentMeta<typeof MuiAvatar>;
const template: ComponentStory<typeof MuiAvatar> = (args) => (
  <MuiAvatar {...args} />
);
export const Profile = template.bind({});
export const Avatars = template.bind({});
Profile.args = {
  src: `${Profile1}`,
  variant: "square",
  sx: { width: "65px", height: "65px" },
};
Avatars.args = {
  children: "N",
  variant: "square",
  sx: { width: "65px", height: "65px", backgroundColor: "red" },
};
