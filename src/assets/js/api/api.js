var request = new XMLHttpRequest();
request.open('GET', 'http://core-benefits.api.dev.ahora.mambo.pe/api/v1/benefits?items=6&page=1&status=1&activated=true', true);

request.onload = function () {
  var data = JSON.parse(this.response);
  console.log(data);
  data.data.forEach(benefit => {
    console.log(benefit.name);
  });
}

// Send request
request.send();