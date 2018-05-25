export function normalizeEvent(e) {
  if (e instanceof Event) {
    return e;
  }
  return e.originalEvent;
}
