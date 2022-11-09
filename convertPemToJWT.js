const fs = require('fs');
const rsaPemToJwk = require('rsa-pem-to-jwk');

const pem = fs.readFileSync('./certs/private.pem');
var text = `-----BEGIN CERTIFICATE-----
MIIG9jCCBd6gAwIBAgIQEQOjsh7xKPOteKIB7X4PNTANBgkqhkiG9w0BAQsFADCB
lTELMAkGA1UEBhMCR0IxGzAZBgNVBAgTEkdyZWF0ZXIgTWFuY2hlc3RlcjEQMA4G
A1UEBxMHU2FsZm9yZDEYMBYGA1UEChMPU2VjdGlnbyBMaW1pdGVkMT0wOwYDVQQD
EzRTZWN0aWdvIFJTQSBPcmdhbml6YXRpb24gVmFsaWRhdGlvbiBTZWN1cmUgU2Vy
dmVyIENBMB4XDTIyMDYyNzAwMDAwMFoXDTIzMDYyNzIzNTk1OVowajELMAkGA1UE
BhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExKzApBgNVBAoTIlBldGNvIEFuaW1h
bCBTdXBwbGllcyBTdG9yZXMsIEluYy4xGTAXBgNVBAMTEGFlbXBlcmYucGV0Yy5j
b20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDBCmtN4OtJKsz6oDkP
leXyg3xvS670HV223BBcwoRXiVnhEimolPRPuR+8V5PzjXGhVh2UXvg0/WQvZe3+
bcb4pyNYC84jspwdaiL62PNAAQPhIZnQytxgJMzd7gD3OpFYapbTVCHqV9/fdGsZ
-----END CERTIFICATE-----
`
console.log('pem', pem);
const jwk = rsaPemToJwk(text, { use: 'sig' }, 'public');
console.log(jwk);