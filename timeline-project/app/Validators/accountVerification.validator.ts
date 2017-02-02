export function emailverification(input:any){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)){
        return null;
    }
    return {emailverification: true};
}

export function passwordverification(input:any){
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(input.value.match(decimal)){
        return null;
    }
    return {passwordverification: true};
}