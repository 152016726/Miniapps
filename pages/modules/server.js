function getData(data) {
  return 'request_data=' + encodeURIComponent(JSON.stringify(data));
}
exports.getData = getData;