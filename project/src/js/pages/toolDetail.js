// Tool detail page
import { navigateTo } from '../router.js';

export function renderToolDetailPage(toolId) {
  const mainContainer = document.getElementById('main-container');
  
  // Get tool data
  const tool = getToolById(toolId);
  
  if (!tool) {
    mainContainer.innerHTML = `
      <div class="bg-white rounded-lg shadow-md p-6 text-center">
        <h1 class="text-2xl font-bold text-gray-800 mb-4">Tool Not Found</h1>
        <p class="text-gray-700 mb-6">The tool you're looking for could not be found.</p>
        <a href="#tools" class="btn btn-primary">Back to Tools</a>
      </div>
    `;
    return;
  }
  
  // Get saved notes if available
  const savedNotes = localStorage.getItem(`devops-tool-notes-${toolId}`);
  
  // Page content
  mainContainer.innerHTML = `
    <div class="animate-fade-in">
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
          <div class="flex items-center gap-3 mb-4 sm:mb-0">
            ${tool.icon}
            <h1 class="text-2xl font-bold text-gray-800">${tool.name}</h1>
          </div>
          
          <a href="#tools" class="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Back to Tools
          </a>
        </div>
        
        <p class="text-gray-700 mb-6">${tool.description}</p>
        
        <div class="mb-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-3">Add Notes</h2>
          <textarea id="tool-notes" class="form-input h-32" placeholder="Type your notes about ${tool.name} here...">${savedNotes || ''}</textarea>
        </div>
        
        <div class="flex space-x-2">
          <button id="save-notes-btn" class="btn btn-primary">Save Notes</button>
          <button id="update-notes-btn" class="btn btn-secondary">Update Notes</button>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Key Features</h2>
        ${getToolFeatures(toolId)}
      </div>
      
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Related Tools</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          ${getRelatedTools(toolId).map(relatedTool => `
            <div class="tool-card" data-tool-id="${relatedTool.id}">
              ${relatedTool.icon}
              <h3 class="text-lg font-semibold text-gray-800">${relatedTool.name}</h3>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  
  // Add event listeners
  document.getElementById('save-notes-btn').addEventListener('click', () => {
    const notes = document.getElementById('tool-notes').value;
    
    // Save notes to localStorage
    localStorage.setItem(`devops-tool-notes-${toolId}`, notes);
    
    // Navigate to notes page
    navigateTo(`tool-notes/${toolId}`);
  });
  
  document.getElementById('update-notes-btn').addEventListener('click', () => {
    const notes = document.getElementById('tool-notes').value;
    
    // Save notes to localStorage
    localStorage.setItem(`devops-tool-notes-${toolId}`, notes);
    
    // Show confirmation message
    alert('Notes updated successfully!');
  });
  
  // Add event listeners for related tool cards
  const toolCards = document.querySelectorAll('.tool-card');
  toolCards.forEach(card => {
    card.addEventListener('click', () => {
      const relatedToolId = card.getAttribute('data-tool-id');
      window.location.hash = `tool-detail/${relatedToolId}`;
    });
  });
  
  // Update document title
  document.title = `${tool.name} | DevOps Knowledge Hub`;
}

