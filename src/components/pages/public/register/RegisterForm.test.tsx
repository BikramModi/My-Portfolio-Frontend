import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RegisterForm from "./RegisterForm";
import { useRegister } from "../../../../hooks/useRegister";

jest.mock("../../../../hooks/useRegister");

const mockMutate = jest.fn();

describe("RegisterForm", () => {
    beforeEach(() => {
        jest.clearAllMocks();

        (useRegister as jest.Mock).mockReturnValue({
            mutate: mockMutate,
            isPending: false,
            isError: false,
        });
    });

    it("renders all form fields", () => {
        render(<RegisterForm />);

        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();

        expect(
            screen.getByRole("button", { name: /register/i })
        ).toBeInTheDocument();
    });

    it("shows validation errors when submitting an empty form", async () => {
        render(<RegisterForm />);

        fireEvent.click(
            screen.getByRole("button", { name: /register/i })
        );

        expect(
            await screen.findByText("Name must be at least 3 characters")
        ).toBeInTheDocument();

        expect(
            await screen.findByText("Please enter a valid email address")
        ).toBeInTheDocument();

        expect(
            await screen.findByText("Password must be at least 8 characters")
        ).toBeInTheDocument();

        expect(
            await screen.findByText("Please confirm your password")
        ).toBeInTheDocument();
    });

    it("calls mutate with valid form data", async () => {
        render(<RegisterForm />);

        fireEvent.change(screen.getByLabelText(/name/i), {
            target: { value: "John Doe" },
        });

        fireEvent.change(screen.getByLabelText(/email/i), {
            target: { value: "john@example.com" },
        });

        fireEvent.change(screen.getByLabelText(/^password$/i), {
            target: { value: "Password123!" },
        });

        fireEvent.change(screen.getByLabelText(/confirm password/i), {
            target: { value: "Password123!" },
        });

        fireEvent.click(
            screen.getByRole("button", { name: /register/i })
        );

        await waitFor(() => {
            expect(mockMutate).toHaveBeenCalledWith({
                name: "John Doe",
                email: "john@example.com",
                password: "Password123!",
            });
        });
    });

    it("shows loading state", () => {
        (useRegister as jest.Mock).mockReturnValue({
            mutate: jest.fn(),
            isPending: true,
            isError: false,
        });

        render(<RegisterForm />);

        expect(
            screen.getByRole("button", {
                name: /registering/i,
            })
        ).toBeDisabled();
    });

    it("shows error message when registration fails", () => {
        (useRegister as jest.Mock).mockReturnValue({
            mutate: jest.fn(),
            isPending: false,
            isError: true,
        });

        render(<RegisterForm />);

        expect(
            screen.getByText(/registration failed/i)
        ).toBeInTheDocument();
    });
});