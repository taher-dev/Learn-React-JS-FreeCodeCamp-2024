const Main = () => {
  return (
    <main>
      <form className="ingredient-form">
        <label htmlFor="ingredient">Ingredient</label>
        <input
          id="ingredient"
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <button>Add Ingredient</button>
      </form>
    </main>
  );
};

export default Main;
