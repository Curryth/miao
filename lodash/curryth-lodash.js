var curryth = {

    chunk: function(array, size) {
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

    },

    compact: function(array) {
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
      
    },

    compact: function(array) {
        var Array = []
        
        for (var i = 0; i < array.length; i++) {
            if (array[i]) {               // arry[i]布尔值就为true
                Array.push(array[i])
            }
        }
        return Array

    },



    drop: function(array, n = 1) {
            return array = array.splice(n)
    },

    dropRight: function(ary, n = 1) {
        return ary = ary.splice(0, ary.length - n)
    },

    dropRightWhile: function(array, size) {
      
    },

    dropWhile: function(array, size) {
      
    },

    fill: function(array, value, start = 0, end = array.length) {
        for (var i = start; i < end; i++) {
            array[i] = value
        }
        return array
    },

    findIndex: function(array, size) {
      
    },

    findLastIndex: function(array, size) {
      
    },

    flattenDeep: function(array, size) {
      
    },

    flattenDepth: function(array, size) {
      
    },

    fromPairs: function(pairs) { 
        
        var obj = {}
        for (var i = 0; i < pairs[0].length; i++) {
            var a = pairs[i][0]
            var b = pairs[i][1]
            obj[a] = b
        }
        return obj
    },

    head: function(array) {
        return array[0]
      
    },

    indexOf: function(array, value, fromIndex = 0 ) {

        for (var i = Index; i < array.length; i++) {
            if (array[i] == value) {
                return i 
            } 
        }
        return -1
    },


    initial: function(array) {
        array = array.slice(0, array.length - 1)
        return array
    },


    join: function(array, separator) {
        var result = ''
        for (var i = 0; i < array.length - 1; i++) {
            result += array[i].toString() + separator   // 需要加个toString(），数组里可能出现数字
        }
        return result += array[array.length - 1]
        
    },

    last: function(ary) {
        return ary[ary.length - 1]
    },

    lastIndexOf: function(ary, value, fromIndex = ary.length - 1) {

        for (var i = fromIndex; i >= 0; i--) {
            if (ary[i] == value) {
                return i 
                break
            }
        }
        return -1
    },

    reverse: function(ary) {

        for (var i = 0, j = ary.length - 1; i < j; i++, j--) {
            var temp = ary[i]
            ary[i] = ary[j]
            ary[j] = temp
        }
        return ary 
    },

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

    uniq: function(ary) {
        var res = []
        for (var i = 0; i < ary.length; i++) {
            if (!res.includes(ary[i])) {
                res.push(ary[i])
            } 
        }
        return res
    },

    uniqBy: function(ary, iteratee=_.identity) {
        var res = []
        for (var i = 0; i < ary.length; i++) {
            if (!res.includes(ary[i])) {
                res.push(ary[i])
            } 
        }
        return res
    },

    /**
     * forEac高阶函数的使用，遍历数组，不用套两个for循环了，很方便
     */

    without: function(ary, ...values) {

        var res = []

        ary.forEach( item => {
            if(!values.includes(item)) {
                res.push(item)
            }
        })
        return res
    },

    zip: function(...arrays) {
        
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

    },
    countBy: function(ary) {

    },
    every: function(ary) {

    },
    filter: function(ary) {

    },
    find: function(ary) {

    },
    forEach: function(ary) {

    },
    groupBy: function(ary) {

    },









}

