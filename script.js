const searching_data = document.getElementById("searching");
const textdis = document.getElementById("text");
const Adjdis = document.getElementById("adj");
const output = document.getElementById("output");
const partOfSpeech = document.getElementById("partOfSpeech");
const url = "https://api.dictionaryapi.dev/api/v2/entries/en";

function search() {
  const main_url = `${url}/${searching_data.value} `;
  const dist = fetch(main_url).then((res) => {
    return res.json();
  });
  const maindist = dist
    .then((msg) => {
      showdata(msg);
    })
    .catch((err) => {
      return (output.innerText = "This word not in our dictionary");
    });
}

function showdata(data) {
  textdis.innerText = data[0].word;
  Adjdis.innerText = data[0].meanings[0].definitions[0].definition;
  output.innerText = data[0].meanings[2].definitions[0].definition;
}
