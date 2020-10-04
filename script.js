var form = new FormData();
form.append("category", "movies");
form.append("language", "kannada");
form.append("genre", "all");
form.append("sort ", "voting");

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
  console.log(JSON.parse(response).result[0]);
  var list =""
  for(var i=0; i< JSON.parse(response).result.length; i++)
  {
      list +=
        `<div class="col-4 d-flex justify-content-center mb-4">
        <div class="card shadow-lg" style="width: 18rem;">
  <img src="` +
        JSON.parse(response).result[i].poster +
        `" class="card-img-top" height="300px" alt="...">
  <div class="card-body">
    <h5 class="card-title">` +
        JSON.parse(response).result[i].title +
        `</h5>
    <p class="card-text">Genre:` +
        JSON.parse(response).result[i].genre +
        `</p>
   <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#dsd` +
        JSON.parse(response).result[i]._id +
        `">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="dsd` +
        JSON.parse(response).result[i]._id +
        `" tabindex="-1" aria-labelledby="dsd` +
        JSON.parse(response).result[i]._id +
        `Label" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="dsd` +
        JSON.parse(response).result[i]._id +
        `Label">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       ` +
        JSON.stringify(JSON.parse(response).result[i]) +
        `
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
      </div>`;
      console.log(JSON.parse(response).result[0].poster);
  }
  document.getElementById("movieList").innerHTML= list
});
