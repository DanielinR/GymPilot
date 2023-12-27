export default function ListElement(
  { id, name }: { id: number; name: string },
  functionButtons?: ({ id, name }: { id: number; name: string }) => void
) {
  return (
    <button
      onClick={() => {
        if (functionButtons) functionButtons({ id: id, name: name });
      }}
      className="bg-neutral-500 py-4 hover:bg-neutral-700 bg-opacity-80 hover:bg-opacity-80 rounded-md flex items-center justify-center p-2 outline outline-1 shadow-2xl outline-color-info-back w-full h-full"
    >
      <h2 className="text-white shadowText text-xl">{name.toUpperCase()}</h2>
    </button>
  );
}
