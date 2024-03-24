import React from "react";
import Form from '.';
import { render, screen } from '@testing-library/react';

describe('Form component', () => {
    test('the component renders correctly', () => {
        render(<Form />);

        const balance = screen.getByRole('spinbutton');
        expect(balance).toBeInTheDocument();

        const comment = screen.getByRole('textbox');
        expect(comment).toBeInTheDocument();

        const saveButton = screen.getByRole('button');
        expect(saveButton).toBeInTheDocument();

        const dateInput = screen.getByTitle('date');
        expect(dateInput).toBeInTheDocument();


    });
});