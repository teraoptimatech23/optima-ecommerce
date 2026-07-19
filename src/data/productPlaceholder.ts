/**
 * Self-contained placeholder "photo" for dummy product data — a soft
 * gradient data URI. No real product photography ships with this repo.
 */
export const productPlaceholder = (from: string, to: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs><rect width="400" height="500" fill="url(#g)"/></svg>`,
  )}`
