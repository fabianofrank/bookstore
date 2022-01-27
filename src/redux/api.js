const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qzF116mXQUCC6fhFwkRF/books';

// GET
export const fetchBook = async () => {
  const response = await fetch(baseURL);
  return response.json();
};

// POST
export const postBook = async (newBook) => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
  });
  return response.json();
};

// DELETE
export const deleteBook = async (id) => {
  const response = await fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
  });
  return response;
};

export default { fetchBook, postBook, deleteBook };
