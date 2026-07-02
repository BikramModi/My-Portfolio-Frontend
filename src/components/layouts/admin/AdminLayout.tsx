import Header from './Header';
import Footer from './Footer';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-10">
        {children}
      </main>

      <Footer />
    </>
  );
}
