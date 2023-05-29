import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import L from "leaflet";
import marker from "../assets/heart.png";

export default function Contact() {
  const [showPopper, setShowPopper] = useState(false);
  const form = useRef();
  const myIcon = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    iconAnchor: [20, 20],
    popupAnchor: [-10, -10],
    iconSize: [20, 20],
  });
  useEffect(() => {
    setTimeout(() => {
      setShowPopper(false);
    }, 2000);
  }, [showPopper]);

  const handleEmail = async (e) => {
    e.preventDefault();
    try {
      let emailResponse = await emailjs.sendForm(
        "service_o4poyjc",
        "template_pi86pem",
        form.current,
        "user_Y6YdfC0dSMM1EiWEZkHLC"
      );
      console.log("Email successful", emailResponse);
      form.current = "";
    } catch (err) {
      console.log("error with email");
    }
  };
  const handleReset = () => {
    form.current.reset();
    setShowPopper(true);
  };
  return (
    <div className="contact-page">
      <div className="projects-header">
        <article>Contact:</article>
      </div>
      <CardContent className="contact-card">
        <MapContainer
          center={[30.311876, -95.456055]}
          zoom={6}
          scrollWheelZoom={true}
          id="map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[30.311876, -95.456055]} icon={myIcon}>
            <Popup>Home Sweet Home</Popup>
          </Marker>
        </MapContainer>
        <div className="contact-form-container">
          <h3>Let's Collaborate!</h3>
          <h5>I am open to any new ideas or possible future projects.</h5>
          <form ref={form} onSubmit={handleEmail} className="contact-form">
            <label>Name:</label>
            <input type="text" name="name" />
            <label>Email:</label>
            <input type="email" name="email" />
            <label>Message:</label>
            <textarea name="message" style={{ width: "90%" }} rows={5} />
            <button type="submit" onClick={handleReset}>
              Send
            </button>
          </form>
          {showPopper ? <div>Thank you! Talk soon 🤠 </div> : null}
        </div>
      </CardContent>
      <div>
        <Typography variant="h4" component="div" color="white" sx={{ mb: 0 }}>
          Whatsapp:
        </Typography>
        <Typography sx={{ mb: 1 }} variant="h6" className="contact-link">
          +34 662 172 121
        </Typography>
        <Typography variant="h4" color="white" component="div" sx={{ mb: 0 }}>
          LinkedIn:
        </Typography>
        <Typography sx={{ mb: 1 }} variant="h6">
          <Link
            to="https://www.linkedin.com/in/-joshua-george/"
            target="_blank"
            className="contact-link"
          >
            https://www.linkedin.com/in/-joshua-george/
          </Link>
        </Typography>
        <Typography variant="h4" component="div" color="white" sx={{ mb: 0 }}>
          Github:
        </Typography>
        <Typography sx={{ mb: 5 }} color="text.secondary" variant="h6">
          <Link
            to="https://github.com/1travelintexan"
            target="_blank"
            className="contact-link"
          >
            https://github.com/1travelintexan
          </Link>
        </Typography>
      </div>
    </div>
  );
}
