

class customError{
    constructor(message){
        this.message = message
    }
}

function function1(){
    console.log('function1 executou')
    try {
        console.log('function1 no try')
      
    } catch (error) {
        //console.log('Error na function1')
        //console.error('Error na function1', error)
        throw new customError('Error na function1')
    }
}
function1()

function function2(){
    console.log('function2 executou')
    try {
        console.log('function2 no try')
      //b
    } catch (error) {
        //console.log('Error na function1')
        console.error('Error na ----> function2', error)
        throw new customError('Error na function1')
    }
    codigoB
}

function main(){
    console.log('main executou')
    try{
        function1()
        function2()
    }catch(error){
        console.error('Error na ----> main', error)
    }
}
main()