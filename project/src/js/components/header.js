// Header component
export function initHeader() {
  const headerContainer = document.getElementById('header-container');
  
  headerContainer.innerHTML = `
    <nav class="bg-white shadow-sm">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
              <line x1="6" y1="6" x2="6.01" y2="6"></line>
              <line x1="6" y1="18" x2="6.01" y2="18"></line>
            </svg>
            <h1 class="text-xl font-bold text-gray-800">DevOps Knowledge Hub</h1>
          </div>
          
          <div class="hidden md:block">
            <ul class="flex space-x-8 main-nav">
              <li><a href="#lifecycle" class="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200">Lifecycle</a></li>
              <li><a href="#sevencs" class="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200">7 C's</a></li>
              <li><a href="#tools" class="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200">Tools & Skills</a></li>
            </ul>
          </div>
          
          <div class="md:hidden">
            <button id="mobile-menu-button" class="text-gray-700 hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        
        <div id="mobile-menu" class="md:hidden hidden py-4 main-nav">
          <ul class="flex flex-col space-y-4">
            <li><a href="#lifecycle" class="block text-gray-700 hover:text-blue-500 font-medium">Lifecycle</a></li>
            <li><a href="#sevencs" class="block text-gray-700 hover:text-blue-500 font-medium">7 C's</a></li>
            <li><a href="#tools" class="block text-gray-700 hover:text-blue-500 font-medium">Tools & Skills</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `;
  
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  
  // Close mobile menu when clicking a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}