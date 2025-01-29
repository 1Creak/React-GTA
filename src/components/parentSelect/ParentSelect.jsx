import React from "react";
import {Button, Box} from "@mui/material";
import { useSelector, useDispatch} from "react-redux";
import characterParents from "../../features/characterParents/characterParents.jsx";
import { characterParentsList } from "../../assets/data/characterParentsList.js"

function ParentSelect(){
    console.log(characterParentsList[1]);
    const motherID = useSelector(state => state.characterParentsList.motherId);
    const fatherID = useSelector(state => state.characterParentsList.fatherId);
    console.log(characterParentsList[motherID].image);
    return(
        <>
            <div>
                <h2>Mother</h2>
                <img src={characterParentsList[motherID].image} alt='Mother' />
                <Box>
                    <Button>
                        Left
                    </Button>

                    <Button>
                        Right
                    </Button>
                </Box>
            </div>

            <div>
                <h2>Father</h2>
                <img src={characterParentsList[fatherID].image} alt='Father' />
                <Box>
                    <Button>
                        Left
                    </Button>

                    <Button>
                        Right
                    </Button>
                </Box>

            </div>
        </>
    )
}

export default ParentSelect;