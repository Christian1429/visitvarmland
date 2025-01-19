import React from "react";
import { Breadcrumbs, Link } from "@mui/material";
import { Link as routerLink } from "react-router-dom";

function BreadCrumbs() {
  return (
    <Breadcrumbs
      separator=">"
      aria-label="breadcrumb"
      fullWidth
      sx={{
        marginBottom: "2rem",
      }}
    >
      <Link component={routerLink} to={"/"} underline="hover" color="inherit">
        Evenemang
      </Link>

      <Link
        component={routerLink}
        to={"/arrangor"}
        underline="hover"
        color="inherit"
      >
        Arrangör
      </Link>
    </Breadcrumbs>
  );
}

export default BreadCrumbs;
