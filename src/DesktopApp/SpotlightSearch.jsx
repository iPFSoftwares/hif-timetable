import { useEffect, useRef, useState } from "react";
import { BASE_URL } from "../constants";

import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption
} from "@reach/combobox";

function useCitySearch(searchTerm) {
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      if (searchTerm.trim() !== "") {
        let isFresh = true;
        setLoading(true);
        fetchCities(searchTerm).then((cities) => {
          setLoading(false);
          if (isFresh) setCities(cities);
        });
        return () => (isFresh = false);
      }
    }, [searchTerm]);
  
    return [cities, loading];
}

const cache = {};
function fetchCities(value) {
  if (cache[value]) {
    return Promise.resolve(cache[value]);
  }
  return fetch(`${BASE_URL}/Employee/search?q=${value}`)
    .then((res) => res.json())
    .then((result) => {
      cache[value] = result;
      return result;
    });
}

function SpotlightSearch({placeholder = "Search Employee", onClose, onSelectUser}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [cities, loading] = useCitySearch(searchTerm);
    const inputRef = useRef(null);

    useEffect(() => {
        document.addEventListener("keyup", onShiftUp, false);
        return () => {
            document.removeEventListener("keyup", onShiftUp, false);
        };
    }, []);

    function onShiftUp(e){
        if(e.key === "Escape"){
            if(inputRef.current.value.length)
                setSearchTerm("");
            else
                onClose();
        };
    }
    
    const handleSearchTermChange = (event) => {
        if(event.target.value === inputRef.current.value)
          setSearchTerm(event.target.value);
    };

    const handleSelect = (name) => {
      const selectedEmployee= cities.find(({full_name}) => full_name === name);
      onSelectUser({...selectedEmployee, fromSpotlight: true});
    };

    return (
        <div className="fixed overflow-y-auto inset-0 bg-black bg-opacity-75 z-10 flex items-center justify-center">
            <div className="fixed inset-0" onClick={onClose}>

            </div>
            <div className="overflow-hidden w-full max-w-sm relative z-10">
                <div className="">
                    <Combobox aria-label="Cities" className="w-full"
                        onSelect={handleSelect}
                    >
                        <ComboboxInput
                            ref={inputRef}
                            className="w-full bg-white py-3 px-4 text-xl rounded border-none bg-transparent focus:outline-none placeholder-gray-300"
                            placeholder={placeholder}
                            value={searchTerm}
                            onChange={handleSearchTermChange}
                            autoFocus
                        />
                        {cities && (
                            <ComboboxPopover className="-mt-1 bg-white relative rounded-b overflow-hidden bg-white shadow-lg border z-20">
                                {cities.length > 0 ? (
                                <ComboboxList>
                                    {cities.map((employee) => {
                                    return (
                                        <ComboboxOption key={employee._id} value={employee.full_name}>
                                            <div className="flex items-center py-2 px-4 border-b border-gray-100">
                                                <div className="border relative w-6 h-6 rounded-full overflow-hidden">
                                                    <img className="absolute w-full h-full object-cover" src={employee.dp} alt="" />
                                                </div>
                                                <span className="ml-2 text-sm">{employee.full_name}</span>
                                            </div>
                                        </ComboboxOption>
                                    );
                                    })}
                                </ComboboxList>
                                ) : (
                                <span className="block p-3">
                                    { loading ? 'Loading...' : 'No results found' }
                                </span>
                                )}
                            </ComboboxPopover>
                        )}
                    </Combobox>
                </div>
            </div>
        </div>
    );
  }

export default SpotlightSearch;