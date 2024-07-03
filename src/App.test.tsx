import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import useGetList from "./hooks/useGetList";

jest.mock("./hooks/useGetList");

const mockedUseGetList = useGetList as jest.MockedFunction<typeof useGetList>;

beforeEach(() => {
  mockedUseGetList.mockImplementation((url: string) => {
    if (url === "https://jsonplaceholder.typicode.com/posts") {
      return {
        data: [
          { userId: 1, id: 1, title: "Test Title 1", body: "Test Body 1" },
          { userId: 2, id: 2, title: "Test Title 2", body: "Test Body 2" },
        ],
        status: "success",
      };
    } else if (url === "https://jsonplaceholder.typicode.com/users") {
      return {
        data: [
          { id: 1, name: "User 1" },
          { id: 2, name: "User 2" },
        ],
        status: "success",
      };
    } else {
      return { data: [], status: "success" };
    }
  });
});

test("renders FiltersSelect and PostsList components", () => {
  render(<App />);

  expect(screen.getByText(/Test Title 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Test Title 2/i)).toBeInTheDocument();
  expect(screen.getByRole("combobox")).toBeInTheDocument();
});

test("filters posts by userId", () => {
  render(<App />);

  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "1" },
  });

  expect(screen.getByText(/Test Title 1/i)).toBeInTheDocument();
  expect(screen.queryByText(/Test Title 2/i)).not.toBeInTheDocument();
});
