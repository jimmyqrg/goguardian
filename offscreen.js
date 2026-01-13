function reportTheme() {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  chrome.runtime.sendMessage({
    type: "theme",
    dark: isDark
  });
}

reportTheme();

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", reportTheme);
