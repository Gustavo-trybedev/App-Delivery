import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('NavBar', () => {
  let navigateMock;

  beforeEach(() => {
    navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);
    localStorage.clear();
  });

  it('should render correctly', () => {
    render(<NavBar />);
    expect(screen.getByTestId(
      'customer_products__element-navbar-link-products',
    )).toBeInTheDocument();
    expect(screen.getByTestId(
      'customer_products__element-navbar-link-orders',
    )).toBeInTheDocument();
    expect(screen.getByTestId(
      'customer_products__element-navbar-link-logout',
    )).toBeInTheDocument();
    expect(screen.getByTestId(
      'customer_products__element-navbar-user-full-name',
    )).toBeInTheDocument();
  });

  it('should navigate to /customer/products when clicking on Produtos button', () => {
    render(<NavBar />);
    fireEvent.click(screen.getByTestId(
      'customer_products__element-navbar-link-products',
    ));
    expect(navigateMock).toHaveBeenCalledWith('/customer/products');
  });

  it('should navigate to /customer/orders when clicking on Pedidos button', () => {
    render(<NavBar />);
    fireEvent.click(screen.getByTestId('customer_products__element-navbar-link-orders'));
    expect(navigateMock).toHaveBeenCalledWith('/customer/orders');
  });

  it('should display the username from localStorage', () => {
    const username = 'Panda Doe';
    localStorage.setItem('user', username);
    render(<NavBar />);
    expect(screen.getByTestId(
      'customer_products__element-navbar-user-full-name',
    )).toHaveTextContent(username);
  });

  it('should clear localStorage and nav /login when clicking on Sair button', () => {
    localStorage.setItem('user', 'Panda Doe');
    render(<NavBar />);
    fireEvent.click(screen.getByTestId('customer_products__element-navbar-link-logout'));
    expect(localStorage.getItem('user')).toBeNull();
    expect(navigateMock).toHaveBeenCalledWith('/login');
  });
});
