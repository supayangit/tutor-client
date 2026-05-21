import Footer from "@/app/components/shared/Footer";

export default function HomeLayout({ children }) {
  return (
    <main className="">
      {children}
      <Footer />
    </main>
  );
}
