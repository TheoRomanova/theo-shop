import "./styles.scss";
import React from "react";
import { useState, useEffect } from "react";

export const ErrorAlert = ({ message }: any) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 10000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  if (!show) {
    return null;
  }

  return <div className="error-alert">{<h1>{message}</h1>}</div>;
};
