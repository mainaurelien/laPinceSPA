import { apiBaseUrl } from "./config.js";


export async function getNotifications(token) {
    const res = await fetch(`${apiBaseUrl}api/notifications`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Erreur récupération notifications");
    return res.json();
  }
  
  export async function createNotification(data, token) {
    const res = await fetch(`${apiBaseUrl}api/notifications`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Erreur création notification");
    return res.json();
  }
  
  export async function updateNotification(id, data, token) {
    const res = await fetch(`${apiBaseUrl}api/notifications/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Erreur mise à jour notification");
    return res.json();
  }
  
  export async function markNotificationRead(id, token) {
    const res = await fetch(`${apiBaseUrl}api/notifications/${id}/read`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Erreur marquage comme lu");
    return res.json();
  }
  
  export async function deleteNotification(id, token) {
    const res = await fetch(`${apiBaseUrl}api/notifications/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Erreur suppression notification");
    return res.json();
  }
  