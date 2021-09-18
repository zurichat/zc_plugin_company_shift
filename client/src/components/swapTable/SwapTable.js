import "./swapTableStyle.css";

function SwapTable({ data }) {
  console.log(data[0]);

  const columns = data[0] && Object.keys(data[0]);

  console.log(columns);

  return (
    <table className="klareTable" cellSpacing={0} cellPadding={0}>
      <thead>
        <tr className="klareHeadRow">
          {columns
            ? columns.map((heading) => (
                <th className="klareTableRow">{heading}</th>
              ))
            : "LOADING......"}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr className="klareRowBack">
            {columns.map((column) => (
              <td className="klareTableRow">{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SwapTable;
