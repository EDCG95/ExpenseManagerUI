import MDBox from "../../../../components/MDBox";
import MDInput from "../../../../components/MDInput";
import MDButton from "../../../../components/MDButton";
import { addDebt, getDebtTypes } from "../../../../api/user";
import MDTypography from "../../../../components/MDTypography";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "../../../../utils/consts/queryKeys";
import arrayMapper from "../../../../utils/arrays/arrayMapper";

export function AddDebtForm() {
  const queryClient = useQueryClient();

  const { data: debtTypes } = useQuery({
    queryKey: QUERY_KEY.GET_DEBT_TYPE,
    queryFn: async () => arrayMapper(await getDebtTypes(), "type"),
  });
  console.log(`Debt Types: ${debtTypes || []}`);

  const mutation = useMutation({
    mutationFn: (e) => addDebt(e),
    onSuccess: () => {
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
