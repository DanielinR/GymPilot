export default function ListGrid<T extends { id: number }>({
  json,
  render,
  url,
}: {
  json: T[];
  render: (item: T, url:string) => React.ReactNode;
  url: string;
}) {
  return (
    <div className="w-full h-full grid md:grid-cols-3 grid-cols-2 gap-6">
      {json.map((item, index) => (
        <div key={item.id}>{render(item, url)}</div>
      ))}
    </div>
  );
}
