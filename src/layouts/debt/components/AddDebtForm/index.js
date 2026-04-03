import MDBox from "../../../../components/MDBox";
import MDInput from "../../../../components/MDInput";
import MDButton from "../../../../components/MDButton";
import { addDebt } from "../../../../api/user";
import MDTypography from "../../../../components/MDTypography";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function AddDebtForm() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (e) => addDebt(e),
    onSuccess: () => {
      debugger;
      queryClient.invalidateQueries();
    },
  });

  const onSubmit = async (form) => {
    const data = {
      debtType: form.get("debtType"),
      amount: form.get("amount"),
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
          <MDTypography>Add/Update Debt</MDTypography>
        </MDBox>
        <MDBox mb={2}>
          <MDInput name="debtType" type="text" label="Debt Type" fullWidth />
        </MDBox>
        <MDBox mb={2}>
          <MDInput name="amount" type="number" label="Debt Amount" fullWidth />
        </MDBox>
        <MDBox mt={4} mb={1}>
          <MDButton type="submit" variant="gradient" color="error" fullWidth>
            Add
          </MDButton>
        </MDBox>
      </MDBox>
    </MDBox>
  );
}
