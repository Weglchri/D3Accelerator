import React from 'react';
import ReactDOM from 'react-dom';

import { BarChart } from '../components/plotcomponents/BarChart'

export class D3Container extends React.Component {
    constructor(props) {
        super(props);

        //sample data
        this.state = {
            id: 'barchart_1',
            data: [12, 5, 6, 6, 9, 10],
            width: 700,
            height: 500
        };   
    }

    render() {
        return (
            <div>
                <BarChart id={this.state.id} height={this.state.height} width={this.state.width} data={this.state.data} />
            </div>
        );
    }
}

