import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="projects-header">
        <article>About:</article>
      </div>
      <CardContent className="contact-card">
        <Typography variant="h4" component="div" color="white" sx={{ mb: 0 }}>
          Intro:
        </Typography>
        <Typography sx={{ mb: 2 }} color="white" variant="h6">
          -I am a proud graduate of Ironhack Full-Stack Web Development
          Bootcamp.(remote)
        </Typography>
        <Typography sx={{ mb: 2 }} color="white" variant="h6">
          -I am a freelancer with a passion for learning and helping others grow
          as developers.
        </Typography>
        <Typography sx={{ mb: 2 }} color="white" variant="h6">
          -I have a specialty in HTML, CSS, Javascript and React, with
          experience in Next-JS and Vite.
        </Typography>
        <Typography sx={{ mb: 2 }} color="white" variant="h6">
          -In my 3 years of educating, I have helped conceptualize, develope,
          debug and deploy over 200 student projects.
        </Typography>
        <Typography sx={{ mb: 2 }} color="white" variant="h6">
          -As a developer, I pride myself on being a eternal student. Always
          growing, learning and adaping to new technologies and libraries.
        </Typography>
      </CardContent>
    </div>
  );
}
// export default function Contact() {
//   return (
//     <Box id="experience-card">
//       <Card variant="outlined">{card}</Card>
//     </Box>
//   );
// }
