import { useState } from "react";
import "./Search.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Search() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
    option7: false,
  });

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedOptions({
      ...selectedOptions,
      [name]: checked,
    });
  };

  const removeFilter = (option) => {
    setSelectedOptions({
      ...selectedOptions,
      [option]: false,
    });
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
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
              onClick={closeDropdown}
            ></div>
            <div className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
              <div className="dropdown-section">
                <h3>Filter</h3>
                <div className="dropdown-subsection">
                  <h4>Status</h4>
                  <ul>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          name="option2"
                          checked={selectedOptions.option2}
                          onChange={handleCheckboxChange}
                        />
                        Active
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          name="option3"
                          checked={selectedOptions.option3}
                          onChange={handleCheckboxChange}
                        />
                        Upcoming
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          name="option4"
                          checked={selectedOptions.option4}
                          onChange={handleCheckboxChange}
                        />
                        Past
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="dropdown-subsection">
                  <h4>Level</h4>
                  <ul>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          name="option5"
                          checked={selectedOptions.option5}
                          onChange={handleCheckboxChange}
                        />
                        Easy
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          name="option6"
                          checked={selectedOptions.option6}
                          onChange={handleCheckboxChange}
                        />
                        Medium
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          name="option7"
                          checked={selectedOptions.option7}
                          onChange={handleCheckboxChange}
                        />
                        Hard
                      </label>
                    </li>
                  </ul>
                </div>
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
