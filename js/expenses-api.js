import { apiBaseUrl } from "./config.js";
export async function getExpenses(token) {
    const res = await fetch(`${apiBaseUrl}api/expenses`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Erreur chargement dépenses");
    return res.json();
  }
  
  export async function getExpense(id, token) {
    const res = await fetch(`${apiBaseUrl}api/expenses/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Erreur récupération dépense");
    return res.json();
  }
  
  export async function createExpense(data, token) {
    const res = await fetch(`${apiBaseUrl}api/expenses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Erreur ajout dépense");
    return res.json();
  }
  
  export async function updateExpense(id, data, token) {
    const res = await fetch(`${apiBaseUrl}api/expenses/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Erreur modification dépense");
    return res.json();
  }
  
  export async function deleteExpense(id, token) {
    const res = await fetch(`${apiBaseUrl}api/expenses/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Erreur suppression dépense");
    return res.json();
  }