let express = require("express");
let app = express();
let CORS = require("../../../综合课程设计/综合课程设计-后端/src/lib/CORS");



app.use("*",CORS);

app.get("/",(req,res) => {
    res.status(200).json({"url":"https://photo-1258955954.cos.ap-chengdu.myqcloud.com/%E5%89%8D%E7%AB%AF53.png"}).end();
})




app.listen(8000,() => {
    console.log("http://127.0.0.1:8000");
});