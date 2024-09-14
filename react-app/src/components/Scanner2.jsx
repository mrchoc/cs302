import { Html5QrcodeScanner } from "html5-qrcode";
import React, { useEffect } from 'react';

const Scanner2 = () => {
  useEffect(() => {
    // Define the success and error callback functions
    function onScanSuccess(decodedText, decodedResult) {
      console.log(`Code matched = ${decodedText}`, decodedResult);
    }
    
    function onScanFailure(error) {
      console.warn(`Code scan error = ${error}`);
    }
    
    // Initialize the Html5QrcodeScanner instance
    const html5QrcodeScanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );

    // Render the scanner
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);

    // Cleanup function to stop and clear the scanner when component unmounts
    return () => {
      html5QrcodeScanner.clear();
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div id="reader" style={{ width: "600px" }}></div>
  );
}

export default Scanner2;


