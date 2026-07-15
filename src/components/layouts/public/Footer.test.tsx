
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "./Footer";
import { toast } from "react-toastify";

jest.mock("react-toastify", () => ({
  toast: {
    info: jest.fn(),
  },
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Footer", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the brand information", () => {
    render(<Footer />);

    expect(screen.getByText("Bikram Modi")).toBeInTheDocument();

    expect(
      screen.getByText(/Full Stack Developer passionate/i)
    ).toBeInTheDocument();
  });

  it("renders all quick links", () => {
    render(<Footer />);

    expect(screen.getByText("Quick Links")).toBeInTheDocument();

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders the email address", () => {
    render(<Footer />);

    const email = screen.getByRole("link", {
      name: /bikrammodi132@gmail.com/i,
    });

    expect(email).toBeInTheDocument();
    expect(email).toHaveAttribute(
      "href",
      "mailto:bikrammodi132@gmail.com"
    );
  });

  it("renders all social media links", () => {
    render(<Footer />);

    expect(
      screen.getByRole("link", {
        name: /github/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /linkedin/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /x \(coming soon\)/i,
      })
    ).toBeInTheDocument();
  });

  it("shows the current year", () => {
    render(<Footer />);

    expect(
      screen.getByText(
        new RegExp(`${new Date().getFullYear()}`)
      )
    ).toBeInTheDocument();
  });

  it("shows toast when X button is clicked", () => {
    render(<Footer />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /x \(coming soon\)/i,
      })
    );

    expect(toast.info).toHaveBeenCalledWith("Coming Soon!");
  });

  it("scrolls to the top when Back to Top is clicked", () => {
    window.scrollTo = jest.fn();

    render(<Footer />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /back to top/i,
      })
    );

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });
});



