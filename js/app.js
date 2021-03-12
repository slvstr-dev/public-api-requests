import { fetchJSON } from "./helpers.js";
import { addCards } from "./cards.js";
import { modalHandler } from "./modal.js";
// import { addSearch } from "./search.js";

fetchJSON(
    "https://randomuser.me/api/?nat=us,dk,fr,gb,nl&results=12&inc=picture,name,email,location,cell,dob"
).then((data) => {
    addCards(data.results);
    modalHandler(data.results);
});
