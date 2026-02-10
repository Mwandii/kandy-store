function CategoriesCard( { name, itemCount, image} ) {
  return (
    <div
  className="
    flex flex-col
    w-36 h-56              
    sm:w-40 sm:h-60        
    md:w-44 md:h-64        
    rounded-2xl
    bg-white
    shadow-2xl
    my-6 mx-3
    overflow-hidden
    transition-transform
    duration-200
    hover:scale-[1.02]
  "
>
  
  {/* Image section */}
  <div className="h-2/3 w-full">
    <img
      className="h-full w-full object-cover"
      src={image}
      alt={name}
    />
  </div>

  {/* Text section */}
  <div className="h-1/3 flex flex-col justify-center items-center gap-1 px-2">
    <p className="text-sm sm:text-base font-medium text-gray-900">
      {name}
    </p>
    <p className="text-xs sm:text-sm text-gray-500">
      {itemCount}
    </p>
  </div>

</div>
  )
}

export default CategoriesCard;