let pins = {
  751015: "Bhubaneswar",
 
  412101: "Pune",
};

function cpin() {
  let pin = document.getElementById("pinc").value;
  
  if (pin.length < 6 || pin.length > 6) {
    alert("Enter a vaalid Pincode");
    return;
  }
  let tobe = pins[pin];
  console.log(tobe);
  let pl = document.getElementById("pinhere");
  if (tobe == undefined) {
    alert("Currently not deliverable Here !!!");
    return;
  } else {
    let pinr = JSON.parse(localStorage.getItem("session"));
    pinr[0].pin = tobe;
    console.log(pinr[0]);
    localStorage.setItem("session", JSON.stringify(pinr));
    pl.textContent = tobe;
  }
}
let pinr = JSON.parse(localStorage.getItem("session"));

console.log(pinr[0].pin);
if (pinr[0].pin != null) {
  let pl = document.getElementById("pinhere");
  pl.innerHTML = `${pinr[0].pin}`;
  console.log("!!");
}
