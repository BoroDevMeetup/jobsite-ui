import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | sub-nav', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SubNav />`);

    assert.equal(this.element.textContent.trim(), 'Jobs');

  });

  test('it contains an H2 element', async function (assert) {
    await render(hbs`<SubNav />`);
    assert.dom('h2').exists();
  });
});
