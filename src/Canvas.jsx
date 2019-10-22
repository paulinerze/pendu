import React, { Component } from 'react';

export default class Canvas extends Component{

    constructor(props){
        super(props);
        this.errors = props.errors;
        this.state = {
            stickmanSize: 20
        }
    }

    componentWillMount(){
        this.setState({canvasSize:{canvasWidth: 400, canvasHeight: 300}})
    }

    componentDidMount(){
        const {canvasWidth,canvasHeight} = this.state.canvasSize;
        this.canvasStickman.width = canvasWidth;
        this.canvasStickman.height = canvasHeight;
        this.drawStickman(this.canvasStickman,{x: 50, y:50});
    }

    drawStickman(canvasID){
        switch (this.errors) {
            case 1:
                this.drawLine(canvasID,{x: 50, y: 270}, {x: 300, y: 270})
                break;
            case 2:
                this.drawLine(canvasID,{x: 50, y: 270}, {x: 300, y: 270})
                this.drawLine(canvasID,{x: 80, y: 30}, {x: 80, y: 270})
                break;
            case 3:
                this.drawLine(canvasID,{x: 50, y: 270}, {x: 300, y: 270})
                this.drawLine(canvasID,{x: 80, y: 30}, {x: 80, y: 270})
                this.drawLine(canvasID,{x: 50, y: 30}, {x: 300, y: 30})
                break;
            case 4:
                this.drawLine(canvasID,{x: 50, y: 270}, {x: 300, y: 270})
                this.drawLine(canvasID,{x: 80, y: 30}, {x: 80, y: 270})
                this.drawLine(canvasID,{x: 50, y: 30}, {x: 300, y: 30})
                this.drawLine(canvasID,{x: 210, y: 30}, {x: 210, y: 70})
                break;
            case 5:
                this.drawLine(canvasID,{x: 50, y: 270}, {x: 300, y: 270})
                this.drawLine(canvasID,{x: 80, y: 30}, {x: 80, y: 270})
                this.drawLine(canvasID,{x: 50, y: 30}, {x: 300, y: 30})
                this.drawLine(canvasID,{x: 210, y: 30}, {x: 210, y: 70})
                this.drawCircle(canvasID, 210,95,25,0,2*Math.PI, true)
                break;
            case 6:
                this.drawLine(canvasID,{x: 50, y: 270}, {x: 300, y: 270})
                this.drawLine(canvasID,{x: 80, y: 30}, {x: 80, y: 270})
                this.drawLine(canvasID,{x: 50, y: 30}, {x: 300, y: 30})
                this.drawLine(canvasID,{x: 210, y: 30}, {x: 210, y: 70})
                this.drawCircle(canvasID, 210,95,25,0,2*Math.PI, true)
                this.drawLine(canvasID,{x: 210, y: 120}, {x: 210, y: 200})
                break;
            case 7:
                this.drawLine(canvasID,{x: 50, y: 270}, {x: 300, y: 270})
                this.drawLine(canvasID,{x: 80, y: 30}, {x: 80, y: 270})
                this.drawLine(canvasID,{x: 50, y: 30}, {x: 300, y: 30})
                this.drawLine(canvasID,{x: 210, y: 30}, {x: 210, y: 70})
                this.drawCircle(canvasID, 210,95,25,0,2*Math.PI, true)
                this.drawLine(canvasID,{x: 210, y: 120}, {x: 210, y: 200})
                this.drawLine(canvasID,{x: 210, y: 200}, {x: 250, y: 250})
                break;
            case 8:
                this.drawLine(canvasID,{x: 50, y: 270}, {x: 300, y: 270})
                this.drawLine(canvasID,{x: 80, y: 30}, {x: 80, y: 270})
                this.drawLine(canvasID,{x: 50, y: 30}, {x: 300, y: 30})
                this.drawLine(canvasID,{x: 210, y: 30}, {x: 210, y: 70})
                this.drawCircle(canvasID, 210,95,25,0,2*Math.PI, true)
                this.drawLine(canvasID,{x: 210, y: 120}, {x: 210, y: 200})
                this.drawLine(canvasID,{x: 210, y: 200}, {x: 250, y: 250})
                this.drawLine(canvasID,{x: 210, y: 200}, {x: 170, y: 250})
                break;
            case 9:
                this.drawLine(canvasID,{x: 50, y: 270}, {x: 300, y: 270})
                this.drawLine(canvasID,{x: 80, y: 30}, {x: 80, y: 270})
                this.drawLine(canvasID,{x: 50, y: 30}, {x: 300, y: 30})
                this.drawLine(canvasID,{x: 210, y: 30}, {x: 210, y: 70})
                this.drawCircle(canvasID, 210,95,25,0,2*Math.PI, true)
                this.drawLine(canvasID,{x: 210, y: 120}, {x: 210, y: 200})
                this.drawLine(canvasID,{x: 210, y: 200}, {x: 250, y: 250})
                this.drawLine(canvasID,{x: 210, y: 200}, {x: 170, y: 250})
                this.drawLine(canvasID,{x: 210, y: 140}, {x: 260, y: 170})
                break;
            case 10:
                this.drawLine(canvasID,{x: 50, y: 270}, {x: 300, y: 270})
                this.drawLine(canvasID,{x: 80, y: 30}, {x: 80, y: 270})
                this.drawLine(canvasID,{x: 50, y: 30}, {x: 300, y: 30})
                this.drawLine(canvasID,{x: 210, y: 30}, {x: 210, y: 70})
                this.drawCircle(canvasID, 210,95,25,0,2*Math.PI, true)
                this.drawLine(canvasID,{x: 210, y: 120}, {x: 210, y: 200})
                this.drawLine(canvasID,{x: 210, y: 200}, {x: 250, y: 250})
                this.drawLine(canvasID,{x: 210, y: 200}, {x: 170, y: 250})
                this.drawLine(canvasID,{x: 210, y: 140}, {x: 260, y: 170})
                this.drawLine(canvasID,{x: 210, y: 140}, {x: 160, y: 170})
                break;
            default:
                break;
        }
    }

    drawLine(canvasID, start, end){
        const ctx = canvasID.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
        ctx.closePath();
    }

    drawCircle(canvasID,start,end,rad,startAngle,endAngle,clockwise){
        const ctx = canvasID.getContext("2d");
        ctx.beginPath();
        ctx.arc(start,end,rad,startAngle,endAngle,clockwise);
        ctx.stroke();
        ctx.closePath();

    }

    render(){
        return(
            <div>
                <canvas ref={canvasStickman => this.canvasStickman = canvasStickman}></canvas>
            </div>
        )
    }
}