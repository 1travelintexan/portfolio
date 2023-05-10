import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <div>
    <CardContent>
      <Typography variant="h4" component="div" sx={{ mb: 3 }}>
        Experience:
      </Typography>
      <Typography sx={{ mb: 1 }} color="text.secondary" variant="h6">
        Ironhack Graduate
      </Typography>
      <Typography variant="body2" sx={{ mb: 3 }}>
        -9 week rigorous bootcamp that lays the foundation of programming with
        React, HTML, CSS and Node
      </Typography>
      <Typography sx={{ mb: 1 }} color="text.secondary" variant="h6">
        Web Dev Teachers Assistant
      </Typography>
      <Typography variant="body2">
        -2 years as a teacher's assistant for the same web dev bootcamp.
      </Typography>
      <Typography>
        -Check students code, and recommended best practices and organization.
      </Typography>
      <Typography sx={{ mb: 3 }}>
        -Solve homework in front of the students for video every morning.
      </Typography>
      <Typography sx={{ mb: 1 }} color="text.secondary" variant="h6">
        Web Dev Lead Teacher
      </Typography>
      <Typography variant="body2">
        -1 year as a lead teacher for Ironhack remote full-stack bootcamp.
      </Typography>
      <Typography>
        -Check students code, and recommended best practices and organization.
      </Typography>
      <Typography>
        -Solve homework in front of the students for video every morning.
      </Typography>
    </CardContent>
    <CardActions>
      <a href="https://www.linkedin.com/in/-joshua-george/" target="_blank">
        <Button size="small">LinkedIn</Button>
      </a>
    </CardActions>
  </div>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }} id="experience-card">
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
