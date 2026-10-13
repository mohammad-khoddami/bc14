export default function SearchInput() {
    function handleSearch(event) {
        const value = event.target.value;
        if (value !== "") {
            console.log(value);
        }
    }

    return (
        <div>
            <input
                className="border rounded-sm"
                onChange={(e) => handleSearch(e)}
            />
        </div>
    );
}
