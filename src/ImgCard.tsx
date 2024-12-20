import mainImg from "./assets/Main Image.jpeg";

const ImgCard = () => {
  return (
    <div className="relative">
      <img
        src={mainImg}
        alt="Main Image"
        className="mt-14 w-full h-96 object-cover"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-slate-50  bg-sky-700 bg-opacity-40 rounded-xl p-10 hover:bg-orange-600 hover:bg-opacity-40">
        <h2 className="text-2xl text-white">Elevate Your Space</h2>
        <form action="#" className="p-5">
          <input
            type="text"
            placeholder="   search...   "
            className="rounded-2xl opacity-80"
          />
        </form>
      </div>
    </div>
  );
};

export default ImgCard;
