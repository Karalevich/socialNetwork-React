import profileReducer from "./profile-reducer";
import newDialogsReducer from "./newDialogs-reducer";

let store = {
    state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi how are you?', likeCount: '15'},
                {id: 2, message: "It is me  first post", likeCount: '20'},
            ],
            newPostText: 'Hello world'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you doing?'},
                {id: 3, message: 'Hi'},
                {id: 4, message: 'Bye'},
                {id: 5, message: 'It is ok'}
            ],
            newMessage: 'Hello',
            dialogs: [
                {id: 1, name: 'Andrew'},
                {id: 2, name: 'Kristina'},
                {id: 3, name: 'Stas'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Katja'}
            ],
            avatars: [
                {id: 1, img: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg'},
                {
                    id: 2,
                    img: 'https://pm1.narvii.com/6960/b96261428e66115921eb208de561af56232f451br1-400-400v2_uhq.jpg'
                },
                {
                    id: 3,
                    img: 'https://pristor.ru/wp-content/uploads/2019/09/%D0%A4%D0%BE%D1%82%D0%BE-%D0%B4%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%B0%D1%80%D0%BD%D0%B5%D0%B9-%D0%B2-%D0%92%D0%9A011.jpg'
                },
                {
                    id: 4,
                    img: 'https://avatars.mds.yandex.net/get-pdb/2497678/8a0d8782-6444-499a-b7c2-da531ff44941/s600'
                },
                {
                    id: 5,
                    img: 'https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1'
                }
            ]
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Andrew',
                    img: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg'
                },
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
                {
                    id: 5,
                    name: 'Katja',
                    img: 'https://lh3.googleusercontent.com/proxy/WXHSEScu6kZ8jdFP3HJuwQ2ogjsIi04FNCSkXbva1zykTRIprR0CTqI4v8ikkCmxN66Ok4ilb7gZhC0T2nQQKfqhhQDC3JhMu37v1GXElrVYrA0jkjtWaJ8VQTljt7Q8Rec3j1SOSVFk5jpiEMx-HZSW9j7ooqTIGvfl8vwdV-4'
                }
            ]
        },
    },

    getState() {
        return this.state
    },
    subscribe(observer) {
        this.callSubscriber = observer;
    },

    callSubscriber() {
        console.log('hello')
    },

    dispatch(action) {
        this.state.profilePage = profileReducer(this.state.profilePage, action)
        this.state.dialogsPage = newDialogsReducer(this.state.dialogsPage, action)
        this.callSubscriber(this);
    },

}



export default store