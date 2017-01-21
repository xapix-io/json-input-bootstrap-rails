$(document).ready(function() {

  $("body").append(`<div id="json-input-modal" class="modal fade" aria-labelledby="JsonInputModal" role="dialog">
    <div class="modal-dialog modal-lg">
      <div id="json-input-modal-content" class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title">JSON Input</h4>
        </div>
        <form id="json-form">
          <div id="json-rows" class="modal-body">
            <div class="row json-header-row">
              <label class="control-label col-xs-5">key</label>
              <label class="control-label col-xs-1">:</label>
              <label class="control-label col-xs-5">value</label>
            </div>
          </div>
          <div class="modal-footer">
            <div class="row">
              <div class="col-xs-11"></div>
              <div class="btn-area col-xs-1"><button id="add-row" type="button" class="btn btn-success">+</button></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>`)

  var text_area = $(".json-input-bootstrap-rails")
  var modal = $("#json-input-modal")
  var save_button = $("#save-button")
  var add_row_button = $("#add-row")
  var json_form = $("#json-form")
  var json_rows = $("#json-rows")

  var new_row = `<div class="row json-row">
    <div class="form-group">
      <div class="key-field col-xs-5"><input class="form-control"></div>
      <div class="colon-holder col-xs-1"><span>:</span></div>
      <div class="value-field col-xs-5"><input class="form-control"></div>
      <div class="delete-area btn-area col-xs-1">
        <button class="delete-button btn btn-danger" type="button">X</button>
      </div>
    </div>
  </div>`

  text_area.click(function() {
    modal.modal('show');
    
    json_form.attr("data", this.id)
    var current_text = ""

    if (this.value == "") {
      $(".json-row").remove()
      json_rows.append(new_row)
    } else {
      current_text = JSON.parse(this.value)
      $(".json-row").remove()
      $.each(current_text, function(key, val){
        json_rows.append(`<div class="row json-row">
          <div class="form-group">
            <div class="key-field col-xs-5">
              <input class="key-data form-control" value="` + key + `">
            </div>
            <div class="colon-holder col-xs-1"><span>:</span></div>
            <div class="value-field col-xs-5">
              <input class="value-data form-control" value="` + val +`">
            </div>
            <div class="delete-area btn-area col-xs-1">
              <button class="delete-button btn btn-danger" type="button">X</button>
            </div>
          </div>
        </div>`)
      })
      json_rows.append(new_row)
    }
    modal.modal('show');
  })

  add_row_button.click(function(){
    $("#json-rows").append(new_row);
  });

  json_form.on('click','.delete-button',function() {
    this.parentElement.parentElement.remove()
  });

  modal.on('hidden.bs.modal', function () {
    var values = []
    var pairs = {}
    $("#json-form input").each(function(index, data){ values.push($(this).val()) })
    values = values.filter(function(n){ return n != "" })
    for (var i=0; i < values.length; i = i+2) {
      pairs[values[i]] = values[i+1]
    }
    var json = JSON.stringify(pairs)
    $('[id='+ json_form.attr("data") +']').val(json)
    modal.modal('hide');
  })
});
