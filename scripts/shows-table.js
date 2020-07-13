let shows = [
  {
    dates: "July 20 2020",
    venue: "China Creek Park",
    location: "Vancouver"
  },
  { dates: "Jul 21 2020", venue: "Trout Lake", location: "Vancouver" },
  {
    dates: "Jul 27 2020",
    venue: "Buntzen Lake",
    location: "Port Moody"
  },
  {
    dates: "Aug 01 2020",
    venue: "Olympic Village",
    location: "Vancouver"
  },
  {
    dates: "Sep 03 2020",
    venue: "Botanical Beach",
    location: "Port Renfrew"
  },
  { dates: "Sep 05 2020", venue: "Kawkawa Lake", location: "Hope" }
];

const desktop = document.querySelector("#desktop-table");
const mobileTable = document.querySelector("#mobile-table");

function createTable(desktop, shows) {
  for (let show of shows) {
    let row = desktop.insertRow();
    row.className = "table-row";
    for (key in show) {
      let cell = row.insertCell();
      let text = document.createTextNode(show[key]);
      cell.appendChild(text);
      cell.className = "table-cell";
    }
    let cell = row.insertCell();
    cell.className = "table-cell";
    let button = document.createElement("button");
    button.className = "table-button";
    button.textContent = "RSVP";
    cell.appendChild(button);
  }
}

function createTableHead(desktop, shows) {
  let tHead = desktop.createTHead();
  let row = tHead.insertRow();
  row.className = "table-head__row";
  for (let show of shows) {
    let th = document.createElement("th");
    let text = document.createTextNode(show);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function createButton() {
  let row = mobileTable.insertRow();
  row.className = "table-row";
  let cell = row.insertCell();
  cell.className = "table-cell";
  let button = document.createElement("button");
  button.className = "table-button";
  button.textContent = "RSVP";
  cell.appendChild(button);
}

function createMobileTable(mobileTable, shows) {
  for (let show of shows) {
    for (key in show) {
      let keyRow = mobileTable.insertRow();
      keyRow.className = "mobile-row";
      let keyCell = keyRow.insertCell();
      keyCell.className = "mobile-cell";

      let keyText = document.createTextNode(key.toUpperCase());
      let keyNode = document.createElement("h4");
      keyNode.className = "mobile-row__header";

      keyNode.appendChild(keyText);
      keyCell.appendChild(keyNode);

      let text = document.createTextNode(show[key]);
      let textNode = document.createElement("h4");
      textNode.className = "mobile-cell__data";
      textNode.appendChild(text);
      keyCell.appendChild(textNode);
    }
    createButton();
  }
}

let showKeys = Object.keys(shows[0]);

// call desktop table

createTable(desktop, shows);
createTableHead(desktop, showKeys);

//call the mobile table

createMobileTable(mobileTable, shows);
//display the mobile table if media query < //767px

function changeTable(mobileScreen) {
  if (mobileScreen.matches) {
    document.querySelector("#desktop-table").style.display = "none";
    document.querySelector("#mobile-table").style.display = "";
  } else {
    document.querySelector("#mobile-table").style.display = "none";
    document.querySelector("#desktop-table").style.display = "";
  }
}

let mobileScreen = window.matchMedia("(max-width: 767px)");
changeTable(mobileScreen);
mobileScreen.addListener(changeTable);
