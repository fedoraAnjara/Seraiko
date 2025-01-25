import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import useCartStore from "../stores/CartStore";

const CartItem = ({ item }) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  return (
    <Card sx={{ maxWidth: 400, margin: "16px auto", boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Prix unitaire : {item.price} €
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Quantité : {item.quantity}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            +
          </Button>
          <Button
            size="small"
            variant="contained"
            color="primary"
            disabled={item.quantity <= 1}
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={() => removeFromCart(item.id)}
          >
            Supprimer
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CartItem;
