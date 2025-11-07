const API_URL = 'http://localhost:3000';

/**
 * Cria um novo recurso no db.json
 * @param {string} resource - O nome do recurso (ex: "ips")
 * @param {object} data - O objeto a ser salvo
 */
async function create(resource, data) {
  try {
    const res = await fetch(`${API_URL}/${resource}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`Erro ao criar: ${res.statusText}`);
    return await res.json();
  } catch (error) {
    console.error('Falha no storage.create:', error);
    return null;
  }
}

/**
 * Lê todos os recursos do db.json
 * @param {string} resource - O nome do recurso (ex: "ips")
 */
async function readAll(resource) {
  try {
    const res = await fetch(`${API_URL}/${resource}`);
    if (!res.ok) throw new Error(`Erro ao ler: ${res.statusText}`);
    return await res.json();
  } catch (error) {
    console.error('Falha no storage.readAll:', error);
    return null;
  }
}

/**
 * Remove um recurso do db.json pelo ID
 * @param {string} resource - O nome do recurso (ex: "ips")
 * @param {number | string} id - O ID do item a ser removido
 */
async function remove(resource, id) {
  try {
    const res = await fetch(`${API_URL}/${resource}/${id}`, {
      method: 'DELETE',
    });
    return res.ok;
  } catch (error) {
    console.error('Falha no storage.remove:', error);
    return false;
  }
}

// Exporta as funções
export default { create, readAll, remove };