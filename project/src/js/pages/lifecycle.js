// Lifecycle page
import { createImageUpload } from '../components/imageUpload.js';

export function renderLifecyclePage() {
  const mainContainer = document.getElementById('main-container');
  
  // Page content
  mainContainer.innerHTML = `
    <div class="animate-fade-in">
      <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">DevOps Lifecycle and Pipeline</h1>
      
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">The DevOps Lifecycle and Pipeline Explained</h2>
        <p class="text-gray-700 mb-4">
          The DevOps lifecycle represents the continuous process of software development and operations integration. 
          It's characterized by automation, collaboration, and iterative improvement throughout all phases of software delivery.
        </p>
        <p class="text-gray-700 mb-4">
          A well-implemented DevOps pipeline enables teams to deliver features, fixes, and updates more frequently and reliably, 
          improving the overall quality of software while reducing the time-to-market.
        </p>
        <div id="image-upload-container" class="mt-6"></div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Infinity Loop of DevOps</h2>
        <p class="text-gray-700 mb-4">
          The DevOps infinity loop symbolizes the continuous nature of modern software development and operations. 
          It represents the endless cycle of planning, building, testing, deploying, operating, and monitoring, followed by planning again.
        </p>
        <div class="flex justify-center my-6">
          <div class="p-4 bg-gray-50 rounded-lg border border-gray-200 w-full max-w-3xl">
            <div class="flex flex-col md:flex-row justify-center items-center gap-8 py-4">
              <!-- Left side of infinity loop -->
              <div class="flex flex-col items-center">
                <div class="text-blue-600 font-semibold mb-2">Development</div>
                <div class="rounded-full bg-blue-100 p-6 flex flex-col items-center">
                  <div class="flex flex-col gap-3">
                    <div class="flex items-center gap-2">
                      <span class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">1</span>
                      <span>Plan</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">2</span>
                      <span>Code</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">3</span>
                      <span>Build</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">4</span>
                      <span>Test</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Connecting arrow -->
              <div class="hidden md:flex flex-col items-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M8 3L4 7l4 4"></path>
                  <path d="M4 7h16"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transform rotate-180">
                  <path d="M8 3L4 7l4 4"></path>
                  <path d="M4 7h16"></path>
                </svg>
              </div>
              
              <!-- Mobile vertical arrow -->
              <div class="md:hidden flex justify-center text-gray-400 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transform rotate-90">
                  <path d="M8 3L4 7l4 4"></path>
                  <path d="M4 7h16"></path>
                </svg>
              </div>
              
              <!-- Right side of infinity loop -->
              <div class="flex flex-col items-center">
                <div class="text-teal-600 font-semibold mb-2">Operations</div>
                <div class="rounded-full bg-teal-100 p-6 flex flex-col items-center">
                  <div class="flex flex-col gap-3">
                    <div class="flex items-center gap-2">
                      <span class="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white">5</span>
                      <span>Release</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white">6</span>
                      <span>Deploy</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white">7</span>
                      <span>Operate</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white">8</span>
                      <span>Monitor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">8 Phases of DevOps Lifecycle</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Plan -->
          <div class="phase-card border-l-blue-500">
            <h3 class="text-lg font-semibold text-blue-700">1. Plan</h3>
            <p class="text-gray-700 mt-2">
              Define features, requirements, and fixes. Create backlog items, prioritize work, and plan sprints. 
              Tools like Jira, Azure DevOps, or GitHub Projects facilitate this phase.
            </p>
          </div>
          
          <!-- Develop -->
          <div class="phase-card border-l-blue-600">
            <h3 class="text-lg font-semibold text-blue-700">2. Develop</h3>
            <p class="text-gray-700 mt-2">
              Write code based on requirements. Developers use IDEs, version control, and follow coding standards.
              Feature branches and pull requests help maintain code quality.
            </p>
          </div>
          
          <!-- Build -->
          <div class="phase-card border-l-blue-700">
            <h3 class="text-lg font-semibold text-blue-700">3. Build</h3>
            <p class="text-gray-700 mt-2">
              Compile code and create artifacts (binaries, containers, etc). Automated build tools validate
              code and prepare it for testing environments.
            </p>
          </div>
          
          <!-- Test -->
          <div class="phase-card border-l-blue-800">
            <h3 class="text-lg font-semibold text-blue-700">4. Test</h3>
            <p class="text-gray-700 mt-2">
              Verify code quality through automated tests. Unit, integration, system, and acceptance testing
              ensure functionality and performance meet expectations.
            </p>
          </div>
          
          <!-- Release -->
          <div class="phase-card border-l-teal-500">
            <h3 class="text-lg font-semibold text-teal-700">5. Release</h3>
            <p class="text-gray-700 mt-2">
              Package validated code for deployment. This phase includes version control, release notes,
              and approval workflows for production readiness.
            </p>
          </div>
          
          <!-- Deploy -->
          <div class="phase-card border-l-teal-600">
            <h3 class="text-lg font-semibold text-teal-700">6. Deploy</h3>
            <p class="text-gray-700 mt-2">
              Roll out software to production environments. Techniques like blue-green or canary deployments
              minimize disruption and risk to end users.
            </p>
          </div>
          
          <!-- Operate -->
          <div class="phase-card border-l-teal-700">
            <h3 class="text-lg font-semibold text-teal-700">7. Operate</h3>
            <p class="text-gray-700 mt-2">
              Maintain the software in production. This includes user support, system administration, 
              and ensuring availability and performance.
            </p>
          </div>
          
          <!-- Monitor -->
          <div class="phase-card border-l-teal-800">
            <h3 class="text-lg font-semibold text-teal-700">8. Monitor</h3>
            <p class="text-gray-700 mt-2">
              Observe application behavior and gather metrics. Monitoring helps identify issues, 
              measure performance, and inform future improvements.
            </p>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">DevSecOps: Additional Phases</h2>
        <p class="text-gray-700 mb-4">
          DevSecOps integrates security practices within the DevOps pipeline, ensuring that security is addressed
          throughout the development lifecycle rather than as an afterthought.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <h3 class="text-lg font-semibold text-orange-700">Threat Modeling</h3>
            <p class="text-gray-700 mt-2">
              Identifying potential security threats during the planning phase to proactively address vulnerabilities.
            </p>
          </div>
          
          <div class="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <h3 class="text-lg font-semibold text-orange-700">Security Testing</h3>
            <p class="text-gray-700 mt-2">
              Automated security scans and penetration testing integrated into the testing phase.
            </p>
          </div>
          
          <div class="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <h3 class="text-lg font-semibold text-orange-700">Compliance Validation</h3>
            <p class="text-gray-700 mt-2">
              Ensuring that deployments meet industry regulations and security standards before release.
            </p>
          </div>
        </div>
        <p class="text-gray-600 text-sm mt-4 italic">Reference: BrowserStack</p>
      </div>
    </div>
  `;
  
  // Add image upload component
  const imageUploadContainer = document.getElementById('image-upload-container');
  if (imageUploadContainer) {
    imageUploadContainer.appendChild(createImageUpload());
  }
  
  // Update document title
  document.title = 'DevOps Lifecycle and Pipeline | DevOps Knowledge Hub';
}