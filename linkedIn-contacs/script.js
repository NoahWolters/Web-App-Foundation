// Daten von der API laden => fetch
// Api Antwortet => Antwort verarbeiten mit then => erwartet callback
// response in json umwandeln
// Und dann(then) console.log() die Daten ausgeben

const state = {
  contacts: [],
};

const list = document.querySelector("#list");

fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=8")
  .then((response) => response.json())
  .then((data) => {
    state.contacts = data;
    renderContacts();
  })
  .catch((error) => console.log(error));

const renderContacts = () => {
  list.innerHTML = "";

  state.contacts.forEach((contact) => {
    const newLi = document.createElement("li");

    // namen element mit vollem namen
    const nameElement = document.createElement("p");
    const fullName = `${contact.name.title} ${contact.name.first} ${contact.name.last}`;
    nameElement.textContent = fullName;
    newLi.appendChild(nameElement);

    // title element mit namen und title als paragraph drunter
    const titleElement = document.createElement("p");
    titleElement.textContent = `${contact.title}`;
    newLi.appendChild(titleElement);
    list.appendChild(newLi);

    const mutualConnectionsElements = document.createElement("p");
    mutualConnectionsElements.textContent = `Mutual Connections: ${contact.mutualConnections}`;
    newLi.appendChild(mutualConnectionsElements);
  });
};
