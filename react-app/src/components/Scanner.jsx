import { Html5QrcodeScanner } from "html5-qrcode"
import { useEffect, useState } from "react";
import React from "react";
import './Scanner.css';

function Scanner() {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    console.log("Initializing scanner");
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.warn(err);
    }

    return () => {
      console.log("Cleaning up scanner");
      scanner.clear();
    };
  }, []);

  return (
    <div className="Scanner">
      <h1>QR Code Scanning in React</h1>
      {scanResult ? (
        <div>
          Success: <a href={"http://" + scanResult}>{scanResult}</a>
        </div>
      ) : (
        <div id="reader"></div>
      )}
    </div>
  );
}

export default Scanner;
