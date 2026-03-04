import { Navbar } from "@/components/site/MainNavbar";
import Footer from "@/components/site/Footer";

const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default WebsiteLayout;
