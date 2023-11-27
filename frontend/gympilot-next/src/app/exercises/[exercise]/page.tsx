
export default function ExercisePage({params}:{params:{exercise:string}}){
    
    return(
        <div><span>{params.exercise}</span></div>
    );
}