import { useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import TravelExploreRoundedIcon from "@mui/icons-material/TravelExploreRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";

const navItems = [
  { label: "Home", path: "/", icon: <DashboardRoundedIcon fontSize="small" /> },
  { label: "Detect", path: "/detect", icon: <TravelExploreRoundedIcon fontSize="small" /> },
  { label: "Dashboard", path: "/dashboard", icon: <BarChartRoundedIcon fontSize="small" /> },
];

export default function Layout({ children, activePath }) {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = activePath || location.pathname;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        color: "#f8fbff",
        background:
          "radial-gradient(circle at top left, rgba(56, 109, 255, 0.16), transparent 24%), radial-gradient(circle at top right, rgba(54, 208, 255, 0.1), transparent 20%), linear-gradient(180deg, #07111f 0%, #081323 45%, #0a1628 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "linear-gradient(180deg, rgba(0,0,0,0.5), transparent 82%)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "260px 1fr" },
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            p: 2,
            display: { xs: "none", md: "block" },
          }}
        >
          <Paper
            elevation={0}
            sx={{
              height: "100%",
              borderRadius: 2,
              background: "rgba(5, 13, 28, 0.58)",
              border: "1px solid rgba(138, 169, 255, 0.12)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 18px 36px rgba(0, 0, 0, 0.24)",
              p: 2,
            }}
          >
            <Stack direction="row" spacing={1.2} alignItems="center" sx={{ mb: 2.5 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: 2,
                  display: "grid",
                  placeItems: "center",
                  background: "linear-gradient(135deg, #4ea0ff 0%, #7d5cff 100%)",
                  boxShadow: "0 10px 22px rgba(78, 160, 255, 0.35)",
                }}
              >
                <ShieldRoundedIcon sx={{ fontSize: 20 }} />
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ letterSpacing: 1.6, color: "#7ea2ff" }}>
                  VISION UI
                </Typography>
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                  Domain Security
                </Typography>
              </Box>
            </Stack>

            <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mb: 2 }} />

            <List disablePadding>
              {navItems.map((item) => {
                const selected = currentPath === item.path;

                return (
                  <ListItemButton
                    key={item.path}
                    selected={selected}
                    onClick={() => navigate(item.path)}
                    sx={{
                      mb: 0.8,
                      borderRadius: 1.5,
                      color: selected ? "#ffffff" : "rgba(234, 241, 255, 0.72)",
                      background: selected ? "rgba(78, 160, 255, 0.12)" : "transparent",
                      "&.Mui-selected": {
                        background: "linear-gradient(135deg, rgba(78, 160, 255, 0.16), rgba(125, 92, 255, 0.12))",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 36, color: "inherit" }}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                );
              })}
            </List>

            <Box
              sx={{
                mt: 2.5,
                p: 2,
                borderRadius: 2,
                background: "linear-gradient(180deg, rgba(79, 129, 255, 0.12), rgba(8, 18, 39, 0.58))",
                border: "1px solid rgba(130, 160, 255, 0.1)",
              }}
            >
              <Typography variant="overline" sx={{ color: "#7ea2ff", letterSpacing: 1.5 }}>
                System Status
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5, color: "rgba(255,255,255,0.82)" }}>
                Real-time domain inspection and risk scoring.
              </Typography>
              <Box sx={{ mt: 1.5, display: "inline-flex", px: 1.2, py: 0.6, borderRadius: 1.2, bgcolor: "rgba(56, 201, 137, 0.12)", color: "#58e6a8", fontSize: "0.8rem", fontWeight: 700 }}>
                Live
              </Box>
            </Box>
          </Paper>
        </Box>

        <Box sx={{ p: { xs: 2, md: 3 }, pl: { xs: 2, md: 0 } }}>
          <AppBar
            position="sticky"
            elevation={0}
            sx={{
              top: 12,
              mb: 3,
              borderRadius: 2,
              background: "rgba(6, 15, 31, 0.62)",
              border: "1px solid rgba(135, 169, 255, 0.12)",
              backdropFilter: "blur(16px)",
            }}
          >
            <Toolbar sx={{ minHeight: 60, gap: 2, px: { xs: 2, sm: 3 } }}>
              <Box>
                <Typography variant="overline" sx={{ color: "#7ea2ff", letterSpacing: 1.7 }}>
                  AI DOMAIN DETECTOR
                </Typography>
                <Typography variant="subtitle1" sx={{ lineHeight: 1.15, fontWeight: 700 }}>
                  Secure your browsing
                </Typography>
              </Box>

              <Box sx={{ flex: 1 }} />

              <IconButton sx={{ color: "rgba(255,255,255,0.8)" }}>
                <NotificationsNoneRoundedIcon />
              </IconButton>
              <IconButton sx={{ color: "rgba(255,255,255,0.8)" }}>
                <SettingsRoundedIcon />
              </IconButton>
              <Button
                variant="contained"
                onClick={() => navigate("/")}
                sx={{
                  borderRadius: 1.5,
                  textTransform: "none",
                  background: "linear-gradient(135deg, #4ea0ff 0%, #7d5cff 100%)",
                  boxShadow: "0 10px 20px rgba(78, 160, 255, 0.18)",
                }}
              >
                Sign in
              </Button>
              <Avatar sx={{ width: 36, height: 36, bgcolor: "rgba(255,255,255,0.08)" }}>V</Avatar>
            </Toolbar>
          </AppBar>

          <Box sx={{ mt: 3 }}>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
}