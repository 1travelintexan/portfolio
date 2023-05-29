import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
const card = (
  <>
    <CardContent style={{ background: "rgb(255, 255, 255)" }}>
      <Typography sx={{ mb: 0 }} color="text.secondary" variant="h5">
        Web Dev Lead Teacher
      </Typography>
      <Typography sx={{ mb: 1 }} color="text.secondary" variant="h6">
        (January/2023 - Present)
      </Typography>
      <Typography sx={{ mb: 1 }} color="text.secondary" variant="h6">
        Daily requirements
      </Typography>
      <Typography variant="body2">
        -Create lectures that cover the fundamental topics of the day to prepare
        the students for the coming homework/lab.
      </Typography>
      <Typography>
        -Facilitate an open environment for students to grow, learn and ask
        questions.
      </Typography>
      <Typography>
        -Organize coding practices for the students to collaborate with each
        other before tackling the homework.
      </Typography>
      <Typography>
        -Above all, my job is to make sure the students are happy, learning and
        feel that they are getting the very best out of the course.
      </Typography>
      <Typography sx={{ mt: 4 }} color="text.secondary" variant="h5">
        Web Dev Teachers Assistant
      </Typography>
      <Typography sx={{ mb: 1 }} color="text.secondary" variant="h6">
        (May/2021-Jan/2023)
      </Typography>
      <Typography sx={{ mb: 1 }} color="text.secondary" variant="h6">
        Daily requirements
      </Typography>
      <Typography>
        -Solve homework/lab every morning while explaining the core concepts of
        that days lesson.
      </Typography>
      <Typography>
        -Evaluate student code for common mistakes and recommended best
        practices for improvement.
      </Typography>
      <Typography sx={{ mb: 1 }}>
        -Approve ideas for student project ideas, then help them organize and
        structure their code to create the app of their dreams.
      </Typography>
      <Typography sx={{ mb: 0, mt: 3 }} color="text.secondary" variant="h5">
        Ironhack Full-Stack Web Development Bootcamp Graduate
      </Typography>
      <Typography color="text.secondary" variant="h6">
        (2020)
      </Typography>
      <Typography sx={{ mb: 3 }}>
        -9 week rigorous bootcamp that focuses on challenging students to
        complete difficult labs daily as well as laying the foundation of
        learning to program in some of the most popular and up to date libraries
        and frameworks.
      </Typography>
    </CardContent>
    <CardActions>
      <Link href="https://www.linkedin.com/in/-joshua-george/" target="_blank">
        <Button>LinkedIn</Button>
      </Link>
    </CardActions>
  </>
);

export default function OutlinedCard() {
  return (
    <>
      <Typography variant="h3" component="div" sx={{ mt: 3 }} color="white">
        Experience:
      </Typography>
      <Box sx={{ minWidth: 275 }} id="experience-card">
        <Card variant="outlined">{card}</Card>
      </Box>
    </>
  );
}
