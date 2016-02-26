'use strict';
(function(module) {
  var eventsView = {};

  var eventsTemplate = Handlebars.compile($('#events-template').text());

  eventsView.drawEvents = function(events) {
    $('.event-loader').hide();
    var $eventSection = $('#event-section');
    $eventSection.empty();
    if (events.length > 0) {
      events.forEach(function(a) {
        var $eventElement = $(eventsTemplate(a));
        // attach handler for expanded information
        $eventElement.click(function() {
          $(this).find('.event-expand').toggle();
        });
        $eventSection.append($eventElement);
      });
    } else {
      var $noEventElement = $('<p class="no-events">No Events Found</p>');
      $eventSection.append($noEventElement);
    }
  };

  module.eventsView = eventsView;
})(window);
