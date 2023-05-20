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
        <article>Contact:</article>
      </div>
      <CardContent className="contact-card">
        <Typography variant="h4" component="div" color="white" sx={{ mb: 0 }}>
          Email:
        </Typography>
        <Typography sx={{ mb: 5 }} color="text.secondary" variant="h6">
          <Link
            to="https://github.com/1travelintexan"
            target="_blank"
            className="contact-link"
          >
            Horheyinc8@gmail.com
          </Link>
        </Typography>
        <Typography variant="h4" component="div" color="white" sx={{ mb: 0 }}>
          Whatsapp:
        </Typography>
        <Typography sx={{ mb: 5 }} variant="h6" className="contact-link">
          +34 662 572 121
        </Typography>
        <Typography variant="h4" color="white" component="div" sx={{ mb: 0 }}>
          LinkedIn:
        </Typography>
        <Typography sx={{ mb: 5 }} variant="h6">
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
