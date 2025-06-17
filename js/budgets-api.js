import { apiBaseUrl } from "./config.js";


export async function getBudgets(token) {
    const res = await fetch(`${apiBaseUrl}api/budgets`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Échec du chargement des budgets");
    return res.json();
  }
  
  export async function createBudget(data, token) {
    const res = await fetch(`${apiBaseUrl}api/budgets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Erreur création budget");
    return res.json();
  }
  
  export async function updateBudget(id, data, token) {
    const res = await fetch(`${apiBaseUrl}api/budgets/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Erreur mise à jour budget");
    return res.json();
  }
  
  export async function deleteBudget(id, token) {
    const res = await fetch(`${apiBaseUrl}api/budgets/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Erreur suppression budget");
    return res.json();
  }