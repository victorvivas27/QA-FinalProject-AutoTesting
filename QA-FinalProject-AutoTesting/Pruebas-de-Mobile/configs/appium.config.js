// configs/appium.config.js
import dotenv from 'dotenv';
dotenv.config();

const rutaAPK = process.env.RUTA_APK;
console.log("Ruta del APK:", rutaAPK); 

export const capabilities = {
  platformName: "Android",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "emulator-5554",
  "appium:app": rutaAPK,
};

export const wdOpts = {
  hostname: '127.0.0.1',
  port: 4723,
  loglevel: 'info',
  capabilities
};