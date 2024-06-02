const form = document.querySelector('.feedback-form');
const formData = {
  email: '',
  message: ''
};

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  Object.assign(formData, JSON.parse(savedData));
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const { email, message } = formData;
  if (email === '' || message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
    formData.email = '';
    formData.message = '';
  }
});