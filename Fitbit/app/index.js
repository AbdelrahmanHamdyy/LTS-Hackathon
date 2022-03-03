/*
 * Entry point for the watch app
 */

//imports to add functionality
import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

//make it so clock emits ticks every minute
clock.granularity = "seconds";

//grab the time text from the HTML, so we can operate on it
let currentTime = document.getElementById("currentTime");
let currentTime2 = document.getElementById("currentTime2");
let currentTime3 = document.getElementById("currentTime3");
let currentTime4 = document.getElementById("currentTime4");
let currentTime5 = document.getElementById("currentTime5");

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let buttonBack1 = document.getElementById("buttonBack1");
let buttonBack2 = document.getElementById("buttonBack2");

let scrollView1 = document.getElementById("scrollView1");
let scrollView2 = document.getElementById("scrollView2");
let scrollView3 = document.getElementById("scrollView3");

function showMenu(){
  scrollView1.style.display = "inline";
  scrollView2.style.display = "none";
  scrollView3.style.display = "none";
}

function showBanks(){
  scrollView2.style.display = "inline";
  scrollView1.style.display = "none";
  scrollView3.style.display = "none";
}

function showDonate(){
  scrollView3.style.display = "inline";
  scrollView1.style.display = "none";
  scrollView2.style.display = "none";
}

showMenu();

button1.onactivate = function(evt){
  showBanks();
}

button2.onactivate = function(evt){
  showDonate();
}

buttonBack1.onactivate = function(evt){
  showMenu();
}

buttonBack2.onactivate = function(evt){
  showMenu();
}

//clock emits tick every minute, then this event happens
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  currentTime.text = `${hours}:${mins}`; //change the time text to the current time, which is updated every minute
  currentTime2.text = `${hours}:${mins}`;
  currentTime3.text = `${hours}:${mins}`;
  currentTime4.text = `${hours}:${mins}`;
  currentTime5.text = `${hours}:${mins}`;
}

console.log("App code started");
