import React from "react";

export const CheckboxCustom = () => {
  return (
    <div className="form-control">
      <label className="cursor-pointer label">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox checkbox-accent "
          id="check"
        />
      </label>
    </div>
  );
};
