import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import styles from "./Item.module.css";

const Item = ({ element }) => {
  return (
    <div className={styles.container}>
      <Card
        sx={{
          width: "auto",
          height: "auto",
          margin: 0.5,
          padding: 0.5,
          backgroundColor: "white",
        }}
      >
        <CardMedia
          sx={{ height: 300, width: 470, borderRadius: "5px" }}
          image={element.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {element.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {element.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {element.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/itemDetail/${element.id}`}>
            <Button size="small" variant="contained" className={styles.Button}>
              Ver detalle
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Item;
