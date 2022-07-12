export function initializeTheme() {
  const value = getCurrentTheme();
  changeTheme(value);
}

export function getCurrentTheme() {
  return localStorage.getItem("theme") ?? "system";
}

export function changeTheme(newTheme) {
  const adjusted = newTheme === "system" ? getPreferredTheme() : newTheme;
  document.documentElement.className = adjusted;
  localStorage.setItem("theme", newTheme);
}

function getPreferredTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
