import { apiBaseUrl } from "./config.js";


export async function register(email, password) {
  const res = await fetch(`${apiBaseUrl}api/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error("Échec de l'inscription");
  return res.json();
}

export async function login(email, password) {
  const res = await fetch(`${apiBaseUrl}api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error("Connexion échouée");
  return res.json(); // => { token }
}

export async function getUser(token) {
  const res = await fetch(`${apiBaseUrl}api/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Impossible de récupérer l'utilisateur");
  return res.json();
}

export async function updateUser(data, token) {
  const res = await fetch(`${apiBaseUrl}api/user`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Erreur lors de la mise à jour du profil");
  return res.json();
}

export async function deleteUser(token) {
  const res = await fetch(`${apiBaseUrl}api/user`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Suppression de compte échouée");
  return res.json();
}

