import Footer from "./Footer";
import NavBar from "./NavBar";
import ArchImg from "./assets/Architecture.jpg";
import IntImg from "./assets/Interior.jpg";
import LandImg from "./assets/Landscape.jpg";
import ConImg from "./assets/Construction.jpg";
import MoreImg from "./assets/More.jpg";

const Categories = () => {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-3 grid-rows-2 mt-36 m-32 gap-7">
        <div className="p-28 relative overflow-hidden">
          <img
            src={ArchImg}
            alt="Architecture"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center ">
            <h1 className="p-5 cursor-pointer text-white bg-sky-700 bg-opacity-60">
              Architecture
            </h1>
          </div>
        </div>
        <div className="p-28 relative overflow-hidden">
          <img
            src={IntImg}
            alt="Interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center ">
            <h1 className="p-5 cursor-pointer text-white bg-sky-700 bg-opacity-60">
              Interior
            </h1>
          </div>
        </div>
        <div className="p-28 bg-slate-200"></div>
        <div className="p-28 relative overflow-hidden">
          <img
            src={LandImg}
            alt="Landscape"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center ">
            <h1 className="p-5 cursor-pointer text-white bg-sky-700 bg-opacity-60">
              Landscape
            </h1>
          </div>
        </div>
        <div className="p-28 relative overflow-hidden">
          <img
            src={ConImg}
            alt="construction"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center ">
            <h1 className="p-5 cursor-pointer text-white bg-sky-700 bg-opacity-60">
              Construction
            </h1>
          </div>
        </div>
        <div className="p-28 relative overflow-hidden">
          <img
            src={MoreImg}
            alt="Additional"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center ">
            <h1 className="p-5 cursor-pointer text-white bg-sky-700 bg-opacity-60">
              More +
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Categories;
