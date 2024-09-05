import {printBasket} from "../controllers/product-controller.js";
document.getElementById('rzp-button1').addEventListener('click',function(e){
    const totalAmount= printBasket();
var options = {
    "key": "rzp_test_KU97GTwFZjXNpG", // Enter the Key ID generated from the Dashboard
    "amount": totalAmount,//"50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "USD",
    "name": "Pizza Shop", //your business name
    "description": "Transaction for Pizza Payment",
    "image": "https://example.com/your_logo",
    //"order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        alert("Payment Successful");
        //alert(response.razorpay_payment_id);
        //alert(response.razorpay_order_id);
        //alert(response.razorpay_signature)
    },
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        "name": "Customer Name: ", //your customer's name
        "email": "customerEmail@example.com", 
        "contact": "CustomerPhone"  //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options);
rzp1.on('payment.failed', function (response){
    alert("Payment Failed");
        // alert(response.error.code);
        // alert(response.error.description);
        // alert(response.error.source);
        // alert(response.error.step);
        // alert(response.error.reason);
        // alert(response.error.metadata.order_id);
        // alert(response.error.metadata.payment_id);
});
    rzp1.open();
    e.preventDefault();
});