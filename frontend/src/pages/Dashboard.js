import Layout from "../components/Layout";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";

ChartJS.register(ArcElement, CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend, Filler);

export default function Dashboard() {
  const rawData = localStorage.getItem("data");
  const data = rawData ? JSON.parse(rawData) : null;

  const result = data?.result || "No scan yet";
  const confidence = typeof data?.confidence === "number" ? data.confidence : 0;
  const safeScore = result === "Safe" ? confidence : 100 - confidence;
  const maliciousScore = result === "Malicious" ? confidence : 100 - confidence;

  const doughnutData = {
    labels: ["Safe", "Malicious"],
    datasets: [
      {
        data: [safeScore, maliciousScore],
        backgroundColor: ["#27d8a5", "#ff5f7a"],
        borderWidth: 0,
      },
    ],
  };

  const lineData = {
    labels: ["Start", "Analysis", "Result"],
    datasets: [
      {
        label: "Risk signal",
        data: [14, Math.max(18, maliciousScore), maliciousScore],
        borderColor: "#4ea0ff",
        backgroundColor: "rgba(78, 160, 255, 0.18)",
        fill: true,
        tension: 0.45,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    cutout: "74%",
  };

  return (
    <Layout>
      <Stack spacing={3}>
        <Box>
          <Typography variant="overline" sx={{ color: "#7ea2ff", letterSpacing: 1.6 }}>
            Scan results
          </Typography>
          <Typography variant="h5" sx={{ mt: 0.5, fontWeight: 750 }}>
            Prediction dashboard
          </Typography>
          <Typography sx={{ mt: 1, color: "rgba(234, 241, 255, 0.72)", fontSize: "0.98rem" }}>
            Review the latest model verdict and confidence breakdown.
          </Typography>
        </Box>

        <Grid container spacing={2.5}>
          <Grid item xs={12} md={4}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                borderRadius: 2,
                background: "linear-gradient(180deg, rgba(10, 25, 51, 0.95), rgba(8, 17, 34, 0.92))",
                border: "1px solid rgba(135, 169, 255, 0.12)",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="body2" sx={{ color: "rgba(234, 241, 255, 0.65)" }}>
                  Verdict
                </Typography>
                <Typography variant="h5" sx={{ mt: 1, fontWeight: 750 }}>
                  {result}
                </Typography>
                <Box
                  sx={{
                    mt: 2,
                    display: "inline-flex",
                    px: 1.2,
                    py: 0.6,
                    borderRadius: 1,
                    bgcolor: data ? "rgba(56, 201, 137, 0.14)" : "rgba(255, 255, 255, 0.08)",
                    color: data ? "#58e6a8" : "#c8d5f5",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                  }}
                >
                  {data ? "Latest scan" : "No data stored"}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                borderRadius: 2,
                background: "linear-gradient(180deg, rgba(10, 25, 51, 0.95), rgba(8, 17, 34, 0.92))",
                border: "1px solid rgba(135, 169, 255, 0.12)",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="body2" sx={{ color: "rgba(234, 241, 255, 0.65)" }}>
                  Confidence
                </Typography>
                <Typography variant="h5" sx={{ mt: 1, fontWeight: 750 }}>
                  {confidence}%
                </Typography>
                <Typography sx={{ mt: 1.5, color: "rgba(234, 241, 255, 0.72)", fontSize: "0.96rem" }}>
                  Probability reported by the model for the current result.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                borderRadius: 2,
                background: "linear-gradient(180deg, rgba(10, 25, 51, 0.95), rgba(8, 17, 34, 0.92))",
                border: "1px solid rgba(135, 169, 255, 0.12)",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="body2" sx={{ color: "rgba(234, 241, 255, 0.65)" }}>
                  Risk breakdown
                </Typography>
                <Box sx={{ mt: 1, height: 180 }}>
                  <Doughnut data={doughnutData} options={chartOptions} />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 2,
                background: "linear-gradient(180deg, rgba(10, 25, 51, 0.95), rgba(8, 17, 34, 0.92))",
                border: "1px solid rgba(135, 169, 255, 0.12)",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Analysis trend
                </Typography>
                <Typography sx={{ mt: 1, color: "rgba(234, 241, 255, 0.72)", fontSize: "0.96rem" }}>
                  A simple trend view tied to the latest model signal.
                </Typography>
                <Box sx={{ mt: 2, height: 280 }}>
                  <Line
                    data={lineData}
                    options={{
                      responsive: true,
                      plugins: { legend: { display: false } },
                      scales: {
                        x: { grid: { color: "rgba(255,255,255,0.06)" } },
                        y: { grid: { color: "rgba(255,255,255,0.06)" }, beginAtZero: true },
                      },
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                borderRadius: 2,
                background: "linear-gradient(180deg, rgba(18, 33, 67, 0.92), rgba(8, 17, 34, 0.96))",
                border: "1px solid rgba(135, 169, 255, 0.12)",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Scan summary
                </Typography>
                <Stack spacing={1.5} sx={{ mt: 2 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
                    <Typography sx={{ color: "rgba(234, 241, 255, 0.68)", fontSize: "0.94rem" }}>Safe score</Typography>
                    <Typography sx={{ fontWeight: 700 }}>{safeScore}%</Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
                    <Typography sx={{ color: "rgba(234, 241, 255, 0.68)", fontSize: "0.94rem" }}>Malicious score</Typography>
                    <Typography sx={{ fontWeight: 700 }}>{maliciousScore}%</Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
                    <Typography sx={{ color: "rgba(234, 241, 255, 0.68)", fontSize: "0.94rem" }}>Analysis state</Typography>
                    <Typography sx={{ fontWeight: 700 }}>{data ? "Complete" : "Waiting"}</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </Layout>
  );
}