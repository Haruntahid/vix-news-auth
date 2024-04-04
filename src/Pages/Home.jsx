import Header from "../components/Header";
import Marquee from "react-fast-marquee";
import Navbar from "../components/Navbar";
import HomeLeft from "../components/HomeLeft";
import HomeCenter from "../components/HomeCenter";
import HomeRight from "../components/HomeRight";

function Home() {
  return (
    <>
      <Header />
      <div className="bg-[#F3F3F3] py-3 px-6 my-9 flex">
        <button className="text-white px-4 py-2 bg-[#D72050] font-semibold rounded-sm">
          Latest
        </button>
        <Marquee
          style={{ cursor: "pointer" }}
          speed={120}
          pauseOnHover={true}
          gradient={true}
          gradientColor="#F3F3F3"
        >
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      <Navbar />
      <div className="grid grid-cols-4 gap-6">
        <HomeLeft />
        <div className="col-span-2">
          <HomeCenter />
        </div>
        <HomeRight />
      </div>
    </>
  );
}

export default Home;
