import StoreNavbar from '@/components/shared/Navbar';

export default function StoreLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <StoreNavbar />
      <main>{children}</main>
    </div>
  );
}
