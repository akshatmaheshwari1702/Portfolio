import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const ServiceCard = ({ image, title, description }) => {
  const [open, setOpen] = useState(false);

  const toggleDialog = () => setOpen((prev) => !prev);

  return (
    <>
      <div
        onClick={toggleDialog}
        className="service-card relative overflow-hidden h-[250px] w-[250px] md:h-[200px] md:w-[200px] rounded-2xl md:hover:shadow-card-glow transition-all duration-300 cursor-pointer"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center md:justify-start md:mt-14 mx-8 md:mx-4 text-start text-white">
          <div className="h-3 w-3 rounded-full bg-secondary mb-2"></div>
          <h3 className="text-[26px] md:text-2xl font-cairo font-bold">
            {title}
          </h3>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={toggleDialog}
        PaperProps={{
          className: "bg-primary border border-[#ffffff25]",
          style: {
            transform: open
              ? "scale(1) translateY(0)"
              : "scale(0.9) translateY(-100px)",
            transition: "transform 300ms ease-in-out",
            backgroundColor: "#010b13"
          },
        }}
      >
        <DialogTitle className="font-cairo font-bold text-white">
          {title}
        </DialogTitle>
        <hr className="border-b-2 border-secondary w-[106px] mx-4 -mt-3 mb-3" />
        <DialogContent className="text-accent">{description}</DialogContent>
        <DialogActions>
          <Button
            onClick={toggleDialog}
            className="bg-secondary text-white font-bold px-4 py-2 text-sm outline-none"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ServiceCard;
