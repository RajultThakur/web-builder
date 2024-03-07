import InfoComponent from "./components/Info";
import ToolOptions from "./components/ToolOptions";
import Card from "./components/card";
import SpecialCard from "./components/card/SpecialCard";
import Hosting from "./components/hosting";
import Navbar from "./components/navbar";
import { CheckCircle2, Info } from 'lucide-react';
import buildersData from "./data/data";
import RecommendationCard from "./components/recommendation";
import Footer from "./components/footer";
import SignUp from "./components/signup";
function App () {
  return (
    <div className="w-full">
      <Navbar />
      <div className="xl:px-[284px] md:px-[10%] max-md:px-[20px] ">
        <div className="h-full">
          <p className="text-[24px] lg:text-[48px] md:text-[36px] text-[#2C384A]">
            Best Website builders in the US
          </p>
          <div className="flex flex-row max-sm:flex-col text-[14px] min-h-[44px] max-h-max border-b-[1px] border-t-[1px] items-center max-sm:items-start justify-between">
            <div className="flex flex-row max-sm:flex-col my-4 gap-3">
              <InfoComponent Icon={<CheckCircle2 />} title="Last Updated - February 22, 2020" />
              <InfoComponent Icon={<Info />} title="Advertising Disclosure" />
            </div>
            <div>
              <select className="outline-none" name="cars" id="cars">
                <option value="Top Relevant">Top Relevant</option>
              </select>
            </div>
          </div>
        </div>
        <ToolOptions />
        <Hosting />
        <div className="flex flex-col gap-2">
          {buildersData.map((data, idx) => {
            return data !== undefined && (
              <Card key={idx} data={data} />
            )
          })}
          <SpecialCard />
        </div>
        <div>
          <p className="text-[32px] h-[44px] text-[#2C384A]">
            Related deals you might like for
          </p>
          <div className="flex items-center justify-between max-md:justify-center flex-wrap w-full">
            <RecommendationCard />
            <RecommendationCard />
            <RecommendationCard />
          </div>
        </div>
        <SignUp/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
