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


    function drop(array, n = 1) {
            return array = array.splice(n)
    }

    function dropRight(ary, n = 1) {
        return ary = ary.splice(0, ary.length - n)
    }

    function dropRightWhile(array, size) {
      
    }

    function dropWhile(array, size) {
      
    }

    function fill(array, value, start = 0, end = array.length) {
        for (var i = start; i < end; i++) {
            array[i] = value
        }
        return array
    }

    function findIndex(array, size) {
      
    }

    function findLastIndex(array, size) {
      
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
    
    function intersection(array) {

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

    /**
     * 
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
     * 
     */

    function uniq(ary) {
        var res = []
        for (var i = 0; i < ary.length; i++) {
            if (!res.includes(ary[i])) {
                res.push(ary[i])
            } 
        }
        return res
    }

    function uniqBy(ary, iteratee=_.identity) {
        var res = []
        for (var i = 0; i < ary.length; i++) {
            if (!res.includes(ary[i])) {
                res.push(ary[i])
            } 
        }
        return res
    }

    /**
     * forEac高阶函数的使用，遍历数组，不用套两个for循环了，很方便
     */

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
        var obj = {}

        collection.forEach( item => {
            var key = predicate(item)
            if (obj.includes(key)) {
                obj[key]++
            } else {
                obj[key] = 1
            }
        })

        return obj

    }

    function add(augend, addend) {
        let res = augend + addend
        return res
    }

    function sum(ary) {

        var sum = 0

        for (var i = 0; i < ary.length; i++) {
            sum += ary[i]
        }

        return sum 
    }
   







}()

