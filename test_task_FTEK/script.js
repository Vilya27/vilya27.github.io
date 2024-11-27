const cargoList = [
    {
      id: "CARGO001",
      name: "Строительные материалы",
      status: "В пути",
      origin: "Москва",
      destination: "Казань",
      departureDate: "2024-11-24"
    },
    {
      id: "CARGO002",
      name: "Хрупкий груз",
      status: "Ожидает отправки",
      origin: "Санкт-Петербург",
      destination: "Екатеринбург",
      departureDate: "2024-11-26"
    }
];

function generateID(){
  let number = cargoList.length + 1;
  number = "00" + number;
  number = number.slice(-3);
  return "CARGO".concat(number);
}

function makeCargo(obj) {
  let id = generateID();
  return {
    id: id,
    name: obj[0].value,
    status: "Ожидает отправки",
    origin: obj[1].value,
    destination: obj[2].value,
    departureDate: obj[3].value
  };
}

const forma = document.getElementById("form");
forma.addEventListener('submit', function(event) {
  event.preventDefault();

  let obj = makeCargo(forma.elements);

  loadDB(obj);
  cargoList.push(obj);
})


function createDropdown(id, optionsData) {
  let select = document.createElement("select");
  select.id = id;

  optionsData.forEach(data => {
    let option = document.createElement("option");
    option.value = data.value;
    option.textContent = data.text;
    select.appendChild(option);
  });
  return select;
}



function loadDB(obj) {
  let table = document.getElementById("output");
  let newRow = table.insertRow(table.rows.length);

  let dropDown = document.createElement("div");
  dropDown.classList.add('dropdown');
  let button = document.createElement("button");
  button.classList.add('btn');
  button.classList.add('btn-secondary');
  button.classList.add('dropdown-toggle');
  button.classList.add('dropDown');
  button.setAttribute("role","button");
  button.setAttribute("data-bs-toggle","dropdown");
  button.textContent = "Ожидает отправки";
  let unList = document.createElement("ul");
  unList.classList.add("dropdown-menu");
  let listItem1 = document.createElement("li");
  listItem1.classList.add("dropdown-item");
  listItem1.textContent = "Ожидает отправки"
  listItem1.setAttribute("value", "1");

  let listItem2 = document.createElement("li");
  listItem2.classList.add("dropdown-item");
  listItem2.textContent = "В пути"
  listItem2.setAttribute("value", "2");

  let listItem3 = document.createElement("li");
  listItem3.classList.add("dropdown-item");
  listItem3.textContent = "Доставлен"
  listItem3.setAttribute("value", "3");

  dropDown.appendChild(button);
  dropDown.appendChild(unList);
  unList.appendChild(listItem1);
  unList.appendChild(listItem2);
  unList.appendChild(listItem3);

  let mySelect = createDropdown("customSelect", [{ text: "Ожидает отправки", value: "1" }, { text: "В пути", value: "2" }, { text: "Доставлен", value: "3"}]);
  mySelect.classList.add("btn");
  mySelect.classList.add("dropdown-toggle");
  mySelect.classList.add("btn-warning");
  
  mySelect.addEventListener("click", function(e){
    
    if (e.currentTarget.value == 1){
      mySelect.classList.replace(mySelect.classList[2], "btn-warning")
      cellStatus.innerHTML = "Ожидает отправки"
    } else if (e.currentTarget.value == 2) {
      mySelect.classList.replace(mySelect.classList[2], "btn-primary")
      cellStatus.innerHTML = "В пути"
    } else {
      mySelect.classList.replace(mySelect.classList[2], "btn-success");
      cellStatus.innerHTML = "Доставлен"
    }
  })
  newRow.insertCell(0).innerHTML = obj.id;
  newRow.insertCell(1).innerHTML = obj.name;
  let cellStatus = newRow.insertCell(2);
  cellStatus.innerHTML = obj.status;
  newRow.insertCell(3).innerHTML = obj.origin;
  newRow.insertCell(4).innerHTML = obj.destination;
  newRow.insertCell(5).innerHTML = obj.departureDate;
  newRow.insertCell(6).appendChild(mySelect);
}

function loadCargoList () {
  cargoList.forEach(function(el){
    loadDB(el);
  })
}
loadCargoList();

document.getElementById("btnAddCargo").addEventListener("click", function(){
  document.querySelector("form").classList.toggle("active");
})



// фильтр по статусу груза
// let statusCargo = document.querySelector(".statusCargo");
// let filterSelect = createDropdown("customSelect", [{ text: "none", value: "1" }, { text: "Ожидает отправки", value: "1" }, { text: "В пути", value: "2" }, { text: "Доставлен", value: "3"}]);
// filterSelect.classList.add("btn");
// filterSelect.classList.add("dropdown-toggle");
// filterSelect.classList.add("btn-secondary");
// // filterSelect.innerHTML = ""
// statusCargo.appendChild(filterSelect);
// function filterStatus(){

// }