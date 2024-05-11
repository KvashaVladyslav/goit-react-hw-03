import { useId } from "react"

export default function SearchBox({ value, onFilter }) {

    const filterInputId = useId();

    return (
        <div>
            <label htmlFor={filterInputId}>Find contacts by name
                <input id={filterInputId} value={value} onChange={(e) => onFilter(e.target.value)} type="text" />
            </label>
            
        </div>
    )
}