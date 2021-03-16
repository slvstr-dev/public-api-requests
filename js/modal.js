/**
 *  Get employee data by filtering all employees by unique email address
 *  @param {HTMLElement} element - DOM Element of clicked card
 *  @param {Object} employeesData - Data of all employees
 *  @returns {Object} Data of selected employee
 */
const getEmployeeData = (element, employeesData) => {
    const email = element.querySelector(".js-email-hook").innerText;
    const matchedData = employeesData.find(
        (employee) => employee.email === email
    );

    return matchedData;
};

/**
 *  Add modal for selected employee to page
 *  @param {Object} employeeData - Employee of clicked card
 */
const addModal = (employeeData) => {
    const modalHtml = generateModal(employeeData);

    appendHtml("#gallery", "afterend", modalHtml);
};

/**
 *  Generate modal html of selected employee
 *  @param {Object} employee - Employee of clicked card
 *  @returns {string} String containing modal html
 */
const generateModal = (employee) =>
    `<div id="modal" class="modal-container">
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
                    ${formatCellNumber(employee)}
                </p>

                <p class="modal-text">
                    ${employee.location.street.number}
                    ${employee.location.street.name},
                    ${employee.location.city},
                    ${employee.location.postcode}
                </p>

                <p class="modal-text">
                    Birthday: ${formatBirthday(employee)}
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
 *  Handle close, previous & next button clicks
 *  @param {Object} employeeData - Employee of clicked card
 *  @param {Object} employeesData - Data of all employees
 */
const handleButtons = (employeeData, employeesData) => {
    const modal = document.getElementById("modal");
    const currentIndex = employeesData.findIndex(
        (employee) => employee === employeeData
    );

    document.getElementById("modal-close-btn").addEventListener("click", () => {
        modal.remove();
    });

    document.getElementById("modal-prev").addEventListener("click", () => {
        modal.remove();

        if (currentIndex === 0) {
            addModal(employeesData[employeesData.length - 1]);
            handleButtons(
                employeesData[employeesData.length - 1],
                employeesData
            );
        } else {
            addModal(employeesData[currentIndex - 1]);
            handleButtons(employeesData[currentIndex - 1], employeesData);
        }
    });

    document.getElementById("modal-next").addEventListener("click", () => {
        modal.remove();

        if (currentIndex === employeesData.length - 1) {
            addModal(employeesData[0]);
            handleButtons(employeesData[0], employeesData);
        } else {
            addModal(employeesData[currentIndex + 1]);
            handleButtons(employeesData[currentIndex + 1], employeesData);
        }
    });
};

/**
 *  Initialize modal functionality on interaction with employee cards
 *  @param {Object} employeesData - Parsed JSON results from fetch request
 */
const initModal = (employeesData) => {
    document.querySelectorAll(".card").forEach((card) =>
        card.addEventListener("click", (event) => {
            const employeeData = getEmployeeData(
                event.currentTarget,
                employeesData
            );

            addModal(employeeData, employeesData);

            handleButtons(employeeData, employeesData);
        })
    );
};
