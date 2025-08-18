importScripts('jsQR.js');

// Create context menu on install
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "scanQRCode",
    title: "Scan QR Code",
    contexts: ["image"]
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "scanQRCode" && info.srcUrl) {
    try {
      // Fetch the image
      const response = await fetch(info.srcUrl);
      const blob = await response.blob();
      const bitmap = await createImageBitmap(blob);

      // Draw on OffscreenCanvas
      const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(bitmap, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      // Decode
      const code = jsQR(imageData.data, imageData.width, imageData.height);

      if (code) {
        // Open result in new tab
        chrome.tabs.create({ url: code.data });
      } else {
        // Show alert in current page
        chrome.notifications.create({
            type: "basic",
            iconUrl: "icons/icon48.png",
            title: "QR Code Scanner",
            message: "No QR code detected in this image."
        });
      }
    } catch (err) {
      console.error(err);
      chrome.notifications.create({
        type: "basic",
        iconUrl: "icons/icon48.png",
        title: "QR Code Scanner",
        message: "Error scanning image."
      });
    }
  }
});
