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
            var temp = len - 1 - (n - n * size)
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



    drop: function(array, n) {

            return array = array.splice(n)
      
    },

    dropRight: function(array, size) {
      
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


    join: function(array, separator = '~') {
        var result = ''
        for (var i = 0; i < array.length - 1; i++) {
            result += array[i] + separator    // 需要加个toString(）？？但是数组里本来不就是字符串的形式吗？
        }
        return result += array[array.length - 1]
        
    },

    last: function(array, size) {
      
    },
    lastIndexOf: function(array, size) {
      
    },
    reverse: function(array, size) {
      
    },
    indexOf: function(array, size) {
      
    },


}

