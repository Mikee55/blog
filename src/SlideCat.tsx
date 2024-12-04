import Construction from "./iconComponenets/Construction";

const SlideCat = () => {
  return (
    <div className="flex bg-gray-100">
      <div>
        <img src="" alt="Archiecture" />
        <span>Architecture</span>
      </div>
      <div>
        <img src="" alt="Interior" />
        <span>Interior</span>
      </div>
      <div>
        <img src="" alt="Landscape" />

        <span>Landscape</span>
      </div>
      <div></div>
      <div>
        <img src="" alt="Construction" />
        <Construction />
        <span>Construction</span>
      </div>
      <div>
        <img src="" alt="Additional" />
        <span>Additional</span>
      </div>

      <hr />
    </div>
  );
};

export default SlideCat;
