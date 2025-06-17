import { apiBaseUrl } from "./config.js";


export async function getCategories(token) {
    const res = await fetch(`${apiBaseUrl}api/categories`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Erreur chargement catégories");
    return res.json();
  }