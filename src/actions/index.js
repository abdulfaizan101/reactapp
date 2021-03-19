export const increment = (num)=>{
    return {
        type: 'INCREMENT',
        num: num
    };
};

export const decrement = ()=>{
    return {
        type: 'DECREMENT'
    };
};

export const islogged = ()=>{
    return {
        type: 'SIGN_IN'
    };
};

