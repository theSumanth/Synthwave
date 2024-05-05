import { getAuthToken } from "./auth";

const url = import.meta.env.VITE_API_URL;

export async function fetchPodcasts({ pageParam }) {
  const response = await fetch(url + `/home/podcasts/${pageParam}`);

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the podcasts");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}

export async function createNewPodcast({ formData }) {
  const response = await fetch(url + "/admin/add-podcast", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + getAuthToken(),
    },
    body: formData,
  });

  if (!response.ok) {
    const error = new Error("An error occurred while creating the podcast");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}

export async function searchPodcast({ searchTerm, signal }) {
  const response = await fetch(url + `/home/podcasts/${searchTerm}`, {
    signal: signal,
  });

  if (!response.ok) {
    const error = new Error("An error occurred while searching the podcast");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { Podcasts } = await response.json();

  return Podcasts;
}
