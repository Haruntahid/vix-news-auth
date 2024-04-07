import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import swimming from "../assets/qZone1.png";
import classImg from "../assets/qZone2.png";
import playGround from "../assets/qZone3.png";

function HomeRight() {
  return (
    <>
      <div>
        {/* login part */}
        <div>
          <h2 className="text-2xl font-semibold mb-5">Login With</h2>
          <div className="mt-5 space-y-4">
            <button className="w-full text-blue-400 border border-blue-500 rounded-lg py-2 flex items-center gap-2 justify-center">
              <FaGoogle size={20} /> Login with Google
            </button>
            <button className="w-full text-[#171515] border border-black rounded-lg py-2 flex items-center gap-2 justify-center">
              <FaGithub size={20} /> Login with Github
            </button>
          </div>
        </div>
        {/* social links */}
        <div className="my-9">
          <h2 className="text-2xl font-semibold mb-5">Find Us On</h2>
          <div className="mt-5">
            <button className="w-full text-[#706F6F] border border-[#E7E7E7] rounded-t-lg py-6 pl-10 text-xl flex items-center gap-5 justify-start font-semibold">
              <IoLogoFacebook className="text-blue-600" size={30} /> Facebook
            </button>
            <button className="w-full text-[#706F6F]  border-x  py-6 pl-10 text-xl flex items-center gap-5 justify-start font-semibold">
              <FaTwitter className="text-blue-400" size={30} /> Twitter
            </button>
            <button className="w-full text-[#706F6F] border border-[#E7E7E7] rounded-b-lg py-6 pl-10 text-xl flex items-center gap-5 justify-start font-semibold">
              <FaInstagram className="text-[#cd486b]" size={30} /> Instagram
            </button>
          </div>
        </div>
        {/* q zone */}
        <div className="bg-[#F3F3F3] p-5">
          <h2 className="text-2xl font-semibold mb-7">Q-Zone</h2>
          <div className="space-y-10">
            <img className="w-full" src={swimming} alt="" />
            <img className="w-full" src={classImg} alt="" />
            <img className="w-full" src={playGround} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeRight;
