// Image upload component
export function createImageUpload() {
  // Create container
  const container = document.createElement('div');
  container.className = 'my-6 p-6 bg-gray-50 rounded-lg border border-dashed border-gray-300';
  
  // Initialize state
  let imageData = {
    file: null,
    preview: null
  };
  
  // Load existing data from localStorage if available
  const savedImage = localStorage.getItem('devops-uploaded-image');
  if (savedImage) {
    try {
      imageData = JSON.parse(savedImage);
    } catch (e) {
      console.error('Error loading saved image data', e);
    }
  }
  
  // Render component
  function render() {
    container.innerHTML = `
      <h3 class="text-lg font-medium text-gray-800 mb-4">Upload Pipeline Visualization</h3>
      
      ${imageData.preview ? `
        <div class="mb-4">
          <div class="relative">
            <img src="${imageData.preview}" alt="Uploaded visualization" class="max-w-full rounded-lg shadow-sm mb-2" />
            <button class="remove-image-btn absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-red-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-500">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <p class="text-sm text-gray-500">${imageData.file ? imageData.file.name : 'Saved image'}</p>
        </div>
      ` : `
        <div class="mb-4">
          <div class="flex items-center justify-center w-full">
            <label class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-50 transition-colors">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400 mb-2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 2MB)</p>
              </div>
              <input id="image-upload" type="file" class="hidden" accept="image/*" />
            </label>
          </div>
        </div>
      `}
      
      <div class="flex space-x-2">
        <button class="btn btn-primary save-image-btn ${!imageData.preview ? 'opacity-50 cursor-not-allowed' : ''}">
          Save
        </button>
        <button class="btn btn-secondary update-image-btn ${!imageData.preview ? 'opacity-50 cursor-not-allowed' : ''}">
          Update
        </button>
      </div>
    `;
    
    // Add event listeners
    if (!imageData.preview) {
      const uploadInput = container.querySelector('#image-upload');
      if (uploadInput) {
        uploadInput.addEventListener('change', handleImageUpload);
      }
    } else {
      const removeBtn = container.querySelector('.remove-image-btn');
      if (removeBtn) {
        removeBtn.addEventListener('click', handleRemoveImage);
      }
      
      const saveBtn = container.querySelector('.save-image-btn');
      if (saveBtn) {
        saveBtn.addEventListener('click', handleSaveImage);
      }
      
      const updateBtn = container.querySelector('.update-image-btn');
      if (updateBtn) {
        updateBtn.addEventListener('click', handleUpdateImage);
      }
    }
  }
  
  // Handle image upload
  function handleImageUpload(e) {
    const file = e.target.files[0];
    
    if (file) {
      // Validate file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('File is too large. Maximum size is 2MB.');
        return;
      }
      
      const reader = new FileReader();
      
      reader.onload = function(event) {
        imageData = {
          file: {
            name: file.name,
            type: file.type,
            size: file.size
          },
          preview: event.target.result
        };
        
        render();
      };
      
      reader.readAsDataURL(file);
    }
  }
  
  // Handle image removal
  function handleRemoveImage() {
    imageData = {
      file: null,
      preview: null
    };
    
    localStorage.removeItem('devops-uploaded-image');
    render();
  }
  
  // Handle image save
  function handleSaveImage() {
    if (imageData.preview) {
      localStorage.setItem('devops-uploaded-image', JSON.stringify(imageData));
      alert('Image saved successfully!');
    }
  }
  
  // Handle image update
  function handleUpdateImage() {
    // Simply show the file input again
    imageData = {
      file: null,
      preview: null
    };
    
    render();
    
    // Focus on the file input
    setTimeout(() => {
      const uploadInput = container.querySelector('#image-upload');
      if (uploadInput) {
        uploadInput.click();
      }
    }, 0);
  }
  
  // Initial render
  render();
  
  return container;
}