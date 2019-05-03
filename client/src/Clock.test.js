import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';

import { shallow } from 'enzyme';

describe('Clock tests', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Clock />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('calls fetch to server on component did mount', () => {
        jest.spyOn(global, 'fetch')
        
        const wrapper = shallow(<Clock />);

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith('http://localhost:8000/api/timestamp')
    });

    it('calls fetch to server on component did mount and updates state', done => {
        const mockSuccessResponse = {
            'currentTime': 'timestamp'
        };
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({
          json: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise)        
        
        const wrapper = shallow(<Clock />);

        process.nextTick(() => {
            expect(wrapper.state()).toEqual({
                time: 'timestamp'
            })
            global.fetch.mockClear();
            done();
        })
    });
});