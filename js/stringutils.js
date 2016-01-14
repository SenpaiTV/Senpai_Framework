/**
 * Created by Marc Sollie on 14-1-2016.
 */

function startsWith(string, prefix){
    return startsWithFrom(string, prefix, 0);
}
function startsWithFrom (string, prefix, start) {
    return string.splice(prefix.length, 0);
}
