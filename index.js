let markets = document.createElement("div");
markets.className = "markets";
document.body.append(markets);

let markets_box = document.createElement("div");
markets_box.className = "markets_box";
markets.appendChild(markets_box);

let box_content = document.createElement("div");
box_content.className = "box_content";
markets_box.appendChild(box_content);

let markets_font = document.createElement("div");
markets_font.className = "markets_font";
markets_font.textContent = "Markets";
box_content.appendChild(markets_font);

function box(nameId, text, fasId, id, i) {
  let totalFirst = document.createElement("div");
  totalFirst.className = "total first";
  totalFirst.id = nameId;
  totalFirst.textContent = text;
  let fas = document.createElement("i");
  fas.className = "fas fa-chevron-circle-down";
  fas.id = fasId;
  totalFirst.appendChild(fas);
  box_content.appendChild(totalFirst);

  (function func() {
    let upDown = document.createElement("div");
    upDown.className = `${id} common`;

    function inn() {
      let innerDiv = document.createElement("div");
      innerDiv.className = "inner";
      let p = document.createElement("p");
      p.className = " ";
      p.textContent = " hello";
      innerDiv.appendChild(p);
      let numberDiv = document.createElement("div");

      numberDiv.className = "number";
      numberDiv.textContent = "Details";
      let lineDiv = document.createElement("div");
      lineDiv.className = "line";

      innerDiv.appendChild(numberDiv);
      innerDiv.appendChild(lineDiv);
      upDown.appendChild(innerDiv);
      box_content.appendChild(upDown);
    }
    inn();
    inn();
    inn();
    inn();
    inn();

    (function inv(i) {
      let invisible = document.createElement("div");
      invisible.className = "invisible";
      invisible.id = i;
      box_content.appendChild(invisible);
    })(i);
  })(id);
}
box("uddin", "Uddin", "fasUdd", "udd", "u");
box("jahangir", "Jahangir", "fasJj", "jj", "j");
box("mizan", "Mizan", "fasMiz", "miz", "m");
box("sisil", "Sisil", "fasSis", "sis", "s");
box("nirob", "Nirob", "fasNir", "nir", "n");
box("rifat", "Kaissa", "fasRif", "rif");

function dropDown(id, clases, fas, rotate, reset) {
  const x = document.querySelector(clases);
  const y = document.querySelector(fas);
  const z = document.querySelector(id);

  if (x.style.animation === "") {
    y.style.animation = `${rotate} .3s ease-in-out`;
    y.style.animationFillMode = "forwards";
    z.style.animation = "firstOpen .3s ease-in-out";
    z.style.animationFillMode = "forwards";
    x.style.animation = "moveDown .3s ease-in-out";
    x.style.animationFillMode = "forwards";
  } else if (x.style.animation != "") {
    z.style.animation = "fastClose .3s ease-in-out";
    y.style.animation = `${reset} .3s ease-in-out`;
    x.style.animation = "moveUp .3s ease-in-out";
    setTimeout(function() {
      x.style.animation = "";
    }, 500);
  }
}

document.addEventListener("click", e => {
  if (e.target.closest("#uddin")) {
    dropDown("#uddin", ".udd", "#fasUdd", "uddRotate", "uddReset");
  } else if (e.target.closest("#jahangir")) {
    dropDown("#jahangir", ".jj", "#fasJj", "jjRotate", "jjReset");
  } else if (e.target.closest("#mizan")) {
    dropDown("#mizan", ".miz", "#fasMiz", "mizRotate", "mizReset");
  } else if (e.target.closest("#sisil")) {
    dropDown("#sisil", ".sis", "#fasSis", "sisRotate", "sisReset");
  } else if (e.target.closest("#nirob")) {
    dropDown("#nirob", ".nir", "#fasNir", "nirRotate", "nirReset");
  } else if (e.target.closest("#rifat")) {
    dropDown("#rifat", ".rif", "#fasRif", "rifRotate", "rifReset");
  }
});

const myArr = [
  {
    person: "uddin",
    values: [
      "kalo",
      "chuler treatment",
      "react learner",
      "graduation kora lagbe",
      "aftab@nazztech.com"
    ]
  },
  {
    person: "jahangir",
    values: [
      "brilliant",
      "brown",
      "good height",
      "wear glasses",
      "jahangir@nazztech.com"
    ]
  },
  {
    person: "mizan",
    values: [
      "atigram",
      "js learner",
      "fair skin",
      "chicken biriyani",
      "mizan@nazztech.com"
    ]
  },
  {
    person: "sisil",
    values: [
      "black",
      "worker",
      "curly hair",
      "react learner",
      "nazmul@nazztech.com"
    ]
  },
  {
    person: "nirob",
    values: [
      "good looking",
      "kom boyosh",
      "artist",
      "web designer",
      "noria",
      "graduation kora lagbe"
    ]
  },
  {
    person: "kaissa",
    values: [
      "jibonta bedona",
      "kutta vaggo amr",
      "ek glass mullar juice den",
      "jibonta bangladesher weather",
      "jilapi tv"
    ]
  }
];

function createAccordion(arrayOfData) {
  arrayOfData.forEach(function(elem, ind, arr) {
    const u = document.querySelector(".udd").querySelectorAll("p");

    u[ind].textContent = arr[0].values[ind];

    const j = document.querySelector(".jj").querySelectorAll("p");

    j[ind].textContent = arr[1].values[ind];

    const m = document.querySelector(".miz").querySelectorAll("p");

    m[ind].textContent = arr[2].values[ind];

    const s = document.querySelector(".sis").querySelectorAll("p");

    s[ind].textContent = arr[3].values[ind];

    const n = document.querySelector(".nir").querySelectorAll("p");

    n[ind].textContent = arr[4].values[ind];

    const r = document.querySelector(".rif").querySelectorAll("p");

    r[ind].textContent = arr[5].values[ind];
  });
}
createAccordion(myArr);
