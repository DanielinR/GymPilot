import MyWordcloud from "../Charts/MyWordcloud";

export default function ExerciseBySets() {
  const words = 'Hola me llamo daniel estos ejercicios y daniel hehe entonces me cai de y ya sabes la movida daniel y entonces porro cabeza hueca porro hehe me voy a la verga hiehie';
  
  return (
    <div className="relative flex flex-col gap-5 items-center bg-neutral-500 bg-opacity-80 p-7 rounded-lg">
      <h2 className="text-3xl text-center shadowText">
        Most popular exercises
      </h2>
      <MyWordcloud wordsText={words} height={280} width={280}/>
    </div>
  );
}
