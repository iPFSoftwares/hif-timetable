import { useEffect, useState } from "react";
import SelectActivity from "./SelectActivity";

function ActivityPicker({activity, searchQuery, onSearchQueryChange = () => {}, onChange}){
    const [value, setValue] = useState(activity);
    useEffect(() => {
        if(value && value !== activity)
            onChange(value);
    }, [value]);

    return (
        <>
            { value && (        
                <div className="flex items-center px-2 rounded bg-gray-200 bg-opacity-25 border border-gray-300" style={{height: "34px"}}>
                    <span className="ml-2 text-sm">{value.title}</span>

                    <button className="ml-auto text-blue-900 text-xs p-0" onClick={() => setValue(null)}>
                        Change
                    </button>
                </div>
            )}

            { !value && 
                <SelectActivity
                    searchQuery={searchQuery}
                    onSearchQueryChange={onSearchQueryChange} 
                    onChange={setValue} 
                /> 
            }
        </>
    );
}

export default ActivityPicker;