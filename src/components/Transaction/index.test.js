import React from "react";
import Transaction from ".";
import renderer from 'react-test-renderer';

describe('Transaction component', () => {
    let component;
    let props;

    beforeEach(() => {
        props = {
            transaction: {
                value: 100,
                comment: 'test',
                date: '01.01.2024'
            }
        };
        component = renderer.create(<Transaction {...props} />);
    })

    it('should show transaction', () => {
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
});