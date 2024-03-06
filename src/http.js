const LOCAL_HOST = "http://localhost:3000";

async function fetchPlaces(url, errmsg) {
  const response = await fetch(LOCAL_HOST + url);
  if (!response.ok) {
    throw new Error(errmsg);
  }
  const data = await response.json();
  return data.places;
}

export async function fetchAvailablePlaces() {
  return await fetchPlaces("/places", "Error on fetch from /places");
}

export async function fetchUserPlaces() {
  return await fetchPlaces("/user-places", "Error on fetch from /user-places");
}

export async function UpdateUserPlaces(places) {
  const response = await fetch(LOCAL_HOST + "/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Error on update user places from /user-places");
  }
  const data = await response.json();
  return data.message;
}
