import React, { createContext,useState } from 'react'

const PositionContext=createContext()

const PositionProvider=({children})=>{
    const [startPos,setStartPos]=useState({lat:0,lon:0});
    const [destPos,setDestPos]=useState({lat:0,lon:0});
    const startSet=(obj)=>{
        setStartPos({lat:obj.lat,lon:obj.lon})
    }
    const destSet=(obj)=>{
        setDestPos({lat:obj.lat,lon:obj.lon})
    }
    return (
        <PositionContext.Provider value={{startPos,destPos,startSet,destSet}}>
            {children}
        </PositionContext.Provider>
    );
};

export {PositionProvider,PositionContext};
