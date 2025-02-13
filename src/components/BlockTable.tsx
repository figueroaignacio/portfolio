interface TableProps {
  value: {
    rows: {
      cells: string[];
    }[];
  };
}

export function BlockTable({ value }: TableProps) {
  const [head, ...rows] = value.rows;
  const isBiDirectional = head.cells[0].length === 0;

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="min-w-full divide-y divide-border">
        <thead className="bg-card">
          <tr>
            {head.cells.map((cell, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-background divide-y divide-border">
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-muted/50" : "bg-background"}
            >
              {row.cells.map((cell, cellIndex) => {
                const Component =
                  isBiDirectional && cellIndex === 0 ? "th" : "td";
                return (
                  <Component
                    key={cellIndex}
                    className={`px-6 py-4 whitespace-nowrap text-sm ${
                      Component === "th" ? "font-medium " : ""
                    }`}
                  >
                    {cell}
                  </Component>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
