import React from "react";
import logoImage from "../images/logo.b1a090f.png";
import { Link as RouterLink } from "react-router-dom";

import { Box, AppBar, Toolbar, Container, Button } from "@mui/material";

function MainHeader() {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{ bgcolor: "white", color: "#000", fontWeight: 500 }}
      >
        <Container>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                cursor: "pointer",
              }}
              to="/"
              component={RouterLink}
            >
              <img src={logoImage} alt="logo" width="30%" />
            </Box>
            <Box>
              <Button
                to="/login"
                component={RouterLink}
                sx={{
                  marginLeft: "10px",
                  fontSize: 14,
                  fontWeight: 600,
                  bgcolor: "#FFA400",
                  color: "#000",
                  ":hover": { bgcolor: "#FE5000" },
                  textDecoration: "none",
                }}
              >
                Login
              </Button>
              <Button
                to="/register"
                component={RouterLink}
                sx={{
                  marginLeft: "10px",
                  fontSize: 14,
                  fontWeight: 600,
                  bgcolor: "#FFA400",
                  color: "#000",
                  ":hover": { bgcolor: "#FE5000" },
                  textDecoration: "none",
                }}
              >
                SignUp
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default MainHeader;
