import React from 'react';
import { AlertProvider, AlertContext } from '../../src/context';
import renderer from 'react-test-renderer';

describe('Alert', () => {
  let testRenderer;
  class SubComponent extends React.Component {
    static contextType = AlertContext;
    render() {
      return <div />;
    }
  }

  beforeEach(() => {
    testRenderer = renderer.create(
      <AlertProvider>
        <AlertContext>
          {context => <SubComponent context={context} />}
        </AlertContext>
      </AlertProvider>
    );
  });

  it('should provide a alert function from context', () => {
    const alert = testRenderer.root.findByType(SubComponent).props.context;
    expect(typeof alert).toBe('function');
  });
});
