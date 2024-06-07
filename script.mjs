document.addEventListener('DOMContentLoaded', function () {
  const sliderCheckbox = document.getElementById('slider');

  sliderCheckbox.addEventListener('change', function () {
    if (this.checked) {
      window.location.href = './html/work.html';
    } else {
      window.location.href = '../index.html';
    }
  });
});

