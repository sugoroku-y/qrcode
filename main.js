function updateWifi() {
  wifi.textContent = `WIFI:S:${ssid.value};T:${securetype.value};P:${password.value};;`;
}

window.addEventListener('load', () => {
  const qrcode = new QRCode('qrcode', {text: text.value});
  text.addEventListener('input', () => qrcode.makeCode(text.value));
  wifi.addEventListener('click', () => {
    text.value = wifi.textContent;
    qrcode.makeCode(text.value);
  });
  ssid.addEventListener('input', updateWifi);
  securetype.addEventListener('change', updateWifi);
  password.addEventListener('input', updateWifi);
});

if ('serviceWorker' in navigator) {
  (async () => {
    try {
      const regist = await navigator.serviceWorker.register('sw.js');
      console.log(`ServiceWorker registration success(scope: ${regist.scope})`);
    } catch (err) {
      console.log(`ServiceWorker registration failure(${err})`);
    }
  })();
}
