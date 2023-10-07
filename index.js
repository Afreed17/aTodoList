import express from "express";
import bodyParser from "body-parser";
import $ from "jquery";

const app=express();
const port =3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/",(req,res)=>{
    res.render("index.ejs",{tasks:arrOfWorks,dateOfTheDay:currentDate});
});


const date= new Date();
let day=date.getDate();
let mon=date.getMonth()+1;
let year=date.getFullYear();

let month;

switch(mon)
{
    case 1:
        {
            month="January";
            break;
        }
    case 2:
        {
            month="February";
            break;
        }
    case 3:
        {
            month="March";
            break;
        }
    case 4:
        {
            month="April";
            break;
        }
    case 5:
        {
            month="May";
            break;
        }
    case 6:
        {
            month="June";
            break;
        }
    case 7:
        {
            month="July";
            break;
        }
    case 8:
        {
            month="August";
            break;
        }
    case 9:
        {
            month="September";
            break;
        }
    case 10:
        {
            month="October";
            break;
        }
    case 11:
        {
            month="November";
            break;
        }
    case 12:
        {
            month="December";
            break;
        }
    default:
    {
        month="Code Error"
    }     
}

let currentDate = `${day} ${month} ${year}`;

let arrOfWorks=[];

app.post("/submitToday",(req,res)=>{
    let works=req.body["fData"];
    arrOfWorks.push(works);
    res.redirect("/");
});



app.get("/week",(req,res)=>{
    res.render("index2.ejs",{tasks:arrOfWorks2,dateOfTheDay:currentDate});
})

let arrOfWorks2=[];

app.post("/submitWeek",(req,res)=>
{
    let works2=req.body["fData"];
    arrOfWorks2.push(works2);
    res.redirect("/week");
})

app.listen(port,()=>{
    console.log(`project is running on server ${port} ..`);
})