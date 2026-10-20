/**
 * @file locket_firebase_request.js
 * Modify Firebase Remote Config Request for Locket
 * By Dio
 */

var modifiedHeaders = $request.headers || {};

// Xóa header If-None-Match hoặc X-Firebase-ETag để ngăn chặn server trả về 304 Not Modified
for (var key in modifiedHeaders) {
  var lower = key.toLowerCase();
  if (lower === "if-none-match" || lower === "x-firebase-etag") {
    delete modifiedHeaders[key];
  }
}

// Payload tùy chỉnh gửi lên Firebase Remote Config
var customBody = {
  app_instance_id: "cQIBYNP4tkt0uGFhNwE2Fw",
  app_instance_id_token:
    "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjE6NjQxMDI5MDc2MDgzOmlvczpjYzhlYjQ2MjkwZDY5YjIzNGZhNjA2IiwiZXhwIjoxNzkzMTMwMTc4LCJmaWQiOiJjUUlCWU5QNHRrdDB1R0ZoTndFMkZ3IiwicHJvamVjdE51bWJlciI6NjQxMDI5MDc2MDgzfQ.AB2LPV8wRQIgCzZw9zMCXTDmm3d_HdSfLEzNldRj2AnSkb7T-EEhrOACIQCcyXFp-JxCPc6bVUvvtBes7LtFfuCswRnKsOWgGAKWRQ",
  app_id: "1:641029076083:ios:cc8eb46290d69b234fa606",
  country_code: "vn",
  language_code: "vi_VN",
  platform_version: "17.7",
  time_zone: "Asia/Ho_Chi_Minh",
  package_name: "com.locket.Locket",
  app_version: "2.69.0",
  app_build: "2716",
  sdk_version: "12.12.1",
  first_open_time: "2026-10-20T20:00:00Z",
  analytics_user_properties: {
    notification_status: "0",
    tesflight: "true",
    celebrity: "true",
    user_id: "oANsPCCY4lfmHRMGR59CooE44s93",
  },
};

$done({
  headers: modifiedHeaders,
  body: JSON.stringify(customBody),
});
