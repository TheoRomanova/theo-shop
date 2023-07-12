import React from "react";
import { Loader } from "./Loader";

// import { colors } from '../../hqo-theme-provider/hqo-theme';

export default {
  component: Loader,
  title: "Atoms/Loader",
};

export const Default = (): JSX.Element => <Loader />;

export const CustomLoader = (): JSX.Element => (
  <Loader size={100} color={"yellow"} />
);
