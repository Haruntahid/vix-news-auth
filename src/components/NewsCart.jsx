import { IoBookmarkOutline } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { IoEyeSharp } from "react-icons/io5";

import PropTypes from "prop-types";

function NewsCart({ news }) {
  const { rating, total_view, author, details, image_url } = news;
  return (
    <>
      <div className="border">
        <div className="bg-[#F3F3F3] p-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img className="w-12 h-12 rounded-full" src={author.img} alt="" />
            <div>
              <p className="font-semibold">{author.name}</p>
              <p className="text-sm">2022-08-21</p>
            </div>
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
            <img className="rounded-md" src={image_url} alt="" />
          </figure>
          <div className="">
            <p className="mt-8 text-[#706F6F]">{details}</p>
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
                <p>{rating.number}</p>
              </div>
              <div className="flex gap-2">
                <IoEyeSharp size={25} />
                <p>{total_view}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

NewsCart.propTypes = {
  news: PropTypes.object,
};

export default NewsCart;
