// Test away!
import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from './Controls';

describe('the Controls component', ()=>{
    it('renders the component', ()=>{
        render(<Controls/>);
    })

    it('displays Close gate button', ()=>{
        const {getByText} = render(<Controls locked={false} closed={false}/>);

        getByText(/close gate/i);
    })

    it('pressed gate button', ()=>{
        const {getByText} = render(<Controls locked={false} closed={false}/>);
        
        fireEvent.click(getByText(/close gate/i));
    })
})