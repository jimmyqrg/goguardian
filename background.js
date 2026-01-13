// Update extension icon based on Chrome theme
function updateIcon() {
  chrome.theme.getCurrent((theme) => {
    // If toolbar color exists, Chrome is likely in dark mode
    const isDark = !!theme.colors?.toolbar;

    chrome.action.setIcon({
      path: {
        "16": isDark ? "icons/favicon-dark.png" : "icons/favicon-light.png",
        "32": isDark ? "icons/favicon-dark.png" : "icons/favicon-light.png",
        "48": isDark ? "icons/favicon-dark.png" : "icons/favicon-light.png",
        "128": isDark ? "icons/favicon-dark.png" : "icons/favicon-light.png"
      }
    });
  });
}

// Run when extension is installed
chrome.runtime.onInstalled.addListener(() => {
  updateIcon();
});

// Run when Chrome starts
chrome.runtime.onStartup.addListener(() => {
  updateIcon();
});

// Run when the browser theme changes
chrome.theme.onUpdated.addListener(() => {
  updateIcon();
});
