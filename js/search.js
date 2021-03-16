/**
 *  Add search form to page
 */
const addSearch = () => {
    const modalHtml = generateSearch();

    appendHtml(".search-container", "afterbegin", modalHtml);
};

/**
 *  Generate search form html
 *  @returns {string} String containing search form html
 */
const generateSearch = () =>
    `<form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Search...">
        <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>`;

/**
 *  Handle search requests and results
 */
const handleSearch = () => {
    document
        .getElementById("search-submit")
        .addEventListener("click", (event) => {
            event.preventDefault();

            const searchRequest = document
                .getElementById("search-input")
                .value.toLowerCase();

            displaySearchResults(searchRequest);
        });
};

/**
 *  Display search results by hiding cards of unmatched employee names
 *  @param {string} request - Request to search for
 */
const displaySearchResults = (request) => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        const name = card.querySelector(".card-name").innerText.toLowerCase();
        card.style.display = "flex";

        if (name.indexOf(request) === -1) {
            card.style.display = "none";
        }
    });
};

/**
 *  Initialize search functionality on interaction with search input & submit
 */
const initSearch = () => {
    addSearch();
    handleSearch();
};
