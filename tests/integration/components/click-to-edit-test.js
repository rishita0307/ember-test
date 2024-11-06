import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-quickstart/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | click-to-edit', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ClickToEdit />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ClickToEdit>
        template block text
      </ClickToEdit>
    `);

    assert.dom().hasText('template block text');
  });
});
