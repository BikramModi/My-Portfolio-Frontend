export default function Footer() {
  return (
    <footer className="mt-auto border-t">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} My Portfolio
        </p>

        <div className="flex gap-4">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
}