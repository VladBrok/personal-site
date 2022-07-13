const URL = "https://getform.io/f/966b8de8-298d-432c-859e-cb5758b19e92";

export function sendEmail(formData) {
  return fetch(URL, { method: "POST", body: formData });
}
