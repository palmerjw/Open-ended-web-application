import PlayingCard from "./card.component";
import Draggable from 'react-draggable';
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
const Card = ({id, z, card, currentPile, containerWidth, containerHeight, stopHandler, newPosition, stack, startHandler, dragHandler}) =>{

    
    const useStyles = makeStyles({
        box: {
            position: "absolute",
            cursor: "move",
            margin: "auto",
            "user-select" : "none",
            zIndex : (typeof(z) !== 'undefined' ? z : 0),
        },
    });


    const defaultStopHandler = () =>{
        console.log("default stop handler used");
    }

    const defaultDragHandler = () =>{
        console.log("default drag handler used");
    }
    const defaultStartHandler = () =>{
        console.log("default start handler used");

    }

    const classes = useStyles();
    return (
        <Draggable  position={newPosition} 
        onStart={(e,data) => {typeof(startHandler) !== 'undefined' ? startHandler(data, {index:id, pileName:currentPile, newPosition, }) : defaultStartHandler();}} 
        onStop={(e,data) =>{typeof(stopHandler) !== 'undefined' ? stopHandler(data, {index: id,pileName:currentPile,newPosition, }) : defaultStopHandler(); }} 
        onDrag={(e,data) => {typeof(dragHandler) !== 'undefined'? dragHandler(data,{index: id,pileName:currentPile, newPosition, }): defaultDragHandler()}}>
            <div className={classes.box}>
                <PlayingCard card={card} containerHeight={containerHeight} containerWidth={containerWidth} stack={stack}/>
            </div>    
        </Draggable>
        );
};
const DraggableCard = React.memo(Card)
export default DraggableCard;