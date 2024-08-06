import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { WrappedApp } from './App';

describe('App Routing', () => {
  test('renders Home page on default route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );
    expect(
      screen.getByText(/Your Go-To Spot for Quick and/i)
    ).toBeInTheDocument();
  });

  test('renders NotFound page on unknown route', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/404 - Not Found/i)).toBeInTheDocument();
  });

  test('WrappedApp renders without crashing', () => {
    render(<WrappedApp />);
    expect(
      screen.getByText(/Your Go-To Spot for Quick and/i)
    ).toBeInTheDocument();
  });
});
