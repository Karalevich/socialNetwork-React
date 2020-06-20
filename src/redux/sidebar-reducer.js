let initialState = {
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
            img: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg'
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
}
const sideBarReducer = (state = initialState, action) => {
    let newState = {...state}
    return newState
}

export default sideBarReducer