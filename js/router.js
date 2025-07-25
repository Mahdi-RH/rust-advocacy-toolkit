function navigateTo(page) {
  fetch(`pages/${page}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById('content-container').innerHTML = html;
    })
    .catch(() => {
      document.getElementById('content-container').innerHTML = "<p style='color:red;'>Page not found.</p>";
    });
}

// Load home page on first visit
window.onload = () => navigateTo('home');
