import { QueryClient } from "@tanstack/react-query";

import { getAuthToken } from "./auth";

export const url = import.meta.env.VITE_API_URL;

export const queryClient = new QueryClient();

export async function fetchPodcasts({ pageParam }) {
  const response = await fetch(url + `/home/podcasts/${pageParam}`, {
    headers: {
      Authorization: "Bearer " + getAuthToken(),
    },
  });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the podcasts");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}

export async function fetchTrendingPodcasts({ pageParam }) {
  const response = await fetch(
    url + `/home/podcasts/trendingPods/${pageParam}`,
    {
      headers: {
        Authorization: "Bearer " + getAuthToken(),
      },
    }
  );

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the podcasts");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}

export async function fetchFavPodcasts() {
  const response = await fetch(url + `/home/fav-podcast/`, {
    headers: {
      Authorization: "Bearer " + getAuthToken(),
    },
  });

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
  const response = await fetch(url + `/home/podcasts/search/${searchTerm}`, {
    headers: {
      Authorization: "Bearer " + getAuthToken(),
    },
    signal: signal,
  });

  if (!response.ok) {
    const error = new Error("An error occurred while searching the podcast");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { podcasts } = await response.json();

  return podcasts;
}

export async function fetchSinglePodcast({ podcastId, signal }) {
  const response = await fetch(url + `/home/podcast/${podcastId}`, {
    headers: {
      Authorization: "Bearer " + getAuthToken(),
    },
    signal: signal,
  });

  if (!response.ok) {
    const error = new Error("An error occurred while searching the podcast");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { podcast } = await response.json();

  return podcast;
}

export async function addViewForPodcast(podcastId) {
  const response = await fetch(url + `/home/podcasts/addView/${podcastId}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + getAuthToken(),
    },
  });

  if (!response.ok) {
    const error = new Error("An error occurred while creating the podcast");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}

export async function addPodcastToFav({ podcastId, signal }) {
  const response = await fetch(url + `/home/podcasts/addToFav/${podcastId}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + getAuthToken(),
    },
    signal: signal,
  });

  if (!response.ok) {
    const error = new Error("An error occurred while creating the podcast");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}
