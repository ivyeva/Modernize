const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});


const formNest = document.getElementById('nest-form');
const submitButton = document.getElementById('submit');

formNest.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formNest);
    const data = Object.fromEntries(formData);

    fetch('https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            submitButton.value = "Submitted";
            submitButton.disabled = true;
        } else {
            console.error('Submission failed');
        }
    })
    .catch(error => console.error('Error:', error));
});

