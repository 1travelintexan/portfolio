import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
        {/* <Typography gutterBottom variant="h5" component="div"></Typography> */}
        {info.map((feature) => {
          return (
            <div>
              <Typography
                variant="captionText"
                color="text.secondary"
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
          Site
        </Link>
        <Link to={github} target="_blank" className="project-link">
          Code
        </Link>
      </CardActions>
    </Card>
  );
}
