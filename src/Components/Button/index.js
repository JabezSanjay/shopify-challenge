import React from "react";
import { Button } from "antd";

const SmallButton = ({ name, disabled, loading }) => {
  return (
    <Button disabled={disabled} laoding={loading}>
      Hey
    </Button>
  );
};

export default SmallButton;
