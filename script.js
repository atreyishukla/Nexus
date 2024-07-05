function redirectTo(page) {
  window.location.href = page;
}

function checkAnswer() {
  const answer = document.getElementById('answer').value.toLowerCase();
  if (answer === 'piano') {
      window.location.href = 'real.html';
  } else {
      alert('Incorrect answer. Try again!');
  }
}
