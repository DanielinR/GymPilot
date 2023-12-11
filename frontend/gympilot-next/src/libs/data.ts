import { ExerciseTrain } from "./utils";

const url = "http://192.168.1.61:8000/api";

export async function getJsonFromAPI(
  dir: string,
  param?: string,
  search?: string,
  searchBy?: string
) {
  const response = await fetch(url + "/v1" + dir + "/", {
    method: "GET",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
  const data = await response.json();
  const dataParam = param ? data[param] : data;
  return search && searchBy
    ? dataParam.filter((item: any) =>
        item[searchBy].toLowerCase().includes(search.toLowerCase())
      )
    : dataParam;
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
  const response = await fetch(url + `/v1/lastWeightFromExercise/${exerciseId}/`, {
    method: "GET",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
  const data = await response.json();
  return (await data).weight;
}

export async function setTraining(
  exercises: ExerciseTrain[],
  templateId: number,
){
  fetch(url + `/v1/createTraining/`, {
    method: "POST",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
      "Content-Type": 'application/json',
    },
    body: JSON.stringify({"templateId": templateId, "exercises": exercises}),
  }).then(response => {
    if (response.ok){
      response.json()
    }
  })
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
  })

  return response.status == 200
};