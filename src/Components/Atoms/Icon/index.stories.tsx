import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icon } from "./index";
import Eye1 from "../../../../public/Assets/Eye.svg";
import Chart1 from "../../../../public/Assets/Chart.svg";
import Google1 from "../../../../public/Assets/Google.svg";
import Fb1 from "../../../../public/Assets/Facebook.svg";
import Ms1 from "../../../../public/Assets/Microsoft.svg";
import Grid1 from "../../../../public/Assets/Grid.svg";
export default {
  title: "Icon",
  component: Icon,
  argTypes: {
    path: {
      control: { type: "select" },
      options: [
        `${Eye1}`,
        `${Chart1}`,
        `${Grid1}`,
        `${Fb1}`,
        `${Ms1}`,
        `${Grid1}`,
        `${Google1}`,
      ],
    },
  },
} as ComponentMeta<typeof Icon>;
const template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;
export const Eye = template.bind({});
Eye.args = {
  path: `${Eye1}`,
  width: "20px",
  height: "20px",
};
