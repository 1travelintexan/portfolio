import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function TestimonyCard({ testimony }) {
  return (
    <Card className="testimony-card">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {testimony.name}
        </Typography>
        <Typography variant="h5" component="div">
          {testimony.occupation}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {testimony.relation} - ({testimony.date})
        </Typography>
        <Typography variant="body2">{testimony.comment}</Typography>
      </CardContent>
      <CardActions>
        <Link
          size="small"
          to={`https://www.linkedin.com/in/-joshua-george/details/recommendations/?detailScreenTabIndex=0`}
          target="_blank"
        >
          Link
        </Link>
      </CardActions>
    </Card>
  );
}
