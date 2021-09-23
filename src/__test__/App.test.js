import { render, screen } from '@testing-library/react';
import App from '../App';

it('App', () => {
    const app = shallow(<App />);
    expect(1).toEqual(1);
});

const root = document.createElement('root');

beforeEach(() => {
    document.body.appendChild(root);

    const content = (
        <Provider store={store}>
            <App />
        </Provider>
    );

    render(
        content,
        root
    );
});