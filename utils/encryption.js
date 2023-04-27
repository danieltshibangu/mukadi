
export function encryptItem (item) {
    try{ 
        item = Buffer.from(item, 'utf8').toString('base64')
        return item
    } catch (err) { console.log(err)}
}

export function decryptItem (item) {
    try{ 
        item = Buffer.from(item, 'base64').toString('utf8')
        return item
    } catch (err) { console.log(err)}
}