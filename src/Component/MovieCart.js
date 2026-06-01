import { IMG_CDN } from "../utils/constant";

const MovieCart = ({ posterPath }) => {
  return (
    <div className="w-44 pr-4">
      <img alt="Movie Card" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCart;
