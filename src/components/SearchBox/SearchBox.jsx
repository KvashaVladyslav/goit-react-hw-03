export default function SearchBox({value, onFilter}) {
    return (
        <div>
            <label htmlFor="">Find contacts by name
                <input value={value} onChange={(e) => onFilter(e.target.value)} type="text" />
            </label>
            
        </div>
    )
}