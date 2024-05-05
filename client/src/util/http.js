export async function fetchPodcasts({ pageParam }) {
  const response = await fetch(import.meta.env.VITE_API_URL);
  return response.json();
}
