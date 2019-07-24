import React from 'react';

import * as d3 from 'd3';

export class BarChart extends React.Component {
    componentDidMount() {
      this.drawChart();
    }
      
    drawChart() {
        const d = this.props.data;
        const w = this.props.width
        const h = this.props.height

        const svg = d3.select("div#barchart_1")
            .append("svg")
            .attr("width", w)
            .attr("height", h)

        svg.selectAll("rect")
            .data(d)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => h - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "#4db6ac")

        svg.selectAll("text")
            .data(d)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => h - (10 * d) - 3)
    }
    
    render(){ 
        return (
            <div id={this.props.id}></div>
        );
    }
}
