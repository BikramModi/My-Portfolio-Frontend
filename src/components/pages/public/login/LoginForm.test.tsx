import {
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LoginForm from '@/components/pages/public/login/LoginForm';
import { useLogin } from '@/hooks/auth/useLogin';

jest.mock('@/hooks/auth/useLogin');

const mockMutate = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();

  (useLogin as jest.Mock).mockReturnValue({
    mutate: mockMutate,
    isPending: false,
    isError: false,
    error: null,
  });
});

describe('LoginForm', () => {
  it('renders all fields', () => {
    render(<LoginForm />);

    expect(
      screen.getByRole('heading', {
        name: /welcome back/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/email address/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/password/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: /^login$/i,
      })
    ).toBeInTheDocument();
  });

  it('toggles password visibility', async () => {
    const user = userEvent.setup();

    render(<LoginForm />);

    const passwordInput =
      screen.getByLabelText(/password/i);

    expect(passwordInput).toHaveAttribute(
      'type',
      'password'
    );

    const toggleButton = screen.getAllByRole('button')[0];

    await user.click(toggleButton);

    expect(passwordInput).toHaveAttribute(
      'type',
      'text'
    );

    const toggleButton1 = screen.getAllByRole('button')[0];

    await user.click(toggleButton1);

    expect(passwordInput).toHaveAttribute(
      'type',
      'password'
    );
  });

  it('calls mutate on valid submit', async () => {
    const user = userEvent.setup();

    render(<LoginForm />);

    await user.type(
      screen.getByLabelText(/email address/i),
      'john@example.com'
    );

    await user.type(
      screen.getByLabelText(/password/i),
      'Password123'
    );

    await user.click(
      screen.getByRole('button', {
        name: /^login$/i,
      })
    );

    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledWith({
        email: 'john@example.com',
        password: 'Password123',
      });
    });
  });

  it('shows API error message', () => {
    (useLogin as jest.Mock).mockReturnValue({
      mutate: mockMutate,
      isPending: false,
      isError: true,
      error: {
        response: {
          data: {
            message: 'Invalid credentials',
          },
        },
      },
    });

    render(<LoginForm />);

    expect(
      screen.getByText(/invalid credentials/i)
    ).toBeInTheDocument();
  });

  it('shows loading state', () => {
    (useLogin as jest.Mock).mockReturnValue({
      mutate: mockMutate,
      isPending: true,
      isError: false,
      error: null,
    });

    render(<LoginForm />);

    expect(
      screen.getByRole('button', {
        name: /logging in/i,
      })
    ).toBeDisabled();
  });
});