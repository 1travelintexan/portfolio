import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ image, info, title }) {
  return (
    <Card sx={{ width: 355, minHeight: 350 }} id="media-card">
      <CardMedia sx={{ height: 150 }} image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {/* <Typography gutterBottom variant="h5" component="div"></Typography> */}
        <Typography variant="captionText" color="text.secondary">
          {info}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Link</Button>
        <Button size="small">Code</Button>
      </CardActions>
    </Card>
  );
}
