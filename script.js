"use strict";

//declaring variables
const loginEl = document.getElementById("login");
const formEl = document.getElementById("form");
const loginBtn = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");
const loginContent = document.querySelector(".login-content");
const registerContent = document.querySelector(".register-content");

//Adding Events to..
//1. Login option
loginEl.addEventListener("click", function () {
  formEl.classList.toggle("hidden");
});

//2.Login button
loginBtn.addEventListener("click", function () {
  //showing active button
  registerBtn.classList.remove("active-btn");
  loginBtn.classList.add("active-btn");
  //for login content
  registerContent.classList.add("hidden");
  loginContent.classList.remove("hidden");
});

//3.Register Button
registerBtn.addEventListener("click", function () {
  //showing active button
  loginBtn.classList.remove("active-btn");
  registerBtn.classList.add("active-btn");
  //for login content
  loginContent.classList.add("hidden");
  registerContent.classList.remove("hidden");
});
