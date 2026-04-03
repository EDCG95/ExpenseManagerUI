/**
 =========================================================
 * Material Dashboard 2 React - v2.2.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2023 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import { getWage } from "../../api/user";

// Dashboard components
import { useQuery } from "@tanstack/react-query";
import formattedLineChartData from "../../utils/charts/formattedLineChartData";

function Dashboard() {
  const { sales, salary } = reportsLineChartData;

  const { data: wages } = useQuery({
    queryKey: ["GET_WAGES"],
    queryFn: async () => formattedLineChartData(await getWage()),
  });

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        {/*<Grid container spacing={3}>*/}
        {/*  <Grid item xs={12} md={6} lg={3}>*/}
        {/*    <MDBox mb={1.5}>*/}
        {/*      <ComplexStatisticsCard*/}
        {/*        color="dark"*/}
        {/*        icon="weekend"*/}
        {/*        title="Bookings"*/}
        {/*        count={281}*/}
        {/*        percentage={{*/}
        {/*          color: "success",*/}
        {/*          amount: "+55%",*/}
        {/*          label: "than lask week",*/}
        {/*        }}*/}
        {/*      />*/}
        {/*    </MDBox>*/}
        {/*  </Grid>*/}
        {/*  <Grid item xs={12} md={6} lg={3}>*/}
        {/*    <MDBox mb={1.5}>*/}
        {/*      <ComplexStatisticsCard*/}
        {/*        icon="leaderboard"*/}
        {/*        title="Today's Users"*/}
        {/*        count="2,300"*/}
        {/*        percentage={{*/}
        {/*          color: "success",*/}
        {/*          amount: "+3%",*/}
        {/*          label: "than last month",*/}
        {/*        }}*/}
        {/*      />*/}
        {/*    </MDBox>*/}
        {/*  </Grid>*/}
        {/*  <Grid item xs={12} md={6} lg={3}>*/}
        {/*    <MDBox mb={1.5}>*/}
        {/*      <ComplexStatisticsCard*/}
        {/*        color="success"*/}
        {/*        icon="store"*/}
        {/*        title="Revenue"*/}
        {/*        count="34k"*/}
        {/*        percentage={{*/}
        {/*          color: "success",*/}
        {/*          amount: "+1%",*/}
        {/*          label: "than yesterday",*/}
        {/*        }}*/}
        {/*      />*/}
        {/*    </MDBox>*/}
        {/*  </Grid>*/}
        {/*  <Grid item xs={12} md={6} lg={3}>*/}
        {/*    <MDBox mb={1.5}>*/}
        {/*      <ComplexStatisticsCard*/}
        {/*        color="primary"*/}
        {/*        icon="person_add"*/}
        {/*        title="Followers"*/}
        {/*        count="+91"*/}
        {/*        percentage={{*/}
        {/*          color: "success",*/}
        {/*          amount: "",*/}
        {/*          label: "Just updated",*/}
        {/*        }}*/}
        {/*      />*/}
        {/*    </MDBox>*/}
        {/*  </Grid>*/}
        {/*</Grid>*/}
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website views"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={salary}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="error"
                  title="Debt"
                  description="Current debt items to be payed"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="salary"
                  description="Monthly Salary"
                  date="just updated"
                  chart={wages}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        {/*<MDBox>*/}
        {/*  <Grid container spacing={3}>*/}
        {/*    <Grid item xs={12} md={6} lg={8}>*/}
        {/*      <Projects />*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={12} md={6} lg={4}>*/}
        {/*      <OrdersOverview />*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}
        {/*</MDBox>*/}
      </MDBox>
      {/*<Footer />*/}
    </DashboardLayout>
  );
}

export default Dashboard;
