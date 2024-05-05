import { getAuthToken } from "./auth";

export async function fetchPodcasts({ pageParam }) {
  const response = await fetch(
    import.meta.env.VITE_API_URL + `/home/podcasts/${pageParam}`
  );
  return response.json();
}

export async function createNewPodcast({ formData }) {
  const response = await fetch(
    import.meta.env.VITE_API_URL + "/admin/add-podcast",
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + getAuthToken(),
      },
      body: formData,
    }
  );

  return response.json();
}
