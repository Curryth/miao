function validatePIN (pin) {
    var result = /(^\d{4}$)|(^\d{6}$)/    // 或者/(^\d{4}|^\d{6})$/
    //  /^\d{4}(\d{2})?$/  也行
    return result.test(pin)
    //return true or false
 }

// return masked string
function maskify(cc) {
    // 零宽断言，match只匹配.+,
    return cc.replace(/^.+(?=....)/, function(match) {
        return '#'.replace(match.length)
    }) 
}
// 让我写肯定写不出，好难啊！西八

function maskify(cc) {
    return cc.replace(/.(?=....)/g, '#')
}

// For each word:
// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)

// 所以整体是几个数字\d+
// 接一个字母\w?这个字母可能不出现
// 接几个字母\w*？这几个字母需要非贪婪匹配尽可能让第一个后最后一个字母先匹配，
// 最后再接一个字母\w？这个字母也可能不存在

function decipherThis(str) {
    //have fun!                                   // _,为match原始内容
    return str.replace(/\b(\d+)(\w?)(\w*?)(\w?)\b/g, function(_, num, a, b, c) {
        return String.fromCharCode(+num) + c + b + a
        // +num强行转化成数字
    })
    }; 

// !左边是一个任意字母，不需要写成\w*了，左边有一个字母就行

function remove (string) {
    //coding and coding....
    return string.replace(/(?<=\w)!+/g, '')
    // string.replace(/(\w)!+/g, '$1'), 直接替换成\w就行，这样就切除掉了尾部的！
}




function cutCancerCells(organism){

    // Cut them!
    return organism.replace(/c|[a-z]?C[a-z]?/g, '')
  
}


//精彩解析在备忘录
function duplicateCount(text){
    //...
    var matched = text.toLowerCase().match(/(.)(?=.*\1)/gi)
    if (!matched) {
        return 0
    } else {
        return new Set(matched).size
    }
}
 




Examples:
string = "LLLHello Worldlll" and c = "l" => "Hello World"

string = "Visca ElbarcaXxX" and c = "X" => "Visca Elbarca"

                                // c的默认初始值为空字符串
String.prototype.trim = function(c = ' ') {
    var str = this
    var re = new RegExp('^' + c + '+|' + c + '+$', 'ig') // 构造函数里面是字符串形式的正则表达式
    // re 即为/^c+|c+$/gi
    return str.replace(re, '')
}


