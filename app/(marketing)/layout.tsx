import Footer from "./_components/footer";
import NavBar from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-[#1f1f1f]">
      <NavBar />
      <main className="grow flex items-center justify-center">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
