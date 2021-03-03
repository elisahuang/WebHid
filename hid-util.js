
var usbDevice = null;
let outputReport = new Uint8Array([42]);
document.addEventListener("DOMContentLoaded", async() => {
  let btnConnect = document.getElementById("connect");
  btnConnect.addEventListener("click", connectHID);
 /* let devices = await navigator.registerProtocolHandler.getDevices();
  devices.array.forEach(devices => {
    console.log(`HID: ${device.productName}`);
  });*/
});
const connectHID = async () => {
  console.log("connectHID");
  const filters = [];
  try{
    usbDevice = await navigator.hid.requestDevice({ filters: filters });
    if (usbDevice){
      console.log("Product name: " + usbDevice.productName);  
      console.log("productId:"+ usbDevice.productId);  
    }
    else{
      console.log("There is no device.");
    }
  }catch(error){
    console.error(error.name, error.message);
  }
}
navigator.hid.addEventListener('connect', ({device}) => {
  console.log(`HID connected: ${device.productName}`);
});

navigator.hid.addEventListener('disconnect', ({device}) => {
  console.log(`HID disconnected: ${device.productName}`);
});
/*let requestButton = document.getElementById("connect");
requestButton.addEventListener("click", async () => {
  console.log("connect"); 
  let device;
  let filters = [];
  if ("hid" in navigator) {
    // The WebHID API is supported.
  }
  try {
    const devices = await navigator.hid.requestDevice({
      filters: filters
    });
    if (devices){
      console.log("Product name: " + udevices.productName);  
      console.log("productId:"+ devices.productId);  
      $( "div.success" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
    }
    else{
      console.log("There is no device.");
    }
    device = devices[0];
  } catch (error) {
    console.log("An error occurred.");
  }
  if (!device) {
    console.log("No device was selected.");
  } else {
    console.log(`HID: ${device.productName}`);
  }
});*/
