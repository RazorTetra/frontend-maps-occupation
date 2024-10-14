import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Typography, Button, Box, TextField } from "@mui/material";
import HoverEffect from "../components/HoverEffect";
import Card from "../components/Card";
import { FullMap as hoverImagePeta } from "../assets";
import { createGlassmorphismEffect } from "../utils/glassmorphismUtils";

const LoginPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempted with:", { email, password });
    navigate("/dashboard");
  };

  const baseFontSize = 16;
  const goldenRatio = 1.618;

  const h1FontSize = baseFontSize * Math.pow(goldenRatio, 2);
  const pFontSize = baseFontSize;
  const buttonFontSize = baseFontSize * goldenRatio;

  const glassmorphismStyles = createGlassmorphismEffect(
    theme.palette.background.paper,
    {
      blur: 10,
      saturation: 180,
      opacity: 0.2,
    }
  );

  return (
    <HoverEffect image={hoverImagePeta} sectionName="login">
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background:
            theme.palette.mode === "light"
              ? `linear-gradient(to bottom right, ${theme.palette.grey[100]}, ${theme.palette.grey[300]})`
              : `linear-gradient(to bottom right, ${theme.palette.grey[800]}, ${theme.palette.grey[900]})`,
        }}
      >
        <Card
          sx={{
            width: "100%",
            maxWidth: "400px",
            ...glassmorphismStyles,
            position: "relative",
            zIndex: 1,
            borderRadius: "16px",
            overflow: "hidden",
          }}
          content={
            <Box
              component="form"
              onSubmit={handleLogin}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                p: 3,
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                  color: theme.palette.text.primary,
                  fontSize: `${h1FontSize}px`,
                  textAlign: "center",
                }}
              >
                Login
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: `${pFontSize}px`,
                  textAlign: "center",
                  mb: 2,
                }}
              >
                Please enter your credentials to access your account.
              </Typography>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  py: 1.5,
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  fontWeight: "bold",
                  borderRadius: 2,
                  boxShadow: theme.shadows[4],
                  transition: "all 0.3s",
                  fontSize: `${buttonFontSize}px`,
                  "&:hover": {
                    bgcolor: theme.palette.primary.dark,
                    transform: "scale(1.05)",
                  },
                }}
              >
                Login
              </Button>
            </Box>
          }
        />
      </Box>
    </HoverEffect>
  );
};

export default LoginPage;