import React from 'react'
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const AlertProvider = props => {
  const { children } = props;
  const options = {
    timeout: 5000,
    position: positions.TOP_RIGHT
  };
  return (
    <Provider template={AlertTemplate} {...options}>
      {children}
    </Provider>
  )
}

export default AlertProvider