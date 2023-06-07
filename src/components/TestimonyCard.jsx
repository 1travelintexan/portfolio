import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function TestimonyCard({ testimony }) {
  return (
    <Card className="testimony-card">
      <CardContent>
        <div className="testimony-img-container">
          <img
            src={testimony.image}
            alt={testimony.name}
            className="testimony-image"
          />

          <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
            {testimony.name}
          </Typography>
        </div>
        <Typography variant="h5" component="div" color="white">
          {testimony.occupation}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="white">
          {testimony.relation} - ({testimony.date})
        </Typography>
        <Typography variant="body2" color="white">
          {testimony.comment}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          to={`https://www.linkedin.com/in/-joshua-george/details/recommendations/?detailScreenTabIndex=0`}
          target="_blank"
          className="testimony-link"
        >
          Link
        </Link>
      </CardActions>
    </Card>
  );
}
