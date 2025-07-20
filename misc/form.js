
Drupal.behaviors.multiselectSelector = function() {
  // Automatically selects the right radio button in a multiselect control.
  $('.multiselect select:not(.multiselectSelector-processed)')
    .addClass('multiselectSelector-processed').on('change', function() {
      $('.multiselect input:radio[value="'+ this.id.substr(5) +'"]')
        .prop('checked', true);
  });
};
