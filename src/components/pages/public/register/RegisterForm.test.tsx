import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RegisterForm from '@/components/pages/public/register/RegisterForm';
import { useRegister } from '@/hooks/auth/useRegister';

jest.mock('@/hooks/auth/useRegister');

const mockMutate = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();

  (useRegister as jest.Mock).mockReturnValue({
    mutate: mockMutate,
    isPending: false,
    isError: false,
    error: null,
  });
});

describe('RegisterForm', () => {
  it('renders the form', () => {
    render(<RegisterForm />);

    expect(
      screen.getByRole('heading', {
        name: /create account/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/full name/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/email address/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/^password$/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/confirm password/i)
    ).toBeInTheDocument();
  });

  it('toggles password visibility', async () => {
    const user = userEvent.setup();

    render(<RegisterForm />);

    const password =
      screen.getByLabelText(/^password$/i);

    expect(password).toHaveAttribute(
      'type',
      'password'
    );

    const buttons = screen.getAllByRole('button', {
      name: '',
    });

    await user.click(buttons[0]);

    expect(password).toHaveAttribute(
      'type',
      'text'
    );
  });

  it('submits valid form data', async () => {
    const user = userEvent.setup();

    render(<RegisterForm />);

    await user.type(
      screen.getByLabelText(/full name/i),
      'John Doe'
    );

    await user.type(
      screen.getByLabelText(/email address/i),
      'john@example.com'
    );

    await user.type(
      screen.getByLabelText(/^password$/i),
      'Password123'
    );

    await user.type(
      screen.getByLabelText(/confirm password/i),
      'Password123'
    );

    await user.click(
      screen.getByRole('button', {
        name: /create account/i,
      })
    );

    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'Password123',
      });
    });
  });

  it('shows api error', () => {
    (useRegister as jest.Mock).mockReturnValue({
      mutate: mockMutate,
      isPending: false,
      isError: true,
      error: {
        response: {
          data: {
            errors: [
              {
                path: 'email',
                msg: 'This email has already been taken',
              },
            ],
          },
        },
      },
    });

    render(<RegisterForm />);

    expect(
      screen.getByText(/already been taken/i)
    ).toBeInTheDocument();
  });

  it('shows loading state', () => {
    (useRegister as jest.Mock).mockReturnValue({
      mutate: mockMutate,
      isPending: true,
      isError: false,
      error: null,
    });

    render(<RegisterForm />);

    expect(
      screen.getByRole('button', {
        name: /registering/i,
      })
    ).toBeDisabled();
  });
});