/**
 *  Helper function for fetch requests
 *  @param {string} url - API endpoint to fetch data from
 *  @returns {Object} Parsed JSON from resolved promise of fetch request
 */
export const fetchJSON = (url) => {
    return fetch(url).then((response) => response.json());
};

/**
 *  Helper function to format an employee's cell number
 *  @param {Object} employee - Employee's data
 *  @returns {string} US formatted cell number
 */
export const formatCellNumber = (employee) => {
    return employee.cell
        .replace(/\D*/g, "")
        .replace(/(\d{3})(\d{3})(\d+)/, "($1) $2-$3");
};

/**
 *  Helper function to format an employee's birthday
 *  @param {Object} employee - Employee's data
 *  @returns {string} US formatted birthday
 */
export const formatBirthday = (employee) => {
    return employee.dob.date.slice(0, 10).split("-").reverse().join("-");
};
