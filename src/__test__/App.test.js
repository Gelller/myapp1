import { render, screen } from '@testing-library/react';
import App from '../App';

it('App', () => {
    const app = shallow(<App />);
    expect(1).toEqual(1);
});

