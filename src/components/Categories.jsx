import { useEffect, useState } from "react";

function CategoriesSection() {
  
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const categories = async () => {
      try {
        const data = await categories()
      }
    }
  })

  return (
    <>
      <section className="my-6 py-6">
      <div className="flex flex-col gap-4 items-center text-center">
      <p className="text-orange-500 text-sm uppercase">Explore Collection</p>
      <h1 className="text-5xl font-bold text-gray-900">Shop By <span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Category</span></h1>
      <p className="text-gray-500">Discover premium baby products curated by category for your convinience</p>
      </div>
      </section>
      <div>

      </div>
      </>
  );
}

export default CategoriesSection;