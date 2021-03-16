fetchJSON(
    "https://randomuser.me/api/?nat=us,dk,fr,gb,nl&results=12&inc=picture,name,email,location,cell,dob"
).then((data) => {
    addCards(data.results);
    initModal(data.results);
    initSearch();
});
