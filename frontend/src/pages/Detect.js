import { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Alert, Box, Button, Card, CardContent, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Detect() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const apiBase = process.env.REACT_APP_API_URL || "http://127.0.0.1:5000";

  const check = async () => {
    if (!url.trim()) {
      setError("Please enter a URL to analyze.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await axios.post(`${apiBase}/predict`, { url: url.trim() }, { timeout: 10000 });
      localStorage.setItem("data", JSON.stringify(res.data));
      nav("/dashboard");
    } catch (requestError) {
      setError("Cannot connect to the backend API. Start Flask on port 5000 and retry.");
      console.error("Prediction request failed:", requestError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1.15fr 0.85fr" }, gap: 3 }}>
        <Card
          elevation={0}
          sx={{
            borderRadius: 2,
            background:
              "linear-gradient(180deg, rgba(10, 25, 51, 0.95), rgba(8, 17, 34, 0.92)), radial-gradient(circle at top right, rgba(76, 158, 255, 0.18), transparent 40%)",
            border: "1px solid rgba(135, 169, 255, 0.14)",
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Stack spacing={2.5}>
              <Box>
                <Typography variant="overline" sx={{ color: "#7ea2ff", letterSpacing: 1.6 }}>
                  Domain scan
                </Typography>
                <Typography variant="h5" sx={{ mt: 0.5, fontWeight: 750 }}>
                  Analyze a URL
                </Typography>
                <Typography sx={{ mt: 1, color: "rgba(234, 241, 255, 0.72)", fontSize: "0.98rem" }}>
                  Submit a domain or URL and review the maliciousness verdict in the dashboard.
                </Typography>
              </Box>

              <TextField
                fullWidth
                label="Enter URL"
                variant="filled"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                sx={{
                  "& .MuiFilledInput-root": {
                    borderRadius: 1.5,
                    backgroundColor: "rgba(255,255,255,0.06)",
                  },
                }}
              />

              {error && <Alert severity="error">{error}</Alert>}

              <Button
                size="large"
                variant="contained"
                onClick={check}
                disabled={loading}
                sx={{
                  borderRadius: 1.5,
                  py: 1.15,
                  textTransform: "none",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #4ea0ff 0%, #7d5cff 100%)",
                }}
              >
                {loading ? "Analyzing..." : "Analyze URL"}
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <Stack spacing={2.5}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 2,
              background: "rgba(9, 18, 39, 0.84)",
              border: "1px solid rgba(135, 169, 255, 0.12)",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                What happens next
              </Typography>
              <Typography sx={{ mt: 1, color: "rgba(234, 241, 255, 0.72)", fontSize: "0.96rem" }}>
                The model scores the URL, stores the prediction locally, and opens the dashboard summary.
              </Typography>
            </CardContent>
          </Card>

          <Card
            elevation={0}
            sx={{
              borderRadius: 2,
              background: "linear-gradient(180deg, rgba(18, 33, 67, 0.92), rgba(8, 17, 34, 0.96))",
              border: "1px solid rgba(135, 169, 255, 0.12)",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Typography variant="overline" sx={{ color: "#7ea2ff", letterSpacing: 1.5 }}>
                API status
              </Typography>
              <Typography variant="h5" sx={{ mt: 0.5, fontWeight: 800 }}>
                Backend endpoint
              </Typography>
              <Typography sx={{ mt: 1, color: "rgba(234, 241, 255, 0.72)", fontSize: "0.96rem" }}>
                {apiBase}/predict
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </Layout>
  );
}