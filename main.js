window.addEventListener('load', function () {
  const qrcode = new QRCode("qrcode", {text: text.value});
  text.addEventListener('input', _ => qrcode.makeCode(text.value));
  wifi.addEventListener('click', () => {
    text.value = wifi.textContent;
    qrcode.makeCode(text.value);
  });
  ssid.addEventListener('input', () => wifi.textContent = `WIFI:S:${ssid.value};T:${securetype.value};P:${password.value};;`)
  securetype.addEventListener('change', () => wifi.textContent = `WIFI:S:${ssid.value};T:${securetype.value};P:${password.value};;`)
  password.addEventListener('input', () => wifi.textContent = `WIFI:S:${ssid.value};T:${securetype.value};P:${password.value};;`)
});
