export function listenBreakpointChange(minWidth, onMatch) {
  const breakpoint = window.matchMedia(`(min-width: ${minWidth})`);

  function checkMatch() {
    if (breakpoint.matches) {
      onMatch();
    }
  }

  breakpoint.addEventListener("change", checkMatch);
  return () => breakpoint.removeEventListener("change", checkMatch);
}
