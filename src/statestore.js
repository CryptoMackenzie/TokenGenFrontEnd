import React, { useState } from "react";
import { useBetween } from "use-between";


const useFormState = () => {
    const [address,setAddress] = useState('')
    const [balance,setBalance] = useState('')

    return{
        address,balance,setAddress,setBalance
    };
};

const useSharedFormState = () => useBetween(useFormState);

export default useSharedFormState;