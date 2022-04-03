var curryth = function() {

    function chunk(array, size) {
        var len = array.length
        var n = Math.trunc(len / size)
        var result = []
        var start = 0

        for (var i = 0; i < n; i++) {
            result[i] = array.slice(start, start + size)
            start += size
        }

        if (n !== len / size) {
            var temp = n * size
            result[n] = array.slice(temp)
        }

        return result
    }

    function compact(array) {
        var res = [false, null,0, "", undefined,  NaN ]
        var Array = []

        for (var i = 0; i < array.length; i++) {
            var isNone = false

            for (var j = 0; j < res.length; j++) {
               if (res[j] == array[i]) {
                   isNone = true
                   break
               }
            }

            if (!isNone) {
                Array.push(array[i])
            }
        }
        return Array
      
    }

    function compact(array) {
        var Array = []
        
        for (var i = 0; i < array.length; i++) {
            if (array[i]) {               // arry[i]布尔值就为true
                Array.push(array[i])
            }
        }
        return Array

    }

    // 去除前面n个元素
    function drop(array, n = 1) {
            return array = array.splice(n)  // start默认为0，这里end = n
    }

    // 删除尾部n个元素

    function dropRight(ary, n = 1) {
        return ary = ary.splice(0, ary.length - n) // slice返回删除了的部分
    }

    function dropRightWhile( ary, predicate = identity ) {
        predicate = iteratee(predicate)
        for (var i = 0; i < ary.length; i++) {
            if (!predicate(ary[i], i, ary)) {
                return ary = ary.splice(0, ary.length - i)
            }
        }
    }

    function dropWhile(array, predicate = identity) {
        predicate = iteratee(predicate)
        for (var i = 0; i < ary.length; i++) {
            if (!predicate(ary[i], i, ary)) {
                return ary = ary.splice(i)
            }
        }
    }

    function fill(array, value, start = 0, end = array.length) {
        for (var i = start; i < end; i++) {
            array[i] = value
        }
        return array
    }

    function findIndex(array, predicate, fromIndex = 0) {
        predicate = iteratee(predicate)
        for (var i = fromIndex; i < array.length; i++) {
            if (predicate(array[i])) {
                return i
            }
        }
        return -1

    }

    function findLastIndex(array, predicate, fromIndex = array.length-1) {
        predicate = iteratee(predicate)
        for (var i = fromIndex; i >= 0; i--) {
            if (predicate(array[i])) {
                return i
            }
        }
        return -1
    }

    function flatten(ary) {
      return ary.reduce( (result, item) => {
          return result.concat(item)
      },[])
    }

    function flattenDeep(ary) {
        return ary.reduce( (result, item) => {
            if (Array.isArray(item)) {
                return result.concat( flattenDeep(item) ) 
            }
            return result.concat(item)
        },[])
    }

    function flattenDepth(ary, n = 1) {
      if (n == 0) {
          return [...ary]
      }
      return ary.reduce((result, item) => {
          if (Array.isArray(item)) {
              return result.concat(flattenDepth(item, n - 1))
          }
          return result.concat(item)
      },[])
    }

    function fromPairs(pairs) { 
        
        var obj = {}
        for (var i = 0; i < pairs[0].length; i++) {
            var a = pairs[i][0]
            var b = pairs[i][1]
            obj[a] = b
        }
        return obj
    }

    function head(array) {
        return array[0]
      
    }

    function indexOf(array, value, fromIndex = 0 ) {

        for (var i = fromIndex; i < array.length; i++) {
            if (array[i] == value) {
                return i 
            } 
        }
        return -1
    }


    function initial(array) {
        array = array.slice(0, array.length - 1)
        return array
    }
    
    function intersection(...arys) {
        let res = arys[0]
        for (var i = 1; i < arys.length; i++) {
            res = res.filter(val => ary[i].includes(val))
        }
        return res
    }

    function intersectionBy(array) {

    }

    function intersectionWith(array) {

    }


    function join(array, separator) {
        var result = ''
        for (var i = 0; i < array.length - 1; i++) {
            result += array[i].toString() + separator   // 需要加个toString(），数组里可能出现数字
        }
        return result += array[array.length - 1]
        
    }

    function last(ary) {
        return ary[ary.length - 1]
    }

    function lastIndexOf(ary, value, fromIndex = ary.length - 1) {

        for (var i = fromIndex; i >= 0; i--) {
            if (ary[i] == value) {
                return i 
                break
            }
        }
        return -1
    }

    function  pull(ary,...values) {

        var res = []
        
        ary.forEach( item => {
            if (!values.includes(item)) {
                res.push(item)
            }
        })
        return ary = res
    }

    function pullAll(ary,values)  {

        var res = []
        
        ary.forEach( item => {
            if (!values.includes(item)) {
                res.push(item)
            }
        })
        return ary = res
    }

    function reverse(ary) {

        for (var i = 0, j = ary.length - 1; i < j; i++, j--) {
            var temp = ary[i]
            ary[i] = ary[j]
            ary[j] = temp
        }
        return ary 
    }
    
    // 只需要展开arys，遍历每一个数组的每一项，有不同的就push进result，不要想的那么复杂
    function union(...arys) {
        var result = []
        arys.forEach(ary => {
            ary.forEach(item => {
                if ( !(result.includes(item))) {
                // 数组用includes， 对象才用 key in 
                    result.push(item)
                }
            })
        })
        return result
    }

    function unionBy(arys, predicate = identity) {
        predicate = iteratee(predicate)

        var result = []
        arys.forEach(ary => {
            ary.forEach(item => {
                if ( !(result.includes( predicate(item) ) ) )  {
                    result.push( predicate(item) )
                }
            })
        })
        return result
    
    }

    function unionWith(objs,others, comparator) {
        var ary = objs.concat(others)
        // ary = flatten(arys) 也可以，那样函数输入参数为（arys,comparator)
        var result = []

        for (var i = 0; i < ary.length; i++) {
            var flag = true
            for (var j = i + 1; j < ary.length - 1; j++) {
                if ( comparator(ary[j], ary[i]) ) {
                    flag = false
                    break
                }
            }
            if (flag) {
                result.push(ary[i])
            }
        }
        return result
    }

    /**
     *  O(N * N)写法
         uniq: function(ary) {
            var res = []
            for (var i = 0; i < ary.length; i++) {
                if (res.includes(ary[i])) {
                    continue            用continue跳出单次循环，用break会结束整个for循环
                } else {
                    res.push(ary[i])
                }
            }
            return res
        },

        function uniq(ary) {
        var res = []
        for (var i = 0; i < ary.length; i++) {
            if (!res.includes(ary[i])) {
                res.push(ary[i])
            } 
        }
        return res
    }

     * 
     */
    

    // 给数组去重
    function uniq(ary) {
        set = new Set(ary)  // 把数组转化成集合，集合自动去重
        let result = Array.from(set)  // 再把集合这种类数组形式的转化成数组，就OK了
        return result 
     }
    

    // 这里的predicate只是一个比较大方法，而不是filter里直接带限定条件返回真假值的
    // 所以这里需要设置一个obj对象，用来保存真假值的结果，为假的时候才往result中push没有出现的值
    function uniqBy(ary, predicate = identity) {
        predicate = iteratee(predicate)

        var result = []
        var obj = {}
        for (var i = 0; i < ary.length; i++) {
            if (  obj[ predicate(ary[i]) ]  ) {
                continue
            } else {
                obj[ predicate(ary[i]) ] = true   // 把这个属性添加赋成布尔值，方便上面的判断
                result.push(ary[i])
            }

        }
        return result
    }

    /**
     * forEach高阶函数的使用，遍历数组，不用套两个for循环了，很方便
     */

    function uniqWith(ary, comparator) {
        var result = []

        for (var i = 0; i < ary.length; i++) {
            var flag = true
            for (var j = i + 1; j < ary.length - 1; j++) {
                if ( comparator(ary[j], ary[i]) ) {
                    flag = false
                    break
                }
            }
            if (flag) {
                result.push(ary[i])
            }
        }
        return result

    }

    function unzip() {

    }
    function unzipWith() {
        
    }


    function without(ary, ...values) {

        var res = []

        ary.forEach( item => {
            if(!values.includes(item)) {
                res.push(item)
            }
        })
        return res
    }

    function zip(...arrays) {
        
        var res = []
        var maxLength = 0
        for (var i = 0; i < arrays.length; i++) {
            if (arrays[i].length > maxLength) {
                maxLength = arrays[i].length
            }
        }

        for (var i = 0; i < maxLength; i++) {
            var temp = []
            for (var j = 0; j < arrays.length; j++) {
                temp.push(arrays[j][i])
            }
            res.push(temp)
        }
        return res

    }

    function countBy(collection, predicate) {
        var predicate = iteratee(predicate)

        collection.reduce( (obj,item) => {
            var key = predicate(item)
            if ( !(key in obj) ) {
                obj[key] = 1
            } else {
                obj[key]++
            }
        },{})

        return obj

    }

    function flatMap(collection,iteratee) {

    }

    function flatMapDeep(collection,iteratee) {
        
    }

    function flatMapDepth(collection,iteratee) {
        
    }

    function groupBy(collection, predicate = identity) {
        predicate = iteratee(predicate)

        var obj = {}
        for (var i = 0; i < collection.length; i++) {
            var key = predicate(item)
            if ( !(key in obj) ) { // 这一步就很可
                obj[key] = []  // 直接[item]也很可，没必要obj[key] = []再push了
            } 
            obj[key].push(item)
        }
        return obj
    }

    // forEach 遍历数组/对象每一个元素，不改变原数组
    //（原本forEach是不会返回值的，这里要求返回collection）
    function forEach(collection, predicate = identity) {
        for (var val in collection) {
            if (!predicate(val, key, collection)) {
                break
            }
        }
        return collection
    }

    function forEachRight(collection, predicate = identity) {
        if (Array.isArray(collection)) {
            for (var i = collection.length - 1; i >= 0; i--) {
                if ( !predicate(collection[i], i, collection) ) {
                    break
                }
            }
        } else {
            for (var val in collection) {
                if (!predicate(val, key, collection)) {
                    break
                }
            }
        }
        return collection
    }
    
    
    function keyBy(collection, predicate = identity) {
        predicate = iteratee(predicate)

        var obj = {}
        collection.forEach(it => obj[predicate(it)] = it)
        return obj
    }
    
    // predicate = identity ,这里predicate是一个obj,string,或者number
    // 我们需要将其转化成一个函数，才能用它将predicate(item)转化成一个具体的值
    // 最后再返回由predicate(item)值组成的新数组
    //而这就是.map(item => predicate（item)  的由来

    function map(collection, predicate = identity) {
        predicate = iteratee(predicate)
        var result = []

        if (Array.isArray(collection)) {
            for (var item of collection) {
                result.push(predicate(item))
            }
        } else {
            for (var key in collection) {
                result.push( predicate(collection[key]) )
            }
        }
        return result
    }

    function partition(ary, predicate = identity) {
        predicate = iteratee(predicate)
        
        let a = []
        let b = []
        let result = []
        for (var item of ary) {
            if (predicate(item)) {
                a.push(item)
            } else {
                b.push(item)
            }
        }
        result.push(a)
        result.push(b)
        return result
        
    }
    
    // accumulator可能为0，可能为{},直接在一开始让result = accumulator就行
    // 然后再给predicate传两个参数，不需要想太多！
    function reduce(collection, predicate = identity, accumulator) {
        var result = accumulator
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i ++) {
                result = predicate(result, collection[i])
            }
        } else {
              for (var key in collection) {
                  result = predicate(result, collection[key])
              }
        }
        return result
    }
    
    function reduceRight(ary, predicate = identity, accumulator) {
        var result = accumulator
        if (Array.isArray(collection)) {
            for (var i = collection.length - 1; i >= 0; i--) {
                result = predicate(result, collection[i])
            }
        } else {
              for (var key in collection) {
                  result = predicate(result, collection[key])
              }
        }
        return result
    }

    function add(augend, addend) {
        let res = augend + addend
        return res
    }

    function max(ary) {
        if (ary.length == 0) {
            return  undefined
        }
        let max = -Infinity
        ary.forEach( item => {
            max = item > max ? item : max
        })
        return max 
    }

    function sum(ary) {

        var sum = 0

        for (var i = 0; i < ary.length; i++) {
            sum += ary[i]
        }

        return sum 
    }

    function repeat(string = '', n) {
        let res = '' 
        for (var i = 0; i < n; i++) {
            res += string
        }
        return res
    }

    function shuffle(collection) {
        
    }

    function size(collection) {
        if (typeof collection === 'string' || Array.isArray(collection)) {
            return collection.length
        }
        if (typeof collection === 'object') {
            var res = []
            for (var key in collection) {
                res.push(collection[key])  // .key和[key]的区别？
            }
            return res.length
            // var count = 0
            // for (var key in collection) count++
            // return count也行
        }
    }

    function some(collection, predicate) {
        predicate = iteratee(predicate)
        
        for (var key in collection) {
            if (predicate(collection[key])) {
                return true
            }
        }
        return false
    }
    
    // collection (Array|Object): 用来迭代的集合
    // predicate=_.identity (Array|Function|Object|string): 每次迭代调用的函数

    function every(collection, predicate) {
        predicate = iteratee(predicate)
        
        if ( Array.isArray(collection) ) {
            for (var i = 0; i < collection.length; i++) {
                if ( !( predicate(collection[i]) )  ) {
                    return false
                }
                return true
            }
        } else {   // 如果collection是对象
            for (var key in collection) {
                if ( !( predicate(collection[key]) )) {
                    return false
                }
            }
            return true
        }
        return false
    }
    
    // 这里用插入排序写一下，有点忘了这个排序的写法了

    function sortBy(ary, predicate = identity) {
        predicate = iteratee(predicate)

        for (var i = 1; i < ary.length; i++) {
            var temp = ary[i]
            for (var j = i - 1; j >= 0; j-- ) {
                if ( predicate(ary[j]) > predicate(temp) ) {
                    ary[j + 1] = ary[j]
                } else {
                    break
                }
            }
            a[j + 1] = temp
        }
        return ary
        
    }

    /**
     * ==和===的区别,==会将两侧的数据进行类型转换再对比
     * 测试案例new Boolean(true)，Boolean在这里做为一个构造函数，得到的是一个包装对象，
     * 这个包装对象， == true 但是不 === true
     * 可以用valueOf,返回包装对象实例对应的原始类型的值
     * 即 new Boolean(true).valueOf() === true
     * 而用==的时，new Boolean(true) == true 返回的是true
     */

    function isBoolean(val) {
      if (val == true || val == false) {  // 
          return true
      } 
      return false
    }

    function isArguments(val) {
        return Object.prototype.toString.call(val) === '[Object Arguments]'
    }

    function isDate(val) {
        return val instanceof Date
    }

    function isElement(val) {
        return val instanceof Element
    }
    
    //判定 value 是否为一个空对象，集合，映射或者set即可
    // 就返回object,map,set，真的为空的情况，其它的情况都返回假
    function isEmpty(val) {
        if (val instanceof Map || val instanceof Set) {
            if (val.size == 0) {
                return true
            }
            return false
        }
        if (val instanceof Object) {
            for (var key in val) {
                return !(key in val) == true
            }
            return false
        }
        return true
    }

    function isEqual(val, other) {
        if (val === other) {
            return true
        }
        if (val !== val && other !== other) {
            return true
        }
        if (Array.isArray(val) && Array.isArray(other)) {
            if (val.length !== other.length) {
                return false
            } 
            for (var i = 0; i < val.length; i++) {
                if (!isEqual(val[i], other[i])) {
                    return false
                }
            }
            return true
        }
        if (!Array.isArray(val) && !Array.isArray(other) && val && other && typeof val === 'object' && typeof other == 'object') {
            for (var key in val) {
                if (!(key in other)) {
                    return false
                }
            }
            for (var key in other) {
                if (!(key in val)) {
                    return false
                }
            }
            for (var key in val) {
                if (!isEqual(val[key], other[key])) {
                    return false
                }
            }
            return true
        }
        return false
    }

    function isEqualWith(val, other, customizer) {
        if (isEqual(customizer(val), customizer(other))) {
            return true
        }
        return false
    }

    function isError(val) {
        return Object.prototype.toString.call(val) === '[Object Error]'
        // 或者 toString.call(val) === '[Object Error]'
        // 或者 val instanceof Error
    }

    function isFinite(val) {
        return typeof val == 'number' && val !== Infinity && val !== -Infinity
    }

    function isFunction(val) {
        return val instanceof Function
    }

    function isInteger(val) {
        return val % 1 == 0 && typeof val === 'number'
    }

    function isLength(val) {
        return isInteger(val) && val > 0
    }

    function isMatchWith(val, other, customizer) {
        if (isMatch(customizer(val), customizer(other))) {
            return true
        }
        return false
    }

    function isArray(val) {
       return val.__proto__ === Array.prototype
    }

    function isMap(val) {
        return val instanceof Map
    }

    function isNaN(val) {
        if (typeof(val) == 'object') {
            val = val.valueOf()
        }
        return val !== val
    }

    function isNil(val) {
        return val === null || val === undefined
    }

    function isNull(val) {
        return val  === null
    }

    function isNumber(val) {
        return val.__proto__ === Number.prototype
    }

    function isString(val) {
        return val.__proto__ === String.prototype
    }

    // 直接return function还是有点难想的
    // 返回一个函数，判断一个对象是否匹配另外一个对象

    function matches(target) {
        return function(obj) {
            for (var key in target) {   // 不能写成var key in obj, 这里是要看target的key是不是都在obj中
                if (obj[key] !== target[key]) {
                    return false
                }
            }
            return true
        }
    }

    /**部分深度对比函数，src对比obj的一部分
     * 深层次对比，当对比的部分是对象中嵌套对象时，需要进去嵌套的对象中再继续对比
     * 所以，上面这步就需要用到递归，
     * 而这个递归的终止条件就是src[key]存在，以及它的类型是个对象
     * 用到的例子obj = {a:1,b:2,c: {x:1,y:2}}, src = {b:2,c:{y:2}}
     * 例子中src是obj的子结构，
     * src[c] = {y:2},  obj[c] = {x:1,y:2}
     * 递归进去src[y] = 2, obj[y] = 2, 而且src[y]不是对象，递归到此终止。
     */
    function isMatch(obj, src) {
        for (var key in src) { 
            if (src[key] && typeof(src[key]) == 'object') {
                if (!isMatch(obj[key], src[key])) {
                    return false
                }
            } else {
                if (src[key] !== obj[key]) { // 浅层次对比部分，直接比key上的非对象属性
                    return false
                }
            }
        }
        return true
    }

    // 转化path为属性路径的数组
    // path可能为字符串形式的'a.b.c'，或者'a[0].b.c'，后者是展开obj = {a:[{b:{c:3}}]}
    // 这里暂时只考虑路径中带'.'和'[]'的情况

    function toPath(path) {
        if (typeof(path) == 'string') {
            return path.split('[')
              .flatMap(it => it.split(']'))
              .flatMap(it => it.split('.'))
              .filter(it => it)  // 过滤掉上面两步产生的空字符串
        }
        return path
    }

    function findKey(obj, predicate) {
        predicate = iteratee(predicate)
        var result
        for (var key in obj) {
            if (predicate(obj[key])) {
                result = key
                break
            }
        }
        return result
    }

    function findLastKey(obj, predicate) {
        predicate = iteratee(predicate)
        var result
        for (var key in obj) {
            if (predicate(obj[key])) {
                result = key
            }
        }
        return result
    }


    // 获取路径上的值？啥意思？ 不就是求对象，key上的value吗？
    // 路径可以是['a', 'b', 'c']数组形式，也以为‘a.b.c’字符串形式

    function get(obj, path, defaultValue = "default") {
        let res 
        let names = toPath(path)
        res = names.reduce((obj,name) =>{
            return obj && obj[name]
        },obj)
        if (res == undefined) {
          return defaultValue
        }
        return res
    }

    // property即属性的意思，这个函数就是返回属性路径上的值
    // 加了get的加强版
    function property(path) {
        return function(obj) {
            return get(obj,path)
        }
    }
    // 路径上值是不是val
    // 返回一个函数判定给定对象路径上的值是否等于val

    function matchesProperty(path, val) {
        return function(obj) {
            return isEqual(  get(obj,path), val )
        }
    }

    // 转换函数

    function iteratee(predicate) {
        if (typeof predicate === 'string') {  // 返回一个函数，函数可以对比字符串
          predicate = property(predicate)  // 本来property(path),path可能是字符串形式
        }                                  // 返回的本应是一个这里直接拿来用来对比字符串是否相等匹配了
                                           // 其实property返回的是一个值，这里用来当作布尔值真假判断，也不是不可以
        if (Array.isArray(predicate)) {
          predicate = matchesProperty(...predicate)  // 本来是用来判定path路径上的值是否和val相等
        }                                           // 因为路径可以为数组形式，这里用来判定数组是否相等匹配了
        if (predicate && typeof predicate === 'object') { // 返回一个函数对比target对象是否匹配
          predicate = matches(predicate)
        }
        return predicate
    }  

    function filter(collection, predicate) {
        predicate = iteratee(predicate)

        let result = []
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                if (predicate(collection[i], key)) {
                    result.push(collection[i])
                }
            }
        } else {
            for (var key in collection) {
                if (predicate(collection[key], key)) {
                    result.push(collection[key])
                }
            }
        }
        return result
        
    }

    function find(collection, predicate, fromIndex = 0) {
        predicate = iteratee(predicate)
        for (var i = fromIndex; i < collection.length; i++) {
            if ( predicate(collection[i]) )  {
                return collection[i]
            }
        }
        return -1
    }

    function findLast(collection, predicate, fromIndex = collection.length - 1) {
        predicate = iteratee(predicate)
        for (var i = fromIndex; i > 0; i--) {
            if ( predicate(collection[i]) )  {
                return collection[i]
            }
        }
        return -1
    }

    function flatMap(ary, predicate = identity) {
        predicate = iteratee(predicate)
        return ary.flatten.map(it => predicate(it))
    }

    function flatMapDeep(ary, predicate = identity) {
        predicate = iteratee(predicate)
        return ary.flattenDeep.map(it => predicate(it))
    }

    function flatMapDepth(ary, predicate = identity) {
        predicate = iteratee(predicate)
        return ary.flattenDepth.map(it => predicate(it))
    }
    function toArray(val) {
      let res = []
      if (val === null || isNumber(val)) {
        return res
      }
      if (isString(val)) {
        for (let i = 0; i < val.length; i++) {
          res.push(val[i])
        }
      }
      if (typeof(val) == 'object' && !( Array.isArray(val) )) {
          for (let key in val) {
              res.push(val[key])
          }
      }
      return res
    }
    function assign(obj, ...sources) {
      for (let source of sources) {
        for (let key in source) {
          if (source.hasOwnProperty(key)) {
            obj[key] = source[key]
          } 
        }
      }
      return obj
    }
    function ceil(number, precision = 0) {
        let m = number * ( 10 ** (precision + 1) ) 
        let remain = m % 10
        let res
        if (remain > 0) {
          res = m - remain + 10
        } else {
            res = m - remain
        }
        res = res / ( 10 ** (precision + 1) ) 
        return res 
    }
    function divide(dividend, divisor) {
      return dividend / divisor
    }
    function floor(number, precision = 0) {
        let m = number * ( 10 ** (precision + 1) ) 
        let remain = m % 10
        let res
        res = m - remain
        res = res / ( 10 ** (precision + 1) ) 
        return res 
    }
    function maxBy(ary, predicate = identity) {
        if (ary.length == 0) {
            return undefined
          }
          predicate = iteratee(predicate)
    
          let max = ary[0]
          for (let i = 1; i < ary.length; i++) {
              if (predicate(ary[i]) < predicate(max)) {
                  max = ary[i] 
              } 
          }
          return max
    }
    function mean(ary) {
      let m = ary.reduce((sum,item) => sum += item, 0)
      let avg = m / ary.length
      return avg
    }
    function meanBy(ary, predicate = identity) {
      predicate = iteratee(predicate)
      let sum = 0
      for (let i = 0; i < ary.length; i++) {
        sum += predicate(ary[i])
      }
      let avg = sum / ary.length
      return avg
    }
    function min(ary) {
      if (ary.length == 0) {
          return undefined
      }
      let min = Infinity
      for (let item of ary) {
          if (item < min) {
              min = item
          } 
      }
      return min 
    }
    function minBy(ary, predicate = identity) {
      if (ary.length == 0) {
        return undefined
      }
      predicate = iteratee(predicate)

      let min = ary[0]
      for (let i = 1; i < ary.length; i++) {
          if (predicate(ary[i]) < predicate(min)) {
              min = ary[i] 
          } 
      }
      return min
    }
    function multiply(m , n) {
      return m * n
    }
    function round(number, precision = 0) {
      let m = number * ( 10 ** (precision + 1) ) 
      let remain = m % 10
      let res
      if (remain > 5) {
        res = m - remain + 10
      } else {
          res = m - remain
      }
      res = res / ( 10 ** (precision + 1) ) 
      return res 
    }
    function subtract(m, n) {
        return m - n
    }
    function sumBy(ary, predicate = identity) {
        predicate = iteratee(predicate)
        let res = 0
        for (let i = 0; i < ary.length; i++) {
            res += predicate(ary[i])
        }
        return res
    }
    function clamp(n, lower, upper) {
        if (n < lower ) {
            return lower
        }
        if (n > upper) {
            return upper
        }
        return n
    }
    function inRange(n, start = 0, end) {
        if (arguments.length == 2) {
          end = start 
          start = 0 
        }
        if (start > end) {
            let temp = start
            start = end
            end = temp
        }
        if (n >= start) {
            if (n < end) {
                return true
            }
        }
        return false
    }
    function assignIn(obj, ...sources) {
        for (let source of sources) {
            for (let key in source) {
                obj[key] = source[key]
            }
          }
        return obj
    }
    function at(obj, ...paths) {
        let res = []
        for (let path of paths) {
            let val = get(obj, path)
            res.push(val)
        }
        return res
    }
    function defaults(obj, ...sources) {
      for (let source of sources) {
        for (let key in source) {
          if ( !(obj[key]) ) {
            obj[key] = source[key]
          }
        }
      }
      return obj
    }
    function defaultsDeep(obj, ...sources) {
        for (let source of sources) {
          for (let key in source) {
            if (typeof source[key] === 'object') {
                defaultsDeep(obj[key], source[key])
            } else {
                if ( !(obj[key]) ) {
                    obj[key] = source[key]
                }
            }
          }
        }
        return obj
      }
    function forIn(obj, predicate = identity) {
        predicate = iteratee(identity)

        for (let key in obj) {
            if ( !(predicate(obj[key], key, obj)) ) {
                break
            }
        }
        return obj
    }
    function forInRight(obj, predicate = identity) {
        predicate = iteratee(identity)
        
        let ary = []
        for (let key in obj) {
            ary.push[key]
        }
        for (var i = ary.length - 1; i >= 0; i--) {
            if ( !(predicate(obj[i], i, obj)) ) {
                break
            }
        }
        return obj
    }
    function forOwn(obj, predicate = identity) {
        predicate = iteratee(identity)
        
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if ( !(predicate(obj[key], key, obj)) ) {
                    break
                }
            }
        }
        return obj
    }

    function forOwnRight(obj, predicate = identity) {
        predicate = iteratee(identity)
        
        let ary = []
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
              ary.push[key]
            } 
        }
        for (var i = ary.length - 1; i >= 0; i--) {
            if ( !(predicate(obj[i], i, obj)) ) {
                break
            }
        }
        return obj
    }

    function functions(obj) {
      let res = []
      for (let key in obj) {
        if (obj.hasOwnProperty(key) && isFunction(obj[key])) {
          res.push(key)
        }
      }
      return res
    }
    function functionsIn(obj) {
        let res = []
        for (let key in obj) {
          if (isFunction(obj[key])) {
            res.push(key)
          }
        }
        return res
      }
    function has(obj, path) {
      path = toPath(path)
      for (let i = 0; i < path.length; i++) {
        if (obj.hasOwnProperty(path[i])) {
          obj = obj[path[i]]
        } else {
          return false
        }
      }
      return true
    }
    function hasIn(obj, path) {
        path = toPath(path)
        for (let i = 0; i < path.length; i++) {
            if(obj[path[i]]) {
                obj = obj[path[i]]
            } else {
               return false
            }
        }
        return true
    }
    function invert(obj) {
      let res = {}
      for (let key in obj) {
        let temp = obj[key]
        res[temp] = key
      }
      return res
    }
    function invertBy(obj, predicate = identity) {
        predicate = iteratee(predicate)

        let res = {}
        for (let key in obj) {
            let temp = predicate(obj[key])
            if ( !(res[temp]) ) {
                let ary = Array.from(key)
                res[temp] = ary
            } else {
                res[temp].push(key)
            }
        }
        return res
    }
    function invoke(obj, path, ...args) {
      path = toPath(path)
      for (let i = 0; i < path.length - 1; i++) {
        if(obj[path[i]]) {
          obj = obj[path[i]]
         }
        obj[path[i]].call(obj, ...args)
       }
    }
    function keys(obj) {
      let ary = []
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          ary.push(key)
        }
      }
      return ary
    }
    function keysIn(obj) {
      let ary = []
      for (let key in obj) {
          ary.push(key)
      }
      return ary
    }
    function mapKeys(obj, predicate = identity) {
      predicate = iteratee(predicate)

      let res = {}
      for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
             let temp = predicate(value, key, object)
             res[temp] = obj[key]
          }
      }
      return res
    }
    function mapValues(obj, predicate = identity) {
      predicate = iteratee(predicate)
      let res = {}
      for (let key in obj) {
        let temp = predicate(value, key, object)
        res[key] = temp
      }
      return res
    }
    function merge(obj, ...sources) {
      for (let source of sources) {
        for (let key in source) {
          if ( typeof source[key] == 'object' || (Array.isArray(source[key])) ) {
            merge(obj[key], source[key])
          } else { 
              if (!obj[key]) {
                obj[key] = source[key]
              }
          }
        }
      }
      return obj
    }
    function omit(obj, arys) {
        let res = cloneDeep(obj)
        arys.forEach((key) => {
          delete res[key]
        })
        return res
    }
    function omitBy(obj, predicate = identity) {
        predicate = iteratee(predicate)
        let res = cloneDeep(obj)
        for (let key in res) {
            if (predicate(obj[key])) {
                delete res[key]
            }
        }
        return res
    }
    function pick(obj, arys) {
      let res = {}
      arys.forEach((key) => {
        res[key] = obj[key]
      })
      return res
    }
    function pickBy(obj, predicate = identity) {
      predicate = iteratee(predicate)
      let res = {}
      for (let key in obj) {
          if (predicate(obj[key])) {
              res[key] = obj[key]
          }
      }
      return res
    }

    function result(obj, path, defaultValue = 'defaults') {
      let res = get(obj, path)
      if (res) {
        if (typeof(res) == 'function') {
          return res.bind(this)
        }
        return res
      }  else if (res === undefined) {
          return defaultValue
       }
    }

    function toPairs(obj) {
        let res = []
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                var temp = []
                temp.push(key)
                temp.push(obj[key])
                res.push(temp)
            }
        }
        return res
    }
    function toPairsIn(obj) {
        let res = []
        for (let key in obj) {
            var temp = []
            temp.push(key)
            temp.push(obj[key])
            res.push(temp)
        }
        return res
    }
    function unset(obj, path) {
      return delete get(obj, path)
    }

    function camelCase(str) {
        let ary = str.match(/[a-z]+|[A-Z]+[a-z]*/g)
        let res = toLower(ary[0]) + ary.slice(1).map(it => toLower(it)).map(it => upperFirst(it)).join('')
        return res
    }
    function capitalize(str) {
      let res = upperFirst(toLower(str))
      return res
    }
    function endsWith(str, target, pos = str.length) {
      return str[pos - 1] == target
    }
    function escapeRegExp(str) {
      let res = ''
      for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
          case('^') : res += '\\^';break;
          case('$') : res += '\\$';break;
          case('[') : res += '\\[';break;
          case(']') : res += '\\]';break;
          case('.') : res += '\\.';break;
          case('*') : res += '\\*';break;
          case('+') : res += '\\+';break;
          case('?') : res += '\\?';break;
          case('|') : res += '\\|';break;
          case('{') : res += '\\{';break;
          case('}') : res += '\\}';break;
          case('(') : res += '\\(';break;
          case(')') : res += '\\)';break;
          default: res += str[i]
        }
      }
      return res
    }

    function replace(string, pattern, replacement) {
      var result = string.split(pattern)
      result = result.join(replacement)
      return result
    }
    function values(obj) {
      let ary = []
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          ary.push(obj[key])
        }
      }
      return ary
    }

    function valuesIn(obj){
        let ary = []
        for (var key in obj) {
            ary.push(obj[key])
        }
        return ary
    }
    
    function kebabCase(str) {
      let res = str.match(/[a-z]+|[A-Z]+[a-z]*/g)
      res = toLower(res.join('-'))
      return res
    }
    function snakeCase(str) {
        let res = str.match(/[a-z]+|[A-Z]+[a-z]*/g)
        res = toLower(res.join('_'))
        return res
    }
    function startCase(str) {
        let res = str.match(/[a-z]+|[A-Z]+[a-z]*/g)
        res = res.join(' ')
        return res
    }
    function starsWith(str, target, position = 0) {
      return str[position] == target
    }
    function lowerCase(str) {
        let res 
        res = str.match(/[a-z]+|[A-Z]+[a-z]*/g)
        res = toLower(res.join(' '))
        return res
    }
    function lowerFirst(str) {
        let res = toLower(str[0]) + str.slice(1)
        return res
    }

    function pad(str, len = 0, chars = ' ') {
      let res = str
      let flag = true
      while (res.length < len) {
        if (flag) {
          res += chars
          flag = false
        } else {
            res = chars + res
            flag = true
        }
      }
      return res.slice(0,len)
    }
    function padEnd(str, len = 0, chars = ' ') {
        let res = str
        while (res.length < len) {
            res += chars
        }
        return res.slice(0,len)
    }
    function padStart(str, len = 0, chars = ' ') {
        let res = str
        let l = str.length
        while (res.length < len) {
            res = chars + res
        }
        let L = res.length
        return res.slice(0, len - l).concat(res.slice(L - l))
    }
    function split(string, separator, limit = Infinity) {
      let result = []
      let str = ''
      for (var i = 0; i < string.length; i++) {
        if (string[i] !== separator) {
            str += string[i]
        } else {
            if (str != '') {
              result.push(str)
              str = ''
            }
        }
      }
      if (str != '') {
          result.push(str)
      }
      return result.slice(0,limit)
    }
    function escape(string) {
        var result = ''
        for (var i = 0; i < string.length; i++) {
            switch(string[i]) {
                case "&": result += "&amp;";break;
                case "<": result += "&lt;";break;
                case ">": result += "&gt;";break;
                case "'": result += "&apos;";break;
                case '"': result += "&quot;";break;
                case "`": result += "&#96;";break;
                default: result += string[i];break;
            }
        }
        return result
    }
    function unescape(string) {
      var map =  {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&apos;": "'",
        '&quot;': '"',
        "&#96;": "`",
      }
      return string.replace(/(&amp;)|(&lt;)|(&gt;)|(&apos;)|(&quot;)|(&#96;)/g, function(val) {return map[val]})
    }
    function toLower(str='') {
      var res = ''
      for(var i = 0; i < str.length; i++) {
        let n = str[i].charCodeAt(0) 
          if(n > 64 && n < 91) {
            res += String.fromCharCode(n + 32)
          } else {
            res += str[i]
          }
      }
      return res
    }
    function trim(str, chars = ' ') {
      let left = 0
      let right = str.length - 1
      while (left < str.length && chars.includes(str[left])) {
        left++
      }
      while (right >= 0 && chars.includes(str[right])) {
        right--
      }
      return str.slice(left, right + 1)
    }
    function trimEnd(str, char = ' ') {
        let right = str.length - 1
        while (right >= 0 && char.includes(str[right])) {
          right--
        }
        return str.slice(0, rightIdx + 1)
    }
    function trimStart(str, char = ' ') {
        let left = 0
        while (left < str.length - 1 && char.includes(str[left])) {
          left++
        }
        return str.slice(left)
    }
    function toUpper(str) {
        var res = ''
        for (var i = 0; i < str.length; i++) {
          let n = str[i].charCodeAt(0) 
            if(n > 96 && n < 123) {
              res += String.fromCharCode(n - 32)
            } else {
              res += str[i]
            }
        }
        return res
    }
    function upperCase(str) {
        let res = ''
        for (var i = 0; i < str.length; i++) {
          let n = str[i].charCodeAt(0) 
          if(n > 64 && n < 91) {
            res += ' ' + str[i]
          } else if(n > 96 && n < 123) {
              res += str[i]
          } else {
              res += ' '
          }
        }
        res = trim(toUpper(res))
        return res
    }
    function upperFirst(str) {
      let res = ''
      res = toUpper(str[0]) + str.slice(1)
      return res
    }

    function bindAll(object, methodNames) {
    }
    function range(start = 0, end, step = 1) {
        var result = []
        if (arguments.length == 1) {
            end = start
            start = 0
            if (end < 0) {
                step = -1
            }
        }
        if(step) {
          m = (end - start) / step 
        } else {
          m = end - start
        }
        for (var i = 0; i < m ; i++) {
          result.push(start)
          start = start + step
        }
        return result
      }
    function rangeRight(start = 0, end, step = 1) {
          var result = []
          if (arguments.length == 1) {
              end = start
              start = 0
              if (end < 0) {
                  step = -1
              }
          }
          if(step) {
            m = (end - start) / step 
          } else {
            m = end - start
          }
          for (var i = 0; i < m ; i++) {
            end = end - step
            result.push(end)
          }
          return result
        }
      
    function times(n, predicate = identity) {
        var result = []
        for (var i = 0; i < n; i++) {
            result.push(predicate(i))
        }
        return result
      }
  
      window.count = 1
    function uniqueId(prefix = '') {
          return  prefix + (++window.count)
      }

    function cloneDeep(val) {
      if (Array.isArray(val)) {
          var result = []
          for (var i of val ) {
              if ( Object.prototype.toString.call(i) !== '[object Object]' && !(Array.isArray(i)) ) {
                  result.push(i)
              } else {
                  i = cloneDeep(i)
                  result.push(i)
              }
          }
      } else if (Object.prototype.toString.call(val) == '[object Object]') {
          var result = {}
          for (var key in val) {
            if ( Object.prototype.toString.call(val[key]) !== '[object Object]' && !(Array.isArray(val[key])) ) {
                result[key] = val[key]
            } else {
                result[key] = cloneDeep(val[key])
            }
          }
      } else {
          return val
      }
      
      return result
    }

    function identity(val) {
        return arguments[0]
    }
    function concat(ary, ...vals) {
      for (var val of vals) {
          if (Array.isArray(val)) {
              val.forEach((item) => {
                  ary.push(item)
              })
          } else {
              ary.push(val)
          }
      }
      return ary
    }
    // 创建一个调用func的函数。调用func时最多接受 n个参数，忽略多出的参数。
    function ary(func, n = func.length) {
        return function(...args) {
            return func.call(this, ...args.slice(0, n))
            // 也可以写成func(...args.slice(0, n))
            // 这里也可直接只给func传入args的前n个参数即可，不要考虑太多
            // 两次return function还是有点意思的
        } 
    }

    function unary(func) {
        return ary(func, 1)
    }
    
    // 创建一个调用func的函数，通过this绑定和创建函数的参数调用func，调用次数不超过 n 次。 
    // 之后再调用这个函数，将返回一次最后调用func的结果
    
    function before(n, func) {
        let c = 0       // 用来记录调用func的次数
        let result      // result 用来记录最后一次调用的结果
        return function (...arg) {
            if (c < n) {
                result = func(...arg)
                c++
            }
            return result
        }
    }
    function parseInt(str, radix = 10) {
        
      }
    // 创建一个函数，调用func时候接收翻转的参数
    function flip(func) {
        return function (...args) {
            return func(...args.reverse())
        }
    }
    // 记忆化函数，以后在react和Vue里面都会用到
    function memoize(func, resolver = it => it) {
        map = new Map()
        return function (...args) {
            var key = resolver(...args)  // 默认返回参数的第一个值
            if (map.has(key)) {
                return map.get(key)
            }
            var result = func(...args)
            map.set(key, result)
            return result
        }
    }
    // 创建一个针对断言函数 func 结果取反的函数。 
    //func 断言函数被调用的时候，this 绑定到创建的函数，并传入对应参数
    // 又是两个return function的叠加
    function negate(predicate) {
        return function (...args) {
            return !predicate(...args)
        }
    }
    // 返回一个函数，可以把一个数组展开后再传入函数func
    // 没有...展开符之前，spread函数就是展开数组的利器
    function spread(func) {
        return function (ary) {
            return func.apply(this, ary)
        }
    }
    function curry(f, n = f.length) {  // n为需要的参数个数
        return function(...args) { // args为输入的参数个数
            if (args.length < n) {
                return curry(f.bind(null, ...args), n - args.length)
                // 需要的参数不够则递归，并写明还需要多少个参数。
          } else {
                return f(...args) // 输入的参数个数足够则直接返回结果
          }
        }
    }
    function constant(val) {
        return function() {
            return val
        }
    }
    function flow(...funcs) {
      return function(...args) {
        let result
        let flag = false
        for (let func of funcs) {
          if(flag) {
            result = func(result)
          } else {
            flag = true
            result = func(...args)
          }
        }
         return result
      }
    }
    function property(path) {
      return function(obj) {
          return get(obj, path)
      }
    }
    function propertyOf(obj) {
        return function(path) {
          return get(obj, path)
        }
    }
    function method(path, ...args) {
        return function(obj) {
            for (var arg of args) {
                return get(obj, path)(arg)
            }
        }
    }
    function once(func) {
        let res 
        let count = 1
        return function(...args) {
            if (n == 1) {
                res = func.apply(this, args)
            }
            return res
        }
    }
    function pullAt(ary, ...indexes) {
      let res = []
      let count = 0
      for (let idx of indexes) {
        idx = idx - count
        res = res.concat(ary.splice(idx, 1))
        count++
      }
      return res
    }
    function mixin(obj, src, option = true) {

    }


    return {
        chunk: chunk,
        compact: compact,
        drop: drop,
        dropRight: dropRight,
        dropRightWhile: dropRightWhile,
        dropWhile: dropWhile,
        fill: fill,
        findIndex: findIndex,
        findLastIndex: findLastIndex,
        flatten: flatten,
        flattenDeep: flattenDeep,
        flattenDepth: flattenDepth,
        toArray: toArray,
        assign: assign,
        ceil: ceil,
        divide: divide,
        floor: floor,
        maxBy: maxBy,
        mean: mean,
        meanBy: meanBy,
        min: min,
        minBy: minBy,
        multiply: multiply,
        round: round,
        subtract: subtract,
        sumBy: sumBy,
        clamp: clamp,
        inRange: inRange,
        fromPairs: fromPairs,
        head: head,
        indexOf: indexOf,
        initial: initial,
        intersection: intersection,
        join: join,
        last: last,
        lastIndexOf: lastIndexOf,
        pull: pull,
        pullAll: pullAll,
        reverse: reverse,
        union: union,
        unionBy: unionBy,
        unionWith: unionWith,
        uniq: uniq,
        uniqBy: uniqBy,
        uniqWith: uniqWith,
        without: without,
        zip: zip,
        countBy: countBy,
        flatMap: flatMap,
        flatMapDeep: flatMapDeep,
        flatMapDepth: flatMapDepth,
        assignIn: assignIn,
        at: at,
        defaults: defaults,
        defaultsDeep: defaultsDeep,
        forIn: forIn,
        forInRight: forInRight,
        forOwn: forOwn,
        forOwnRight: forOwnRight,
        functions: functions,
        functionsIn: functionsIn,
        has: has,
        hasIn: hasIn,
        invert: invert,
        invertBy: invertBy,
        invoke: invoke,
        keys: keys,
        keysIn: keysIn,
        mapKeys: mapKeys,
        mapValues: mapValues,
        merge: merge,
        omit: omit,
        omitBy: omitBy,
        pick: pick,
        pickBy: pickBy,
        result: result,
        toPairs: toPairs,
        toPairsIn: toPairsIn,
        unset: unset,
        camelCase: camelCase,
        capitalize: capitalize,
        endsWith: endsWith,
        escapeRegExp: escapeRegExp,
        replace: replace,
        values: values,
        valuesIn: valuesIn,
        kebabCase: kebabCase,
        snakeCase: snakeCase,
        startCase: startCase,
        starsWith: starsWith,
        lowerCase: lowerCase,
        lowerFirst: lowerFirst,
        split: split,
        escape: escape,
        toLower: toLower,
        toUpper: toUpper,
        trim: trim,
        trimEnd: trimEnd,
        trimStart: trimStart,
        upperCase: upperCase,
        upperFirst: upperFirst,
        unescape: unescape,
        pad: pad,
        padEnd: padEnd,
        padStart: padStart, 
        forEach: forEach,
        forEachRight: forEachRight,
        groupBy: groupBy,
        keyBy: keyBy,
        map: map,
        partition: partition,
        reduce: reduce,
        reduceRight: reduceRight,
        add: add,
        max: max,
        sum: sum,
        repeat: repeat,
        size: size,
        shuffle: shuffle,
        some: some,
        every: every,
        sortBy: sortBy,
        isBoolean: isBoolean,
        isArguments: isArguments,
        isDate: isDate,
        isElement: isElement,
        isEmpty: isEmpty,
        isEqual: isEqual,
        isEqualWith: isEqualWith,
        isError: isError,
        isFinite: isFinite,
        isFunction: isFunction,
        isInteger: isInteger,
        isLength: isLength,
        isMatchWith: isMatchWith,
        isArray: isArray,
        isMap: isMap,
        isNaN: isNaN,
        isNil: isNil,
        isNull: isNull,
        isNumber: isNumber,
        isString: isString,
        matches: matches,
        isMatch: isMatch,
        toPath: toPath,
        findKey: findKey,
        findLastKey: findLastKey,
        get: get,
        property: property,
        matchesProperty: matchesProperty,
        iteratee: iteratee,
        filter: filter,
        find: find,
        findLast: findLast,
        range: range,
        rangeRight: rangeRight,
        times: times,
        uniqueId: uniqueId,
        cloneDeep: cloneDeep,
        identity: identity,
        concat: concat,
        ary: ary,
        unary: unary,
        before: before,
        parseInt: parseInt,
        flip: flip,
        memoize: memoize,
        negate: negate,
        spread: spread,
        curry: curry,
        constant: constant,
        flow: flow,
        property: property,
        propertyOf: propertyOf,
        method: method,
        once: once,
        pullAt: pullAt,
    }
}()

