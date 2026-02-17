import { useNavigate } from "react-router-dom";

function CategoriesCard({ name, itemCount, image, slug }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/categories/${slug}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group relative flex flex-col w-full aspect-3/4 rounded-2xl bg-white shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >
      
      {/* Image section with gradient overlay */}
      <div className="relative h-2/3 w-full overflow-hidden">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt={name}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Text section */}
      <div className="h-1/3 flex flex-col justify-center items-center gap-1 px-3 py-3 bg-white">
        <p className="text-sm md:text-base font-semibold text-gray-900 text-center line-clamp-1 group-hover:text-orange-600 transition-colors duration-200">
          {name}
        </p>
        <p className="text-xs md:text-sm text-gray-500 font-medium">
          {itemCount}
        </p>
      </div>

      {/* Subtle shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </div>
  );
}

export default CategoriesCard;