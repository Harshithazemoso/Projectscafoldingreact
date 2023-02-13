import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Image } from "./index";
import bitcoin from "../../../../public/Assets/Bitcoin.svg";
import ethereum from "../../../../public/Assets/Ethereum.svg";
import binance from "../../../../public/Assets/Binance.svg";
import signup from "../../../../public/Assets/Signup.svg";
import login from "../../../../public/Assets/Login.svg";
import graph from "../../../../public/Assets/Graph.svg";
export default {
  title: "Image",
  component: Image,
  argTypes: {
    src: {
      control: { type: "select" },
      options: [
        `${bitcoin}`,
        `${ethereum}`,
        `${binance}`,
        `${signup}`,
        `${login}`,
        `${graph}`,
      ],
    },
  },
} as ComponentMeta<typeof Image>;
const template: ComponentStory<typeof Image> = (args) => <Image {...args} />;
export const Bitcoin = template.bind({});
Bitcoin.args = {
  src: `${bitcoin}`,
  alt: "Bitcoin",
  width: "42px",
  height: "42px",
};
