import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";
import { usePathname } from "next/navigation";

// ---------------- Mock next/navigation ----------------

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

// ---------------- Mock next/link ----------------

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Header", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (usePathname as jest.Mock).mockReturnValue("/");
  });

  test("renders logo", () => {
    render(<Header />);

    expect(screen.getByText(/bikram modi/i)).toBeInTheDocument();
    expect(screen.getByText(/full stack developer/i)).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(<Header />);

    expect(screen.getAllByText("Home")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Projects")[0]).toBeInTheDocument();
    expect(screen.getAllByText("About")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Contact")[0]).toBeInTheDocument();
  });

  test("renders Hire Me button", () => {
    render(<Header />);

    expect(screen.getAllByText(/hire me/i)[0]).toBeInTheDocument();
  });

  test("highlights active navigation link", () => {
    (usePathname as jest.Mock).mockReturnValue("/projects");

    render(<Header />);

    const projectLinks = screen.getAllByRole("link", {
      name: /projects/i,
    });

    expect(
      projectLinks.some((link) => link.className.includes("text-blue-600"))
    ).toBe(true);
  });

  test("opens mobile menu", async () => {
    const user = userEvent.setup();

    render(<Header />);

    const menuButton = screen.getByRole("button", {
      name: /toggle menu/i,
    });

    await user.click(menuButton);

    expect(screen.getAllByText("Projects")).toHaveLength(2);
  });

  test("closes mobile menu after clicking navigation link", async () => {
    const user = userEvent.setup();

    render(<Header />);

    const menuButton = screen.getByRole("button", {
      name: /toggle menu/i,
    });

    await user.click(menuButton);

    const projectLinks = screen.getAllByRole("link", {
      name: /projects/i,
    });

    await user.click(projectLinks[1]);

    expect(screen.getAllByText("Projects")).toHaveLength(1);
  });
});