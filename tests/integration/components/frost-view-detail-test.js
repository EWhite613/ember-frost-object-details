import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'frost-view-detail',
  'Integration: FrostViewDetailComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#frost-view-detail}}
      //     template content
      //   {{/frost-view-detail}}
      // `);

      this.render(hbs`{{frost-view-detail}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
