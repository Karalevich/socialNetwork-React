import React from 'react';

export const required = value => {
    if (value) return undefined;
    return 'Field is required'
}

export const maxLength = (maxSimbol) => (value) => {
    if (value.length > maxSimbol) return `Max length is ${maxSimbol} symbols`;
    return undefined
}