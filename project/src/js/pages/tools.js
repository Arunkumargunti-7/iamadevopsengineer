// Tools and Skills page
export function renderToolsPage() {
  const mainContainer = document.getElementById('main-container');
  
  // Define tool data
  const tools = [
    {
      id: 'aws',
      name: 'AWS',
      description: 'Cloud infrastructure platform with compute, storage, and networking services.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500">
              <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z"></path>
              <path d="M19.13 5.09C15.22 9.14 10.77 12.17 5.87 14.25"></path>
              <path d="M23 6c0 9-3.75 22-6 22s-9-13-9-22 1.75-6 9-6 6 1.75 6 6Z"></path>
            </svg>`
    },
    {
      id: 'linux',
      name: 'Linux',
      description: 'Open-source operating system kernel, the foundation of most DevOps environments.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700">
              <circle cx="12" cy="11" r="1"></circle>
              <path d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z"></path>
              <path d="M8 14a7 7 0 0 1 8 0"></path>
              <path d="M19 9c-.5.5-1.06 1-2 1h-1.5"></path>
              <path d="M9 10H7a2 2 0 0 1-2-1"></path>
              <path d="M4 22a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4"></path>
              <path d="M6 13c1.53 2 3.13 3 5 3 1.93 0 3.57-1.06 5-3 0 0 0-4 2-6s0-7-4-7-6 5-4 7 2 6 2 6"></path>
            </svg>`
    },
    {
      id: 'maven',
      name: 'Maven',
      description: 'Build automation and dependency management tool for Java projects.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-600">
              <path d="M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z"></path>
              <path d="M18 20a2 2 0 1 0 0 4 2 2 0 1 0 0-4z"></path>
              <path d="M16 12l-2-2-8-8"></path>
              <path d="M20 16l-4-4 4.586-4.586a2 2 0 0 1 2.828 0v0a2 2 0 0 1 0 2.828L18 12"></path>
            </svg>`
    },
    {
      id: 'jenkins',
      name: 'Jenkins',
      description: 'Open-source automation server for building, deploying, and automating projects.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-700">
              <path d="M9 9h6v6H9z"></path>
              <path d="M14 15h1v1h-1z"></path>
              <path d="M19 15h1v1h-1z"></path>
              <path d="M4 15h1v1H4z"></path>
              <path d="M9 15h1v1H9z"></path>
              <path d="M9 19h1v1H9z"></path>
              <path d="M9 4h1v1H9z"></path>
              <path d="M14 9h1v1h-1z"></path>
              <path d="M19 9h1v1h-1z"></path>
              <path d="M4 9h1v1H4z"></path>
              <path d="M4 4h6v6H4z"></path>
              <path d="M14 4h6v6h-6z"></path>
              <path d="M4 14h6v6H4z"></path>
              <path d="M14 14h6v6h-6z"></path>
            </svg>`
    },
    {
      id: 'ansible',
      name: 'Ansible',
      description: 'Automation platform for configuration management, application deployment, and task automation.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-500">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m8 12 4 4"></path>
              <path d="m8 12 4-4"></path>
              <path d="m16 8-4 4"></path>
              <path d="m16 16-4-4"></path>
            </svg>`
    },
    {
      id: 'docker',
      name: 'Docker',
      description: 'Platform for developing, shipping, and running applications in containers.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
              <path d="M8 2h8"></path>
              <path d="M9 1v4"></path>
              <path d="M15 1v4"></path>
              <path d="M3 7c0-1.7 0-2.5.5-3 .1-.2.3-.3.5-.5.5-.5 1.3-.5 3-.5h10c1.7 0 2.5 0 3 .5.2.1.4.3.5.5.5.5.5 1.3.5 3v7"></path>
              <path d="M7 7h10"></path>
              <path d="M9 11H5c-1.7 0-2.5 0-3 .5a2.1 2.1 0 0 0-.5.5c-.5.5-.5 1.3-.5 3v4c0 1.7 0 2.5.5 3l.5.5c.5.5 1.3.5 3 .5h11.6c1.2 0 1.8 0 2.3-.3a2 2 0 0 0 .8-.8c.3-.5.3-1.1.3-2.3v-.2c0-1.3 0-2 .3-2.5a2 2 0 0 1 2.3-.7c.3.1.6.3.7.6.3.4.2 1 0 2.2l-1.3 7.8c-.2 1-.3 1.6-.6 2a2 2 0 0 1-.8.7c-.4.2-1 .2-2 .2H18"></path>
              <path d="M22 13v3a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-3"></path>
            </svg>`
    },
    {
      id: 'kubernetes',
      name: 'Kubernetes',
      description: 'Container orchestration system for automating deployment, scaling, and management.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600">
              <path d="M12 4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1v6"></path>
              <path d="M12 4 4 8v8l8 4 8-4V8z"></path>
              <path d="m4 8 8 4 8-4"></path>
              <path d="M12 14v-1"></path>
              <path d="M12 17v-1"></path>
              <path d="M4.2 10 12 14l7.8-4"></path>
            </svg>`
    },
    {
      id: 'terraform',
      name: 'Terraform',
      description: 'Infrastructure as Code tool for building, changing, and versioning infrastructure safely.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600">
              <rect x="2" y="2" width="7" height="7" rx="1"></rect>
              <rect x="2" y="15" width="7" height="7" rx="1"></rect>
              <rect x="15" y="2" width="7" height="7" rx="1"></rect>
              <rect x="15" y="15" width="7" height="7" rx="1"></rect>
            </svg>`
    },
    {
      id: 'tomcat',
      name: 'Tomcat',
      description: 'Open-source Java Servlet Container for implementing Java-based web applications.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-600">
              <path d="M19 7.5v9l3 2V8.7l-3-1.2Z"></path>
              <path d="M2 15.5v-8l3 1.25"></path>
              <path d="M15 6.5 9 3 3 6.5"></path>
              <path d="M9 3v18"></path>
              <path d="m9 16 6 3 6-3"></path>
              <path d="m3 8 6 3 6-3"></path>
            </svg>`
    },
    {
      id: 'azure',
      name: 'Azure',
      description: 'Microsoft\'s cloud computing platform for building, testing, deploying, and managing applications.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
              <path d="M7 10v4h10"></path>
              <path d="M7 10h10"></path>
              <rect x="12" y="10" width="5" height="8" rx="1"></rect>
              <path d="M17 13v2"></path>
              <path d="M7 18v-4"></path>
              <rect x="2" y="6" width="5" height="8" rx="1"></rect>
              <path d="M2 10h5"></path>
            </svg>`
    },
    {
      id: 'sonarqube',
      name: 'SonarQube',
      description: 'Continuous inspection tool for code quality analysis and security vulnerability detection.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400">
              <path d="M12 3v5"></path>
              <path d="m19 7-3 2"></path>
              <path d="m5 7 3 2"></path>
              <path d="M12 19v-3a2 2 0 0 0-2-2H6"></path>
              <path d="M18 16h-4a2 2 0 0 1-2-2"></path>
              <path d="M12 19a2 2 0 0 0 0-4"></path>
              <circle cx="17" cy="7" r="2"></circle>
              <circle cx="7" cy="7" r="2"></circle>
              <circle cx="12" cy="3" r="2"></circle>
            </svg>`
    },
    {
      id: 'nexus',
      name: 'Nexus',
      description: 'Repository manager for storing and distributing build artifacts and dependencies.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-800">
              <path d="M4 7V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"></path>
              <path d="M2 10h20M19 10v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
              <path d="M12 10v9"></path>
              <path d="M12 4v3"></path>
            </svg>`
    },
    {
      id: 'scripting',
      name: 'Shell/Python',
      description: 'Scripting languages for automation, system administration, and general-purpose tasks.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600">
              <path d="m7 8 3 3 3-3"></path>
              <path d="M17 10h1a2 2 0 0 1 0 4h-1"></path>
              <path d="M9 13h6"></path>
              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
            </svg>`
    },
    {
      id: 'argocd',
      name: 'Argo CD',
      description: 'Declarative GitOps continuous delivery tool for Kubernetes, applying changes to resources automatically.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fuchsia-600">
              <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"></path>
              <path d="M12 9a3 3 0 0 0 0 6 3 3 0 0 0 0-6Z"></path>
              <path d="M6.6 6.6 18 18"></path>
            </svg>`
    },
    {
      id: 'monitoring',
      name: 'Grafana/Prometheus',
      description: 'Open-source monitoring and visualization tools for metrics, alerting, and dashboards.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500">
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
            </svg>`
    }
  ];
  
  // Page content
  mainContainer.innerHTML = `
    <div class="animate-fade-in">
      <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">DevOps Tools and Skills</h1>
      
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <p class="text-gray-700 mb-6">
          Mastering DevOps requires familiarity with a diverse set of tools that cover various aspects of the software development
          lifecycle. Below are essential tools and technologies used in modern DevOps environments.
        </p>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4" id="tools-grid">
          ${tools.map(tool => `
            <div class="tool-card" data-tool-id="${tool.id}">
              ${tool.icon}
              <h3 class="text-lg font-semibold text-gray-800">${tool.name}</h3>
              <p class="text-sm text-gray-600">${tool.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Essential DevOps Skills</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Technical Skills</h3>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500 mt-1">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>Infrastructure as Code</strong>: Automating infrastructure provisioning</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500 mt-1">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>Containerization</strong>: Creating and managing application containers</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500 mt-1">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>CI/CD</strong>: Building and automating deployment pipelines</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500 mt-1">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>Scripting</strong>: Automating repetitive tasks and processes</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500 mt-1">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>Monitoring</strong>: Setting up observability and alerting</span>
              </li>
            </ul>
          </div>
          
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Soft Skills</h3>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal-500 mt-1">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>Collaboration</strong>: Working effectively across development and operations teams</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal-500 mt-1">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>Problem-solving</strong>: Troubleshooting complex systems and infrastructure</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal-500 mt-1">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>Communication</strong>: Clearly articulating technical concepts and solutions</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal-500 mt-1">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>Adaptability</strong>: Quickly learning new tools and technologies</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal-500 mt-1">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>Continuous learning</strong>: Staying current with evolving best practices</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Tool detail modal -->
    <div id="tool-modal" class="modal-overlay">
      <div class="modal-content p-6">
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center gap-3">
            <div id="modal-tool-icon"></div>
            <h2 id="modal-tool-name" class="text-2xl font-semibold text-gray-800"></h2>
          </div>
          <button id="modal-close-btn" class="text-gray-500 hover:text-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div class="mb-6">
          <p id="modal-tool-description" class="text-gray-700"></p>
        </div>
        
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-3">Add Notes</h3>
          <textarea id="tool-notes" class="form-input h-32" placeholder="Type your notes here..."></textarea>
        </div>
        
        <div class="flex space-x-2 justify-end">
          <button id="save-notes-btn" class="btn btn-primary">Save Notes</button>
          <button id="update-notes-btn" class="btn btn-secondary">Update Notes</button>
        </div>
        
        <div class="flex space-x-3 mt-6">
          <a href="#tools" class="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Back to Tools
          </a>
        </div>
      </div>
    </div>
  `;
  
  // Add event listeners for tool cards
  const toolCards = document.querySelectorAll('.tool-card');
  toolCards.forEach(card => {
    card.addEventListener('click', () => {
      const toolId = card.getAttribute('data-tool-id');
      window.location.hash = `tool-detail/${toolId}`;
    });
  });
  
  // Update document title
  document.title = 'DevOps Tools and Skills | DevOps Knowledge Hub';
}