import React from 'react';
import Link from './PureButton';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <Link>Facebook</Link>,
    );
    let tree = component.toJSON();
    let children = tree.children[0];
    expect(tree).toMatchSnapshot();
    expect(children).toBe('Facebook')
});