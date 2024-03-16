const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const sinhvienRoute = require("./routes/sinhvienRoute");
const app = express(); // Tạo đối tượng mới

// Kết nối MongoDB
mongoose.connect('mongodb://localhost:27017/and103', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Kết nối thành công");
}).catch((err) => {
    console.log(err);
});

// Sử dụng bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Sử dụng route
app.use('/', sinhvienRoute);

// Thiết lập view engine
app.set('view engine', 'ejs');

// Tạo port
const PORT = process.env.PORT || 5000;

// Chạy server
app.listen(PORT, () => console.log("Server đang chạy ở cổng", PORT));
