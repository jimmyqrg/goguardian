// Detect system dark/light mode and update icon
function updateIcon() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Dark mode
    chrome.action.setIcon({
      path: {
        "16": "icons/favicon-dark.png",
        "32": "icons/favicon-dark.png", 
        "48": "icons/favicon-dark.png",
        "128": "icons/favicon-dark.png"
      }
    });
  } else {
    // Light mode
    chrome.action.setIcon({
      path: {
        "16": "icons/favicon-light.png",
        "32": "icons/favicon-light.png",
        "48": "icons/favicon-light.png",
        "128": "icons/favicon-light.png"
      }
    });
  }
}

// Listen for system theme changes
if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addListener(updateIcon);
}

// Initialize icon on startup
chrome.runtime.onStartup.addListener(updateIcon);
chrome.runtime.onInstalled.addListener(updateIcon);
