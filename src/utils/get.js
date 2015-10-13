export default function get(obj, keyname) {
    if(obj && obj.get){
        return obj.get(keyname);
    } else {
        return obj[keyname];
    }
}