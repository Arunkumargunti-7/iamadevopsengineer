// Simple hash-based router
import { renderLifecyclePage } from './pages/lifecycle.js';
import { renderSevenCsPage } from './pages/sevenCs.js';
import { renderToolsPage } from './pages/tools.js';
import { renderToolDetailPage } from './pages/toolDetail.js';
import { renderToolNotesPage } from './pages/toolNotes.js';

// Route definitions
const routes = {
  '': 'lifecycle',
  'lifecycle': renderLifecyclePage,
  'sevencs': renderSevenCsPage,
  'tools': renderToolsPage
};

// Default page renderer for not found routes
function renderNotFoundPage() {
  const mainContainer = document.getElementById('main-container');
  mainContainer.innerHTML = `
    <div class="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
      <p class="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <a href="#lifecycle" class="text-blue-600 hover:text-blue-800 underline">Return to Home</a>
    </div>
  `;
}

// Initialize router
export function initRouter() {
  const currentHash = window.location.hash.substring(1) || '';
  const [route, ...params] = currentHash.split('/');
  
  // Get main content container
  const mainContainer = document.getElementById('main-container');
  
  // Clear any existing content
  mainContainer.innerHTML = '';
  
  // Update active navigation state
  updateActiveNavLink(route || 'lifecycle');
  
  // Handle tool detail routes
  if (route === 'tool-detail' && params.length > 0) {
    renderToolDetailPage(params[0]);
    return;
  }
  
  // Handle tool notes routes
  if (route === 'tool-notes' && params.length > 0) {
    renderToolNotesPage(params[0]);
    return;
  }
  
  // Get the route function, ensuring it's actually a function
  let routeFunction;
  if (route === '') {
    routeFunction = routes['lifecycle']; // Handle empty route
  } else {
    routeFunction = typeof routes[route] === 'function' ? routes[route] : renderNotFoundPage;
  }
  
  // Execute the route function
  routeFunction();
}

// Update active navigation state
function updateActiveNavLink(activeRoute) {
  // Wait for navigation links to be available
  setTimeout(() => {
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
      const linkRoute = link.getAttribute('href').substring(1);
      
      if (linkRoute === activeRoute) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
    
    // Also update page navigation at bottom
    const pageNavLinks = document.querySelectorAll('.page-nav a');
    pageNavLinks.forEach(link => {
      const linkRoute = link.getAttribute('href').substring(1);
      
      if (linkRoute === activeRoute) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, 0);
}

// Navigation helper function
export function navigateTo(route) {
  window.location.hash = route;
  initRouter();
}