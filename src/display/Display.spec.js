// Test away!
import React from 'react';
import {render} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

describe('the Display component', ()=>{
    it('renders the component', ()=>{
        render(<Display/>);
    })

    it('defaults to unlocked and open', ()=>{
        const {getByText} = render(<Display/>);

        getByText(/unlocked/i);
        getByText(/open/i);
    })

    it('displays Locked and Closed', ()=>{
        const {getByText} = render(<Display closed={true} locked={true}/>);

        getByText(/unlocked/i);
        getByText(/open/i);
    })
})