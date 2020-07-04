import {reset} from "redux-form";

const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

let initialState = {
    messages: {
        my: [{id: 112, message: null}],
        friends: [{id: 1, message: 'Hello'}]
    },
    dialogs: [
        {id: 1, name: 'Andrew', img: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg'},
        {
            id: 2,
            name: 'Kristina',
            img: 'https://pm1.narvii.com/6960/b96261428e66115921eb208de561af56232f451br1-400-400v2_uhq.jpg'
        },
        {
            id: 3,
            name: 'Stas',
            img: 'https://pristor.ru/wp-content/uploads/2019/09/%D0%A4%D0%BE%D1%82%D0%BE-%D0%B4%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%B0%D1%80%D0%BD%D0%B5%D0%B9-%D0%B2-%D0%92%D0%9A011.jpg'
        },
        {
            id: 4,
            name: 'Sasha',
            img: 'https://avatars.mds.yandex.net/get-pdb/2497678/8a0d8782-6444-499a-b7c2-da531ff44941/s600'
        },
        {id: 5, name: 'Katja', img: 'https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1'}
    ]
}

const newDialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    my: [{id: 112, message: action.newMessage}]}
            };
        }
        default:
            return state
    }
}


export const addNewMessage = (newMessage) => {
    return (dispatch) => {
        dispatch({type: ADD_MESSAGE, newMessage});
        dispatch(reset('message'))
    }
}


export default newDialogsReducer