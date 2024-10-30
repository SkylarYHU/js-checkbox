const subscribeCheckbox = document.getElementById("subscribeCheckbox");
const visaBtn = document.getElementById("visaBtn");
const paypalBtn = document.getElementById("paypalBtn");
const masterBtn = document.getElementById("masterBtn");
const submitBtn = document.getElementById("submitBtn");

const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

// 使用 addEventListener 绑定事件会更灵活且符合最佳实践
submitBtn.addEventListener("click", function(event) {
  // 防止表单提交导致页面刷新
  event.preventDefault();

  subResult.textContent = subscribeCheckbox.checked ? "You are subscribed!" : "You are NOT subscribed!";

  if (visaBtn.checked) {
    paymentResult.textContent = "You are paying with Visa.";
  } else if (masterBtn.checked) {
    paymentResult.textContent = "You are paying with MasterCard.";
  } else if (paypalBtn.checked) {
    paymentResult.textContent = "You are paying with PayPal.";
  } else {
    paymentResult.textContent = "You must select a payment type.";
  }
});
