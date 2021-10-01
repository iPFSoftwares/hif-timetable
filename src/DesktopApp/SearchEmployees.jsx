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
  if (cache[value])
    return Promise.resolve(cache[value]);
    
  return fetch(`${BASE_URL}/Employee/search?q=${value}`)
    .then((res) => res.json())
    .then((result) => {
      cache[value] = result;
      return result;
    });
}

function SearchEmployees({placeholder = "Type to search", onChange}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [cities, loading] = useCitySearch(searchTerm);
    const handleSearchTermChange = (event) => {
      setSearchTerm(event.target.value);
    };
    const handleSelect = (name) => {
      const selectedEmployee= cities.find(({full_name}) => full_name === name);
      onChange(selectedEmployee);
    };

    return (
      <Combobox aria-label="Cities" className="w-full"
        onSelect={handleSelect}
      >
        <ComboboxInput
          className="w-full py-1 px-2 rounded border border-gray-300 focus:outline-none bg-gray-100"
          placeholder={placeholder}
          onChange={handleSearchTermChange}
          autoFocus
        />
        {cities && (
          <ComboboxPopover className="rounded overflow-hidden bg-white shadow-lg border z-20">
            {(!loading && cities.length) > 0 ? (
              <ComboboxList>
                {cities.map((employee) => {
                  return (
                      <ComboboxOption key={employee._id} value={employee.full_name}>
                          <div className="flex items-center px-2 border-t border-gray-300" style={{height: "34px"}}>
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
    );
  }

export default SearchEmployees;