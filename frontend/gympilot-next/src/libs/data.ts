const url = "http://localhost:8000";

export async function getJsonFromAPI(dir: string, param?: string, search?: string, searchBy?:string) {
  const response = await fetch(url + "/api/v1" + dir + "/");
  const data = await response.json();
  const dataParam = param ? data[param] : data;
  return (search && searchBy)? dataParam.filter((item:any) => item[searchBy].toLowerCase().includes(search.toLowerCase())) : dataParam
}

export async function getMonthTrainings(
  month: number,
  year: number
): Promise<number[]> {
  const response = await fetch(
    url + `/api/v1/monthTrainedDays/${month}/${year}/`
  );
  const data: Promise<{ days_trained: number[] }> = response.json();
  return (await data).days_trained;
}

// export async function getExercisesFromType(typeId: number) {
//   const response = await fetch(
//     url + `/api/v1/exerciseTypes/${typeId}/`
//   );
//   const data = await response.json();
//   return data;
// }
