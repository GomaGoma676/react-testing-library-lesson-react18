import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ClickRender from "./ClickRender";

describe("User Event test", () => {
  it("Should increment by 1 per click", async () => {
    render(<ClickRender />);
    expect(screen.getByRole("heading")).toHaveTextContent(0);
    await userEvent.click(screen.getByText("Click"));
    await userEvent.click(screen.getByText("Click"));
    expect(screen.getByRole("heading")).toHaveTextContent(2);
  });
});
