const url = "http://localhost:8000"

export async function getMonthTrainings(month:number, year:number): Promise<number[]>{
    const response= await fetch(url + `/api/v1/monthTrainedDays/${month}/${year}/`);
    const data:Promise<{days_trained:number[]}> = response.json();
    return (await data).days_trained;
}