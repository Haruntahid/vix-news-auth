import { IoBookmarkOutline } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { IoEyeSharp } from "react-icons/io5";

function HomeCenter() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-5">Dragon News Home</h2>
      <div className="border">
        <div className="bg-[#F3F3F3] p-5 flex justify-between items-center">
          <div>
            <img src="" alt="" />
            <p className="font-semibold">Awlad Hossain</p>
            <p className="text-sm">2022-08-21</p>
          </div>
          <div className="flex gap-3">
            <Link>
              <IoBookmarkOutline size={25} />
            </Link>
            <Link>
              <CiShare2 size={25} />
            </Link>
          </div>
        </div>
        <div className="p-5">
          <p className="text-xl font-bold hover:underline hover:cursor-pointer mb-5">
            Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
            Aid Package Yet
          </p>

          <figure>
            <img
              className="rounded-md"
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt=""
            />
          </figure>
          <div className="">
            <p className="mt-8 text-[#706F6F]">
              Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
              Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
              United States, Worthy News (Worthy News) – U.S. President Joe
              Biden has announced nearly $3 billion in new U.S. military a...
              Read More!
            </p>
            <div className="divider"></div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <div className="flex">
                  <TiStarFullOutline className="text-yellow-500" size={22} />
                  <TiStarFullOutline className="text-yellow-500" size={22} />
                  <TiStarFullOutline className="text-yellow-500" size={22} />
                  <TiStarFullOutline className="text-yellow-500" size={22} />
                  <TiStarHalfOutline className="text-yellow-500" size={22} />
                </div>
                <p>4.5</p>
              </div>
              <div className="flex gap-2">
                <IoEyeSharp size={25} />
                <p>499</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCenter;
