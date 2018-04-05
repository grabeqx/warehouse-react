export function formatDate() {
    var today = new Date(),
        dd = today.getDate(),
        mm = today.getMonth()+1,
        yyyy = today.getFullYear(),
        hh = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    }
    if(hh<10){
        hh='0'+hh;
    } 
    if(min<10){
        min='0'+min;
    } 
    if(sec<10){
        sec='0'+sec;
    }
    return yyyy+'-'+mm+'-'+dd+' '+hh+':'+min+':'+sec;
}