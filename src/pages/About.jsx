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
          Hi, I'm Joshua:
        </Typography>
        <Typography sx={{ mb: 2 }} color="white" variant="h6">
          -Proud graduate of Ironhack Full-Stack Web Development
          Bootcamp.(remote)
        </Typography>
        <Typography sx={{ mb: 2 }} color="white" variant="h6">
          -Freelancer / Web Dev Lead Teacher with a passion for learning new
          tech stacks.
        </Typography>
        <Typography sx={{ mb: 2 }} color="white" variant="h6">
          -Specializing in HTML, CSS, Javascript and React, with experience in
          Next-JS and Vite.
        </Typography>
        <Typography sx={{ mb: 2 }} color="white" variant="h6">
          -2 years of educating experience, where I have facilited,
          conceptualized, and debugged over 200 team projects.
        </Typography>
        <Typography sx={{ mb: 2 }} color="white" variant="h6">
          -A forever student of coding, languages & cultures of the world.
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
