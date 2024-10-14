import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  useTheme,
  Box,
  alpha,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Icon } from "../assets";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  isLoggedIn: boolean;
  isSuperAdmin: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, onLogout }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Peta", path: "/peta" },
    ...(isLoggedIn
      ? [
          { title: "Data", path: "/data" },
          { title: "Assessment", path: "/assessment" },
          { title: "Settings", path: "/settings" },
        ]
      : []),
    ...(isLoggedIn
      ? [{ title: "Logout", path: "/logout", onClick: onLogout }]
      : [{ title: "Login", path: "/login" }]),
  ];

  const MenuItem: React.FC<{
    title: string;
    path: string;
    onClick?: () => void;
  }> = ({ title, path, onClick }) => (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Link
        to={path}
        onClick={() => {
          if (onClick) onClick();
          setIsOpen(false); // Close menu when a link is clicked
        }}
        style={{
          color:
            theme.palette.mode === "light"
              ? theme.palette.primary.main
              : theme.palette.primary.contrastText,
          textDecoration: "none",
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
      >
        {title}
      </Link>
    </motion.div>
  );

  const iconColor =
    theme.palette.mode === "light"
      ? theme.palette.primary.main
      : theme.palette.primary.contrastText;

  const menuBackground =
    theme.palette.mode === "light"
      ? alpha(theme.palette.background.paper, 0.9)
      : alpha(theme.palette.background.paper, 0.9);

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <img src={Icon} alt="Logo" style={{ height: "40px" }} />
          </Link>
        </motion.div>

        {isMobile ? (
          <>
            <IconButton
              onClick={toggleMenu}
              sx={{
                zIndex: 2000,
                color: iconColor,
              }}
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    background: menuBackground,
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1000,
                  }}
                >
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      style={{ margin: "10px 0" }}
                    >
                      <MenuItem {...item} />
                    </motion.div>
                  ))}
                  <Box sx={{ marginTop: 2 }}>
                    <ThemeToggle />
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                background:
                  theme.palette.mode === "light"
                    ? alpha(theme.palette.primary.main, 0.1)
                    : alpha(theme.palette.primary.main, 0.2),
                borderRadius: "30px",
                padding: "12px 24px", 
              }}
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{ margin: "0 16px" }} 
                >
                  <MenuItem {...item} />
                </motion.div>
              ))}
              <Box sx={{ marginLeft: "24px" }}>
                {" "}
                <ThemeToggle />
              </Box>
            </Box>
          </motion.div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;