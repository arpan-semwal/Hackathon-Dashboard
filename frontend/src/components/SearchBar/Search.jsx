import { useState } from "react";
import "./Search.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

// eslint-disable-next-line react/prop-types
export default function Search({ onFilterChange }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    Active: false,
    Upcoming: false,
    Past: false,
    Easy: false,
    Medium: false,
    Hard: false,
  });

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedOptions(prevOptions => {
      const newOptions = { ...prevOptions, [name]: checked };
      onFilterChange(newOptions); // Notify parent component about the change
      return newOptions;
    });
  };

  const removeFilter = (option) => {
    setSelectedOptions(prevOptions => {
      const newOptions = { ...prevOptions, [option]: false };
      onFilterChange(newOptions); // Notify parent component about the change
      return newOptions;
    });
  };

  const selectedFilters = Object.keys(selectedOptions).filter(
    (option) => selectedOptions[option]
  );

  return (
    <div className="search">
      <h2 className="search-title">Explore Challenges</h2>
      <div className="search-bar-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search challenges..."
        />
        <button className="filter-button" onClick={toggleDropdown}>
          Filter <i className="fas fa-chevron-down"></i>
        </button>
        {isDropdownOpen && (
          <>
            <div
              className={`overlay ${isDropdownOpen ? "active" : ""}`}
              onClick={() => setIsDropdownOpen(false)}
            ></div>
            <div className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
              <div className="dropdown-section">
                <h3>Status</h3>
                <ul>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="Active"
                        checked={selectedOptions.Active}
                        onChange={handleCheckboxChange}
                      />
                      Active
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="Upcoming"
                        checked={selectedOptions.Upcoming}
                        onChange={handleCheckboxChange}
                      />
                      Upcoming
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="Past"
                        checked={selectedOptions.Past}
                        onChange={handleCheckboxChange}
                      />
                      Past
                    </label>
                  </li>
                </ul>
                <h3>Difficulty</h3>
                <ul>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="Easy"
                        checked={selectedOptions.Easy}
                        onChange={handleCheckboxChange}
                      />
                      Easy
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="Medium"
                        checked={selectedOptions.Medium}
                        onChange={handleCheckboxChange}
                      />
                      Medium
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="Hard"
                        checked={selectedOptions.Hard}
                        onChange={handleCheckboxChange}
                      />
                      Hard
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="selected-filters-container">
        {selectedFilters.map((filter) => (
          <div key={filter} className="selected-filter">
            {filter}
            <button
              className="remove-filter-button"
              onClick={() => removeFilter(filter)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
