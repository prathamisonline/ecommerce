
// import PaymentRouter from "./Routes/PaymentRoutes.js";
// import ProductsRouter from "./Routes/ProductsRoutes.js";
// import FavRouter from "./Routes/FavRoutes.js";
// import ReviewRouter from "./Routes/ReviewRoutes.js";
// import CartRouter from "./Routes/CartRoutes.js";
// import CouponRouter from "./Routes/CouponRoutes.js";
// import SneakerRouter from "./Routes/SneakersRoutes.js";
// import SearchRouter from "./Routes/SearchRoutes.js";
import HomeRouter from "./routes/homeRoutes.js";
import UserRouter from "./routes/userRoutes.js"
import AddressRouter from "./routes/addressRoutes.js"

export const routes = [
    UserRouter,
    // PaymentRouter, 
    AddressRouter,
    // ProductsRouter,
    // FavRouter,
    // ReviewRouter,
    // CartRouter,
    // CouponRouter,
    // SearchRouter,
    // SneakerRouter,
    HomeRouter,
];
