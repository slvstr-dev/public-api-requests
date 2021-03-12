/**
 *  Generate modal html of selected employee
 *  @param {Object} employee - Employee of clicked card
 *  @returns {string} String containing modal html
 */
const generateModal = (employee) =>
    `<div class="modal-container">
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn">
                <strong>X</strong>
            </button>

            <div class="modal-info-container">
                <img class="modal-img"
                    src="${employee.picture.large}"
                    alt="profile picture">
                
                <h3 class="modal-name cap">
                    ${employee.name.first}
                </h3>
                
                <p class="modal-text">
                    ${employee.email}
                </p>

                <p class="modal-text cap">
                    ${employee.location.city}
                </p>

                <hr>

                <p class="modal-text">
                    ${employee.cell}
                </p>

                <p class="modal-text">
                    ${employee.location.street.number} ${employee.location.street.name},
                    ${employee.location.city},
                    ${employee.location.postcode}
                </p>

                <p class="modal-text">
                    Birthday: ${employee.dob.date}
                </p>
            </div>
        </div>

        <div class="modal-btn-container">
            <button type="button" id="modal-prev" class="modal-prev btn">
                Prev
            </button>
            
            <button type="button" id="modal-next" class="modal-next btn">
                Next
            </button>
        </div>
    </div>`;

/**
 *  1. Add modal for selected employee to page
 *  2. Add listener to close button that will remove modal html from page
 *  @param {Object} employee - Employee of clicked card
 */
const addModal = (employee) => {
    const modal = generateModal(employee);

    document.getElementById("gallery").insertAdjacentHTML("afterend", modal);

    document
        .getElementById("modal-close-btn")
        .addEventListener("click", (event) => {
            event.currentTarget.parentNode.parentNode.remove();
        });
};

/**
 *  Get employee data by filtering all employees by unique email address
 *  @param {HTMLElement} element - DOM Element of clicked card
 *  @param {Object} employees - Data of all employees
 *  @returns {Object} Data of selected employee
 */
const getEmployeeData = (element, employees) => {
    const email = element.querySelector(".js-email-hook").innerText;
    const matchedData = employees.find((employee) => employee.email === email);

    return matchedData;
};

/**
 *  Handle modal functionality on interaction with employee cards
 *  @param {Object} employees - Parsed JSON results from fetch request
 */
export const modalHandler = (employees) => {
    document.querySelectorAll(".card").forEach((card) =>
        card.addEventListener("click", (event) => {
            const employeeData = getEmployeeData(
                event.currentTarget,
                employees
            );

            addModal(employeeData);
        })
    );
};
