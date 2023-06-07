import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
const card = (
  <CardContent style={{ background: "rgb(66, 67, 67)" }}>
    <Typography sx={{ mb: 0 }} color="white" variant="h5">
      Web Dev Lead Teacher
    </Typography>
    <Typography sx={{ mb: 1 }} color="white" variant="h6">
      (January/2023 - Present)
    </Typography>
    <Typography sx={{ mb: 1 }} color="white" variant="h6">
      Daily requirements
    </Typography>
    <Typography variant="body2" color="white">
      -Create lectures that cover the fundamental topics of the day to prepare
      the students for the coming homework/lab.
    </Typography>
    <Typography color="white">
      -Facilitate an open environment for students to grow, learn and ask
      questions.
    </Typography>
    <Typography color="white">
      -Organize coding practices for the students to collaborate with each other
      before tackling the homework.
    </Typography>
    <Typography color="white">
      -Above all, my job is to make sure the students are happy, learning and
      feel that they are getting the very best out of the course.
    </Typography>
    <Typography sx={{ mt: 4 }} color="white" variant="h5">
      Web Dev Teachers Assistant
    </Typography>
    <Typography sx={{ mb: 1 }} color="white" variant="h6">
      (May/2020-Jan/2023)
    </Typography>
    <Typography sx={{ mb: 1 }} color="white" variant="h6">
      Daily requirements
    </Typography>
    <Typography color="white">
      -Solve homework/lab every morning while explaining the core concepts of
      that days lesson.
    </Typography>
    <Typography color="white">
      -Evaluate student code for common mistakes and recommended best practices
      for improvement.
    </Typography>
    <Typography sx={{ mb: 1 }} color="white">
      -Approve ideas for student project ideas, then help them organize and
      structure their code to create the app of their dreams.
    </Typography>
    <Typography sx={{ mb: 0, mt: 3 }} color="white" variant="h5">
      Ironhack Full-Stack Web Development Bootcamp Graduate
    </Typography>
    <Typography color="white" variant="h6">
      (2020)
    </Typography>
    <Typography sx={{ mb: 3 }} color="white">
      -9 week rigorous bootcamp that focuses on challenging students to complete
      difficult labs daily as well as laying the foundation of learning to
      program in some of the most popular and up to date libraries and
      frameworks.
    </Typography>
  </CardContent>
);

export default function OutlinedCard() {
  return (
    <div className="contact-page">
      <div className="projects-header">
        <article className="dark">Experience:</article>
      </div>
      <Box sx={{ minWidth: 275 }} id="experience-card">
        <Card variant="outlined">{card}</Card>
      </Box>
    </div>
  );
}
