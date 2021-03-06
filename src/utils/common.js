export function formatDate(date) {
    /* eslint no-confusing-arrow: 0 */
    const pad = n => n < 10 ? `0${n}` : n;
    const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    return dateStr;
}
export function getAge(birth) {
    let arr = birth.split('-')
    let age = 0
    let now = new Date()
    age = now.getFullYear() - arr[0]
    if (parseInt(arr[1]) <= (now.getMonth() + 1) && parseInt(arr[2]) <= now.getDate()) {
        age += 1
    }
    return age
}
export function getSearchObj(str) {
    if (str) {
        let newstr = str.replace('?', '')
        let parm = newstr.split('&')
        console.log(parm)
        let obj = {}
        for (let i = 0; i < parm.length; i++) {
            let p = parm[i].split('=')
            obj[p[0]] = p[1]
        }
        return obj
    } else {
        return false
    }
}
