async function ensureOffscreen() {
  const exists = await chrome.offscreen.hasDocument();
  if (exists) return;

  await chrome.offscreen.createDocument({
    url: "offscreen.html",
    reasons: ["MATCH_MEDIA"],
    justification: "Detect system light/dark mode"
  });
}

function setIcon(isDark) {
  chrome.action.setIcon({
    path: {
      "16": isDark ? "icons/favicon-dark.png" : "icons/favicon-light.png",
      "32": isDark ? "icons/favicon-dark.png" : "icons/favicon-light.png",
      "48": isDark ? "icons/favicon-dark.png" : "icons/favicon-light.png",
      "128": isDark ? "icons/favicon-dark.png" : "icons/favicon-light.png"
    }
  });
}

chrome.runtime.onInstalled.addListener(ensureOffscreen);
chrome.runtime.onStartup.addListener(ensureOffscreen);

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "theme") {
    setIcon(msg.dark);
  }
});
