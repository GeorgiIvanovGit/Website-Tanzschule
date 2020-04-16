
text = localStorage.getItem("bookings");
objArray = JSON.parse(text);

const timeslots = [
    { Tag: 'Montag', Zeit: '14:00 - 15:00', Gruppen: "Gruppe1" },
    { Tag: 'Montag', Zeit: '17:00 - 18:00', Gruppen: "Gruppe2" },
    { Tag: 'Dienstag', Zeit: '14:00 - 15:00', Gruppen: "Gruppe1" },
    { Tag: 'Dienstag', Zeit: '17:00 - 18:00', Gruppen: "Gruppe2" },
    { Tag: 'Freitag', Zeit: '14:00 - 15:00', Gruppen: "Gruppe1" },
    { Tag: 'Freitag', Zeit: '17:00 - 18:00', Gruppen: "Gruppe2" }

    // { Montag: "14:00 - 15:00", Dienstag: "14:00 - 15:00", Freitag: "14:00 - 15:00", Gruppen: "Gruppe1" },
    // { Montag: "17:00 - 18:00", Dienstag: "17:00 - 18:00", Freitag: "17:00 - 18:00", Gruppen: "Gruppe2" }
];


signUpForClass = function () {
    document.getElementById("myForm").style.display = "block";
    console.log('Button is created');
}

function windowClose() {
    document.getElementById("myForm").style.display = "none";
    }

addNewBooking = function () {
    alert('addNewBooking called.');
    var form_element = document.getElementById('addNewBookingForm');
    alert(form_element.telephone.value);
    alert(form_element.vorname.value);

}

function generateSignUpButton() {
    var buttonHtml = $('<button/>', {
        text: 'Anmeldung',
        click: signUpForClass,
        class: 'hidden'
    });

    return buttonHtml;
}

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
    let thButton = document.createElement("th");
    let buttonText = document.createTextNode("Anmeldung");
    thButton.appendChild(buttonText);
    row.appendChild(thButton);
}

function generateTable(table, timeslots) {
    for (let element of timeslots) {
        let row = table.insertRow();
        row.id = element.Gruppen + ' ' + element.Tag;
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }

        let buttonCell = row.insertCell();
        let signUpContainer = $("<div class='signup-container'></div>");
        let button = generateSignUpButton();
        let fullGrouplabel = $("<p class='hidden'>Group is Full</p>")
        signUpContainer.append(button);
        signUpContainer.append(fullGrouplabel);
        signUpContainer.appendTo(buttonCell);
    }
}

var table = document.querySelector("table");
let data = Object.keys(timeslots[0]);
generateTable(table, timeslots);
generateTableHead(table, data);


$("tbody tr").hover(function (e) {
    let currentId = e.currentTarget.id;
    let requirements = currentId.split(' ');
    let nrBookings = objArray.filter(obj => obj.gruppen === requirements[0] && obj.tag === requirements[1]).length;
    if (nrBookings >= 0 && nrBookings <= 12) {
        $(this).css("background-color", "green");
        $(this).find('button').removeClass("hidden");
    } else {
        $(this).css("background-color", "red");
        $(this).find("p").removeClass("hidden");
    }
},
    function () {
        $(this).css("background-color", "white");
        $(this).find('button').addClass("hidden");
        $(this).find("p").addClass("hidden");
    });

class Booking {
    constructor(name, email, telefon, gruppen, tag) {
        this.name = name;
        this.email = email;
        this.telefon = telefon;
        this.gruppen = gruppen;
        this.tag = tag;
    }
};
let bookings = new Array();
var i = 0;
var iMax = 30;
while (i < (iMax / 2)) {
    bookings.push(new Booking('Marko' + i, 'marko' + i + '@gmail.com', '0721654654' + i, 'Gruppe1', 'Montag'));
    //bookings.push(new Booking ('Marko'+i,'marko'+i+'@gmail.com', '0721654654'+i, 'Gruppe1', 'Dienstag'));
    i++;
}
while (i < iMax) {
    bookings.push(new Booking('Marko' + i, 'marko' + i + '@gmail.com', '0721654654' + i, 'Gruppe2', 'Montag'));
    bookings.push(new Booking('Marko' + i, 'marko' + i + '@gmail.com', '0721654654' + i, 'Gruppe2', 'Dienstag'));
    i++;
}

myJSON = JSON.stringify(bookings);
localStorage.setItem("bookings", myJSON);````                                                                                                                                                                                                                                               