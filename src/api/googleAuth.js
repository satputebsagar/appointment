const login =async(code)=>{
    return fetch('/api/auth/google',{
        method:'POST',
        headers:{
            'Content-Type':'application/Json',
        },
        body:JSON.stringify({code}),

    }).then((res)=>{
        if(res.ok){
            return res.json();
        }else{
            return Promise.reject(res);
        }
    });
};

export {login};