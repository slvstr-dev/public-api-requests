/**
 *  Helper function for fetch requests
 *  @param {string} url - API endpoint to fetch data from
 *  @returns {Object} Parsed JSON from resolved promise of fetch request
 */
export const fetchJSON = (url) => {
    return fetch(url).then((response) => response.json());
};
