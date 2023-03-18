import React from 'react';
import { render, screen } from '@testing-library/react';
import Auth from './Auth';
import { BrowserRouter } from 'react-router-dom';

describe("Auth component", () => {
    it("should render Auth component correctly", () => {
        render(
            <BrowserRouter><Auth /></BrowserRouter>);
        const emailInput = screen.getByPlaceholderText(/Email/i);
        const usernameInput = screen.getByPlaceholderText(/Username/i);
        const loginButton = screen.getByText(/login/i);
        expect(emailInput).toBeInTheDocument();
        expect(usernameInput).toBeInTheDocument();
        expect(loginButton).toBeInTheDocument();
    });
});