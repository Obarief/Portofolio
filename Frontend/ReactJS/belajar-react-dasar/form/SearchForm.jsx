export default function SearchForm(){
    return(
        <form>
            <input type="text" />
            <button onClick={(e) => {
                e.preventDefault();
                alert('you click this shi..')
            }}>
                Search
            </button>
        </form>
    )
}