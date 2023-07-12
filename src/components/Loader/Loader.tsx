import ClipLoader from "react-spinners/ClipLoader";
import React from "react";
// import { colors } from '../../hqo-theme-provider/hqo-theme';
import styled from "styled-components";

interface Props {
  color?: string;
  testId?: string;
  size?: number | string;
}

const Wrapper = styled.div`
  line-height: 0;
`;

export const Loader: React.FC<Props> = ({
  color = "hotpink",
  size = 70,
  testId = "hqo-loader",
  ...rest
}: Props): JSX.Element => (
  <Wrapper data-testid={testId} data-cy="hqo-loader" {...rest}>
    <ClipLoader color={color} size={size} />
  </Wrapper>
);
