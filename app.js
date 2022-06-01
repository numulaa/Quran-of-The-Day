let btn = document.querySelector(".btn").addEventListener("click", getAdvice);
function getAdvice() {
  //   let surah = Math.ceil(Math.random() * 114);
  let ayah = Math.ceil(Math.random() * 6232);
  fetch(`https://api.alquran.cloud/v1/ayah/${ayah}/quran-uthmani `)
    .then((res) => res.json())
    .then((result) => {
      document.querySelector(".advice-content").innerText = result.data.text;
      document.querySelector("#advice-id").innerText =
        result.data.numberInSurah;
      document.querySelector("#surah-name").innerText = result.data.surah.name;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
  fetch(`https://api.alquran.cloud/v1/ayah/${ayah}/id.indonesian`)
    .then((res) => res.json())
    .then((result) => {
      document.querySelector("#ayah-translation").innerText = result.data.text;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

document.querySelector(".light-icon").addEventListener("click", lightMode);
function lightMode() {
  document.querySelector("body").classList.toggle("light-mode");
  document.querySelector(".light-icon").classList.toggle("light-mode");
  document.querySelector(".feedback p").classList.toggle("light-mode-text");
  document
    .querySelectorAll(".social-icon")
    .forEach((element) => element.classList.toggle("light-mode-text"));
}
