import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";

const MarketingPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center md:justify-start text-center gap-y-8 px-6">
      <Heading />
      <Heroes />
    </div>
  );
};

export default MarketingPage;
