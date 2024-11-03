import React from "react";
import { useFormikContext } from "formik";
import AppButton from "./AppButton";

function SubmitButton({ title, btnStyle }) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      title={title}
      btnStyle={btnStyle}
      handlePress={handleSubmit}
      color="primary"
    />
  );
}

export default SubmitButton;
