// Tool notes page
export function renderToolNotesPage(toolId) {
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
  
  // Get saved notes
  const savedNotes = localStorage.getItem(`devops-tool-notes-${toolId}`) || '';
  
  // Page content
  mainContainer.innerHTML = `
    <div class="animate-fade-in">
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
          <div class="flex items-center gap-3 mb-4 sm:mb-0">
            ${tool.icon}
            <h1 class="text-2xl font-bold text-gray-800">${tool.name} Notes</h1>
          </div>
          
          <div class="flex space-x-3">
            <a href="#tool-detail/${toolId}" class="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              Back to Details
            </a>
            
            <a href="#tools" class="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              All Tools
            </a>
          </div>
        </div>
        
        <div class="mb-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-3">Your Notes</h2>
          <div class="bg-gray-50 p-4 rounded-lg min-h-[200px] whitespace-pre-wrap">
            ${savedNotes || '<p class="text-gray-500 italic">No notes saved yet.</p>'}
          </div>
        </div>
        
        <div class="flex space-x-2">
          <a href="#tool-detail/${toolId}" class="btn btn-primary">Edit Notes</a>
          <button id="delete-notes-btn" class="btn btn-danger">Delete Notes</button>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Quick Reference</h2>
        ${getToolReference(toolId)}
      </div>
    </div>
  `;
  
  // Add event listener for delete button
  document.getElementById('delete-notes-btn').addEventListener('click', () => {
    // Confirm deletion
    const confirmed = confirm('Are you sure you want to delete your notes for this tool?');
    
    if (confirmed) {
      // Remove notes from localStorage
      localStorage.removeItem(`devops-tool-notes-${toolId}`);
      
      // Navigate back to tool detail
      window.location.hash = `tool-detail/${toolId}`;
    }
  });
  
  // Update document title
  document.title = `${tool.name} Notes | DevOps Knowledge Hub`;
}

// Get tool by ID
function getToolById(toolId) {
  // This would be better as a proper import from a data file
  // but for simplicity we're redeclaring the array
  
  const tools = [
    {
      id: 'aws',
      name: 'AWS',
      description: 'Amazon Web Services (AWS) is a comprehensive cloud platform providing over 200 services from data centers globally.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500">
              <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z"></path>
              <path d="M19.13 5.09C15.22 9.14 10.77 12.17 5.87 14.25"></path>
              <path d="M23 6c0 9-3.75 22-6 22s-9-13-9-22 1.75-6 9-6 6 1.75 6 6Z"></path>
            </svg>`
    },
    {
      id: 'linux',
      name: 'Linux',
      description: 'Open-source operating system kernel that forms the foundation of various distributions.',
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
      description: 'Build automation and project management tool primarily used for Java projects.',
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
      description: 'Open-source automation server that helps automate the building, testing, and deploying of software.',
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
      description: 'Open-source automation platform that simplifies infrastructure management, application deployment, and task automation.',
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
      description: 'Platform that enables developers to package applications with all dependencies into standardized units called containers.',
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
      description: 'Open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.',
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
      description: 'Infrastructure as Code (IaC) tool that enables users to define and provision data center infrastructure.',
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
      description: 'Open-source implementation of the Java Servlet, JavaServer Pages, and WebSocket technologies.',
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
      description: 'Microsoft\'s cloud computing service for building, testing, deploying, and managing applications and services.',
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
      description: 'Open-source platform for continuous inspection of code quality and security.',
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
      description: 'Repository manager that organizes, stores, and distributes artifacts needed for development.',
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
      description: 'Shell and Python scripting are essential skills in DevOps for automating repetitive tasks and system administration.',
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
      description: 'Declarative, GitOps continuous delivery tool for Kubernetes.',
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
  
  return tools.find(t => t.id === toolId);
}

// Get tool reference information
function getToolReference(toolId) {
  // Return reference information for specific tools
  switch (toolId) {
    case 'aws':
      return `
        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="text-lg font-semibold text-gray-800 mb-3">Common CLI Commands</h3>
          <div class="bg-gray-800 text-gray-200 p-3 rounded text-sm font-mono overflow-x-auto">
            <pre># List EC2 instances
aws ec2 describe-instances

# Create an S3 bucket
aws s3 mb s3://my-bucket-name

# Upload a file to S3
aws s3 cp myfile.txt s3://my-bucket-name/

# List Lambda functions
aws lambda list-functions</pre>
          </div>
        </div>
      `;
    case 'docker':
      return `
        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="text-lg font-semibold text-gray-800 mb-3">Common Docker Commands</h3>
          <div class="bg-gray-800 text-gray-200 p-3 rounded text-sm font-mono overflow-x-auto">
            <pre># Run a container
docker run -d -p 8080:80 nginx

# List running containers
docker ps

# Build an image
docker build -t myapp:latest .

# Stop a container
docker stop container_id

# Remove a container
docker rm container_id</pre>
          </div>
        </div>
      `;
    case 'kubernetes':
      return `
        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="text-lg font-semibold text-gray-800 mb-3">Common kubectl Commands</h3>
          <div class="bg-gray-800 text-gray-200 p-3 rounded text-sm font-mono overflow-x-auto">
            <pre># Get all pods
kubectl get pods

# Create resources from a YAML file
kubectl apply -f deployment.yaml

# Get pod logs
kubectl logs pod_name

# Port forward to a pod
kubectl port-forward pod_name 8080:80

# Describe a resource
kubectl describe pod pod_name</pre>
          </div>
        </div>
      `;
    case 'jenkins':
      return `
        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="text-lg font-semibold text-gray-800 mb-3">Jenkins Pipeline Syntax</h3>
          <div class="bg-gray-800 text-gray-200 p-3 rounded text-sm font-mono overflow-x-auto">
            <pre>pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm run deploy'
            }
        }
    }
}</pre>
          </div>
        </div>
      `;
    // Default case for other tools
    default:
      return `
        <div class="bg-gray-50 p-4 rounded-lg text-center">
          <p class="text-gray-700">Quick reference for this tool is coming soon!</p>
          <p class="text-sm text-gray-500 mt-2">Add your own notes to create a personalized reference guide.</p>
        </div>
      `;
  }
}