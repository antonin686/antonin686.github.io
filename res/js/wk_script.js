var updated = localStorage.getItem("updated");

if (updated == null) {
  var names = {
    str: [
      {
        name: "Abadon",
        short: "aba",
        status: "0",
      },

      {
        name: "Alchemist",
        short: "alche",
        status: "0",
      },

      {
        name: "Axe",
        short: "axe",
        status: "0",
      },

      {
        name: "Beast Master",
        short: "beast",
        status: "0",
      },
    ],

    agi: [
      {
        name: "Anti Mage",
        short: "am",
        status: "0",
      },

      {
        name: "Arc Warden",
        short: "arc",
        status: "0",
      },

      {
        name: "Blood Seeker",
        short: "bs",
        status: "0",
      },

      {
        name: "Brood Mother",
        short: "brood",
        status: "0",
      },
    ],

    int: [
      {
        name: "Antient Appartion",
        short: "aa",
        status: "0",
      },

      {
        name: "Bane",
        short: "bane",
        status: "0",
      },

      {
        name: "Bat Rider",
        short: "bat",
        status: "0",
      },

      {
        name: "Chen",
        short: "chen",
        status: "0",
      },
    ],
  };
  localStorage.setItem("names", JSON.stringify(names));
}

var storedNames = JSON.parse(localStorage.getItem("names"));

var html = "<h4>Strength</h4>";
storedNames.str.forEach((element) => {
  var checked = element.status == 1 ? "checked" : "";
  html += `
        <input class="hero-checkboxes" type="checkbox" name="checkbox[]" value="${element.name}" ${checked}>
        <label> ${element.name} </label><br>`;
});
document.getElementById("select-heroes-str").innerHTML = html;

var html = "<h4>Agility</h4>";
storedNames.agi.forEach((element) => {
  var checked = element.status == 1 ? "checked" : "";
  html += `
        <input class="hero-checkboxes" type="checkbox" name="checkbox[]" value="${element.name}" ${checked}>
        <label> ${element.name} </label><br>`;
});
document.getElementById("select-heroes-agi").innerHTML = html;

var html = "<h4>Inteligence</h4>";
storedNames.int.forEach((element) => {
  var checked = element.status == 1 ? "checked" : "";
  html += `
        <input  class="hero-checkboxes" type="checkbox" name="checkbox[]" value="${element.name}" ${checked}>
        <label> ${element.name} </label><br>`;
});

document.getElementById("select-heroes-int").innerHTML = html;

//console.log(storedNames)

function updateNames() {
  var element = document.getElementById("btn-done");
  element.classList.add("btn-active");

  var checkboxes = document.querySelectorAll(".hero-checkboxes");
  localStorage.setItem("updated", true);

  checkboxes.forEach((e) => {
    if (e.checked) {
      updateHeroes(e.value, 1);
    } else {
      updateHeroes(e.value, 0);
    }
  });

  console.log(storedNames);

  localStorage.setItem("names", JSON.stringify(storedNames));

  setTimeout(() => {
    element.classList.add("btn-success");
  }, 1500);

  setTimeout(() => {
    element.classList.remove("btn-success");
    element.classList.remove("btn-active");
  }, 3000);
}

function updateHeroes(name, status) {
  // console.log(name);
  storedNames.str.forEach((element) => {
    if (element.name == name) {
      element.status = status;
      return true;
    }
  });

  storedNames.agi.forEach((element) => {
    if (element.name == name) {
      element.status = status;
      return true;
    }
  });

  storedNames.int.forEach((element) => {
    if (element.name == name) {
      element.status = status;
      return true;
    }
  });
}
