import { mount, shallow } from 'riot-test-utils';
import assert from 'assert';
import riotTestTag from '../riotTestTag.tag';

var testTag = riotTestTag;
var wrapper = mount(testTag, {
  title: 'Fake Title'
});

// snapshot test
it('card should match snapshot', function() {
  expect(wrapper.toJSON()).toMatchSnapshot();
});

// DOM testing
it('should display the h1 static title', () => {
  assert(wrapper.root.querySelector('h1').textContent === 'Riot Test Header');
});

it('should display the h3 dynamic title', () => {
  assert(wrapper.root.querySelector('h3').textContent === 'Fake Title');
});

it('should match the expected outerHTHML exactly', () => {
  assert(
    wrapper.root.querySelector('.test-wrapper').outerHTML ===
      '<div class="test-wrapper"><h1>Riot Test Header</h1><h3>Fake Title</h3></div>'
  );
});
