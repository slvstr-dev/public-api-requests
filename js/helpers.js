/**
 *  Helper function for fetch requests
 *  @param {string} url - API endpoint to fetch data from
 *  @returns {Object} Parsed JSON of resolved promise
 */
const fetchJSON = (url) => {
    return fetch(url).then((response) => response.json());
};

/**
 *  Helper function for appending
 *  @param {HTMLElement} element - DOM Element
 *  @param {string} position - Position relative to the element
 *  @param {string} text - String to be parsed as HTML
 */
const appendHtml = (element, position, text) => {
    document.querySelector(element).insertAdjacentHTML(position, text);
};

/**
 *  Helper function to format an employee's cell number
 *  @param {Object} employee - Employee's data
 *  @returns {string} US formatted cell number
 */
const formatCellNumber = (employee) => {
    return employee.cell
        .replace(/\D*/g, "")
        .replace(/(\d{3})(\d{3})(\d+)/, "($1) $2-$3");
};

/**
 *  Helper function to format an employee's birthday
 *  @param {Object} employee - Employee's data
 *  @returns {string} US formatted birthday
 */
const formatBirthday = (employee) => {
    return employee.dob.date.slice(0, 10).split("-").reverse().join("-");
};
