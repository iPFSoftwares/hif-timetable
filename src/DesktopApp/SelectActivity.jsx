import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption
} from "@reach/combobox";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";

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
  return fetch(`${BASE_URL}/SessionType/search?q=${value}`)
    .then((res) => res.json())
    .then((result) => {
      cache[value] = result;
      return result;
    });
}

function SelectActivity({placeholder = "Type to search", searchQuery = "", onSearchQueryChange, onChange}) {
    const [searchTerm, setSearchTerm] = useState(searchQuery);
    const [cities, loading] = useCitySearch(searchTerm);
    const handleSearchTermChange = (event) => {
      onSearchQueryChange(event.target.value);
      setSearchTerm(event.target.value);
    };
    const handleSelect = (name) => {
      const selectedActivity= cities.find(({title}) => title === name);
      onChange(selectedActivity);
    };

    return (
      <Combobox aria-label="Cities" className="w-full"
        onSelect={handleSelect}
      >
        <ComboboxInput
          className="w-full py-1 px-2 rounded border border-gray-300 focus:outline-none bg-gray-100"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleSearchTermChange}
          autoFocus
        />
        {cities && (
          <ComboboxPopover className="rounded overflow-hidden bg-white shadow-lg border z-20">
            {cities.length > 0 
              ? (
                <ComboboxList>
                  {cities.map((activity) => {
                    return (
                        <ComboboxOption 
                          key={activity._id} 
                          className="px-3 py-2"
                          value={activity.title} 
                        />
                    );
                  })}
                </ComboboxList>
              )
              : !loading ? null : (
                <span className="block p-3">
                  Loading...
                </span>
              )
            }
          </ComboboxPopover>
        )}
      </Combobox>
    );
  }

export default SelectActivity;