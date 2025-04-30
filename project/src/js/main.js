// Main application entry point
import { initRouter } from './router.js';
import { initHeader } from './components/header.js';
import { initFooter } from './components/footer.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  const appContainer = document.getElementById('app');
  
  // Create main structure
  appContainer.innerHTML = `
    <div class="page-container">
      <header id="header-container"></header>
      <main id="main-container" class="main-content container mx-auto px-4 py-8"></main>
      <footer id="footer-container"></footer>
    </div>
  `;

  // Initialize components
  initHeader();
  initFooter();
  
  // Initialize router
  initRouter();
}

// Handle back button in browser
window.addEventListener('popstate', () => {
  initRouter();
});