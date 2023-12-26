import { ExerciseTrain, filterJsonEquals } from "./utils";

const url = "http://192.168.1.61:8000/api";

export async function getJsonFromAPI(
  dir: string,
  param?: string,
) {
  const response = await fetch(url + "/v1" + dir + "/", {
    method: "GET",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
  const data = await response.json();
  var dataParam = param ? data[param] : data;
  return dataParam;
}

export async function setJsonFromAPI(
  dir: string,
  data: Record<string, any>,
) {
  const response = await fetch(url + "/v1" + dir + "/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  return responseData;
}

export async function deleteFromAPI(
  dir: string,
) {
  fetch(url + "/v1" + dir + "/", {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}

export async function createFromAPI(
  dir: string,
  data: Record<string, any>,
  ) {
  fetch(url + "/v1" + dir + "/", {
    method: "POST",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function setTraining(
  exercises: ExerciseTrain[],
  templateId: number
) {
  fetch(url + `/v1/createTraining/`, {
    method: "POST",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ templateId: templateId, exercises: exercises }),
  }).then((response) => {
    if (response.ok) {
      response.json();
    }
  });
}

export async function getIdByName(
  dir: string,
  name: string,
) {
  const response = await fetch(url + "/v1" + dir + "/", {
    method: "GET",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
  var data = await response.json();
  data = filterJsonEquals(data,[{key: "name", value: name}])
  var id = data[0]["id"]
  return id;
}

export async function getMonthTrainings(
  month: number,
  year: number
): Promise<number[]> {
  const response = await fetch(url + `/v1/monthTrainedDays/${month}/${year}/`, {
    method: "GET",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
  const data: Promise<{ days_trained: number[] }> = response.json();
  return (await data).days_trained;
}

export async function getWeightFromExercise(
  exerciseId?: number
): Promise<number> {
  const response = await fetch(
    url + `/v1/lastWeightFromExercise/${exerciseId}/`,
    {
      method: "GET",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    }
  );
  const data = await response.json();
  return (await data).weight;
}

type Credentials = {
  username: string;
  password: string;
};

export const login = async (credentials: Credentials) => {
  const response = await fetch(url + "/rest-auth/login/", {
    method: "POST",
    credentials: "omit",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Login error");
  }

  const data = await response.json();
  localStorage.setItem("token", data.key);
  return data.key !== "";
};

export const logout = async (): Promise<void> => {
  const response = await fetch(url + "/rest-auth/logout/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + localStorage.getItem("token"),
    },
  });

  if (!response.ok) {
    throw new Error("Logout error");
  }

  localStorage.removeItem("token");
};

export const checkAuth = async (): Promise<boolean> => {
  const response = await fetch(url + "/v1/checkAuth/", {
    method: "POST",
    credentials: "omit",
    headers: {
      Authorization: "Token " + localStorage.getItem("token"),
    },
  });

  return response.status == 200;
};
