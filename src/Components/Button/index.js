import React from "react";
import { Button } from "antd";

const SmallButton = ({ name, disabled, loading }) => {
  return (
    <Button
      disabled={disabled}
      laoding={loading}
      className="app__button"
      size="large"
    >
      Nominate
    </Button>
  );
};

export default SmallButton;
