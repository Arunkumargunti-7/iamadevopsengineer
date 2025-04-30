// Seven Cs of DevOps page
export function renderSevenCsPage() {
  const mainContainer = document.getElementById('main-container');
  
  // Page content
  mainContainer.innerHTML = `
    <div class="animate-fade-in">
      <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">The 7 C's of DevOps</h1>
      
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <p class="text-gray-700 mb-6">
          The 7 C's of DevOps represent the core principles that guide successful DevOps implementation. 
          Each "C" reflects a critical aspect of the DevOps methodology that organizations must embrace 
          to achieve efficiency, quality, and speed in software delivery.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Continuous Development -->
          <div class="c-card border-t-blue-500 flex flex-col h-full">
            <h3 class="text-xl font-semibold text-blue-700 mb-3">Continuous Development</h3>
            <p class="text-gray-700 flex-grow">
              The practice of constantly developing and improving code in small increments. This allows for faster 
              feedback cycles and reduces the time between identifying a need and delivering a solution.
            </p>
            <div class="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
              <div class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500 mt-0.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>Focuses on agile development methodologies and version control systems like Git</span>
              </div>
            </div>
          </div>
          
          <!-- Continuous Integration -->
          <div class="c-card border-t-blue-600 flex flex-col h-full">
            <h3 class="text-xl font-semibold text-blue-700 mb-3">Continuous Integration</h3>
            <p class="text-gray-700 flex-grow">
              The practice of frequently merging code changes into a central repository, after which automated builds and 
              tests are run. CI helps detect integration issues early and ensures code quality.
            </p>
            <div class="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
              <div class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500 mt-0.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>Tools like Jenkins, GitHub Actions, and CircleCI automate the integration process</span>
              </div>
            </div>
          </div>
          
          <!-- Continuous Testing -->
          <div class="c-card border-t-blue-700 flex flex-col h-full">
            <h3 class="text-xl font-semibold text-blue-700 mb-3">Continuous Testing</h3>
            <p class="text-gray-700 flex-grow">
              The practice of running automated tests throughout the development process to get immediate feedback on 
              business risks associated with a software release candidate.
            </p>
            <div class="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
              <div class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500 mt-0.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>Includes unit, integration, and end-to-end testing frameworks</span>
              </div>
            </div>
          </div>
          
          <!-- Continuous Deployment / Delivery -->
          <div class="c-card border-t-teal-500 flex flex-col h-full">
            <h3 class="text-xl font-semibold text-teal-700 mb-3">Continuous Deployment / Delivery</h3>
            <p class="text-gray-700 flex-grow">
              <strong>Continuous Delivery:</strong> The practice of ensuring that code is always in a deployable state, even 
              in the face of multiple developers making changes simultaneously.
              <br><br>
              <strong>Continuous Deployment:</strong> The practice of automatically deploying every change that passes all tests 
              directly to production, without human intervention.
            </p>
            <div class="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
              <div class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal-500 mt-0.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>Leverages deployment automation and infrastructure as code</span>
              </div>
            </div>
          </div>
          
          <!-- Continuous Monitoring -->
          <div class="c-card border-t-teal-600 flex flex-col h-full">
            <h3 class="text-xl font-semibold text-teal-700 mb-3">Continuous Monitoring</h3>
            <p class="text-gray-700 flex-grow">
              The practice of collecting and analyzing data from infrastructure and applications to identify issues, detect 
              anomalies, and ensure system health. This provides real-time insights into the performance and usage of the software.
            </p>
            <div class="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
              <div class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal-500 mt-0.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>Tools like Prometheus, Grafana, and ELK stack provide monitoring capabilities</span>
              </div>
            </div>
          </div>
          
          <!-- Continuous Feedback -->
          <div class="c-card border-t-teal-700 flex flex-col h-full">
            <h3 class="text-xl font-semibold text-teal-700 mb-3">Continuous Feedback</h3>
            <p class="text-gray-700 flex-grow">
              The practice of continuously gathering, analyzing, and acting on feedback from all stakeholders, including end-users, 
              developers, and operations teams. This ensures that the software meets user needs and business objectives.
            </p>
            <div class="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
              <div class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal-500 mt-0.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>Involves user surveys, application analytics, and team retrospectives</span>
              </div>
            </div>
          </div>
          
          <!-- Continuous Operations -->
          <div class="c-card border-t-teal-800 flex flex-col h-full">
            <h3 class="text-xl font-semibold text-teal-700 mb-3">Continuous Operations</h3>
            <p class="text-gray-700 flex-grow">
              The practice of ensuring that systems remain available and operational at all times, despite updates, 
              maintenance, or failures. This minimizes downtime and maintains service reliability.
            </p>
            <div class="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
              <div class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal-500 mt-0.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>Focuses on techniques like zero-downtime deployments and automated recovery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Benefits of the 7 C's</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">For Organizations</h3>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mt-1">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Faster time-to-market for new features</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mt-1">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Improved software quality and reliability</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mt-1">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Reduced costs through automation and efficiency</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mt-1">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Enhanced ability to respond to market changes</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">For Teams</h3>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mt-1">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Improved collaboration between development and operations</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mt-1">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Reduced manual work through automation</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mt-1">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Greater job satisfaction and reduced burnout</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mt-1">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Faster feedback loops and continuous learning</span>
              </li>
            </ul>
          </div>
        </div>
        <p class="text-gray-600 text-sm mt-6 italic">Content adapted from GeeksforGeeks</p>
      </div>
      
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Implementing the 7 C's</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead class="bg-gray-50">
              <tr>
                <th class="py-3 px-4 text-left border-b">C</th>
                <th class="py-3 px-4 text-left border-b">Key Tools</th>
                <th class="py-3 px-4 text-left border-b">Best Practices</th>
                <th class="py-3 px-4 text-left border-b">Challenges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-3 px-4 border-b font-medium">Continuous Development</td>
                <td class="py-3 px-4 border-b">Git, GitLab, VS Code, Jira</td>
                <td class="py-3 px-4 border-b">Feature branching, code reviews, pair programming</td>
                <td class="py-3 px-4 border-b">Managing technical debt, balancing velocity with quality</td>
              </tr>
              <tr>
                <td class="py-3 px-4 border-b font-medium">Continuous Integration</td>
                <td class="py-3 px-4 border-b">Jenkins, GitHub Actions, GitLab CI, CircleCI</td>
                <td class="py-3 px-4 border-b">Small commits, automated builds, pre-commit hooks</td>
                <td class="py-3 px-4 border-b">Build times, flaky tests, configuration complexity</td>
              </tr>
              <tr>
                <td class="py-3 px-4 border-b font-medium">Continuous Testing</td>
                <td class="py-3 px-4 border-b">Jest, Selenium, Cypress, JUnit</td>
                <td class="py-3 px-4 border-b">Test pyramids, TDD, automated test suites</td>
                <td class="py-3 px-4 border-b">Test coverage, maintenance, environment parity</td>
              </tr>
              <tr>
                <td class="py-3 px-4 border-b font-medium">Continuous Deployment</td>
                <td class="py-3 px-4 border-b">ArgoCD, Spinnaker, AWS CodeDeploy</td>
                <td class="py-3 px-4 border-b">Feature flags, blue-green deployment, canary releases</td>
                <td class="py-3 px-4 border-b">Rollback strategies, database migrations, compliance</td>
              </tr>
              <tr>
                <td class="py-3 px-4 border-b font-medium">Continuous Monitoring</td>
                <td class="py-3 px-4 border-b">Grafana, Prometheus, Datadog, New Relic</td>
                <td class="py-3 px-4 border-b">SLIs/SLOs, alerting, dashboards, log aggregation</td>
                <td class="py-3 px-4 border-b">Alert fatigue, data volume, metric selection</td>
              </tr>
              <tr>
                <td class="py-3 px-4 border-b font-medium">Continuous Feedback</td>
                <td class="py-3 px-4 border-b">UserVoice, HotJar, Pendo, Amplitude</td>
                <td class="py-3 px-4 border-b">A/B testing, user surveys, feature analytics</td>
                <td class="py-3 px-4 border-b">Data privacy, actionable insights, prioritization</td>
              </tr>
              <tr>
                <td class="py-3 px-4 font-medium">Continuous Operations</td>
                <td class="py-3 px-4">Kubernetes, Terraform, Ansible, PagerDuty</td>
                <td class="py-3 px-4">IaC, auto-scaling, chaos engineering, SRE practices</td>
                <td class="py-3 px-4">24/7 availability, incident response, cost management</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
  
  // Update document title
  document.title = 'The 7 C\'s of DevOps | DevOps Knowledge Hub';
}