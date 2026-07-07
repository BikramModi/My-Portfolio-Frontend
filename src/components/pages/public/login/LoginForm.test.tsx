import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { useLogin } from "@/hooks/useLogin";

jest.mock("@/hooks/useLogin");

const mockMutate = jest.fn();

describe("LoginForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useLogin as jest.Mock).mockReturnValue({
      mutate: mockMutate,
      isPending: false,
      isError: false,
    });
  });

  it("renders the login form", () => {
    render(<LoginForm />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /login/i })
    ).toBeInTheDocument();
  });

  it("shows validation errors when submitting an empty form", async () => {
    render(<LoginForm />);

    fireEvent.click(
      screen.getByRole("button", { name: /login/i })
    );

    expect(
      await screen.findByText("Please enter a valid email address")
    ).toBeInTheDocument();

    expect(
      await screen.findByText("Password is required")
    ).toBeInTheDocument();
  });

  it("calls mutate with valid login data", async () => {
    render(<LoginForm />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: {
        value: "john@example.com",
      },
    });

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: {
        value: "Password123!",
      },
    });

    fireEvent.click(
      screen.getByRole("button", { name: /login/i })
    );

    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledWith({
        email: "john@example.com",
        password: "Password123!",
      });
    });
  });

  it("disables the button while logging in", () => {
    (useLogin as jest.Mock).mockReturnValue({
      mutate: jest.fn(),
      isPending: true,
      isError: false,
    });

    render(<LoginForm />);

    expect(
      screen.getByRole("button", {
        name: /logging in/i,
      })
    ).toBeDisabled();
  });

  it("shows an error message when login fails", () => {
    (useLogin as jest.Mock).mockReturnValue({
      mutate: jest.fn(),
      isPending: false,
      isError: true,
    });

    render(<LoginForm />);

    expect(
      screen.getByText("Login failed.")
    ).toBeInTheDocument();
  });
});