import React from "react";
import "./16.css";
import { FaAngleDown } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { useEffect } from "react";
import { useState } from "react";

const Main = () => {
  const [countries, setCountry] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  const [selected, setSelected] = useState(null);
  const fetchData = async () => {
    await fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountry(data);
      })
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='container'>
      {/* label of input button */}
      <button>
        {selected ? selected : "select country"} <FaAngleDown />
      </button>
      {/* country Lists */}
      <ul className='menu'>
        <div>
          <BsSearch className='icon' />
          <input
            autoComplete="off"
            type='text'
            name='country'
            placeholder='Enter your Country'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
          />
        </div>
        {countries?.map((country, index) => (
          <li
            key={index}
            className={`${
              country?.name?.toLowerCase()?.startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (country?.name?.toLowerCase() !== selected) {
                setSelected(country.name);
              }
            }}>
            {country?.name?.toLowerCase()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
