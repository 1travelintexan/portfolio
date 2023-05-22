import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import personalPic from "../assets/personal-pic.png";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="projects-header">
        <article>About:</article>
      </div>
      <CardContent className="about-card">
        <Typography variant="h2" component="div" color="white" sx={{ mb: 5 }}>
          Hi, I'm Joshua:
        </Typography>
        <div className="row-about">
          <img src={personalPic} alt="personal picture" className="about-pic" />
          <section>
            <Typography sx={{ mb: 2 }} color="white" variant="h6">
              -Proud graduate of Ironhack Full-Stack Web Development
              Bootcamp.(remote)
            </Typography>
            <Typography sx={{ mb: 2 }} color="white" variant="h6">
              -Freelancer / Web Dev Lead Teacher with a passion for learning new
              tech stacks.
            </Typography>
            <Typography sx={{ mb: 2 }} color="white" variant="h6">
              -Specializing in HTML, CSS, Javascript and React, with experience
              in Next-JS and Vite.
            </Typography>
            <Typography sx={{ mb: 2 }} color="white" variant="h6">
              -2 years of educating future MERN developers. I have facilited,
              conceptualized, debugged and help deploy over 200 team projects.
            </Typography>
            <Typography sx={{ mb: 2 }} color="white" variant="h6">
              -A forever student of coding, languages & cultures around the
              world.
            </Typography>
          </section>
        </div>
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
