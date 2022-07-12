import { Link, Typography } from "@mui/material";
import React from "react";

function MainFooter() {
  return (
    <Typography
      variant="body2"
      align="center"
      p={1}
      sx={{ bgcolor: "#fff", color: "#000", fontSize: 16 }}
    >
      Copyright © <Link href="https://www.shopcoinusa.com" sx={{textDecoration: "none"}}>Shopcoin.com</Link>{" "}
      {new Date().getFullYear()} .
    </Typography>
  );
}

export default MainFooter;
