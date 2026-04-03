import MDBox from "../../../../components/MDBox";
import MDInput from "../../../../components/MDInput";
import MDButton from "../../../../components/MDButton";
import { addWage } from "../../../../api/user";
import MDTypography from "../../../../components/MDTypography";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function AddWageForm() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (e) => addWage(e),
    onSuccess: () => {
      console.log("mutation success");
      debugger;
      queryClient.invalidateQueries();
    },
  });

  const onSubmit = async (form) => {
    const data = {
      payment: form.get("payment"),
      paymentDate: form.get("paymentDate"),
    };

    mutation.mutate(data);
  };

  return (
    <MDBox pt={4} pb={3} px={3}>
      <MDBox
        component="form"
        role="form"
        onSubmit={async (e) => {
          e.preventDefault();
          await onSubmit(new FormData(e.target));
        }}
      >
        <MDBox mb={2}>
          <MDTypography>Add Wage</MDTypography>
        </MDBox>
        <MDBox mb={2}>
          <MDInput name="payment" type="number" label="Payment" step="0.01" fullWidth />
        </MDBox>
        <MDBox mb={2}>
          <MDInput name="paymentDate" type="date" label="Payment Date" fullWidth />
        </MDBox>
        <MDBox mt={4} mb={1}>
          <MDButton type="submit" variant="gradient" color="success" fullWidth>
            Add
          </MDButton>
        </MDBox>
      </MDBox>
    </MDBox>
  );
}
