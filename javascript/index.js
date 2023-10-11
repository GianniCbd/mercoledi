window.onload = () => {
  const form = document.getElementById("#forma");
};

forma.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("nome");

  const surnameInput = document.getElementById("cognome");

  const propertyInput = document.getElementById("aziendaOprivato");

  const nome = nameInput.value;
  const cognome = surnameInput.value;
  const aziendaOprivato = propertyInput.value;

  if (nameInput === "" || surnameInput === "" || propertyInput === "") {
    alert("I valori sono identici");
  } else {
    alert("Perfetto! Ora ordina la tua spesa!");
    console.log(`Sta ordinando ${nome}  ${cognome} per l'azienda ${aziendaOprivato} `);
  }
});
