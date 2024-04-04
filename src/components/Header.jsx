import logo from "../assets/logo.png";
import moment from "moment";

function Header() {
  return (
    <>
      <div className="mt-12 text-center space-y-3">
        <img className="mx-auto" src={logo} alt="" />
        <h2 className="text-[18px] ">Journalism Without Fear or Favour</h2>
        <h2 className="text-xl font-semibold">
          {moment().format("dddd, MMMM D ,YYYY")}
        </h2>
      </div>
    </>
  );
}

export default Header;
