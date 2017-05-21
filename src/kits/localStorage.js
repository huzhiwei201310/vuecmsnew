// localStorage操作js文件

const KEY = 'goods';

export function getItem(){
    return JSON.parse(localStorage.getItem(KEY) || '[]')
}

export function setItem(obj){
    var arr = JSON.parse(localStorage.getItem(KEY) || '[]')
    arr.push(obj)
    localStorage.setItem(KEY,JSON.stringify(arr))
}

export function subStrictItem(goodsid){
    // console.log(5)
    var arr = JSON.parse(localStorage.getItem(KEY) || '[]')
    // arr.forEach(item=>{

    // })
    for(let i = arr.length-1; i>=0; i--){
        if(arr[i].goodsid==goodsid){
            if(arr[i].count==1){
                arr.splice(i,1)
                
            }else{
                arr[i].count--
            }
            break
        }
        
    }
    localStorage.setItem(KEY,JSON.stringify(arr))
}


export function removeItem(goodsid){
    var arr = JSON.parse(localStorage.getItem(KEY) || '[]')
    let newArr = []
    for(let i = arr.length-1; i>=0; i--){
        if(arr[i].goodsid!=goodsid){
            newArr.push(arr[i])
        }
        
    }
    localStorage.setItem(KEY,JSON.stringify(newArr))
}