// Footer component
export function initFooter() {
  const footerContainer = document.getElementById('footer-container');
  
  footerContainer.innerHTML = `
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <div class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
              <h2 class="text-lg font-semibold">DevOps Knowledge Hub</h2>
            </div>
            <p class="text-gray-400 text-sm mt-2">Empowering your DevOps journey</p>
          </div>
          
          <div class="page-nav bg-gray-700 rounded-full px-3 py-1.5 inline-flex items-center space-x-2">
            <a href="#lifecycle" class="rounded-full">1</a>
            <a href="#sevencs" class="rounded-full">2</a>
            <a href="#tools" class="rounded-full">3</a>
          </div>
          
          <div class="mt-4 md:mt-0">
            <p class="text-gray-400 text-sm">© 2025 DevOps Knowledge Hub</p>
          </div>
        </div>
      </div>
    </footer>
  `;
}