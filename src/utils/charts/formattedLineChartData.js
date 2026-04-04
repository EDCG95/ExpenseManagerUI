import arrayMapper from "../arrays/arrayMapper";

export default function formattedLineChartData(data) {
  debugger;
  return {
    labels: arrayMapper(data, "paymentDate") || [],
    datasets: { label: "Payment", data: arrayMapper(data, "payment") || [] },
  };
}
