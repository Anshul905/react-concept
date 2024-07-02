export const incNumber = ()=> {
    return {
        type : 'INCREMENT'   
    }
}
export const decNumber = (num)=> {
    return {
        type : 'DECREMENT',
        payload : num 
    }
}

export const toLight = ()=> {
    return {
        type : 'LIGHT'
    }
}

export const toDark = ()=> {
    return {
        type : 'DARK'
    }
}

export const flipTheme = ()=> {
    return {
        type : 'FLIP'
    }
}
