const TODO_URL = 'http://localhost:3000/todos';

export async function createTodoAsync(todo) {
  const res = await fetch(TODO_URL, {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: { 'Content-Type': 'application/json' }
  });

  return res.json();
}

export async function updateTodoAsync(id, todo) {
  const res = await fetch(`${TODO_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(todo),
    headers: { 'Content-Type': 'application/json' }
  });

  return res.json();
}

export async function deleteTodoAsync(id) {
  const res = await fetch(`${TODO_URL}/${id}`, {
    method: 'DELETE',
  });

  return res.json();
}

export async function getTodosAsync() {
  const res = await fetch(TODO_URL);

  return res.json();
}

export async function getTodoAsync(id) {
  const res = await fetch(`${TODO_URL}/${id}`);

  return res.json();
}
