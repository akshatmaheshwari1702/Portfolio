import React, { useState } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import successIcon from "../../assets/success-icon.svg";
import errorIcon from "../../assets/error-icon.svg";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [dialogState, setDialogState] = useState({
    open: false,
    message: "",
    type: "success", // 'success' or 'error'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mz0i35f",
        "template_0ifmvid",
        e.target,
        "v0dJG0jnxRAw5dl6P"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setDialogState({
            open: true,
            message: "Your message has been successfully sent. Thank you! ",
            type: "success",
          });
          setFormData({ name: "", email: "", mobile: "", message: "" }); // Reset the form
        },
        (error) => {
          console.log("Email sending error:", error.text);
          setDialogState({
            open: true,
            message: "Failed to send the message. Please try again.",
            type: "error",
          });
        }
      );
  };

  const handleClose = () => {
    setDialogState({ ...dialogState, open: false });
  };

  return (
    <>
      <section className="contact-hero-section relative min-h-[45vh] md:min-h-[65vh] flex flex-col justify-center items-center shadow-lg shadow-black">
        <h1 className="text-4xl text-white font-cairo md:text-[40px] lg:text-5xl font-bold mb-3 mt-14">
          Contact Me
        </h1>
        {/* Breadcrumbs can be added back if needed */}
      </section>

      <div className="bg-primary">
        <section className="container px-4 mx-auto">
          <div className="py-20">
            <div className="flex flex-col items-center">
              <h1 className="font-cairo font-bold text-4xl text-center text-white mt-10">
                Get In Touch
              </h1>
              <hr className="border-b-4 border-secondary w-28 mt-3 mb-14 mx-auto md:mx-0" />
            </div>
            <p className="text-accent">
              I'd love to hear from you! Whether you have a project idea, a
              question about my work, or simply want to connect and say hello,
              please don’t hesitate to reach out. Drop me a message below, and
              I'll get back to you as soon as possible.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="contact-form w-full md:w-[550px] rounded-lg">
              <div className="rounded-lg p-8">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-8">
                    <TextField
                      variant="standard"
                      label="Full name"
                      name="name"
                      required
                      fullWidth
                      value={formData.name}
                      onChange={handleChange}
                      InputLabelProps={{ style: { color: '#fff' } }}
                      InputProps={{ style: { color: '#fff' } }}
                    />
                    <TextField
                      variant="standard"
                      label="Email"
                      name="email"
                      type="email"
                      required
                      fullWidth
                      value={formData.email}
                      onChange={handleChange}
                      InputLabelProps={{ style: { color: '#fff' } }}
                      InputProps={{ style: { color: '#fff' } }}
                    />
                    <TextField
                      variant="standard"
                      label="Mobile"
                      name="mobile"
                      type="tel"
                      fullWidth
                      value={formData.mobile}
                      onChange={handleChange}
                      InputLabelProps={{ style: { color: '#fff' } }}
                      InputProps={{ style: { color: '#fff' } }}
                    />
                    <TextField
                      variant="standard"
                      label="Message"
                      name="message"
                      required
                      fullWidth
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      InputLabelProps={{ style: { color: '#fff' } }}
                      InputProps={{ style: { color: '#fff' } }}
                    />
                  </div>
                  <div className="flex justify-end mt-6">
                    <Button type="submit" variant="contained" color="primary">
                      SEND
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Dialog open={dialogState.open} onClose={handleClose}>
            <DialogTitle className="flex items-center">
              <img
                src={` ${
                  dialogState.type === "success" ? successIcon : errorIcon
                }`}
                alt={dialogState.type}
                className="w-8 mr-3"
              />
              <span>
                {dialogState.type === "success" ? "Success" : "Error"}
              </span>
            </DialogTitle>
            <DialogContent>
              <DialogContentText>{dialogState.message}</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleClose}
                color={dialogState.type === "success" ? "success" : "error"}
              >
                {dialogState.type === "success" ? "OK" : "Close"}
              </Button>
            </DialogActions>
          </Dialog>
          <p className="text-accent my-20">
            If you prefer to send an email directly instead of using the form,
            feel free to reach out to me at{" "}
            <span className="font-bold italic">
              maheshwariakshat482@gmail.com
            </span>
            . Whether you have a specific project in mind, a question, or just
            want to connect, I'm always happy to hear from you. Click{" "}
            <a
              href="mailto:maheshwariakshat482@gmail.com"
              className="text-white underline"
            >
              here
            </a>{" "}
            to send an email directly.
          </p>
          <hr className="border-[#ffffff25]" />
        </section>
      </div>
    </>
  );
}

export default Contact;
