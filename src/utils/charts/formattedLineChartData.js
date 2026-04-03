export default function formattedLineChartData(data) {
  debugger;
  return {
    labels: data?.map((item) => item.paymentDate) || [],
    datasets: { label: "Payment", data: data?.map((item) => item.payment) || [] },
  };
}
