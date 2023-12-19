import { useState } from "react";

export default function FilterButton() {
    const [filter, setFilter] = useState("")
    const [value, setValue] = useState("")

    return(
        <div className="rounded full flex items-center justify-between bg-neutral-500">
            <div>filter</div>
            <div>x</div>
        </div>
    );
}