$(document).ready(function() {

  if ($('.json-input-bootstrap-rails').length > 0) {
    $("body").append('<div id="json-input-modal" class="modal fade" aria-labelledby="JsonInputModal" role="dialog"><div class="modal-dialog modal-lg"><div id="json-input-modal-content" class="modal-content"><div class="modal-header"><button type="button" id="close-json-input-modal" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 id="json-title" class="modal-title">JSON Input</h4></div><form id="json-form"><div id="json-rows" class="modal-body"><div class="row json-header-row"><label id="json-header-key" class="control-label col-xs-5">key</label><label class="control-label col-xs-1">:</label><label id="json-header-value" class="control-label col-xs-5">value</label></div></div><div class="modal-footer"><div class="row"><div class="col-xs-11"></div><div class="btn-area col-xs-1"><button id="add-row" type="button" class="btn btn-success">+</button></div></div></div></form></div></div></div>');

    var modal = $("#json-input-modal");
    var json_form = $("#json-form");
    var json_rows = $("#json-rows");

    var new_row = '<div class="row json-row"><div class="form-group"><div class="key-field col-xs-5"><input name="key" class="form-control"></div><div class="colon-field col-xs-1"><span>:</span></div><div class="value-field col-xs-5"><input name="value" class="form-control"></div><div class="delete-area btn-area col-xs-1"><button class="delete-button btn btn-danger" type="button">x</button></div></div></div>';

    $(document).on('click', ".json-input-bootstrap-rails", function(e) {
      json_form.attr("data", this.id);
      var text_area = $(e.target);
      var current_text = "";
      var keyLabel = text_area.attr('data-key-label');
      if (typeof keyLabel !== typeof undefined && keyLabel !== false) {
        $('#json-header-key').text(keyLabel);
      }
      var valueLabel = text_area.attr('data-value-label');
      if (typeof valueLabel !== typeof undefined && valueLabel !== false){
        $('#json-header-value').text(valueLabel);
      }
      var title = text_area.attr('data-title');
      if (typeof title !== typeof undefined && title !== false) {
        $('#json-title').text(title);
      } else {
        $('#json-title').text(text_area.attr('name'));
      }

      if (this.value == "") {
        $(".json-row").remove();
        json_rows.append(new_row);
      } else {
        current_text = JSON.parse(this.value);
        $(".json-row").remove();
        $.each(current_text, function(key, val){
          json_rows.append('<div class="row json-row"><div class="form-group"><div class="key-field col-xs-5"><input name="key" class="key-data form-control" value="' + key + '"></div><div class="colon-holder col-xs-1"><span>:</span></div><div class="value-field col-xs-5"><input name="value" class="value-data form-control" value="' + val + '"></div><div class="delete-area btn-area col-xs-1"><button class="delete-button btn btn-danger" type="button">x</button></div></div></div>');
        })
        json_rows.append(new_row);
      }
      modal.modal('show');
    })

    $(document).on('click', '#json-input-modal #add-row', function(){
      $("#json-rows").append(new_row);
    });

    $(document).on('click', '#json-input-modal .delete-button', function() {
      this.parentElement.parentElement.remove();
    });

    $(document).on('hidden.bs.modal', '#json-input-modal', function () {
      var values = [];
      var pairs = {};
      $("#json-form input").each(function(index, data){ values.push($(this).val()) });
      values = values.filter(function(n){ return n != "" });
      for (var i=0; i < values.length; i = i+2) {
        pairs[values[i]] = values[i+1];
      }
      var json = JSON.stringify(pairs);
      $('[id='+ json_form.attr("data") +']').val(json);
      modal.modal('hide');
    })
  }
});
