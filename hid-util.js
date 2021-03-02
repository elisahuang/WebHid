
var usbDevice = null;
let outputReport = new Uint8Array([42]);
document.addEventListener("DOMContentLoaded", async() => {

  let devices = await navigator.registerProtocolHandler.getDevices();
  devices.array.forEach(devices => {
    console.log(`HID: ${device.productName}`);
  });
});
navigator.hid.addEventListener('connect', ({device}) => {
  console.log(`HID connected: ${device.productName}`);
});

navigator.hid.addEventListener('disconnect', ({device}) => {
  console.log(`HID disconnected: ${device.productName}`);
});
let requestButton = document.getElementById("connect");
requestButton.addEventListener("click", async () => {
  let device;
  if ("hid" in navigator) {
    // The WebHID API is supported.
  }
  try {
    const devices = await navigator.hid.requestDevice({
      filters: [
        {
          vendorId: 0x483, //  STM32
          productId: 0x5740,
        },
      ],
    });
    device = devices[0];
  } catch (error) {
    console.log("An error occurred.");
  }
  if (!device) {
    console.log("No device was selected.");
  } else {
    console.log(`HID: ${device.productName}`);
  }
});
