import React from "react";
import {Button, Box} from "@mui/material";
import { useSelector, useDispatch} from "react-redux";
import { minusMotherId, addMotherId,minusFatherId,addFatherId } from "../../features/characterParents/characterParents.jsx";
import { characterParentsList } from "../../assets/data/characterParentsList.js"

function ParentSelect(){

    const dispatch = useDispatch();
    const motherID = useSelector(state => state.characterParentsList.motherId);
    const fatherID = useSelector(state => state.characterParentsList.fatherId);
    console.log(characterParentsList[motherID].image);

    const handlerLeft = (type) => {
        if(type === 'mother'){
            dispatch(minusMotherId())
        }else{
            dispatch(minusFatherId())
        }
    }

    const handlerRight = (type) => {
        if(type === 'mother'){
            dispatch(addMotherId())
        }else{
            dispatch(addFatherId())
        }
    }
    return(
        <>
            <div>
                <h2>Mother</h2>
                <img width='120' height='140' src={characterParentsList[motherID].image} alt='Mother' />
                <Box>
                    <Button onClick={() => {handlerLeft('mother')}}>
                        Left
                    </Button>

                    <Button onClick={() => {handlerRight('mother')}}>
                        Right
                    </Button>
                </Box>
            </div>

            <div>
                <h2>Father</h2>
                <img width='120' height='140' src={characterParentsList[fatherID].image} alt='Father' />
                <Box>
                    <Button onClick={() => {handlerLeft('')}}>
                        Left
                    </Button>

                    <Button onClick={() => {handlerRight('')}}>
                        Right
                    </Button>
                </Box>

            </div>
        </>
    )
}

export default ParentSelect;