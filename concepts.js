const order = { id: 1024, status: "shipped", items: 3 };

match (order) {
  { status: "pending" } => console.log("Your order is being processed."),
  { status: "shipped" } => console.log("Your order has been shipped."),
  { status: "delivered" } => console.log("Your order has been delivered."),
  { status } => console.log(`Order status: ${status}`),
  _ => console.log("Unknown order status"),
}
