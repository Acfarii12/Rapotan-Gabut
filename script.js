var nm = true;
while (nm) {
  var nama = prompt("Nama:");
  if (nama) {
    alert("Selamat Datang!");
    nm = false;
  }
}

// back

function back() {
  document.getElementById("boengkoes").style.display = "block";
  document.getElementById("mie").style.display = "none";
  document.getElementById("thomas").style.display = "none";
  document.getElementById("game").style.display = "none";
}

// content

function mie() {
  document.getElementById("boengkoes").style.display = "none";
  document.getElementById("mie").style.display = "block";
}

function thomas() {
  document.getElementById("boengkoes").style.display = "none";
  document.getElementById("thomas").style.display = "block";
}

function game() {
  alert("Hello!");
  var metode = prompt("Pilih grafik permainan: \n\nGrafik Biasa aja | Grafik 720p HD 4K 8K Ultra Wadidaw");
  switch (metode) {
    case "Grafik Biasa aja":
    case "Grafik biasa aja":
    case "grafik biasa aja":
    case "grafik biasa":
    case "biasa":
    case "biasa aja":
    case "Biasa aja":
    case "Biasa Aja":
      var ulang = true;
      while (ulang) {
        var p = prompt("Selamat Datang di Permainan: Gunting, Batu, Kertas \n\nPilih: Gunting / Batu / Kertas");

        var comp = Math.random();
        if (comp > 0.34) {
          comp = "Gunting";
        } else if (comp >= 0.34 && comp < 0.67) {
          comp = "Batu";
        } else {
          comp = "Kertas";
        }

        var hasil = "";

        if (p == comp) {
          hasil = "SERI!";
        } else if (p == "Gunting") {
          hasil = comp == "Kertas" ? "MENANG!" : "KALAH!";
        } else if (p == "Batu") {
          hasil = comp == "Kertas" ? "KALAH!" : "MENANG!";
        } else if (p == "Kertas") {
          hasil = comp == "Gunting" ? "KALAH!" : "MENANG!";
        } else {
          hasil = "Kamu memilih pilihan yang salah!";
        }

        alert(nama + " memilih " + p + " \nKomputer memilih " + comp + "\n\nKamu " + hasil);

        ulang = confirm("Mau main lagi?");
      }
      alert("Terima kasih sudah bermain.");
      break;
    case "Grafik 720p HD 4K 8K Ultra Wadidaw":
    case "Grafik HD":
    case "Grafik Hd":
    case "Grafik hd":
    case "grafik hd":
    case "HD":
    case "Hd":
    case "hd":
    case "Grafik 4K":
    case "Grafik 4k":
    case "grafik 4k":
    case "4K":
    case "4k":
    case "Grafik 8K":
    case "Grafik 8k":
    case "grafik 8k":
    case "8K":
    case "8k":
    case "Ultra":
    case "ultra":
    case "Grafik Wadidaw":
    case "Grafik wadidaw":
    case "grafik wadidaw":
    case "Wadidaw":
    case "wadidaw":
    case "Grafik Ultra":
    case "grafik ultra":
    case "Grafik ultra":
    case "Grafik 720P":
    case "Grafik 720p":
    case "grafik 720p":
    case "720P":
    case "720p":
      document.getElementById("boengkoes").style.display = "none";
      document.getElementById("game").style.display = "block";
      break;
    default:
      alert("Kamu memasukkan pilihan yang salah!");
  }
}

// game hd
function getComputerChoices() {
  const comp = Math.random();
  if (comp < 0.34) return "gunting";
  if (comp >= 0.34 && comp < 0.67) return "batu";
  return "kertas";
}

function getResults(comp, player) {
  if (player == comp) return "SERI";
  if (player == "batu") return comp == "gunting" ? "MENANG" : "KALAH";
  if (player == "gunting") return comp == "kertas" ? "MENANG" : "KALAH";
  if (player == "kertas") return comp == "batu" ? "MENANG" : "KALAH";
}

function roll() {
  const imgComputer = document.querySelector(".img-computer");
  const image = ["gunting", "kertas", "batu"];
  let i = 0;
  const timeStart = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - timeStart > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/mini-games/" + image[i++] + ".JPG");
    if (i == image.length) i = 0;
  }, 100);
}

const selectGunting = document.querySelector(".gunting");
selectGunting.addEventListener("click", function () {
  const computerChoices = getComputerChoices();
  const playerChoices = selectGunting.className;
  const result = getResults(computerChoices, playerChoices);

  roll();

  setTimeout(function () {
    const imgComputer = document.querySelector(".img-computer");
    imgComputer.setAttribute("src", "img/mini-games/" + computerChoices + ".JPG");

    const info = document.querySelector(".info");
    info.innerHTML = result;
  }, 1000);
});

const selectBatu = document.querySelector(".batu");
selectBatu.addEventListener("click", function () {
  const computerChoices = getComputerChoices();
  const playerChoices = selectBatu.className;
  const result = getResults(computerChoices, playerChoices);

  roll();

  setTimeout(function () {
    const imgComputer = document.querySelector(".img-computer");
    imgComputer.setAttribute("src", "img/mini-games/" + computerChoices + ".JPG");

    const info = document.querySelector(".info");
    info.innerHTML = result;
  }, 1000);
});

const selectKertas = document.querySelector(".kertas");
selectKertas.addEventListener("click", function () {
  const computerChoices = getComputerChoices();
  const playerChoices = selectKertas.className;
  const result = getResults(computerChoices, playerChoices);

  roll();

  setTimeout(function () {
    const imgComputer = document.querySelector(".img-computer");
    imgComputer.setAttribute("src", "img/mini-games" + computerChoices + ".JPG");

    const info = document.querySelector(".info");
    info.innerHTML = result;
  }, 1000);
});

function ig() {
  document.location.href = "https://instagram.com/acfarii12._";
}
