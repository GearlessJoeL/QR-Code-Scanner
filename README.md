# QR-Code-Scanner

Chrome Extension for QR Code Scanner

## Quick Start

Since Google Chrome blocks the direct installation of `.crx` files for security reasons, you can install the extension manually using the following steps:

1. **Download and Extract:**
   * Download the repository as a ZIP file (click **Code** > **Download ZIP** on GitHub) and extract it to a folder on your computer. 
   * *(Alternatively, if you only have the `.crx` file, rename it from `QR-Code-Scanner.crx` to `QR-Code-Scanner.zip` and extract it into a folder).*

2. **Load into Chrome:**
   * Open Chrome and navigate to `chrome://extensions/`.
   * In the top-right corner, turn on the **Developer mode** toggle.
   * Click the **Load unpacked** button that appears in the top-left corner.
   * Select the extracted folder containing the `manifest.json` file.

---

After importing the extension to Chrome, you can recognize a QR code in any image by right-clicking the image and selecting **Scan QR Code** from the context menu.

The QR Code Recognition module is from: https://github.com/cozmo/jsQR.git
