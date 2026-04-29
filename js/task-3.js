const nameInput = document.getElementById('name-input');
nameInput.addEventListener('input', onInput);

function onInput(e) {
  const val = e.currentTarget.value.trim();
  const nameOutput = document.getElementById('name-output');
  if (val.length > 0) {
    nameOutput.textContent = val;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
}