// Get tool by ID
function getToolById(toolId) {
  // This would be better as a proper import from a data file
  // but for simplicity we're redeclaring the array
  
  const tools = [
    {
      id: 'aws',
      name: 'AWS',
      description: 'Amazon Web Services (AWS) is a comprehensive cloud platform providing over 200 services from data centers globally. It offers tools for compute, storage, databases, analytics, networking, mobile, IoT, security, and more, enabling faster development and scaling of applications.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500">
              <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z"></path>
              <path d="M19.13 5.09C15.22 9.14 10.77 12.17 5.87 14.25"></path>
              <path d="M23 6c0 9-3.75 22-6 22s-9-13-9-22 1.75-6 9-6 6 1.75 6 6Z"></path>
            </svg>`
    },
    {
      id: 'linux',
      name: 'Linux',
      description: 'Linux is an open-source operating system kernel that forms the foundation of various distributions. In DevOps, Linux serves as the primary platform for hosting applications, containers, and tools due to its stability, security, and flexibility. Most cloud infrastructure and server environments run on Linux systems.',
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
      description: 'Apache Maven is a build automation and project management tool primarily used for Java projects. It simplifies the build process by handling dependencies, compilation, testing, and deployment from a central piece of configuration (the pom.xml file). Maven follows a convention over configuration approach to standardize project structure.',
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
      description: 'Jenkins is an open-source automation server that helps automate the building, testing, and deploying of software. It provides hundreds of plugins to support various technologies and allows teams to implement continuous integration and continuous delivery (CI/CD) pipelines through both declarative and scripted approaches.',
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
      description: 'Ansible is an open-source automation platform that simplifies infrastructure management, application deployment, and task automation. It uses a declarative language to describe system configurations, making complex IT workflows easier to manage. Ansible is agentless, meaning it doesn\'t require software to be installed on managed nodes.',
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
      description: 'Docker is a platform that enables developers to package applications with all dependencies into standardized units called containers. These containers allow applications to run consistently across different environments, from development to production. Docker simplifies deployment and improves resource utilization compared to traditional virtual machines.',
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
      description: 'Kubernetes (K8s) is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It groups containers into logical units for management and discovery, handles service discovery and load balancing, and provides self-healing capabilities for container failures.',
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
      description: 'Terraform is an Infrastructure as Code (IaC) tool that enables users to define and provision data center infrastructure using a declarative configuration language. It allows for creating, changing, and versioning infrastructure safely and efficiently across multiple cloud providers and services through a consistent workflow.',
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
      description: 'Apache Tomcat is an open-source implementation of the Java Servlet, JavaServer Pages, and WebSocket technologies. It provides a pure Java HTTP web server environment for running Java code. Tomcat is widely used in DevOps environments for deploying and running Java web applications.',
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
      description: 'Microsoft Azure is a cloud computing service for building, testing, deploying, and managing applications and services through Microsoft-managed data centers. It provides a wide range of cloud services, including compute, analytics, storage, and networking, with integrated DevOps tools for continuous integration and delivery.',
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
      description: 'SonarQube is an open-source platform for continuous inspection of code quality and security. It performs automatic reviews with static analysis to detect bugs, code smells, and security vulnerabilities in 20+ programming languages. SonarQube provides detailed reports and integrates with popular CI/CD tools.',
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
      description: 'Nexus Repository Manager is a repository manager that organizes, stores, and distributes artifacts needed for development. It supports various package formats like Maven, npm, Docker, NuGet, and more. In DevOps environments, Nexus serves as a central repository for binary components while improving build performance and efficiency.',
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
      description: 'Shell and Python scripting are essential skills in DevOps for automating repetitive tasks and system administration. Shell scripts (Bash, Zsh, PowerShell) interact directly with the operating system, while Python offers more complex functionality with libraries for system management, data processing, and API interactions.',
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
      description: 'Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes. It automates the deployment of applications by monitoring Git repositories for changes to the desired application state and applying those changes to the cluster. Argo CD provides visualization, automated sync, and rollback capabilities for Kubernetes resources.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fuchsia-600">
              <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"></path>
              <path d="M12 9a3 3 0 0 0 0 6 3 3 0 0 0 0-6Z"></path>
              <path d="M6.6 6.6 18 18"></path>
            </svg>`
    },
    {
      id: 'monitoring',
      name: 'Grafana/Prometheus',
      description: 'Grafana and Prometheus form a powerful monitoring stack. Prometheus collects and stores metrics as time-series data, with a flexible query language and alerting capabilities. Grafana provides visualization through customizable dashboards, supporting multiple data sources. Together, they enable comprehensive monitoring of infrastructure and applications.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500">
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
            </svg>`
    }
  ];
  
  return tools.find(t => t.id === toolId);
}

// Get tool features
function getToolFeatures(toolId) {
  // Return features for specific tools
  switch (toolId) {
    case 'aws':
      return `
        <ul class="space-y-2">
          <li class="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500 mt-1">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <div>
              <span class="font-medium">Elastic Compute Cloud (EC2)</span>
              <p class="text-sm text-gray-600">Virtual servers in the cloud for running applications</p>
            </div>
          </li>
          <li class="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500 mt-1">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <div>
              <span class="font-medium">Simple Storage Service (S3)</span>
              <p class="text-sm text-gray-600">Object storage for storing and retrieving data</p>
            </div>
          </li>
          <li class="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500 mt-1">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <div>
              <span class="font-medium">Lambda</span>
              <p class="text-sm text-gray-600">Serverless compute service for running code without provisioning servers</p>
            </div>
          </li>
          <li class="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500 mt-1">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <div>
              <span class="font-medium">CloudFormation</span>
              <p class="text-sm text-gray-600">Infrastructure as Code service for provisioning AWS resources</p>
            </div>
          </li>
        </ul>
      `;
    case 'docker':
      return `
        <ul class="space-y-2">
          <li class="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500 mt-1">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <div>
              <span class="font-medium">Containerization</span>
              <p class="text-sm text-gray-600">Package applications with dependencies into isolated containers</p>
            </div>
          </li>
          <li class="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500 mt-1">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <div>
              <span class="font-medium">Dockerfile</span>
              <p class="text-sm text-gray-600">Text file containing instructions to build a Docker image</p>
            </div>
          </li>
          <li class="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500 mt-1">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <div>
              <span class="font-medium">Docker Compose</span>
              <p class="text-sm text-gray-600">Tool for defining and running multi-container Docker applications</p>
            </div>
          </li>
          <li class="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500 mt-1">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <div>
              <span class="font-medium">Docker Hub</span>
              <p class="text-sm text-gray-600">Cloud-based repository for sharing container images</p>
            </div>
          </li>
        </ul>
      `;
    case 'kubernetes':
      return `
        <ul class="space-y-2">
          <li class="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600 mt-1">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <div>
              <span class="font-medium">Container Orchestration</span>
              <p class="text-sm text-gray-600">Automated deployment, scaling, and management of containerized applications</p>
            </div>
          </li>
          <li class="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600 mt-1">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <div>
              <span class="font-medium">Self-healing</span>
              <p class="text-sm text-gray-600">Automatically replaces and reschedules containers when nodes fail</p>
            </div>
          </li>
          <li class="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600 mt-1">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <div>
              <span class="font-medium">Horizontal Scaling</span>
              <p class="text-sm text-gray-600">Scale applications up or down based on demand</p>
            </div>
          </li>
          <li class="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600 mt-1">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <div>
              <span class="font-medium">Service Discovery</span>
              <p class="text-sm text-gray-600">Automatically discover and communicate with services within the cluster</p>
            </div>
          </li>
        </ul>
      `;
    case 'jenkins':
      return `
        <ul class="space-y-2">
          <li class="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-700 mt-1">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <div>
              <span class="font-medium">CI/CD Pipelines</span>
              <p class="text-sm text-gray-600">Automated build, test, and deployment workflows</p>
            </div>
          </li>
          <li class="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-700 mt-1">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <div>
              <span class="font-medium">Jenkinsfile</span>
              <p class="text-sm text-gray-600">Define pipeline as code using Groovy syntax</p>
            </div>
          </li>
          <li class="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-700 mt-1">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <div>
              <span class="font-medium">Plugin Ecosystem</span>
              <p class="text-sm text-gray-600">Extensive library of plugins for integration with various tools</p>
            </div>
          </li>
          <li class="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-700 mt-1">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <div>
              <span class="font-medium">Distributed Builds</span>
              <p class="text-sm text-gray-600">Distribute build jobs across multiple agents for faster execution</p>
            </div>
          </li>
        </ul>
      `;
    // Default case for other tools
    default:
      return `
        <div class="bg-gray-50 p-4 rounded-lg text-center">
          <p class="text-gray-700">Detailed features for this tool are coming soon!</p>
          <p class="text-sm text-gray-500 mt-2">Add your own notes to keep track of key features you discover.</p>
        </div>
      `;
  }
}

// Get related tools
function getRelatedTools(toolId) {
  // Define related tools for each tool
  const relatedTools = {
    'aws': ['kubernetes', 'terraform', 'monitoring'],
    'linux': ['scripting', 'docker', 'ansible'],
    'maven': ['jenkins', 'nexus', 'tomcat'],
    'jenkins': ['docker', 'maven', 'sonarqube'],
    'ansible': ['terraform', 'linux', 'scripting'],
    'docker': ['kubernetes', 'jenkins', 'linux'],
    'kubernetes': ['docker', 'argocd', 'monitoring'],
    'terraform': ['aws', 'ansible', 'azure'],
    'tomcat': ['maven', 'jenkins', 'monitoring'],
    'azure': ['terraform', 'kubernetes', 'monitoring'],
    'sonarqube': ['jenkins', 'maven', 'nexus'],
    'nexus': ['maven', 'jenkins', 'docker'],
    'scripting': ['linux', 'ansible', 'jenkins'],
    'argocd': ['kubernetes', 'docker', 'jenkins'],
    'monitoring': ['kubernetes', 'aws', 'azure']
  };
  
  // Get the related tool IDs
  const relatedToolIds = relatedTools[toolId] || ['jenkins', 'docker', 'kubernetes'];
  
  // Get the full tool objects
  return relatedToolIds.map(id => getToolById(id)).filter(Boolean);
}