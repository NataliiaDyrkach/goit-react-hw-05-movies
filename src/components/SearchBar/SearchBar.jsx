import { useLocation, useNavigate } from "react-router-dom";
import css from './SearchBar.module.css'

function SearchBar() {
    const location = useLocation();
  const navigate = useNavigate();

  function onSubmitForm(event) {
    event.preventDefault();
    const value = event.target.elements.query.value;

    navigate({
      ...location,
      search: `query=${value}`,
    });
  }

  return (
    <div className={css.Container}>
      <form className={css.Form} onSubmit={onSubmitForm}>
        <input className={css.Input} type="text" name="query" />
        <button className={css.Button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;