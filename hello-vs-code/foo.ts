//funções declaradas externas à uma classe precisam ter o prefixo function
function buildName(firstName:string, lastName:string, nickName?: string) {
        
}

class Foo {
    buildName(firstName:string, lastName:string, nickName?: string) {
        if(nickName) {
            alert("Nickname, parâmetro opcional, existente!");
        }
    }
}