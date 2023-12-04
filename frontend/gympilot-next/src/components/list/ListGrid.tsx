export default function ListGrid<T extends { id: number }>({
  json,
  render,
  functionButtons,
}: {
  json: T[];
  render: (item: T, functionButtons?: Function) => React.ReactNode;
  functionButtons?: Function;
}) {
  return (
    <div className="w-full h-full grid md:grid-cols-3 grid-cols-2 gap-6">
      {json &&
        json.map((item) => (
          <div key={item.id}>{render(item, functionButtons)}</div>
        ))}
    </div>
  );
}
