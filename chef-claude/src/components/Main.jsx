const Main = () => {
  const ingredients = [];
  const ingredientsListItem = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  const ingredientsSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");
    if (newIngredient && !ingredients.includes(newIngredient)) {
      ingredients.push(newIngredient);
    }
    e.currentTarget.reset();
    console.log(ingredients);
  };

  return (
    <main>
      <form onSubmit={ingredientsSubmit} className="ingredient-form">
        <label htmlFor="ingredient">Ingredient</label>
        <input
          id="ingredient"
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>

      <ul>{ingredientsListItem}</ul>
    </main>
  );
};

export default Main;
