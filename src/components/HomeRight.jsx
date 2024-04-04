import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function HomeRight() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold mb-5">Login With</h2>
        <div className="mt-5 space-y-4">
          <button className="w-full text-blue-400 border border-blue-500 rounded-lg py-2 flex items-center gap-2 justify-center">
            <FaGoogle size={20} /> Login with Google
          </button>
          <button className="w-full text-[##171515] border border-black rounded-lg py-2 flex items-center gap-2 justify-center">
            <FaGithub size={20} /> Login with Github
          </button>
        </div>
      </div>
    </>
  );
}

export default HomeRight;
