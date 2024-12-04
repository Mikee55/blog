import Architecture from "./iconComponenets/Architecture";
import Interior from "./iconComponenets/Interior";
import Landscape from "./iconComponenets/Landscape";
import Construction from "./iconComponenets/Construction";
import Additional from "./iconComponenets/Additional";

const SlideCat = () => {
  return (
    <div className="flex justify-evenly bg-gray-100">
      <div className="p-8">
        <div className="">
          <Architecture className="h-32 fill-red-600" />
        </div>
        <span className="flex justify-center">Architecture</span>
      </div>
      <div className="p-8">
        <Interior className="h-32 stroke-red-600" />
        <span className="flex justify-center">Interior</span>
      </div>
      <div className="p-8">
        <Landscape className="h-32 stroke-red-600" />
        <span className="flex justify-center">Landscape</span>
      </div>
      <div className="p-8">
        <Construction className="h-32 stroke-red-600" />
        <span className="flex justify-center">Construction</span>
      </div>
      <div className="p-8">
        <Additional className="h-32 stroke-red-600" />
        <span className="flex justify-center">Additional</span>
      </div>

      <hr />
    </div>
  );
};

export default SlideCat;
