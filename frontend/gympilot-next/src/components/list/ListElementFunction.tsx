export default function ListElement({ id, name}: { id:number, name: string, functionButtons?: Function }, functionButtons = (id:number, name:string) => {}) {
  return (
      <button onClick={() => {functionButtons(id, name)}} className="bg-color-secondary hover:bg-color-secondary-dark rounded-md flex items-center justify-center p-2 outline outline-1 shadow-2xl outline-color-info-back w-full h-full">
        <h2 className="text-color-font">{name}</h2>
      </button>
    );
  }
  