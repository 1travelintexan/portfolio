import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export default function MediaCard({ image, info, title, url, github }) {
  return (
    <Card sx={{ width: 355, minHeight: 350 }} id="media-card">
      <CardMedia image={image} id="media-card-image" />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Noteable Features:
        </Typography>
        {info.map((feature) => {
          return (
            <div key={feature}>
              <Typography
                variant="captionText"
                color="white"
                sx={{ margin: 0 }}
              >
                -{feature}
              </Typography>
            </div>
          );
        })}
      </CardContent>
      <CardActions>
        <Link to={url} target="_blank" className="project-link">
          <ExitToAppIcon sx={{ fontSize: 40 }} color={"primary"} />
        </Link>
        <Link to={github} target="_blank" className="project-link">
          <GitHubIcon sx={{ fontSize: 40 }} color={"primary"} />
        </Link>
      </CardActions>
    </Card>
  );
}
