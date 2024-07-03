import React from "react";
import { render } from "@testing-library/react";
import PostsListItem from "./PostsListItem";
import { ItemProps } from "../../interfaces/interfaces";

test("renders item title and body", () => {
  const item = {
    title: "Test Title",
    body: "This is a test body.",
  };

  const { getByText } = render(<PostsListItem item={item} />);

  const titleElement = getByText(/Test Title/i);
  const bodyElement = getByText(/This is a test body./i);

  expect(titleElement).toBeInTheDocument();
  expect(bodyElement).toBeInTheDocument();
});

test("renders correctly with no item", () => {
  const { container } = render(<PostsListItem item={null} />);

  expect(container).toBeInTheDocument();
});
