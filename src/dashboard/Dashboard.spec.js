// Test away
import React from 'react';
import {render, fireEvent, cleanup} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';
import Display from '../Display/Display'
import Controls from '../Controls/Controls'

afterEach(cleanup);

describe('the Dahboard component', ()=>{
    it('renders the component', ()=>{
        render(<Dashboard/>);
    })

    it('renders the controls and display', ()=>{
        render(<Dashboard/>);
        render(<Display/>);
        render(<Controls/>);
    })

    it('closed gate', ()=>{
        render(<Dashboard/>);
        const {getByText} = render(<Controls locked={false} closed={false}/>);
        
        fireEvent.click(getByText(/close gate/i));

        getByText(/open gate/i);
    })

    it('locked gate', ()=>{
        render(<Dashboard/>);
        const {getByText} = render(<Controls locked={false} closed={false}/>);
        
        fireEvent.click(getByText(/close gate/i));
        fireEvent.click(getByText(/lock gate/i));

        getByText(/unlock gate/i);
    })
})
