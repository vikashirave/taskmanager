const data = [
  { label: "Todo", value: 6, color: "bg-gray-400" },
  { label: "In Progress", value: 8, color: "bg-yellow-400" },
  { label: "Done", value: 12, color: "bg-green-500" },
];

export default function TaskChart() {
  return (
    <div className="flex items-end gap-6 h-40">
      {data.map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div
            className={`w-10 ${item.color} rounded-t`}
            style={{ height: `${item.value * 10}px` }}
          />
          <span className="text-xs mt-2 text-gray-600">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}