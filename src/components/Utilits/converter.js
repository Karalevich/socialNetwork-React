export const converter = (items, id, objPropName, newObjProps) => {
    return items.map (user => {
        if(user[objPropName] === id) {
            return{...user, ...newObjProps}
        }
        return user;
    })
}