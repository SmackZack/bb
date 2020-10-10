var form = new FormData();
form.append("category", "movies");
form.append("language", "hindi");
form.append("genre", "all");
form.append("sort ", "");

var settings = {
  url: "https://hoblist.com/movieList",
  method: "POST",
  timeout: 0,
  headers: {
    Cookie:
      "__cfduid=dddb6c504fe518dece97e752c6b51629a1599424849; connect.sid=s%3A-SvlWNdZWXfCfiUpgLHLOcgU4ogfRjZU.1vb9vIh5lNl7FhUIjGv8tQ%2BYtXX%2BT6Vg9X9aLXhT82Y",
  },
  processData: false,
  mimeType: "multipart/form-data",
  contentType: false,
  data: form,
};

$.ajax(settings).done(function (response) {
  var list = "";
  for (var i = 0; i < JSON.parse(response).result.length; i++) {
    list +=
      ` <div class="col-lg-6 py-3">
    <div class="row py-3 border border-dark no-gutters shadow-lg rounded-lg bg-light">
      <div class="col-2 text-center">
        <button class="btn btn p-0">
          <i class="fas fa-3x fa-caret-up"></i>
        </button>
        <div class="h2 mb-0">0</div>
        <button class="btn btn p-0">
          <i class="fas fa-rotate-180 fa-3x fa-caret-up"></i>
        </button>
      </div>
      <div class="col-10">
        <div class="media">
          <img
            src="` +
      JSON.parse(response).result[i].poster +
      `"
            height="150px"
            width="100px"
            class="mr-3 rounded-lg shadow-lg border border-dark"
            alt="..."
          />
          <div class="media-body">
            <h4 class="mt-0">` +
      JSON.parse(response).result[i].title +
      `</h4>
            <p class="my-0">
              <small
                ><span class="text-secondary">Genre:</span>` +
      JSON.parse(response).result[i].genre +
      `</small
              ><small
                ><br /><span class="text-secondary">Director:</span>` +
      JSON.parse(response).result[i].director +
      `</small
              ><br /><small style="height: 100px"
                ><span class="text-secondary">Starring:</span>` +
      JSON.parse(response).result[i].stars +
      `</small
              >
            </p>
            <p class="my-0">
              <small
                >` +
      JSON.parse(response).result[i].runTime +
      ` | ` +
      JSON.parse(response).result[i].language +
      ` | ` +
      JSON.parse(response).result[i].releasedDate +
      `</small
              >
            </p>
            <p class="my-0 text-primary">
              <small
                >` +
      JSON.parse(response).result[i].pageViews +
      ` | Voted by ` +
      JSON.parse(response).result[i].totalVoted +
      ` people</small
              >
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <button class="btn btn-primary m-2 px-5"><div class="px-5">Watch Trailer</div></button>
      </div>
    </div>
  </div>`;
  }
  document.getElementById("movieList").innerHTML = list;
});

//covid data

var settings = {
  url: "https://api.covid19api.com/summary",
  method: "GET",
  timeout: 0,
};

$.ajax(settings).done(function (response) {
  var list = "";
  for (var i = 0; i < response.Countries.length; i++) {
    list +=
      ` <tr>
              <td>` +
      response.Countries[i].Country +i+
      `</td>
              <td>` +
      response.Countries[i].NewConfirmed +
      `</td>
              <td>` +
      response.Countries[i].NewDeaths +
      `</td>
              <td>` +
      response.Countries[i].NewRecovered +
      `</td>
              <td class="text-primary">` +
      response.Countries[i].TotalConfirmed +
      `</td>
              <td class="text-danger">` +
      response.Countries[i].TotalDeaths +
      `</td>
              <td class="text-success">` +
      response.Countries[i].TotalRecovered +
      `</td>
            </tr>`;
    document.getElementById("countryList").innerHTML = list;
  }
});
