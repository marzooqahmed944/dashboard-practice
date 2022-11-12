import clsx from "clsx";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddNew = () => {
  return (
    <div className={clsx("flex", "flex-col")}>
      <p className={clsx("mb-2", "text-primary-blue", "text-sm")}>Add new</p>
      <div
        className={clsx(
          "bg-primary-blue",
          "rounded-full",
          "flex",
          "justify-center",
          "p-4",
          "w-max",
          "cursor-pointer"
        )}
      >
        <p className={clsx("text-2xl")}>+</p>
      </div>
    </div>
  );
};

export default AddNew;
