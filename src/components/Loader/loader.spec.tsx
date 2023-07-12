import { Loader } from "./Loader";
import { render } from "@testing-library/react";

describe("Loader", (): void => {
  it("renders successfully", (): void => {
    const { queryByTestId } = render(<Loader size={50} />);

    expect(queryByTestId("hqo-loader")).toBeVisible();
  });
});
