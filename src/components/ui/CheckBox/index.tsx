import clsx from "clsx";
import { CheckBoxProps } from "./interface";

const CheckBox = ({
  color,
  bgcolor,
  text,
  checked,
  toggleChecked,
}: CheckBoxProps) => {
  return (
    <div
      className={clsx(
        `bg-${bgcolor}`,
        `text-${color}`,
        "w-full",
        "py-2",
        "px-4",
        "flex",
        "justify-between",
        "font-medium",
        "rounded-full",
      )}
      onClick={toggleChecked}
    >
      {text}
      <input type="checkbox" checked={checked} />
    </div>
  );
};

export default CheckBox;
