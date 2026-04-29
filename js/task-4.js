const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const obj = {};
  const elems = e.currentTarget.elements;
  for (const elem of elems) {
    if (elem.tagName === 'INPUT') {
      const value = elem.value.trim();
      if (!value) {
        alert('All form fields must be filled in');
        return;
      }
      obj[elem.name] = value;
    }
  }
  console.log(obj);
  e.currentTarget.reset();
}
