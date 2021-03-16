/**
 *  Generate cards html of all employees
 *  @param {Object} employees - Data of all employees
 *  @returns {Array<string>} Array of strings containing cards html
 */
const generateCards = (employees) => {
    return employees.map(
        (employee) =>
            `<div class="card">
                <div class="card-img-container">
                    <img class="card-img"
                        src="${employee.picture.large}"
                        alt="profile picture">
                </div>

                <div class="card-info-container">
                    <h3 class="card-name cap">
                        ${employee.name.first} ${employee.name.last}
                    </h3>

                    <p class="js-email-hook card-text">
                        ${employee.email}
                    </p>

                    <p class="card-text cap">
                        ${employee.location.city}, ${employee.location.state}
                    </p>
                </div>
            </div>`
    );
};

/**
 *  Generate html for cards of all employees
 *  @param {Object} employees - Parsed JSON results from fetch request
 */
const addCards = (employees) => {
    const cardsHtml = generateCards(employees).join("");

    appendHtml("#gallery", "beforeend", cardsHtml);
};
