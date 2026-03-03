import { Navbar } from "@/components/site/MainNavbar";

const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default WebsiteLayout;
