export default function ListGrid<T extends { id: number }>({
  json,
  render,
  functionButtons,
}: {
  json: T[];
  render: (item: T, functionButtons?: (item:T) => void) => React.ReactNode;
  functionButtons?: (item:T) => void;
}) {
  return (
    <div className="w-full h-full grid md:grid-cols-3 grid-cols-2 gap-3">
      {json && json.length > 0 &&
        json.map((item) => (
          <div key={item.id}>{render(item, functionButtons)}</div>
        ))}
    </div>
  );
}
