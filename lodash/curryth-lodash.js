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
   




    return {
        memoize: memoize,
        bindAll: bindAll,
        mixin: mixin,
        curry: curry,
        cloneDeep: cloneDeep,
        flip: flip,
        conforms: conforms,
        negate: negate,
        once: once,
        spread: spread,
        ary: ary,
        unary: unary,
        nthArg: nthArg,
        method: method,
        methodOf: methodOf,
        propertyOf: propertyOf,
        flow: flow,
        pullAt: pullAt,
        uniqueId: uniqueId,
        defaultTo: defaultTo,
        range: range,
        rangeRight: rangeRight,
        words: words,
        truncate: truncate,
        trimStart: trimStart,
        trimEnd: trimEnd,
        trim: trim,
        toUpper: toUpper,
        toLower: toLower,
        startsWith: startsWith,
        split: split,
        replace: replace,
        repeat: repeat,
        parseInt: parseInt,
        padStart: padStart,
        padEnd: padEnd,
        pad: pad,
        lowerFirst: lowerFirst,
        lowerCase: lowerCase,
        upperFirst: upperFirst,
        upperCase: upperCase,
        escapeRegExp: escapeRegExp,
        startCase: startCase,
        snakeCase: snakeCase,
        kebabCase: kebabCase,
        chunk: chunk,
        compact: compact,
        concat: concat,
        uniq: uniq,
        uniqBy: uniqBy,
        uniqWith: uniqWith,
        flattenDeep: flattenDeep,
        flattenDepth: flattenDepth,
        groupBy: groupBy,
        keyBy: keyBy,
        forEach: forEach,
        map: map,
        filter: filter,
        reduce: reduce,
        zip: zip,
        unzip: unzip,
        unzipWith: unzipWith,
        zipObject: zipObject,
        zipObjectDeep: zipObjectDeep,
        zipWith: zipWith,
        keys: keys,
        values: values,
        valuesIn: valuesIn,
        every: every,
        some: some,
        fill: fill,
        sortBy: sortBy,
        isEqual: isEqual,
        reverse: reverse,
        countBy: countBy,
        reduceRight: reduceRight,
        shuffle: shuffle,
        isNaN: isNaN,
        isNull: isNull,
        isNil: isNil,
        isUndefined: isUndefined,
        toArray: toArray,
        sum: sum,
        sumBy: sumBy,
        parseJson: parseJson,
        stringifyJson: stringifyJson,
        forIn: forIn,
        forInRight: forInRight,
        forOwn: forOwn,
        forOwnRight: forOwnRight,
        difference: difference,
        differenceBy: differenceBy,
        differenceWith: differenceWith,
        intersection: intersection,
        intersectionBy: intersectionBy,
        sortedIndex: sortedIndex,
        sortedIndexBy: sortedIndexBy,
        sortedIndexOf: sortedIndexOf,
        sortedLastIndex: sortedLastIndex,
        sortedLastIndexBy: sortedLastIndexBy,
        sortedLastIndexOf: sortedLastIndexOf,
        sortedUniq: sortedUniq,
        sortedUniqBy: sortedUniqBy,
        floor: floor,
        isMatch: isMatch,
        matches: matches,
        property: property,
        get: get,
        toPath: toPath,
        matchesProperty: matchesProperty,
        drop: drop,
        dropRight: dropRight,
        dropWhile: dropWhile,
        dropRightWhile: dropRightWhile,
        findIndex: findIndex,
        findLastIndex: findLastIndex,
        flatten: flatten,
        fromPairs: fromPairs,
        toPairs: toPairs,
        toPairsIn: toPairsIn,
        head: head,
        indexOf: indexOf,
        lastIndexOf: lastIndexOf,
        initial: initial,
        intersectionWith: intersectionWith,
        join: join,
        last: last,
        nth: nth,
        pull: pull,
        pullAll: pullAll,
        pullAllBy: pullAllBy,
        pullAllWith: pullAllWith,
        times: times,
        constant: constant,
        isFunction: isFunction,
        functions: functions,
        functionsIn: functionsIn,
        keysIn: keysIn,
        mapKeys: mapKeys,
        mapValues: mapValues,
        isArguments: isArguments,
        isArray: isArray,
        isBoolean: isBoolean,
        isDate: isDate,
        isEmpty: isEmpty,
        isEqualWith: isEqualWith,
        isArrayLike: isArrayLike,
        isArrayLikeObject: isArrayLikeObject,
        isArrayBuffer: isArrayBuffer,
        isElement: isElement,
        isError: isError,
        isFinite: isFinite,
        isPlainObject: isPlainObject,
        isObjectLike: isObjectLike,
        isObject: isObject,
        isNumber: isNumber,
        isNative: isNative,
        isMap: isMap,
        isLength: isLength,
        toLength: toLength,
        isInteger: isInteger,
        isMatchWith: isMatchWith,
        isRegExp: isRegExp,
        isSafeInteger: isSafeInteger,
        isSet: isSet,
        isString: isString,
        union: union,
        unionBy: unionBy,
        unionWith: unionWith,
        without: without,
        tail: tail,
        take: take,
        takeWhile: takeWhile,
        takeRight: takeRight,
        takeRightWhile: takeRightWhile,
        xor: xor,
        xorBy: xorBy,
        xorWith: xorWith,
        find: find,
        findLast: findLast,
        flatMap: flatMap,
        flatMapDeep: flatMapDeep,
        flatMapDepth: flatMapDepth,
        forEachRight: forEachRight,
        includes: includes,
        invokeMap: invokeMap,
        orderBy: orderBy,
        partition: partition,
        reject: reject,
        sample: sample,
        sampleSize: sampleSize,
        size: size,
        defer: defer,
        delay: delay,
        castArray: castArray,
        conformsTo: conformsTo,
        eq: eq,
        gt: gt,
        gte: gte,
        isTypedArray: isTypedArray,
        isSymbol: isSymbol,
        isWeakMap: isWeakMap,
        isWeakSet: isWeakSet,
        lt: lt,
        lte: lte,
        toNumber: toNumber,
        toInteger: toInteger,
        toFinite: toFinite,
        assign: assign,
        assignIn: assignIn,
        toSafeInteger: toSafeInteger,
        add: add,
        divide: divide,
        ceil: ceil,
        max: max,
        maxBy: maxBy,
        mean: mean,
        meanBy: meanBy,
        min: min,
        minBy: minBy,
        multiply: multiply,
        round: round,
        subtract: subtract,
        clamp: clamp,
        inRange: inRange,
        random: random,
        at: at,
        defaults: defaults,
        defaultsDeep: defaultsDeep,
        findKey: findKey,
        findLastKey: findLastKey,
        has: has,
        hasIn: hasIn,
        invert: invert,
        invertBy: invertBy,
        invoke: invoke,
        merge: merge,
        mergeWith: mergeWith,
        omit: omit,
        omitBy: omitBy,
        pick: pick,
        pickBy: pickBy,
        result: result,
        set: set,
        setWith: setWith,
        transform: transform,
        unset: unset,
        update: update,
        updateWith: updateWith,
        camelCase: camelCase,
        capitalize: capitalize,
        deburr: deburr,
        endsWith: endsWith,
        escape: escape,
        unescape: unescape,
        identity: identity,
    }






}()

