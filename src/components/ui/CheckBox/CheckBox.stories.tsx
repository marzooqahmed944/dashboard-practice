import React from "react";
import CheckBox from "./";
import { ComponentMeta } from "@storybook/react";
import { CheckBoxProps } from "./interface";

export default {
  title: "CheckBox",
  component: CheckBox,
  argTypes: {
    text_color: {
      type: "select",
      options: ["primary-black", "primary-blue"],
    },
    background_color: {
      type: "select",
      options: ["white", "primary-light_blue"],
    },
    text: { control: "text" },
  },
} as ComponentMeta<typeof CheckBox>;

export const Primary = (args: CheckBoxProps) => {
  const [checked, setChecked] = React.useState(false);
  const toggleChecked = () => setChecked((prev) => !prev);
  return (
    <CheckBox
      {...args}
      text={"Prepare Figma Designs"}
      checked={checked}
      toggleChecked={toggleChecked}
    />
  );
};
