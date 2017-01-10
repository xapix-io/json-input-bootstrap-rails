$(document).ready(function() {

  $("body").append(`<div id="json-input-modal" class="modal-dialog modal-lg">
    <div id="json-input-modal-content" class="modal-content">
      <form id="json-form">
        <div id="json-rows">
          <div class="row json-header-row">
            <div class="key-label col-xs-5">
              <span>KEY</span>
            </div>
            <div class="colon-label col-xs-1">
              <span>:</span>
            </div>
            <div class="value-label col-xs-5">
              <span>VALUE</span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button id="save-button" type="submit" class="btn btn-success">Save</button>
          <button id="cancel-button" type="button" class="btn btn-success">Cancel</button>
          <button id="add-row" type="button" class="btn btn-success">Add a Row</button>
        </div>
      </form>
    </div>
  </div>`)

  var text_area = $(".json-input-bootstrap-rails")
  var modal = $("#json-input-modal")
  var cancel_button = $("#cancel-button")
  var save_button = $("#save-button")
  var add_row_button = $("#add-row")
  var json_form = $("#json-form")
  var json_rows = $("#json-rows")

  var new_row = `<div class="row json-row">
    <div class="key-field col-xs-5">
      <input class="form-control">
    </div>
    <div class="colon-holder col-xs-1">
      <span>:</span>
    </div>
    <div class="value-field col-xs-5">
      <input class="form-control">
    </div>
    <div class="delete-area col-xs-1">
      <button class="delete-button btn" type="button">X</button>
    </div>
  </div>`


  text_area.click(function() {
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
          <div class="key-field col-xs-5">
            <input class="key-data form-control" value="` + key + `">
          </div>
          <div class="colon-holder col-xs-1">
            <span>:</span>
          </div>
          <div class="value-field col-xs-5">
            <input class="value-data form-control" value="` + val +`">
          </div>
          <div class="delete-area col-xs-1">
            <button class="delete-button btn" type="button">X</button>
          </div>
        </div>`)
      })
    }
    modal.css("display", "block")
  })

  cancel_button.click(function() {
    modal.css("display", "none")
  })

  add_row_button.click(function(){
    $("#json-rows").append(new_row);
  });

  json_form.on('click','.delete-button',function() {
    this.parentElement.parentElement.remove()
  });

  json_form.submit(function(event) {
    event.preventDefault()
    var values = []
    var pairs = {}
    $.each(event.target.elements, function(index){values.push(event.target.elements[index].value)})
    values = values.filter(function(n){ return n != "" })
    for (var i=0; i<values.length; i = i+2) {
      pairs[values[i]] = values[i+1]
    }
    var final = JSON.stringify(pairs)
    $('[id='+ this.attributes.data.value +']').val(final)
    modal.css("display", "none")
  })

});
