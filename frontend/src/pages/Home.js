import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import TravelExploreRoundedIcon from "@mui/icons-material/TravelExploreRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import Layout from "../components/Layout";

const metrics = [
  { label: "Domains analyzed", value: "18.2K" },
  { label: "Blocked threats", value: "96.4%" },
  { label: "Avg. response", value: "0.8s" },
  { label: "Confidence avg.", value: "91.7%" },
];

const steps = [
  {
    title: "1. Paste a URL",
    text: "Enter the domain you want to inspect. The interface validates input before sending it to the model.",
  },
  {
    title: "2. Run analysis",
    text: "The backend scores the URL and returns a verdict with a confidence percentage.",
  },
  {
    title: "3. Review result",
    text: "Open the dashboard to see the prediction summary and risk breakdown.",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <Layout activePath="/">
      <Stack spacing={3}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.2fr 0.8fr" },
            gap: 3,
          }}
        >
          <Card
            elevation={0}
            sx={{
              borderRadius: 2,
              minHeight: { xs: 360, md: 420 },
              background:
                "linear-gradient(135deg, rgba(8, 18, 38, 0.98), rgba(12, 27, 55, 0.96)), radial-gradient(circle at top right, rgba(78, 160, 255, 0.2), transparent 32%)",
              border: "1px solid rgba(135, 169, 255, 0.12)",
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Stack spacing={3}>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1.2,
                    alignSelf: "flex-start",
                    px: 1.5,
                    py: 1,
                    borderRadius: 1.5,
                    background: "rgba(78, 160, 255, 0.12)",
                    border: "1px solid rgba(135, 169, 255, 0.14)",
                  }}
                >
                  <ShieldRoundedIcon sx={{ fontSize: 18, color: "#8cc0ff" }} />
                  <Typography sx={{ fontSize: "0.85rem", color: "#cfe0ff", fontWeight: 600 }}>
                    Domain security workspace
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="overline" sx={{ color: "#7ea2ff", letterSpacing: 1.8 }}>
                    Vision UI / Overview
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      mt: 1,
                      fontSize: { xs: "2rem", md: "3rem" },
                      lineHeight: 1.08,
                      fontWeight: 800,
                      maxWidth: 620,
                      letterSpacing: -0.6,
                    }}
                  >
                    A cleaner way to inspect domain risk without visual noise.
                  </Typography>
                  <Typography sx={{ mt: 1.5, maxWidth: 560, color: "rgba(234, 241, 255, 0.74)", fontSize: "0.98rem" }}>
                    Start a scan, review the result, and move through the workflow from a single focused dashboard.
                  </Typography>
                </Box>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardRoundedIcon />}
                    onClick={() => navigate("/detect")}
                    sx={{
                      borderRadius: 1.5,
                      px: 2.4,
                      py: 1.15,
                      textTransform: "none",
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #4ea0ff 0%, #7d5cff 100%)",
                    }}
                  >
                    Start analysis
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => navigate("/dashboard")}
                    sx={{
                      borderRadius: 1.5,
                      px: 2.4,
                      py: 1.15,
                      textTransform: "none",
                      borderColor: "rgba(170, 195, 255, 0.24)",
                      color: "#f8fbff",
                    }}
                  >
                    Open dashboard
                  </Button>
                </Stack>

                <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                    gap: 2,
                  }}
                >
                  {[
                    { icon: <TravelExploreRoundedIcon />, title: "Fast checks", text: "Short path from URL to verdict" },
                    { icon: <VerifiedUserRoundedIcon />, title: "Clear confidence", text: "Readable model probability" },
                    { icon: <WarningAmberRoundedIcon />, title: "Risk focus", text: "Highlights what matters first" },
                  ].map((item) => (
                    <Box
                      key={item.title}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <Box sx={{ color: "#8cc0ff", mb: 1 }}>{item.icon}</Box>
                      <Typography sx={{ fontWeight: 700, mb: 0.5 }}>{item.title}</Typography>
                      <Typography sx={{ color: "rgba(234, 241, 255, 0.68)", fontSize: "0.9rem" }}>
                        {item.text}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Stack>
            </CardContent>
          </Card>

          <Stack spacing={2.5}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 2,
                minHeight: 165,
                background: "linear-gradient(180deg, rgba(10, 25, 51, 0.94), rgba(8, 17, 34, 0.94))",
                border: "1px solid rgba(135, 169, 255, 0.1)",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="overline" sx={{ color: "#7ea2ff", letterSpacing: 1.4 }}>
                  Quick summary
                </Typography>
                <Typography variant="h6" sx={{ mt: 1, fontWeight: 750 }}>
                  Built for fast review and less clutter.
                </Typography>
                <Typography sx={{ mt: 1, color: "rgba(234, 241, 255, 0.72)", fontSize: "0.95rem" }}>
                  Everything uses tighter spacing, rectangular surfaces, and sharper hierarchy.
                </Typography>
              </CardContent>
            </Card>

            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
              {metrics.slice(0, 2).map((item) => (
                <Card
                  key={item.label}
                  elevation={0}
                  sx={{
                    borderRadius: 2,
                    background: "rgba(9, 18, 39, 0.84)",
                    border: "1px solid rgba(135, 169, 255, 0.1)",
                  }}
                >
                  <CardContent sx={{ p: 2.5 }}>
                    <Typography sx={{ color: "rgba(234, 241, 255, 0.68)", fontSize: "0.84rem" }}>
                      {item.label}
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 1, fontWeight: 800 }}>
                      {item.value}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>

            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
              {metrics.slice(2).map((item) => (
                <Card
                  key={item.label}
                  elevation={0}
                  sx={{
                    borderRadius: 2,
                    background: "rgba(9, 18, 39, 0.84)",
                    border: "1px solid rgba(135, 169, 255, 0.1)",
                  }}
                >
                  <CardContent sx={{ p: 2.5 }}>
                    <Typography sx={{ color: "rgba(234, 241, 255, 0.68)", fontSize: "0.84rem" }}>
                      {item.label}
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 1, fontWeight: 800 }}>
                      {item.value}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Stack>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 2,
          }}
        >
          {steps.map((step) => (
            <Card
              key={step.title}
              elevation={0}
              sx={{
                borderRadius: 2,
                background: "rgba(9, 18, 39, 0.84)",
                border: "1px solid rgba(135, 169, 255, 0.1)",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="body2" sx={{ color: "#7ea2ff", letterSpacing: 0.8 }}>
                  {step.title}
                </Typography>
                <Typography sx={{ mt: 1, color: "rgba(234, 241, 255, 0.76)", fontSize: "0.94rem" }}>
                  {step.text}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Stack>
    </Layout>
  );
}