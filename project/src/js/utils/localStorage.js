// LocalStorage utility functions

/**
 * Save data to localStorage with a specific key
 * @param {string} key - The key to store the data under
 * @param {any} data - The data to store
 * @returns {boolean} - True if successful, false otherwise
 */
export function saveToLocalStorage(key, data) {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
    return true;
  } catch (error) {
    console.error('Error saving to localStorage', error);
    return false;
  }
}

/**
 * Load data from localStorage
 * @param {string} key - The key to retrieve data for
 * @param {any} defaultValue - The default value to return if key doesn't exist
 * @returns {any} - The stored data or defaultValue
 */
export function loadFromLocalStorage(key, defaultValue = null) {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) {
      return defaultValue;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error('Error loading from localStorage', error);
    return defaultValue;
  }
}

/**
 * Remove data from localStorage
 * @param {string} key - The key to remove
 * @returns {boolean} - True if successful, false otherwise
 */
export function removeFromLocalStorage(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Error removing from localStorage', error);
    return false;
  }
}

/**
 * Clear all data from localStorage
 * @returns {boolean} - True if successful, false otherwise
 */
export function clearLocalStorage() {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    console.error('Error clearing localStorage', error);
    return false;
  }
}