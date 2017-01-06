$(document).ready(function() {

  var text_area = $("#text-area")
  var modal = $("#modal")
  var cancel_button = $("#cancel-button")
  var save_button = $("#save-button")
  var add_row_button = $("#add-row")
  var json_rows = $("#json-rows")
  var json_form = $("#json-form")

  text_area.click(function() {
    modal.css("display", "block")
  })

  cancel_button.click(function() {
    modal.css("display", "none")
  })

  add_row_button.click(function(){
    $("#json-rows form").append(`<div class="row json-row">
      <div class="key-field col-xs-5">
        <input class="key-data form-control">
      </div>
      <div class="colon-holder col-xs-1">
        <span>:</span>
      </div>
      <div class="value-field col-xs-5">
        <input class="value-data form-control">
      </div>
      <div class="delete-area col-xs-1">
        <button class="delete-button btn" type="button">X</button>
      </div>
    </div>`);
  });

  json_rows.on('click','.delete-button',function() {
    this.parentElement.parentElement.remove()
  });

  json_form.submit(function(event) {
    event.preventDefault()
    var values = []
    var pairs = {}
    $.each(event.target.elements, function(index, value){values.push(event.target.elements[index].value)})
    values = values.filter(function(n){ return n != "" })
    for (var i=0; i<values.length; i = i+2) {
      pairs[values[i]] = values[i+1]
    }
    var final = JSON.stringify(pairs)
    text_area.val(final)
    modal.css("display", "none")
  })

});
