import { useGlobalContext } from "./context";

export const SearchForm = () =>
{
    const { setSearchTerm } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();

        const searchValue = e.target.elements.search.value;

        if(!searchValue)return;
        setSearchTerm(searchValue);
    }

    return (
        <section>
            <h1 className="title">Image Explorer</h1>

            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" className="form-input search-input" name="search" placeholder="Ex: cat"/>
                <button className="btn" type="submit">Search</button>
            </form>
        </section>
    );
}