import React, { useState } from "react";
import ODFGFCStatus from "./odf-gfc-status/ODF_GFC_Status";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function DashboardHome() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 10000);
  }, []);

  return (
    <>
      <Dialog
        open={visible}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Alert!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The data shown is a demo data and do not show real depiction.
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <ODFGFCStatus />
    </>
  );
}

export default DashboardHome;
