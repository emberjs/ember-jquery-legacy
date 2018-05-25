import { module, test } from 'qunit';
import { normalizeEvent } from 'ember-jquery-legacy';
import $ from 'jquery';

module('normalize-event', function() {
  test('it extracts the native event from jQuery events', function(assert) {
    let e = new MouseEvent("click");
    let jQueryEvent = $.Event(e);
    assert.equal(e, normalizeEvent(jQueryEvent));
  });

  test('it returns the passed-in event if it is native', function(assert) {
    let e = new MouseEvent('click');
    assert.equal(e, normalizeEvent(e));
  });
});
