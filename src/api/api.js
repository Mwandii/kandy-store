import { categories } from "../data/data";

const fetchCategories = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 800))

    return categories
  } catch (error) {
    console.error("fetchCategories failed:", error)
    throw error
  }
}

export default fetchCategories;