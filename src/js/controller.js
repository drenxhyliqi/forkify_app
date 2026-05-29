const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

// API Call
// 1. To make an AJAX request to an API we use fetch
const showRecipe = async function () {
  try {
    const res = await fetch('https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886?key=42c9e48e-ee20-485a-9c6b-282fe7e6e88c')
    const data = await res.json();
  
    if (!res.ok) throw new Error(`${data.message} (${res.status})`)

    console.log(res, data);
    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingridients: recipe.ingridients
    }
    console.log(recipe);
  } catch (err) {
    alert(err)
  }
}

showRecipe()