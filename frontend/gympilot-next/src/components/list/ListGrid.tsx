export default function ListGrid<T extends { id: number }>({
  json,
  render,
}: {
  json: T[];
  render: (item: T) => React.ReactNode;
}) {
  
  return (
    <div className="w-full h-full grid md:grid-cols-3 grid-cols-2 gap-6">
      {json.map((item) => (
        <div key={item.id}>{render(item)}</div>
      ))}
    </div>
  );
}
