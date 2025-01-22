import Footer from "../components/Footer";
import Header from "../components/Header";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}
