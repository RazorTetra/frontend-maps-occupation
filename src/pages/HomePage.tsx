import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Typography, Button, Box } from "@mui/material";
import HoverEffect from "../components/HoverEffect";
import { FullMap as hoverImagePeta } from "../assets";

function HomePage() {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleClick = (path: string) => {
    navigate(path);
  };

  const baseFontSize = 16;
  const goldenRatio = 1.618;

  const h1FontSize = baseFontSize * Math.pow(goldenRatio, 3);
  const pFontSize = baseFontSize;
  const buttonFontSize = baseFontSize * goldenRatio;

  return (
    <HoverEffect image={hoverImagePeta} sectionName="peta">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          height: "100vh",
          background:
            theme.palette.mode === "light"
              ? `linear-gradient(to bottom right, ${theme.palette.grey[100]}, ${theme.palette.grey[300]})`
              : `linear-gradient(to bottom right, ${theme.palette.grey[800]}, ${theme.palette.grey[900]})`,
        }}
      >
        <Box
          sx={{
            position: "fixed",
            top: "80px",
            width: "100%",
            zIndex: 10,
            background: "transparent",
          }}
        />
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: theme.palette.background.paper,
            position: "relative",
            overflow: "hidden",
            borderRight: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 10,
              textAlign: "center",
              px: 4,
              pb: 2,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                color: theme.palette.text.primary,
                fontSize: `${h1FontSize}px`,
                mb: `${baseFontSize * goldenRatio}px`,
              }}
            >
              PETA OKUPASI
            </Typography>
            <Typography
              sx={{
                mb: 4,
                maxWidth: "md",
                color: theme.palette.text.secondary,
                fontSize: `${pFontSize}px`,
              }}
            >
              Temukan informasi terkait okupasi sekolah kejuruan yang ada di
              daerah{" "}
              <Box component="span" fontWeight="bold">
                Sulawesi Utara
              </Box>
            </Typography>
            <Button
              onClick={() => handleClick("/form")}
              variant="contained"
              sx={{
                px: 6,
                py: 3,
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
              Cari Okupasi
            </Button>
          </Box>
        </Box>
      </Box>
    </HoverEffect>
  );
}

export default HomePage;
