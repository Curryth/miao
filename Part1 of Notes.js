<script>


// 输入n个数，并反向输出，用数组方式实现。

var n = Number(prompt())

var a = []  // 或者 var a = Array(n)  Array用于单个变量储存多个值

for (var i = 0; i < n; i++) {
    var number = Number(prompt())
    a.push(number)   // 或者 a[i] = number
}

for(var i = n - 1; i >= 0 ; i--) {
    console.log(a[i])
}



a = Array(8)



// 数组是值的有序集合

var a = [] // 创建空数组
var a = [1,2,3,4] // 创建非空数组
console.log(a[0])  // 取出数组的第一项，即下标/索引为0的项
console.log(a[1])  // 取出数组的第二项，即下标/索引为1的项
a[2] = 888  // 数组下标2号元素赋值

a.length = 3  // 让数组的长度变为3，扔掉可能存在的后续项

a.push(5)  // 向数组尾增加元素，并返回新的长度
a.push(5,6)  // 可以一次性增加多个元素
a.length  // 得到数组长度
a.pop()  // 删除数组最后一项，一次只能删一项

a.unshift(5)  // 向数组前面增加元素，并返回新的长度
a.unshift(5,6)  // 可以一次性增加多个元素

a.shift()  //删除并返回数组第一项，一次只能删一项



// 幂运算

function power(a, n) {
    if (n == 0) {
        return 1
    } else {
        return a * power(a, n - 1)
    }
    
}

// 阶乘

function factorial(x) {
    if (x == 0) {
        return 1
    } else {
        return  factorial(x - 1) * x
    }
}

// 斐波那契数列

function fibb(n) {
    if (n < 3) {
        return 1
    } else {
        return fibb(n - 1) + fibb(n - 2)
    } 
    
}

// 输入n个数并反向输出
// 输入一个数，输入n - 1 个数并反向输出，输出x

function inputAndReverse(n) {
    if ( n == 0) {
        return 
    }
    var x = Number(prompt())
    inputAndReverse(n - 1)
    console.log(x)
}


var target = 150

function find(start, history) {
    if (start == target) {
        return history
    }
    if (start > target) {
        return null
    }
    return  find(start * 3, '(' + history + ') * 3')           // 每次返回两次不同的值
        || find(start + 5, history + ' + 5')
}


// 找到并输出所有的可能

function findSolution(target) {

// var target = 151      

function find(start, history) {
    if (start == target) {
        console.log(history)
        return
    }
    if (start > target) {
        return null
    }
    return find(start * 3, '(' + history + ') * 3')
        || find(start + 5, history + ' + 5')
}

return find(1, '1')
}


// 找到并返回第一个可能

    function findSolution(target) {

    // var target = 151

        function find(start, history) {
            if (start == target) {
                return history
            }
            if (start > target) {
                return null
            }
            return find(start * 3, '(' + history + ') * 3')
                || find(start + 5, history + ' + 5')
        }

        return find(1, '1')
    }



// 找到并返回（放在数组里）所有的可能

    function findSolution(target) {

    // var target = 151
    var array = []

    function find(start, history) {
        if (start == target) {
            array.push(history)
            return
        }
        if (start > target) {
            return
        }
        find(start * 3, '(' + history + ') * 3')
        find(start + 5, history + ' + 5')
    }

    find(1, '1')
    return array
    }


// 棋盘格

    function findSolution(targetX, targetY) {

    // var target = 151
    var array = []

    function find(x, y, history) {
        if (x == targetX && y == targetY) {
            array.push(history)
            return
        }
        if (x > targetX || y > targetY) {
            return
        }
        find(x + 1, y,  history + '>')
        find(x, y + 1, history + '^')
    }

    find(0, 0, '')
    return array
    }

// 走楼梯
function findSolution(target) {
    var array = []

    function find(start, history) {
        if (start == target) {
            array.push(history)
            return
        }
        if (start > target) {
            return
        }
        find(start+ 1,  history + ' > ')
        find(start + 2, history + ' >> ')
    }

    find(0, '')
    return array
    }


// 递归的用法 Example of Recurision
// 求从坐标某点，向下走，选择一条路径经过的数字之和最大值，maxSum
var numbers = [                         // 数组里面套数组
      [2], 
     [3, 1],
    [9, 8, 4],
   [7, 1, 5, 6],
  [3, 0, 4, 9, 8],
]                                     // numbers[2][1] = 8 表示大数组里的第3排，第2个

function maxSum(x, y) {
    if (x == numbers.length - 1) {      // 如果起始位置在最底下一排
        return numbers[x][y]
    }
    return numbers[x][y] + Math.max( maxSum(x + 1, y), maxSum(x + 1, y + 1) )
} 



function findSolution(numbers) {
  var max = 0
  var maxHistory = null

  function find(x, y, sum, history) {
    if (x == numbers.length - 1){  //已经走到最后一行

        if (sum + numbers[x][y] > max) {
            max = sum + numbers[x][y]
            maxHistory = history
        }
        return
    }
        find(x + 1, y,     sum + numbers[x][y],  history + ' 左 ')
        find(x + 1, y + 1, sum + numbers[x][y], history + ' 右 ')
    }

    find(0, 0, 0, '')
    return [max, maxHistory]
}


//自己敲一遍理解一下

var numbers = [
            [2],
          [3, 1],
        [9, 8, 4],
      [7, 1, 5, 6],
    [3, 0, 4, 9 ,8],
  [10, 0, 0, 0, 0, 0],
[10, 0, 0, 300, 0, 0, 200],
]


function maxSum(x, y) {
    if (x == numbers.length - 1) {
        return numbers[x][y]
    }
    return numbers[x][y] + Math.max( maxSum(x + 1, y), maxSum(x + 1, y + 1))
    
} 

maxSum(0,0)



var minimumTotal = function(triangle) {
   var min = 10 * 10 * 10 * 10

  function find(x, y, sum) {
    if (x == triangle.length - 1){  //已经走到最后一行

        if (sum + triangle[x][y] < min) {
            min = sum + triangle[x][y]
        }
        return
    }
        find(x + 1, y,     sum + triangle[x][y], )
        find(x + 1, y + 1, sum + triangle[x][y], )
    }

    find(0, 0, 0)
    return min

    
};


var minimumTotal = function(triangle) {
    var min = 10 * 10 * 10 * 10

    function find(x, y, sum) {
    if (x == 0){  //已经走到最后一行

        if (sum - triangle[x][y] < min) {
            min = sum - triangle[x][y]
        }
        return
    }
        find(x - 1, y - 1, sum - triangle[x][y] )
        find(x - 1, y,     sum - triangle[x][y] )
    }

    find(0, 0, 0)
    return min


}

function countBs(str) {
    var count = 0
    for(var i = 0; i < str.length; i++) {
        if (str[i] == 'B') {
            count++
        }
    }
    return count
    
}

function countChar(str, char) {
    var count = 0
    for(var i = 0; i < str.length; i++) {
        if (str[i] == 'char') {
            count++
        }
    }
    return count
    
}

function countChar(str) {
    return countChar(str, 'B')
} 


function countBs(str) {
  var count = 0
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'B') {
      count++
    }
  }
  return count
}

function countChar(str, char) {
  var count = 0
  for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++
    }
  }
  return count
}

  function indexOf(array, value, formIndex = 0) {
      for (var i = fromIndex; i < array.length; i++) {
          if (arry[i] === value) {
              return i
          }
      }
      return -1
  }


    var joural = []

    function addEntry(events, didTurn) {
        var entry = {
            events: events,
            squirrel: didTurn,
        }

        joural.push(entry)
    }
  
  //  addEntry(['eat', 'touch tree','work','tv'],true)

  function phi(table) {
      return (table[3] * table[0] - table[1] * table [2]) /
        Math.sqrt(
            (table[2 + table[3]]) *
            (table[0] + table[1]) *
            (table[0] + table[2]) *
            (table[3] + table[1])
        )

  }
 
    function hasEvent(event, entry) {
      //  return entry.events.indexOf(event) >= 0
        return entry.events.include(event) >= 0
    }

// 从统计数据中得到某时间与变松鼠之间的表格


    function tableFor(event, joural) {
        var table = [0, 0, 0, 0]
        for (var i = 0; i < joural.length; i++) {
            var entry = joural[i]
            var index = 0  // 高低位都为0
            if (hasEvent(event, entry)) index += 1  // 低位变1,低位表示是否发生了某事
            if(entry.squirrel) index += 2  // 高位变为1，高位表示是否变成了松鼠
            table[index]++
        }
        return table   
    }



var ps = []
var obj = {}

    debugger
    for (var i = 0; i < JOURNAL.length; i++){
        var entry = JOURNAL[i]
        var event = entry.eventsfor 
        for (var j = 0; j < events.length; j++) {
            var event = events [j] 

            if (!(event in obj)) {
                var table = tableFor(event, JOURNAL)
                var p = phi(table)
                
                obj[event] = p
                ps.push(  {
                    name: event,
                    value: p
                }  )

            }

        }
    }

  console.log(ps)
  console.log(obj)
 






// function getPhi(event) {
//    for (var i = 0; i < ps.length; i++) {
//        if (ps[i].name == event) {
//            return ps[i].value
//        }
//    }
//    return 0
// }

//phis = {
//   work: -0.03

// }




for (var key in obj) {

}



function push(array ,vavl) {
    array[array.length] = val 
    return array.length

}

function pop(array) {
    var t = array[array.length - 1]
    array.length - 1
}

a.slice(3,7)


function slice(array, start, end) {
    var result = []
    for (var i = start; i < end; i++) {
        result.push(array[i])
    }
    return result
}

contat 

b = a.contact(5, 5, 5, 5)


a.slice()

a.splice(a.length,0,'555')

a.splice(-2,1)
a.at(-1)

a[3] = 888
a.splice(3,1,888)

a.fill(0)

a[0].foo = 8

function fill(array, val) {
    for (var i = 0; i < array.length; i++) {
       array[i] = val
    }
    return array
}

array.

a.reverse

function reverse 

foo.toString() {
    return 8 * 8
}

// JS里一切皆对象，能读出属性的东西都是对象

// number，string，boolean不是真正的对象，这里的对象指真正的对象

xo = obj {}

x = 2

x.toFixed()

Object(x).toFixed()


Object('djkahdj')

String('kjhjhl')

Boolean()   //包装对象

new String/Number/Boolean 

indexOf 

s.trim()
s.trimStart()
s.tirmEnd()

s.at()


s.contact

s.endsWith()
s.starsWith()

s.fixed 

s.fontcolor('red')

s.plit('')

s.substring(5,8)

function foo() {
    console.log(arguments)
}
// 类数组对象


function sum() {
    var result = 0
    for (var i = 0; i < arguments; i++) {
        result += arguments(i)
    }
    return result
}

sum(1,5,8,1,0,0,8)


function f(a, b , ...c)

//剩余数组

// 命名空间

// 全局对象是全局作用域的属性
// 局部对象是局部作用域的属性

delete 




// 2021/12/31 PM

// 数据与算法导论-C语言版  Mark Allen   （我们会学习里面三分之一的算法部分）

// 

// 什么是递归，递归不是循环逻辑，不是闭环的，如同电影《恐怖游轮》里一样首位衔接无限循环。
// 递归应该是从函数F(5)➡️F(4)➡️F(3)➡️F(2)➡️F(1)➡️F(0)，
// 而不是F(5)➡️F(5)无限循环


// unsigned int N 输入无符号整数N

// 1.Base case 基准情形
// 2.Making Progress 不断推进。对于需要递归求解的情形，递归调用必须朝着产生基准情形的方向推进
// 3.假设所有递归都能正确运行
// 4. 


// 汉诺塔                 没想明白这个和递归有啥关系？？？

  function hanoi(n, from, to) {
      var mid = 6 - from - to  // 空闲杆号
      if (n == 1) {
          console.log(from, '➡️'， to)
      } else {
          hanoi (n - 1,) from, mid)
          console.log(from, '➡️'， to)
          hanoi(n - 1, mid, to)
      }
  }

  hanoi(4, 1, 3-)


// 递归版斐波那契

var computed = []

function fibb(n) {
    if (n < 3) {
        return 1
    } else {
        if (computed[n]) {
            return computed[n]
        }
        var result = fibb(n - 1) + fibb(n - 2)
        computed[n] = result               
        return result
    }
} 
// 把数组做映射，由第n项的编号映射到其结果。
// 如果算过了存在于数组内，即返回这个值。否则就算出来再返回这个结果。

//缓存，把每次算出来的结果存起来，下次遇见直接输出。
// obj.['2/7'] = 45   把45存在2/7的位置，方便下次输出。


// 最大的子序列的问题

// 求数组第i项到第j项之和的最大值


// 解1  时间复杂度为N的三次方（因为有三个for循环嵌套）
    function maxSubArray(array) {
        var max = -Infinity
        for (var i = 0; i < array.length; i++) {
            for (var j = i; j < array.length; j++) {
                var sum = 0
                for (var k = i; k <= j; k++) {
                    sum += array[k]
                }
                if (sum > max) {
                    max = sum
                }
            }
        }
        return max
    }

// 解2  时间复杂度为N的二次方（只有两个for循环嵌套）
    function maxSubArray(array) {
        var max = -Infinity
        for (var i = 0; i < array.length; i++) {
            var sum = 0
            for (var j = i; j < array.length; j++) {
                sum += array[j]
                if (sum > max) {
                    max = sum
                }
            }
        }
        return max
    }


// 解3   递归算法
// 时间复杂度为大O(N*logN) 
// 空间复杂度logN+N, logN很小，即空间复杂度为O(N).
    function maxSubArray(array) {
        if (array.length == 0) {
            return 0
        }
        if (array.length == 1) {
          if (array[0] < 0) {
            return 0
          } else{
            return array[0]
          }
        }      
        

        var mid = array.length >> 1 // 位运算，右移一位，右边移去的若是0则为除2，移去的是1则为除二取整。
        var left = array.slice(0, mid)
        var right = array.slice(mid)

        var leftMax = maxSubArray(left)  // 左边数组的最大子串和
        var rightMax = maxSubArray(right)  // 右边数组的最大子串和

        var leftSpanMax = 0
        var sum = 0
        for (var i = mid - 1; i >= 0; i--) {
          sum += array[i]
          if (sum > leftSpanMax) {
            leftSpanMax = sum
          }
        }

        var rightSpanMax = 0
        var sum = 0
        for (var i = mid; i < array.length; i++) {
          sum += array[i]
          if (sum > rightSpanMax) {
            rightSpanMax = sum 
          }
        }

        var spanMax = leftSpanMax + rightSpanMax
        return Math.max(spanMax, leftMax, rightMax)
    }


// 解4 单层循环，只对数据进行一次扫描，且不需要记住数据，只需要读出当前的数和当前的状态

function maxSubArray(array) {

    var ThisSum = 0
    var MaxSum = 0

    for (var i = 0; i < array.length; i++) {
        ThisSum += array[i]

        if (ThisSum > MaxSum) {
            MaxSum = ThisSum
        } else if (ThisSum < 0) {
          ThisSum = 0
        }
    }
    return MaxSum
}

var distributeCandies = function(candyType) {
    var types = {}

    for(var i = 0; i < candyType.length; i++) {
        var type = candyType[i]
        types[type] = 1
    }

    var size = 0
    for (var candy in types) {
        size++
    }

    if ( size > candyType.length / 2) {
      return size
    } else {
      return candyType.length / 2
    }

}

// 有些用到 var a = undefined   可以写成 var a = void 0   避免undefined被转换，以及节省了几个字节（哈？这么省）


// 时间复杂度 O       
// O(N三次方)   mean 时间最后只和N的三次方有相关性，和其他的没有关系


// 空间复杂度


 
 2022/01/04

  function sum(numbers) {
    var result = 0
    for (var i = 0; i < numbers.length; i++) {
      result += numbers[i]
    }
    return result
  }


function range(start, end, step = 1 ) {
  var result = []
  for (var i = start; i <= end; i += step) {
    result.push(i)
  }
  return result
}


Reversing an array 倒序数组

function reverseArray(array) {
      var len = array.length
      var result = Array(len)

      for (var i = array.length - 1; i >=0; i--) {
        result[len - i - 1](array[i])
      }
      return result
    }

    function reverseArrayInPlace(array) {
        var i = 0
        var j = array.length - 1

        while (i <= j ) {
            var temp = array[i]
            array[i] = array[j]
            array[j] = temp
            i++
            j--
        }
        return array
     }


稀疏数组带empty项的

以下的函数都会作用于稀疏数组里的稀疏项empty项

array.reverse

array.slice(2, 5)
array.splice()
array.sort()


// 面试题
// DeapEqual 深度对比  


  deepEqual(NaN, NaN)  

  function deepEqual(a, b) {               // 不仅可以判断对象的相等，值相等也会返回true
      if (a === b) {            // 原始类型相同
          return true
      } 
      if (a !== a && b !== b) {    // 如果一个数不等于自己，说明它是NaN
          return true
      }
      // 两个都是数组
      if (Array.isArray(a) && Array.isArray(b)) { // Array.isArray()函数来判定一个数是不是数组
          if (a.length !== b.length) {
              return false
          } else {
                for (var i = 0; i < a.length; i++) {
                    if ( !deepEqual(a[i], b[i]) ) {    // 用递归来判定数组是不是完全相等
                        return false
                    }
                 }
             return true
            }
       }

    // 两个都是对象                             // 因为typeof null === 'object',要排除掉
    if (!Array.isArray(a) && !Array.isArray(b) && a && b && typeof a === 'object' && typeof b === 'object') {
        for (var key in a) {
            if (!(key in b)) {   // a的每个属性都要在b里
                return false       // 否则返回false
             }
        }
        for (var key in b) {  
            if (!(key in a)) {  // b的每个属性都要在a里
                return false    // 否则返回false
             }
         }
      // 上方两个循环确定a和b的属性集合相同

        for (var key in a ) {
            if (!deepEqual(a[key], b[key])) {
                return false
             }
        }
        for (var key in b ) {
            if (!deepEqual(a[key], b[key])) {
                return false
             }
        }
        return true // 上面对象这一部分判断都是返回false过滤掉所有不对的情况，
                   // 所以最后只剩下正确的情况，即返回true
    }

    return false // 如果经过上面所有判断都没有返回true的情况，那么就不深度相等，返回false
  }



a = {
    x1:1, y:2
}
b = {
    x1:1, y:2
}





链表 ：
难查找（必须通过头部顺着链表的指针找到目标结点）
易增删（只需要调整修改位置的结点指针）
使用一小段一小段的内存，需要多少用多少


数组：
易查找（通过下表直接就找到某一项）
难增删（增删位置后续的元素都要挪动位置）
使用连续的内存，而且长度一般不能变




  var node = {

    var: 1,
    next: {
      value: 2,
      next: 
    }


    var: 2,
    next: null

  }

  // 将数组转变成链表

  function arrayToList(array) {
      if (array.length == 0) {
        return null
      }

      var nodes = []
      for (var i = 0; i < array.length; i++) {
        // 对于数组的每个值，创建一个链表结点
          var node = {
              val: array[i],
              next: null,
          }
          nodes.push(node)

      }

      for (var i = 0; i < array.length - 1; i++) {       // 最后一项没得值，只有null
        // 把每个结点的next指向后一个结点
          nodes[i].next = nodes[i + 1]
      }

      return nodes[0]

  }



  function arrayToList2(array) {
    if (array.length == 0) {
        return null
      }

      var head = {           // 创建头结点，方便创建第一个prev的next
        val: array[0],
        next: null
      }
      var prev = head

      for (var i = 1; i < array.length; i++) {
      var node = {
          val: array[i],
          next: null,
      }
      prev.next = node
      prev = node
    }

    return head         // 最后返回头结点
    
  }



  function arrayToList3(array) {

    var dummy = {             // dummy：假结点
      val: 0,                // 不需要写数组长度为0的情况，因为for循环不会运行，直接输出null
      next: null
    }
    
    var prev = dummy

    for (var i = 0; i < array.length; i++) {  // 数组第0项创建出第一个结点挂到dummy假结点上
      var node = {
          val: array[i],
          next: null,
      }
      prev.next = node
      prev = node
    }

    return dummy.next

  }


// 倒序的方式写出，从后往前写链表

  function arrayToList4(array){
      var prev = null

      for (var i = array.length - 1; i >= 0; i--) {  
        var node = {
            val: array[i],
            next: null,
        }
        node.next = prev
        prev = node
      }
      return pre
    }
  }


  // 以递归方式


  function arrayToListR2(array, start = 0) {  // 将数组array从start开始到结束转为链表
    if (start == array.length) {
      return null
    }

    var head = {      // 先把头结点单独拎出来
      val: array[start],
      next: null
    }

    var tail = arrayToListR2(array, start + 1)  // 后面所有的项成为一个单独的f(x),这样不断递归下去
    head.next = tail             // 数组有多少项，递归就有多少层
    return head
  }


// 把链表转成数组
  function listToArray(head) {
    
    if (head == null) {
      return []
    }

    var result = []

    while(head) {
      result.push(head.val)
      head = head.next
    }

    return result

  }


  // 写成递归形式
  function listToArrayR(head) {
      if (head == null) {
        return []
      }
      var array = listToArrayR(head.next)
 
      return [head.val].concat(array) // 将头结点的值与后面递归的部分连接起来
  }




  // 把一个结点加到链表的前面
  function prepend(val, head) {
    return {
      val: val,
      next: head
    }
  }

  // 把一个结点添加到链表的后面

    function append(val, head) {
        var node = {
          val: val,
          next: null,
        }
        if (head == null) {
          return node
        }

        var p = head
        while (p.next) {
          p = p.next
        }
      }
        p.next = node
        return head
    }


  // 寻找链表的第二项
  function nth(list, n) {
    if (list == null) {
      return undefined
    }
    var p = list
    var c = 0

    while (p && c < n) {
      c++
      p = p.next
    }
    
    if(p) {
      return p.val
    } else {
      return undefined
    }
  }




  function nth(list, n) {
    if (list == null || n < 0) {
      return undefined
    }
    if (n == 0) {
      return list.val
    }
    return nth(list.next, n - 1)

  }


  function insert(list, n, val) {
    var node = {
      val: val,
      next: null
    }
    var p = list
    var c = 0

    if (n == 0) {
      node.next = list
      return node
    }

    while (p && c < n - 1) {
      c++
      p = p.next
    }

 //   var q = p.next
 //   p.next = node
 //  node.next = q

  node.next = p.next
  p.next = node
  return list
  
  }
  


//创建一个链表结点

var node = new ListNode(3, head)
return node




2022/01/06

// 插入排序

// 生成n个由n以内整数组成的随机数组
function randomAry(n) {
    var ary = []
    var rands = []
    for (var i = 0; i < n; i++) {
        var rand = Math.random()
        rands.push(rand)
        ary.push(  Math.trunc(rand * n)  )    // 若n为100，则取的是100以内的随机整数
               // 位运算，或上0都可以
    }
    console.log(rands)
    return ary
}

  function insertSort(ary) {

      // 从第一个元素开始，该元素可以认为已经被排序
      for (var i = 1; i < ary.length; i++) {
          var t = ary[i]  
        //取出下一个元素，在已经排序的元素序列中从后向前扫描
          for (var j = i - 1; j >= 0; j--) {
              if (ary[j] > t) {
                  ary[j + 1] = ary[j]
         // 不断后移比t大大元素
              } else {  
                  break // 直到找到一个比t小的元素
              }
          }
          ary[j + 1] = t  // 将t插入上面这个元素的后面
      }        
      return ary
  }

function isSorted(ary) {
    for (var i = 0; i < ary.length - 1; i++) {
        if (ary[i + 1] < ary[i]) {
            return false
            break
        }
    }
    return true
}


// 冒泡排序

function swap(ary, i, j) {
    var t = ary [i] 
    ary[i] = ary[j]
    ary[j] = t
}

function bubbleSort(ary) {
  // 遍历交换的结束位置
    for (var i = ary.length - 2; i >= 0 ; i--) {
        var swapped = false
        for (var j = 0; j <= i; j++) {   // 从第0道第i个元素分别跟右边的元素对比交换
            if (ary[j] > ary[j + 1]) {
                swapped = true
                var t = ary [j] 
                ary[j] = ary[j + 1]
                ary[j + 1] = t
            }
        }
        if (!swapped) {         // 如果某次遍历没有交换过，说明数组已经有序，结束
            break
         } 
    }
    return ary
}


function bubbleSort(ary) {

    function swap(ary, i, j) {
        var temp = ary[j]
        ary[j] = ary[i] 
        ary[i] = temp
    }

    for (var i = ary.length - 2; i >= 0; i--) {
        var swapped = false
        for (var j = 0; j <= i; j++) {
            if (ary[j] < ary[j + 1]) {
                swapped = true
                swap(ary, j, j + 1)
            }
        }
        if (!swapped) {
            break
        }
    }
    return ary

};

// 选择排序

function selectSort(ary) {
    for (var i = 0; i < ary.length - 1; i++) {
        // 找出剩下元素最小的放入位置
        var minIdx = i // 假设查找范围的第一项即为最小的
        for (var j = i + 1; j < ary.length; j++) {
            if (ary[j] < ary[minIdx]) {
                minIdx = j
            }
        }
        // 将最小的元素放在i位置，并把i原来的值放到最小元素的位置
        swap(ary, i, minIdx)
    }
    return ary
}


function selectSort(ary) {
    for (var i = 0; i < ary.length - 1; i++) {
        var minIdx = i
        for (var j = i + 1; j < ary.length; j++) {
            if (ary[j] < ary[minIdx]) {
                minIdx = j
            }
        }
        swap(ary, i, minIdx) 
    }
    return ary
}


// 归并排序，时间复杂度空间复杂度都比较大
// 递归写法
// 时间复杂度:N*logN
// 空间复杂度: N + logN



function mergeSort(ary) {
    if (ary.length < 2) {
      return ary
    }
    // 把数组一分为二
    var mid = Math.floor(ary.length / 2)
    var left = ary.slice(0,mid) 
    var right = ary.slice(mid)
    // 左边排
    mergeSort(left) 
    // 右边排
    mergeSort(right)

    // 合起来
    var i = 0  // 指向left数组
    var j = 0  // 指向right数组
    var k = 0  // 指向结果数组
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            ary[k++] = left[i++]
        } else {
            ary[k++] = right[i++]
        }
    }
    while (i < left.length) {
        ary[k++] = left[i++]
    }
    while (i < right,length) {
        ary[k++] = right[j++]
    }

    return ary

}



// 对数组ary从start到end防伪内到元素进行就地归并排序
// 就地：不创建新的数组。所有的元素在原数组中进行操作


// 快速排序，快排 
// 不及格写法,专门生成3个数组来存储，从而占用了更多的存储空间（增加了空间复杂度）
function quickSort(ary) {
  if (ary.length < 2) {
    return ary.slice()  // .slice取出数组的一段值并返回
  }

  var randomIdx = Math.floor(Math.random() * ary.length)  // 从数组随机取一个数的下标，做哨兵
  var pivot = ary[randomIdx] 
  var left = []
  var mid = []
  var right = []

  for (var i = 0; i < ary.length; i++) {
    if (ary[i] < pivot) {
      left.push(ary[i])
    } else if (ary[i] > pivot) {
      right.push(ary[i])
    } else {
      mid.push(ary[i])
    }
  }
  left =  quickSort(left)    // 这里递归写法
  right =  quickSort(right)   // 看这里是否需要返回新数组，

  return [...left, ...mid, ...right]    // ...代表什么？需要搞清楚
  // 这里也可以重新遍历left，mid,right三个数组覆盖到原数组中去，最后返回原数组。
}


// 真正的快排

// 对数组ary从start到end(包含)对元素进行快排
// 只能排数字的快排
function qSort(ary, start = 0, end = ary.length - 1) {
  if (start >= end) {
    return ary
  }
  var pivotIdx = Math.floor(Math.random() * (end - start + 1) + start)
  var pivot = ary[pivotIdx]

  swap(ary, pivotIdx, end)

  var i = start
  for (var j = start; j < end; j++) { // 不遍历放在最后的哨兵元素
    if (ary[j] < pivot) {
      swap(ary, i, j)
      i++
    }
  }
  swap(ary, i, end) // 将哨兵元素换回中间


  // 此时，i位置
  // i + 1到j之间是[大于等于]哨兵元素
  // start到i-1是[小于]哨兵元素
  // i位置本身不用再动了，因为哨兵元素在有序后也一定会放在i位置
  qSort(ary, start, i - 1)
  qSort(ary, i + 1, end)

  return ary

}


排序函数中的高阶函数predicate, compare

// predicate函数针对数组中的元素返回一个确定其顺序的数值
// 排序算法会根据这个数值来确定元素在原数组中的有序位置
// it => it 接收什么就返回什么，比如包含年龄身高两个对象key值的数组里面，it => it.height,表示按身高顺序来排
function qSortBy(ary, predicate = it => it, start = 0, end = ary.length - 1) {
  if (start >= end) {
    return ary
  }
  var pivotIdx = Math.floor(Math.random() * (end - start + 1) + start)
  var pivot = ary[pivotIdx]

  swap(ary, pivotIdx, end)

  var i = start
  for (var j = start; j < end; j++) { // 不遍历放在最后的哨兵元素
    if (predicate(ary[j]) < predicate(pivot)) {
      swap(ary, i, j)
      i++
    }
  }
  swap(ary, i, end) // 将哨兵元素换回中间


  // 此时，i位置
  // i + 1到j之间是[大于等于]哨兵元素
  // start到i-1是[小于]哨兵元素
  // i位置本身不用再动了，因为哨兵元素在有序后也一定会放在i位置
  qSortBy(ary, start, i - 1)
  qSortBy(ary, i + 1, end)

  return ary

}

qSort(ancestry, it => -it.born) // 加个负号，倒序排列，原本是升序。
// compare函数接收数组中的两个元素，返回正，负，零以告诉排序算法谁大谁小或者两者相同
function qSortWith(ary, compare = (a, b) => a - b, start = 0, end = ary.length - 1) {
  if (start >= end) {
    return ary
  }
  var pivotIdx = Math.floor(Math.random() * (end - start + 1) + start)
  var pivot = ary[pivotIdx]

  swap(ary, pivotIdx, end)

  var i = start
  for (var j = start; j < end; j++) { // 不遍历放在最后的哨兵元素
    if (compare(ary[j], pivot) < 0) { // compare接收两个元素，返回正负零告诉函数谁大谁小
      swap(ary, i, j)
      i++
    }
  }
  swap(ary, i, end) // 将哨兵元素换回中间


  // 此时，i位置
  // i + 1到j之间是[大于等于]哨兵元素
  // start到i-1是[小于]哨兵元素
  // i位置本身不用再动了，因为哨兵元素在有序后也一定会放在i位置
  qSortWith(ary, compare,start, i - 1)
  qSortWith(ary, compare,i + 1, end)

  return ary

}

qSort(ancestry, (a, b) => a.born - b.born)


sort函数
.sort((a, b) => a - b)升序排列
.sort((a, b) => b - a)降序排列









  function qSort3(ary, start = 0, end = ary.length -1) {
    if (start >= end) {
    return ary
  }
  var pivotIdx = Math.floor(Math.random() * (end - start + 1) + start)
  var pivot = ary[pivotIdx]

  swap(ary, pivotIdx, end)

  var i = start
  var k = i
  for (var j = start; j < end; j++) { // 不遍历放在最后的哨兵元素
    if (ary[j] < pivot) {
      if (i == k) {
        swap(ary, i, j)
      } else  {
        swap(ary, i, j)
        swap(ary, k, j)
      }
      k++
      i++
    } else if (ary[j] == pivot) {
      swap(ary, j, k++)
    }
  }
  swap(ary, end, k) // 将哨兵元素换回中间

  qSort(ary, start, i - 1)
  qSort(ary, k + 1, end)

  return ary
  }




// 快排 b站写法

  1.左边放个指针 i = 0，并把第一个数作为基准数 temp
  2.右边放个指针 j = arry.length - 1
  3.如果ary[j] > temp, j--
  4.如果ary[j] < temp, 把ary[j]复制到ary[i]的位置, i++
  5.如果ary[i] > temp, 把ary[i]复制到ary[j]的位置， j--
  6.如果 i = j , 就把temp挪到相遇的位置，ary[i] = temp。 第一次遍历结束
  7.后面继续用递归

  function quickSort(ary) {
    var i = 0
    var j = ary.length - 1
    var pivot = ary[i]

    while (i < j) {

      if (ary[j] > pivot) {
        j--
      } else if (ary[j] < pivot) {
        ary[i] = ary[j] 
        i++
      }
      if (ary[i] > pivot) {
        ary[j] = ary[i]
        j--
      }
      
    }

  }


2022/01/07

function logEach(arry，func) { // func可以是alert,ary.push,等各种函数，可以对arry进行任何操作。
  for(var i = 0; i < array.length; i++) {
    func(arry[i])
  }
  
}



var a = 2
var a = function () {}    //函数不仅是一个值value,而且可以调用

f(a)
f(2)
f(function () { })

// for example
  var p = alert()   // 这样p就有了alert的函数作用，可以当作函数调用
  


function forEach(array, func) {         // forEach函数，用来遍历数组
    for (var i = 0; i < array.length; i++) {
      // 当迭代函数返回false表示不再继续迭代
      if (func(array[i], i) === 'false'){
        break
       } 
     }
}
  var ary = [1, 2, 3, 4, 5, 6, 7]

  forEach(ary, function(item, i, ary)  {
    console.log(item)
    if (i > 2) {
      return 'false'
    }
  })


  function(item, i, ary) {    // 这边整个function是要加到forEach的整个小括号里的
                            //这样上面的forEach函数才能调用道console.log这个功能
    console.log(item)
  }

  forEach([1,2,3,4,5,6,7]，         )



function isGreaterThan(n) {  // 函数不仅可以返回一个值，还可以返回一个函数
  return function (m) {     // 这里返回一个布尔值 m > n, 
    return m > n           // 可以在操作台输入 isGreaterThan(10)(11),
  }             // 后面括号里的11就是m的值，11 > 10,函数返回true
}

// 函数运行时创建的作用域与函数自身所在的作用域相同   上面的返回的m值就是函数创建的作用域
// 如函数自身在全局作用域（注意是函数自身在全局，不是指向函数的变量在全局），则其运行时所创建的作用域就包含在全局作用域里面
// 变量作用域的访问是逐层从内向外找的，这就是作用域链，scope chain
// 闭包：把三个函数isGreaterThan5/10/100返回的函数的m，分别作为各自的作用域。虽然外面的函数执行完毕了，但是里面的函数和m值必须得一直保存着准备对比输入的值，作用域并没有消失，这就叫闭包。
// 执行上下文，只在有闭包的函数里有，就是执行作用域链
// 调用栈
// 词法作用域lexical scoping，在内部函数的函数体能访问外部的变量。


    function unless(test, then) {
        if (!test) then()
    }

    var sum = 8
    var x = 1

    unless( x > 2, function () {
        sum++
      
    })

    console.log(sum)


function repeat(times, body) {
    for (var i = 0; i < times; i++) {
        body(i)
    }  
}
repeat(5, function (i) {
    console.log(i * i)
})

// 剩余参数 rest parameter
// 展开运算符spread operator，f(...[1, 2, 3])   ...接多个参数，现在先当其只接数组
// f.apply(null, [1, 2, 3])

var a = [1, 2, 3]
var b = [5, 6, 7]
f(...a,...b)



// 用Excel表格保存文件为CSV格式，用记事本打开就可以得到这样的字符串

str = `num,name,score
1,张三,78
2,李四,89
3,五王,87
4,赵六,67`

// 但是我们希望得到的是最好用数组分开排列好的对象形式

var scoreList = [{nums:1,name: '张三', score: 78}, {num:2,name: '李四', score: 89}, {num:3,name: '王五', score: 87}, {num:4,name: '赵六', score: 67}]


// 面试题，将Csv格式字符串转化为字符串数组输出
function parseCsv(csvStr) {
     var lines = csvStr.split('\n')       // split把字符串拆分成字符串数组
     var firstLine = lines.shift()       // 把第一行弹出来
     var headers = firstLine.split(',')   // 把第一行用逗号分开

     var result = []
     lines.forEach(function (line) {
       var values = line.split(',')
       var obj = {}

       for (var i = 0; i < headers.length; i++) {
         var h = headers[i]
         var v = values[i]
         obj[h] = v
       }

       result.push(obj)   // 压制出若干个对象，塞入result中
       //headers中的num,name,score作为每个对象的key,每组key的值分批赋予
     })

     return result
    
}



结构化数据：有着特定的严格格式，并且该格式非常容易被程序处理。即数据都是数组或者对象形式。

用花括号表示对象，中括号表示数组。


// 面试题，手动封装，把URL后面的参数解析成对象
// decodeURIComponent() 函数可对 encodeURIComponent() 函数编码的 URI 进行解码

const parseUrl = (url) => {
  const { log } = console;     // 后面就可以直接log出对象
  const [, seachStr] = url.split('?')  // 将url中？后面的部分定义为searchStr
  let obj = {};
  for (const str of seachStr.split('&')) {    // for of遍历数组的值
    const [name, value] = str.split('=');
    obj[name] = decodeURIComponent(value)    // obj[name] = value 也可以 但是因为为了可能出现的汉字，需要用到decode
  }
  log(obj);
  return obj;
}
parseUrl("https://www.baidu.com/s?rtt=1&bsst=1&cl=2&tn=news")



var url = "https://www.baidu.com/s?rtt=1&bsst=1&cl=2&tn=news"

url.split('?') = ['https://www.baidu.com/s', 'rtt=1&bsst=1&cl=2&tn=news']
// 以?号为间隔。将url分成字符串数组的形式




function parseQueryString(str) {
    var pairs = str.split('&')
    var obj = {}
    pairs.forEach(function(pair) {  // forEach 遍历pairs数组的每一个元素，pair代表每一个元素
        var parts = pair.split('=')  // 这里是每一个元素pair.split
        var key = parts[0]
        var val = parts[1]
        obj[key] = val       // 每一次循环给一个key属性赋值
    })
    return obj
}





var jsonStr = `
    {
        "cpu": "i9",
        "ram": "16G",
        "brand": "alienware",
        "phones": ["iPhone6", "iPhone7", "iPhone8", "iPhoneXSMAX"]
    }

`


高阶函数：filter

  function filter(array,test) {
    var result = []

    for (var i = 0; i < array.length; i++) {
        var item = array[i]
        if (  test(item)  ) {
          result.push(item, i, array)
        }
    }
    return result
  }

  filter(ancestry, function (person) {
    return person.born >= 1800    // 返回真假就行
    
  })

  // 求取家族中每个人的寿命
  function map(array, f) {
    var result = []         // 构造一个新数组
  
    for (var i = 0; i < array.length; i++) {
      result.push(    f(array[i], i, array)    )   // 把符合条件的元素都push进新数组里
    }
    return result
  }

  // 这高阶函数用的，可真溜。

  //先过滤出1900年以后出生的人，再返回每个人的名字。
  ancestry.filter(  function(person) {return person.born > 1900}  )
           .map(  function(person) {return person.name})

  ancestry.map( function(person) {return person.died - person.born} )
  
  // 按出生时间升序排列家族中每个人都寿命。
  ancestry.sort((a,b) => a.born - b.born).map( function(person) {return person.died - person.born} )


  箭头函数
  
  var add = function (a, b) {
    return a + b
  }

  改成箭头函数, 省略掉funtion

  var add = (a, b) => {
    return a + b
  }

  只有一个参数的话,省略参数外面的括号

  var square = a => {
    return a * a
  }

  函数里面有且仅有一个return语句的时候， 省略掉return和花括号

  var sqaure = a => a * a   // a进去，a的平方出来，映射的形式


  所以上面三个高阶函数语句可以写成如下形式

  ancestry.filter( person => person.born > 1900 )
           .map( person => person.name )

  ancestry.map( person => person.died - person.born )
  
  ancestry.sort((a,b) => a.born - b.born).map( person => person.died - person.born )
  

2022/01/10





  function string(value) {
    if (typeof value == 'number' || typeof value == 'boolean') {
      return value + ''
    }
    if (Array.isArray(value)) {
      var str = '['
      value.forEach(it => {
        if (typeof it == 'number' || typeof it == 'string' || typeof it == 'boolean' || it == null) {
            str += it
        } else {
          str += stringify(it)
        }
        str += ','
      })
      str += ']'
      return str
      //  "[1,2,3,4]"
    } else if (value && typeof value == 'object') { // `{"key1":"value1", "key2":"value2", ...}`
      var str = '{'
      for (var key in value) {
        var it = value[key]
        if (typeof it == 'number' || typeof it == 'string' || typeof it == 'boolean' || it == null) {
          str += "" + key + '":' + it
        } else {
          str += "" + key + '":' + stringify(it)
        }
      }
    }
    
  }



  // 面试题
  // reduce 高阶函数 ,用于单一的数组或者对象
  // 用到了递归

  高阶函数：map

  // 求和
  var ary = [1,2,3,4,5,6,7]
  var sum = 0
  for (var i = 0; i < ary.length; i++) {
    sum = sum + ary[i]
  }
  console.log(sum)

  // 求乘积
  var ary = [1,2,3,4,5,6,7]
  var sum = 1
  for (var i = 0; i < ary.length; i++) {
    sum = sum * ary[i]
  }
  console.log(sum)

  // 求最大值
  var ary = [1,2,3,4,5,6,7]
  var max = - Infinity
  for (var i = 0; i < ary.length; i++) {
    max = Math.max(ary[i], max)
    // max = ary[i] > max ? ary[i] : max
    // if (ary[i] > max) { max = ary[i] }
  }
  console.log(max)

  初始变量乘以一个值，

  function reduce(ary, reducer, initial) {
    for (var i = 0; i < ary.length; i++) {
      initial = reducer(initial, ary[i])
    }
    return initial
  }

  reduce([1,2,3,4,5,6,7], (sum, current) => (sum += current) , 0)

  reduce([1,2,3,4,5,6,7], (product, current) => (roduct += current) , 0)

  reduce([1,2,3,4,5,6,7], (max, current) => max > current ? max : current , - Infinity)

  // 如果没有传入初始值，？不太懂
  function reduce(ary, reducer, initial) {
    var start = 0
    if (arguments.length == 2) {   // 当函数参数只有两个，没有初始值
      initial = ary[0]             // 就把数组第一项做为初始值
      start = 1
    }
    for (var i = start; i < ary.length; i++) {
      initial = reducer(initial, ary[i])
    }
    return initial
  }



  youtube 写法

  const numbers = [1, -1, 2, 3];
  const sum = numbers.reduce(
      (accumulator, currentValue) => {return accumulator + currentValue;}, 0);

  console.log(sum)

  或者initial不用从0开始，直接从numbers的第一项1开始
  const numbers = [1, -1, 2, 3];
  const sum = numbers.reduce(
      (accumulator, currentValue) => accumulator + currentValue);

  console.log(sum)




  Lodash


NaN === NaN false


家谱是数组形式的
ancestry = [{name: 'Kobe Bryant', sex: 'f', born: 1978, died: 2020, father: 'Joe Bryant'}
             , {name: 'Gianna Bryant', sex: 'm', born: 2006, died: 2020, father: 'Kobe Bryant'}]


创建一个对象，将家谱以名字为key重新排版，这样直接用名字就能调用每个人的所有信息。

  var obj = {}

  ancestry.forEach(person => {
      obj[person.name] = person   // person的name就是obj的key
  })


  function keyBy (array, propName) {
    var obj = {}
    for (var i = 0; i < array.length; i++) {
      obj[  array[i][propName]  ] =   array[i]
  //  obj = (obj[array[i][proName]] = array[i]， obj)  逗号表达式， 逗号加obj，表示返回obj，再把返回值赋给obj
  // reduce逻辑
    }
    return obj
  }

  reduce版本写法

  function keyBy(array, proName) {
    return array.reduce( (obj,item) =>  {
      obj[ item[proName] ] = item
      return obj
      //  return ( obj[ item[proName] ] = item, obj )
    }, {})
  }





// 在数组的元素对象中插入新的key和值
// 阿里外包面试题

  ancestry.forEach(person => {
    var fatherName = person.fatherName
    var motherName = person.motherName

    person.fatherObject = obj[fatherName]
    person.motherObject = obj[motherName]
  })





   var byName = keyBy(ancestry, 'name')

// 计算某个人有多少基因来自于Puwals van Heverbeck
// 先得到其父母分别有多少基因来自PvH, 然后求和除以2
// 如果这个人就是Pvh本人，则直接返回1
// 如果这个人在数据集不存在，则返回0

  function gene(name) {
    if (name === 'Pauwel van Haverbeke') {
        return 1
    }
    var person = byName[name]  // 通过一个人的名字找到对应的对象
    if (!person) {
      return 0
    } 
    var fromFather = gene(person.father)      // 递归是怎么实现的？不懂
    var fromMother = gene(person.mather)
    return (fromFather + fromMother) / 2
  }
  

  // 计算某人与Puwals van Havabeke间隔的代数
  function gen(name) {
    if (name == 'Pauwels van Havabeke') {
      return 0
    }
    var person = byName[name]
    return gen(person.father) + 1
  }

  function reduceAncerstor(name, f, defaultValue) {
    function valueFor(name) { // 计算某人某维度的值
      if (name === 'Pauwel van Haverbeke') {
        return 1
      }
      var person = byName[name]
      if (!person) {    // 如果找不到这个人，就返回默认值
        return defaultValue
      }
      var fromFather = valueFor(person.father)  // 计算父母在这个维度上的值
      var fromMother = valueFor(person.mather)  // 计算父母在这个维度上的值
      
      // 但这个维度的值也并不一定是对等从父母那里继承来的
      // 如果继承由一个函数确定，即f函数
      
      return f(person, fromFather, fromMother)
    }

    return valueFor(name)
  }



//  函数绑定   偏函数 /部分调用/partail apply/bind

  function f(a,b,c) {
    return a * b +c
  }

  f1 = f.bind(null,3) 

  f1 = function f(b,c) {
    var a = 3
    return a * b + c
  }

举个例子/栗子/🌰

  ["Carel Haverbeke","Maria van Brussel", "Donald Duck"].map (  name => byName[name]  )
  // .map(name => byName[name]) 人名进去，人名能查到的对象出来

  var set = ["Carel Haverbeke","Maria van Brussel", "Donald Duck"]

  function isInSet(set, person) {
    return set.includes(person.name)
  }

  ancestry.filter(person => {
    return isInset(set, person)  // isInset(set, ) 这一部分总是不变的，所以可以绑定出isInset2
  })


  isInSet2 = isInSet.bind(null, set)
  // 这个绑定set等同于下面在函数里写入一个set集合

  isInset2 = function isInSet(person) {
      var set = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"]
      return set.includes(person.name)
  }

  ancestry.filter(person => isInSet2(person))
  // 上面等同于下面
  ancestry.filter(isInSet2)  // person可以省略，直接传入isInset2就行了

  ancestry.filter(   isInSet.bind(null, set)   )



  // 写一个bind函数
  // 把函数的前若干个参数固定为fixedArgs
  // bind接收一个函数，并且返回一个函数
  //又他妈是曾经的必考题，没听懂

  function bind(f, ...fixedArgs) {       // fixedArgs是之前固定的参数，这里没有考虑this，不传入null
    return function(...args) {        // 返回一个函数，接收后续的参数, args是后续添加的参数
      return f(...fixedArgs, ...args)  // 上面返回的函数会把fixedArgs和args都传给f，并返回原函数的结果
    }
  } 



  // 不用...展开的写法
  function bind(f){
    var fixedArgs = Array.from(arguments).slice(1)    // 第0位参数是f函数
    return function() {
      var args = fixedArgs.concat(Array.from(arguments))  // 这里的arguments是function里的，不是f的
      return f.apply(null, args)   // Array.from 将类数组形式的值转化成数组形式
    }
  }

  

//  把一个数组展平, flatten, flattenDeep, flattenDepth
  function flatten(ary) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      var item = ary[i]
      if (Array.isArray(item)) {   // 如果某一项是数组，则将其展开后push到result中
          for (var j = 0; j < item.length; j++) {
            result.push(item[j])
          }
      } else {
        result.push(item)
      }
    }
    return result
  }

  function flatten(ary) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      var item = ary[i]
      if (Array.isArray(item)) {   // 如果某一项是数组，则将其展开后push到result中
          result.push(...item)
      } else {
        result.push(item)
      }
    }
    return result
  }

  写成ruduce形式,12分版本

  function flatten(ary) {
    return ary.reduce((result,item) => {
      if (Array.isArray(item)) {   // 如果某一项是数组，则将其展开后push到result中
        result.push(...item)
      } else {
        result.push(item)
      }
    return result
    }, [])
  }
 
  用concat写

  function flatten(ary) {
    return ary.reduce((result, item) => {
      return result.concat(item)       // concat把数组展开拼接，也可以单独拼接一个单独的元素，最后返回一个新的数组
    }, [])
  }

  //完全改成箭头函数的形式
  // 函数内只有一个return语句，则可以去掉return和花括号。
  var flatten = (ary) => ary.reduce((result, item) => result.concat(item) , [])
  
  15分版本
  function flatten(ary) {
    return [].concat(...ary)
  }
  
  用apply也可以
  function flatten(ary) {
    return [].concat.apply([],ary)
  }



// 嵌套的，不确定的，就用递归
  function flattenDeep(ary) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      var item = ary[i]
      if (Array.isArray(item)) {   
        item = flattenDeep(item)  // 如果item还嵌套很多层，用递归继续展开。
        for (var j = 0; j < item.length; j++) {
            result.push(item[j])
          }
      } else {
        result.push(item)
      }
    }
    return result
  }

  function flattenDeep(ary) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      var item = ary[i]
      if (Array.isArray(item)) {   
        item = flattenDeep(item)  // 如果item还嵌套很多层，用递归继续展开。
        result.push(...item)
      } else {
        result.push(item)
      }
    }
    return result
  }

  function flattenDeep(ary) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      var item = ary[i]
      if (Array.isArray(item)) {   
        result.push( ...flattenDeep(item) )
      } else {
        result.push(item)
      }
    }
    return result
  }

  function flattenDeep(ary) {
    return ary.reduce((result, item) => {
      if ( Array.isArray(item) ) {
        return result.concat( flattenDeep(item) )
      }
      return result.concat(item) 
    }, [])
  }
  // 不能直接用concat写了，需要判断一下是不是数组，确定是否用递归。

  
  // 把数组展开n次
  function flattenDepth(ary, n = 1) {  // n = 1, 默认展开一层
    for (var i = 0; i < n; i++) {
      ary = flatten(ary)
    }
    return ary
  }


  function flattenDepth(ary, n = 1) {
    if (n == 0) {         // 如果n = 0, 则返回原数组。
      return ary.slice()  // 这里需要返回一个新数组，Array.from(ary) 或者[...ary]都行
    }                     // 因为下面的concat就是返回一个新数组，原数组保留不动。
    return ary.reduce((result, item) => {
      if ( Array.isArray(item) ) {
        return result.concat( flattenDepth(item, n - 1) ) // reduce展开一层了，所以这里只需要展开n-1层
      }
      return result.concat(item) 
    }, [])
  }

  function flattenDepth(ary, n = 1) {
    if (n == 0) {
      return [...ary]
    }
    var result = []
    for (var i = 0; i < ary.length; i++) {
      var item = ary[i]
      if (Array.isArray(item)) {   
        result.push( ...flattenDepth(item, n - 1) )
      } else {
        result.push(item)
      }
    }
    return result
  }

  // 其实可以最先实现flattenDepth

  function flatten(ary) {
    return flattenDepth(ary)
  }

  function flattenDeep(ary) {
    return flattenDepth(ary, Infinity)
  }





  ancestry.filter(person => {
    return byName[person.mother]
  }).map(person => {
    var mother = byName[person.mother]
    return person.born - mother.born
  })






var century = {}

ancestry.forEach(person => {
  var c = Math.ceil(person.died / 100)
  if (century[c]) {
      century[c].push(person)
  } else {
      century[c] = [person]
  }
})

// 常见面试题
  function groupBy(array, predicate) {
    var grouped = {}
    array.forEach(it => {
      var groupName = predicate(it)
      if (grouped[groupName]) {
          grouped[groupName].push(it)
      } else {
        grouped[groupName] = [it]
      }
    })
    return grouped
  }


groupBy(ancestry, it => it.name.split('').at(-1))



_.mapValues(grouped, (peoples) => val * 2)

function mapValues(obj, mapper) {
  var result = {}
  for (var key in obj) {
    result[key] = mapper(obj[key], key)
  }
  return result
}


function average(ary) {
  return ary.reduce((a,b) => a + b) / ary.length
}

mapValues(grouped, peoples => {

  return average(peoples.map(it => it.died - it.born))

})


mapValues(groupBy(ancestry, it => Math.ceil(it.died / 100)), peoples => {
  return average(peoples.map(it => it.died - it.born))
})








function every(ary, predicate) {
  for (var i = 0; i < ary.length; i++) {
    if (!predicate(ary[i])) {
      return false
    }
  }
  return true
}

function some(ary, predicate) {
  for (var i = 0; i < ary.length; i++) {
    if (predicate(ary[i])) {
      return true
    }
  }
  return false
}


f(a) && f(b) && f(c) && f(d)

f(a) || f(b) || f(c) // 等价于
!(!f(a) && !f(b) && !f(c))

function some(ary, predicar) {  // isPrime
  
}

function isPrime(n) {}

function invert(f) {  // 求一个函数的反函数，即原函数返回真时，创建出的函数返回假
    return function(...args) {
        return !f(...args)
    }
    return !ary.some(fp)
} // 摩根定律
// negate the result the function return

function isMale() {}
var isNotPrime = invert(isPrime)
var isFemale = invert(isMale)




2022/01/13

二叉树

二叉树定义：
  空
  一个根结点，其左子树为一个二叉树，右子树为一个二叉树

  其中最顶部的结点为根结点（root node）
  两颗子树都为空的结点称为叶子结点（leaf node）

  任意一颗二叉树中，空结点的数量比非空结点的数量正好多1
    当有n个结点时，每个结点有两个子结点，所以子结点的数量一定是2n个
    这n个结点除了根结点以外，都有其它的结点指向，所以有n-个结点被指针指向，所以有2n - (n - 1)个指针式空闲的，即

  完全二叉树：
    从上到下从左到右的结点，某个结点如果有子结点，则其前面的结点也必然有子结点，这样的二叉树称为完全二叉树
  满二叉树：
    除最后一层结点外，其他层的结点都有两个子结点
  满二叉树是完全二叉树，但完全二叉树不是满二叉树

  二叉树的表示：
    
    二叉链表：即每个结点使用一个对象表示，该对象的left属性指向其左子树，right属性指向其右指树

    顺序数组：
      将二叉树补全成完全二叉树，并从上到下从左往右依次将次结点的值放进数组
      优点：二叉树中特定位置的结点在数组中的下边是确定的，并且父子结点的下标有简单的数学关系：
          父结点的

      缺点：会有一定的空间浪费



    稠密数组表示：
      将二叉树中的所有结点补全，但不补全结点的子树，然后从上到下从左往右将结点的值存入数组。
        优点：节省空间
        缺点：不好转换




  // 创建根结点，这时它下面还没有挂什么子结点，所以left和right都是null
  function createTreeNode(val) {
    return {
      val: val,
      left: null,
      right: null,
    }
  }

  // 将使用顺序数组存放的根结点在rootPos位置的二叉树。转换为二叉链表
  function aryToTree(ary, rootPos = 0) {
    if (ary[rootPos] == null) {
      return null
    }
    
    var rootNode = createTreeNode(ary[rootPos])  // 利用上面的函数创造根结点
    var leftPos = rootPos * 2 + 1
    var rightPos = rootPos * 2 + 2
    var leftTree = aryToTree(ary, leftPos)    // 使用递归把左边二叉树补全
    var rightTree = aryToTree(ary, rightPos)  // 再补全右边

    rootNode.left = leftTree
    rootNode.right = rightTree

    return rootNode

  }

  function treeToAry(tree, idx = 0, ary = []) {
    if (tree) {            // 递归的结束条件，如果树存在就执行递归
      ary[idx] = tree.val  // 将根结点放进该放的位置
      treeToAry(tree.left, idx * 2 + 1, ary)  // 递归将左子树放入
      treeToAry(tree.right, idx * 2 + 2, ary)  // 再将右子树放入
    }
    return ary
  }


  // 稠密型二叉树

  function condenseAryToTree(ary) {
    var nodes = []
    if (ary.length == 0) {
      return null
    }

    var root = createTreeNode(ary[0])  // 用数组的第一个元素创建根结点并存入结点数组
    nodes.push(root)

    for (var i = 0; i < ary.length; i++) {
      var current = nodes.shift()  // 改成node[j++]更好点，不过个人觉得shift更好理解一点
      var node 

      if (ary[i] == null) {
        node = null
      } else {
      var node = createTreeNode(ary[i])
      nodes.push(node)
      }
      current.left = node

      i++

      if (ary[i] == null) {
        node = null
      } else {
      var node = createTreeNode(ary[i])
      nodes.push(node)
      }
      current.right = node
    }
    return root

  }



  function treeToCondensedAry(root) {
    if (root == null) {
      return []
    }

    var nodes = [root]  
    var result = []

    while (nodes.length) {
      var current = nodes.shift()
      if (current) {
        result.push(current.val)
        nodes.push(current.left, current.right)
      } else {
        result.push(null)
      }
    }
    return result
  }

a = new treeNode
a = creatTreeNode



root = aryToTree([1,,3,,,4,5])    //数组的稀疏位置相当于就是null


二叉树的遍历：
如果把二叉树想成一本书，把其中的结点想成书中的每个部分（章，小节等）

则先序遍历即为对每个部分按”是否读过“排序
则中序遍历即为对每个部分按”是否读了一半“排序
则后序遍历即为对每个部分按”是否读完“排序

1.遍历根结点
2.遍历左子树
3.遍历右子树

前序遍历：先中结点后左结点再右结点
中序遍历：先左再中后右
后序遍历： 先左再右后中

前序遍历：根结点 ---> 左子树 ---> 右子树

中序遍历：左子树---> 根结点 ---> 右子树

后序遍历：左子树 ---> 右子树 ---> 根结点

层次遍历：仅仅需按层次遍历就可



function preOrderTraverse(root, action) {
  if (root) {
    action(root.val)
    preOrderTraverse(root.left, action)
    preOrderTraverse(root.right, action)
  }
}

function inOrderTraverse(root) {
  if (root) {
    inOrderTraverse(root.left)
    console.log(root.val)
    inOrderTraverse(root.right)
  }
}

function postOrderTraverse(root) {
  if (root) {
    postOrderTraverse(root.left)
    postOrderTraverse(root.right)
    console.log(root.val)
  }
}



BSt: Binary Search tree
二叉树
排序二叉树

  // 通过val构建一个结点，并将其插入到根结点为root的BST中
  // 并返回这颗BST
  function insertIntoBST(root, val) {
    var node = creatTreeNode(val)
    if(!root) {
      return node
    } else {
      if (val < root.val) {
        root.left = insertIntoBST(root.left, val)   // 当根结点为null的时候，生成新结点可能导致新结点变成根结点，所以需要把新结点再挂回去根结点下面
      } else {
        root.right = insertIntoBST(root.right, val)
      }
      return root
    }

  }


  // 空间复杂度: n
  // 时间复杂度: n * logn
  // 最坏的情况是


  function bstSort(ary) {
    var bst = null // 创建出一颗空的排序二叉树
    将数组中的每个元素放进排序二叉树中
    for (var i = 0; i < ary.length; i++) {
      bst = insertIntoBST(bst, ary[i])
    }

    // 中序遍历排序二叉树并将结果放回数组
    i= 0
    inOrderTraverse()
  }




2022/01/17
  Lodash

  如何调用递归
  var a = curryth.chunk()
  或者 var a = this.chunk()
  或者 chunk : function chunk () {}


  IIME: immediately 
function foo() {

} // 函数声明的名字相当于声明在函数外一层作用域

var f = function bar() {
  bar()
} // 函数表达式的名字【可选】相当于声明在函数内部，是内部一个局部变量，所以只能在函数内部使用


箭头函数没有名字，没有声明，只有表达式。
不能紧跟括号调用它
var a = ((x,y) => x + y)(2,5)


// 用pop,push单边进单边出的情况，可以用栈
//可以解决嵌套的问题
stack = [1 (2 ( 4   ))] 








2022/01/18
The Secret Life of Objects

Js中，万物皆对象，除了（null和undefined）。

在很多语言里，“对象”是固定的属性（名/值对）集合，不能增减属性。
而子js里，“对象”则可以是固定的属性集合，也可以是不固定的属性集合
在其它语言里，不定的名/值对一般叫哈希表，映射表，字典
  在c/c++/java里，对象是不能作为动态名/值使用
在其它语言里的“对象”更多是“面对对象”一词中的对象，即用一个值表示复杂的事物。


可以把this想象成函数的一隐藏参数，但其值不是通过传入的，而是通过调用方式确定的，
形参通过传入确定，内部声明的变量直接确定，其它变量由词法作用域确实，取决于函数的定义位置。

this： 不通过声明位置，不通过调用位置，通过调用方式。
参数： 通过调用时传入
不定参数也为未声明在内的变量：词法作用域，取决于函数的声明位置，而不是调用位置，更不是调用方式。
通过词法作用域，访问外层闭包里的变量。

obj = {
   x: 1,
   y: 2,
   foo: function() {return 8},
}

obj.foo()  => 8
JS中，函数也能作为对象中的一个属性,当作方法被调用。

obj = {
   x: 1,
   y: 2,
   foo: function() {
        return this.x * this.y     // this表示obj本身，最后obj.foo（）为2
   },
}
obj.foo()





call() 和 apply() 之间的区别
不同之处是：

call() 方法分别接受参数。

apply() 方法接受数组形式的参数。

如果要使用数组而不是参数列表，则 apply() 方法非常方便

f() this是window，全局作用对象
obj.f() this是obj
obj.f.call() /   f.call()   this为设定在括号中的值
new f() 



所有对象的原型是prototype ，属性的后备源。

作为所有对象最终原型的对象，都被挂在了Object.prototype上。

Object.getPrototypeOf(obj) 获取obj对象的原型对象。 
等价于obj.__proto__ 双下划线
Object.setPrototypeOf(obj, target) 设置obj对象的原型为target对象。 
等价于obj.__proto__ == target

所有的数值以数值类型的构造函数(Number)的原型属性(Number.prototype)为原型
所有的字符串以字符串类型的构造函数(String)的原型属性(String.prototype)为原型
所有的布尔以布尔类型的构造函数(Boolean)的原型属性(Boolean.prototype)为原型
所有的数组以数组类型的构造函数(Array)的原型属性(Array.prototype)为原型
所有的函数以函数类型的构造函数(Function)的原型属性(Function.prototype)为原型

构造函数的prototype属性是做为其构造出来的实例对象的原型，而不是它自己的原型







var protoRabbit = {
  speak: function(line) {
    console.log(" The " + this.type + " rabbit says '" + line + "'")
  }
}
var killerRabbit = Object.create(protoRabbit);  // 将killerRabbit的原型创建为protoRabbit
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");// 因为其原型有speak属性，所以虽然它自己没有，但是它可以从其原型中访问到

// =>  The killer rabbit says 'SKREEEE!'

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// => small


function Rabbit(type) {
  this.type = type
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");
console.log(blackRabbit.type)
// => black

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// => small

killerRabbit.teeth = "long, sharp, and bloody"; // 可以修改其teeth属性，但是这个修改不会改变其原型中的teeth属性
console.log(killerRabbit.teeth);
// => long, sharp, and bloody
console.log(blackRabbit.teeth);
// => small
console.log(Rabbit.prototype.teeth);
// => small











a = []
a.push(5)
Array.prototype.push2 = function(val {   // 往数组饿原型中加入一个为push2函数的属性
    this[this.length] = val       // 这个属性的作用是在数组最后位置添加一个val进去，并返回。
    return this          // this[this.length] 即数组最后新添加的数应该在的位置
})

a.push2(5) => [5,5]

Array.prototype.slice2 = function(start, end) {     // 把slice2这个函数作为一个属性放入到数组始祖的原型中
  var result = []
  for (var i = start; i < end && i < this.length; i++) {
    result.push(this[i])
  }
  return result
}


构造函数的prototype

Object.defineProperty(obj, 'foo' , {
    enumerable: false,  // 设置属性是否可枚举
    writable: true,       // 设置属性是否可写
    configurable: true, // 能否修改这个属性的枚举性和可写性
    value: 9527,
})




2022/01/19

对象的含义：
  JS语言：所有能读出属性的东西都可以称为对象，
         同时JS语言里的对象也可以用来表示映射信息
  其它语言（c/c++/java）：对象一般指将表达一个复杂事物的所有信息表示在一起，把用来表示这个整体的值就称为对象
       在这些语言里，对象是不能像JS中一样随意随时增减属性的，所以也就当然不能做为动态映射。
         对象的属性集合是固定的
        要实现动态映射，则需要自行失效相关的数据结构，这些数据结构一般是哈希表，映射表，字典，关联数组。
      为什么这些语言里，“对象”不能增减属性？
        这里说的增减是指运行过程中动态增减。
        因为在这些语言中，“对象”也是使用固定的内存空间存储的。
        {name: 'zhangshan', age:18， height： 175.8}



  函数的this：
    函数的this可以理解为函数的一个隐藏参数
    它的值取决于函数的【调用方式】，不取决于函数的定义位置和调用位置。
      主要分为四种：
        obj.foo()  当方法调用   this是当次被调用的对象
        foo()      当函数调用   this是全局作用域对象
        obj.bar.baz.foo.call/apply()        this是call或apply设定的值
        new foo 当构造函数调用     this是一个新的空对象，且以foo.prototype为原型
      js中不存在函数属于某个对象，因为一个函数可以同时被两个对象的属性指向
        此时函数与这两个对象间的关系是对等的
        通过哪个对象调用这个函数，这个函数里的this就是谁。


// 自带的map函数就是这样写的
// 高阶函数map（）： 传入一个函数，把数组的每一项做为函数的参数被调用，
// 然后用函数每次的返回值组成新的数组并返回，不改变原数组

Array.prototype.map = function(f) {
  var res = []
  for (var i = 0; i < this.length; i++) {
    res.push(  f(this[i])  )     // 把数组的每一项做为函数的参数被调用
  }
  return res           // 用函数每次的返回值组成新的数组并返回
}


// bind（）括号中的第一个参数作为this，后面的第二三四个参数分别带入原函数，并返回这个新函数。
Function.prototype.mybind = function mybind(thisArg, ...args) {
    var func = this      // 把this用一个变量保存起来，这样使用的时候就不会丢失了。
    return function(...args2) {
      return func.call(thisArg, ...args, ...args2)   // 此处调用call函数
    }
}

f.mybind(1,2,3)

  function foo() {
    this
    bar(this)
  }
小括号不产生作用域，带花括号语句块才有作用域（对象的花括号不产生），所以this是foo的,而不是bar的。







原型：
  任何对象（除了null和undefined）都有原型
   可以通过Object.getPrototypeOf(obj)来获取obj对象的原型
   原型也是个对象，继而也有原型
  当在某个对象上查找属性是，如果对象自身没有这个属性，则会到其原型上查找，以此类推
  Object.setPrototypeOf(obj,someObj)可设置obj的原型为someObj
  Object.create(foo)创建以foo为原型的空对象
  所有的函数都有一个prototype属性，当它做为构造函数使用时，创建的对象以该属性为原型
      var a = new A()
      a.__proto__ === A.prototype
    
for in 循环会历遍所有可枚举属性，包括原型链上的
in运算符对于原型上的属性也会返回真
用普通方式创建或增加的属性都是可枚举的
也可以把对象的属性设置为不可枚举，通过Object.defineProperty(obj, propname, 描述符)
Object.defineProperty(obj, 'foo' , {
    enumerable: false,  // 设置属性是否可枚举
    writable: true,       // 设置属性是否可写
    configurable: true, // 能否修改这个属性的枚举性和可写性
    value: 9527,
})

所有对象都从Object.prototype继承一个方法叫hasOwnProperty
可以用来判断一个属性是否是一个对象的自有属性

var hasOwn = Object.prototype.hasOwnProperty
function forOwn(obj, iteratee) {
  for (var key in obj) {
    if (hasOwen.call(obj, val)) {
      if ( iteratee(obj[key], key) === false) {
        break
      }
    }
  }
}


面对对象的三大特性：封装，继承，多态(polymorphism)。
// Polymorphic code can work with values of different shapes as long as they support the interface it expects.



  function String(val) {
    return val.toString()
  }
不管val是什么类型的值，只要它具有toString这个属性，这个String函数就能正确执行，这就是多态。
只要val有相关接口，就可以直接调用接口使用，而不用去管它是个什么类型的值。

ary.concat/ slice/indexOf/lastIndexOf/at/includes
str.concat/ slice/indexOf/lastIndexOf/at/includes
ary[i] str[i]
数组和字符串上面挂了很多相似的接口，就是为了在很多情况下能互通处理。

// 删除数组和字符串的第i项
function remove(seq, i) {
  return seq.slice(0,i).concat(seq.slice(i + 1))
}


Laying out a table

  function TextCell(text) {
    this.lines = text.split('\n')
  }

  TextCell.prototype.minWidth = function() {
    return Math.max(...this.lines.map(it => it.length))
  }

  TextCell.prototype.minHeight = function() {
    return this.lines.length          // lines的总数
  }

  TextCell.prototype.draw = function(width, height) {
    var result = []
    for (var i = 0; i < height; i++) {
      var line = this.lines[i] || ''    // 左边为假，走右边
      while (line.length < width) {
        line += ' '
      }
      result.push(line)
    }
    return result
  }
也可以用.padEnd简化写成这样。
  TextCell.prototype.draw = function(width, height) {
    var result = []
    for (var i = 0; i < height; i++) {
      var line = this.lines[i] || ''    // 左边为假，走右边
      result.push(line.padEnd(width, ' '))  // 把line这一行用空格补全到长度为width
    }
    return result
  }
// 先不手打一遍，抄一遍了，太费时间了，赶紧赶进度啊冲冲冲！！！






// 连用两个map，晕了。意思就是返回每个单元格最低高度中的最大值，以此作为每一行的最低高度。
  function rowHeights(rows) {
    return rows.map(row => {
      return Math.max(...row.map(cell => cell.minHeight()))
    })
  }
  function colWidths(rows) {
    return rows[0].map((_, i) => {
      // i为列标
      // 拿到第i列第单元格们
      // 取出其宽度，返回最大值
      var col = row.map(row => {
        return row[i]
      })
      return Math.max(...col.map(it => it.minWidth))
    })
  }


  function drawTable(rows) {
    var heights = rowHeights(rows)
    var widths = colWidths(rows)

    function drawRow(row, 行标) {
      // blocks是每个单元格的draw返回的字符串数组
      var blocks = row.map((cell, 列标) => {
        return cell.draw(width[列标], heights[行标])
      })
      return blocks[0].map((line, idx)) => {
        return 
      }
    }
  }
  function Creature(canMove, shu, ke, zhong) {
    this.canMove =canMove
    this.shu = shu
    this.ke = ke
    this.zhong = zhong
  }

  function People(gender, name) {
    this.canMove = true
    this.shu = '人'
    this.ke = '人'
    this.zhong = '人'
    this.gender = gender
    this.name = name
  }

  function People(gender, name) {
    Creature.call(this, true, '人', '人', '人')
    this.gender = gender
    this.name = name
  }


 2022/01/20

 向量

  function Vector(x, y) {
    this.x = x
    this.y = y

  }

  Vector.prototype.plus = function(v) {
    var x = this.x + v.x
    var y = this.y + v.y
    return new Vector(x, y)
  }


  Vector.prototype.minus = function(v) {
      var x = this.x - v.x
      var y = this.y - v.y
      return new Vector(x, y)
  }

  Vector.prototype.getLength = function(v) {
      return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  // 通过prototype来增加一个属性返回函数的方法调用。
  Object.defineProperty(Vector.prototype, 'length',{
    get: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y)
    }
  })      

  

  function Complex(real, imag) {
  //  if（!(this instanceof Complex) ) {
  //  }
    if (this == window) { // 如果this是window说明没加new
      return new Complex(real, imag) 
    }
    if (arguments == 1)
    this.real = real
    this.imag = imag
  }
  // 静态方法：直接挂在构造函数上，通过 构造函数.xx 的形式访问
  // 静态方法正常使用（Complex.fromString('5+3i') ) 里面的this是构造函数本身
  function constructComplexFromString(str) {

  }
  // 实例方法： 通过  实例.xx  访问到
  Complex.prototype.plus = function(c) {
    var real = this.real + c.real
    var imag = this.imag + c.imag
    return new Complex()
  }
  Complex.prototype.minus = function(c) {
    var real = this.real - c.real
    var imag = this.imag - c.imag
    return new Complex()
  }
  Complex.prototype.mul = function(c) {
    var real = this.real * c.real - this.imag * c.imag
    var imag = this.real * c.imag - this.imag * c.real
    return new Complex(real, imag)
  }
  Complex.prototype.div = function(c) {
    var helper = new Complex(c.real, - c.imag)
    var fenzi = this.mul(helper)
    var fenmnu = c.mul(helper)

    return new Complex(fenzhi.real / fenmu.real, fenzi.imag / fenmu.real)
  }
  

  function TextCell(text) {
    this.lines = text.split('\n')
    this.minHeight = this.lines.length
    this.minWidth = Math.max(...this.lines.map(it => it.length))
  }


  属性和方法，谁更好，不改动的话，用属性就可以，后续需要改动的话，还是在对象里构造函数，当方法使用方便。
  很多语言里有不可更改的私有属性，JS中现在也有了。
  属性的读取是调用函数，属性的应用也是调用函数


 JS的类型判断：
  typeof 用来判断原型类型，除null以外，它针对原始类型都能返回类型名称的小写单词
  instanceof  用来判断对象是否是某个的实例或其子类的实例，不能判断原型类型，也不能判断null
  Object.prototype.toString 
    可以直接得到一个实例构造函数的名字，只是要环境自带的


  function Instanceof(val, Constructor) {
      if (val == undefined) {
        return false
      }
      if (typeof val !== 'function') {
        if (typeof val !== 'object') {
          return false
        }
      }

      if (Object.getPrototypeOf(val) === Constructor.prototype) {
        return true
      } else {
          return Instanceof(val.__proto__, Constructor)
      }
  }

 // Set 集合

  function MySet(initial = []) {
    this._elements = [];      //._加下划线变成私有属性，让别人无法修改。

    initial.forEach(it => {
      this.add(it)
    })
  }
     
    MySet.prototype.add = function(val) {
      if (!this.has(val)) {
        this._elements.push(val)
      }
      return this
    }

    MySet.prototype.delete = function() {
      var idx = this._elements.indexOf(val)
      if (idx >= 0) {
        this._elements.splice(idx, 1)
      }
    }

    MySet.prototype.has = function(val) {
      return this._elements.includes(val)
    }

    MySet.prototype.clear = function() {
      this._elements = []
    }
    Object.defineProperty(MySet.prototype, 'size', {
        get: function() {
          return this._elements.length
        }
    })
  

 // stack 栈

  function Stack(initials = []) {
    this._head = null
    this._size = 0
    initials.forEach(it =>{
      this.push(it)
    })
  }
    Stack.prototype.push = function(val) {
      var node = {
        val: val,
        next: this._head
      }
      this._head = node
      this._size++
      return this
    };

    Stack.prototype.pop = function() {
      if (this._head) {
        var val = this._head.val
        this._head = this._head.next
        this._size--
        return val
      }
    }
    Stack.prototype.peak = function() {
      if (this._head.val) {
        return this._head.val
      }
    }
    Object.defineProperty(Stack.prototype, 'size', {
      get: function() {
        return this._size
      }
    })


  // 队列 Queue
  // 用链表实现
  // 进队，出队，查看队顶元素

  function Queue() {
    this._head = null
    this._tail = null
    this._size = 0
  }
   // 进队
    Queue.prototype.enqueue = function(val) {
      var node = {
        val,
        next: null,
      }
      if(this._head) {
        this._tail.next = node  // tail指向node
        this._tail = node      // node变成新的tail尾结点
      } else {
        this._head = this._tail = node
      }
      this._size++
      return val
    }

    // 出队
    Queue.prototype.dequeue = function() {
      if (this._head) {
        var val = this._head.val
        this._head = this._head.next

        if (this._head == null) {
          this._tail = null
        }
        this._size--
        return val
      }
    }

    Queue.prototype.peek = function() {
      if (this._head) {
        return this._head.val
      }
    }
    Object.defineProperty(Queue.prototype, 'size', {
      get: function() {
          return this.Queue.length
        }
    }) 

 // 另一种写法：
  function Queue(initials = []) {
    this._head = null
    this._tail = null
    this._size = 0
    initials.forEach(it => {
      this.enqueue(it)     // 将initials中的初始值都放进队列里
    })
  }
   // 进队
    Queue.prototype = {
      constructor: Queue,   // 人为创造构造函数是它本身，但是这个显示为是可修改的

      enqueue: function(val) {
        var node = {
          val,
          next: null,
        }
        if(this._head) {
          this._tail.next = node  // tail指向node
          this._tail = node      // node变成新的tail尾结点
        } else {
          this._head = this._tail = node
        } 
        this._size++
        return val
      },

      dequeue: function() {
        if (this._head) {
          var val = this._head.val
          this._head = this._head.next

          if (this._head == null) {
            this._tail = null
          }
          this._size--
          return val
        }
      },

      peek: function() {
        if (this._head) {
          return this._head.val
        }
      },
      get size() {
          return this._size
      }
   }
 

  // Map 映射，用两个数组分别存放key和val，来实现映射。
  // 初始值示例 initialPairs = [ [2, 8], ['foo', 133], ['baaa', 0], [0, 15] ]
  // 其中一个pair = [2, 8] , key = pair[0] = 2, val = pair[1] =

  function MyMap (initialPairs = []) { //不给个初始值[],forEach会报错，只能遍历数组。
    this._mapKeys = []
    this._mapVals = []
    initialPairs.forEach(pair => {
      var key = pair[0]
      var val = pair[1]
      this.set(key, val)
    })
  }

  MyMap.prototype = {
    set(key, val) {                  // set: function(key, val)省略而来
      var idx = this._keyIdx(key)
      if(idx == -1) {
        this._mapKeys.push(key)
        this._mapVals.push(val)
      } else {
        this._mapVals[idx] = val      // 新的值覆盖旧值
      }
      return this 
    },
    has(key) {
      var idx = this._keyIdx
      if (idx >= 0) {              // 返回-1说明没找到
        return true
      } else {
        return false
      }
    },
    _keyIdx(key) {
      return this._mapKeys.indexOf(key)   // 把寻找key下标单独做成一个属性方便查找调用
    },
    get(key) {
      var idx = this._keyIdx
      if (idx >= 0) {              // 返回-1说明没找到
          return this._mapVals[idx]
      }
    },
    clear() {
      this._mapKeys.length = 0
      this._mapVals.length = 0
      return this
    },
    delete(key) {
      var idx = this._keyIdx(key)
      if (idx >= 0) {
        this._mapKeys.splice(idx, 1)
        this._mapVals.splice(idx, 1)
      }
      return this 
    },
    // 写对象直接项的时候不用写definedProperty
    get size() {
        return this._mapKeys.length
    }
  }

 /**
 * 使用上方的语法实现一个类的时候，会存在一些问题：
 * 代码不是一整块
 * 代码有很多重复的部分
 *     统一重置原型对象
 * 原型上的方法都可以被被枚举出来：
 *     对每个原型上的方法及属性使用defineProperty来定义
 * 实现继承的时候比较麻烦
 *    需要自身重置原型链
 * 复用父类的构造函数时写法比较奇怪
 * 构造函数可以不加new，但是可能造成返回undefined
 * 



 /**
 * 箭头函数与非箭头函数的区别：
 * 
 * 箭头函数里面没有arguments，使用时看其外部环境中的arguments
 * 箭头函数里面没有this,所以一般也不能放在原型上做为实例使用
 *   使用时看其外部环境的this指向谁
 * 箭头函数没有prototype
 * 箭头函数不能new，即不能做为构造函数
 *    在构造函数内添加判断逻辑
 * 静态方法也要一块一块的写
 * 没有私有属性，实现起来很麻烦
 * */

  class BasicMap{}

                // 继承自BasicMap
  class MyMap2  extends BasicMap{
    // 静态方法， 即以MyMap2.isMap(val)的形式调用
    static isMap() {

    }
    static fromPairs() {      // 从一对一对的元素构建而来

    }
    // 构造函数
    #mapKeys = [];       // 加#号表示私有属性
    #mapVals = [];       
    size = 0;
    constructor() {
        super() // 调用父类构造函数，如果没有父类，则不用这句，如果有，则必写。
                     // 如果有父类函数，在没写super之前不能调用this
        var x = new Stack()
        super.has()  // 调用来自父类的方法
        this.has()  // 调用自身的方法
    }
    // 以下为定义在原型上的方法
    get() {

    }
    set() {

    }
    has() {

    }
    delete() {

    }
    clear() {

    }
    // 以下为定义在原型上的getter/ setter/ accesser
    get size() {

    }
    set size(val) {

    }
  }

 // 用class写出的改良版Stack

  class Stack2 {
    #head = null
    #size = 0
    constructor(initial = []) {
      initial.forEach(it => {
        this.push(it)
      })
    }
    push(val) {
      var node = {
        val: val,
        next: this.#head
      }
      this.#head = node
      this.#size++
      return this
    }
    pop() {
      if (this.#head) {
        var val = this.#head.val
        this.#head = this.#head.next
        this.#size--
        return val
      }
    }
    peak() {
      if (this.#head.val) {
        return this.#head.val
      }
    }
    get size() {
      return this.#size
    }
  }

  class Set2 {
    #elements = []     //._加下划线变成私有属性，让别人无法修改。
    constructor(initial = []) {
      initial.forEach(it => {
        this.add(it)
      })
    }
    add(val) {
      if (!this.has(val)) {
        this.#elements.push(val)
      }
      return this
    }
    delete() {
      var idx = this.#elements.indexOf(val)
      if (idx >= 0) {
        this.#elements.splice(idx, 1)
      }
    }
    has(val) {
      return this.#elements.includes(val)
    }
    clear() {
      this.#elements = []
    }
    get size() {
      return this.#elements.length
    }
  }
  
  class Map2 {
    #mapKeys = []
    #mapVals = []
    set(key, val) {                  // set: function(key, val)省略而来
      var idx = this.#keyIdx(key)
      if(idx == -1) {
        this.#mapKeys.push(key)
        this.#mapVals.push(val)
      } else {
        this.#mapVals[idx] = val      // 新的值覆盖旧值
      }
      return this 
    }
    has(key) {
      var idx = this.#keyIdx
      if (idx >= 0) {              // 返回-1说明没找到
        return true
      } else {
        return false
      }
    }
    #keyIdx(key) {
      return this.#mapKeys.indexOf(key)   // 把寻找key下标单独做成一个属性方便查找调用
    }
    get(key) {
      var idx = this.#keyIdx
      if (idx >= 0) {              // 返回-1说明没找到
          return this.#mapVals[idx]
      }
    }
    clear() {
      this.#mapKeys.length = 0
      this.#mapVals.length = 0
      return this
    }
    delete(key) {
      var idx = this.#keyIdx(key)
      if (idx >= 0) {
        this.#mapKeys.splice(idx, 1)
        this.#mapVals.splice(idx, 1)
      }
      return this 
    }
    // 写对象直接项的时候不用写definedProperty
    get size() {
        return this.#mapKeys.length
    }
  }

  class Queue2 {
    #head = null
    #tail = null
    #_size = 0
   // 进队
    enqueue(val) {
      var node = {
        val,
        next: null,
      }
      if(this.#head) {
        this.#tail.next = node  // tail指向node
        this.#tail = node      // node变成新的tail尾结点
      } else {
        this.#head = this.#tail = node
      } 
      this.#_size++
      return val
    }

    dequeue() {
      if (this.#head) {
        var val = this.#head.val
        this.#head = this.#head.next

        if (this.#head == null) {
          this.#tail = null
        }
        this.#_size--
        return val
      }
    }

    peek() {
      if (this.#head) {
        return this.#head.val
      }
    }

    clear() {
      this.#head = null
      this.#tail = null
      this.#_size = null
    }

    get size() {
        return this.#_size
    }
  }


  2022/01/24
  Lodash
  
  sort([1,2,3])
  sortBy([1,2,3], it => it)
  sortBy([{age:1},{age:2},{age:3}], it => age)

  function intersection(ary1, ary2) {
    var res = []
    var set = new Set(ary2)
    for (var i = 0; i < ary1.length; i++) {
      if (set.has(ary1[i])) {
        res.push(ary[i])
      }
    }
    return res
  }

  function intersection(ary1, ary2) {
    return intersectionBy(ary1, ary2, it => it)
  }
  
  // 当硬要填一个参数，返回自身的，可以填这个返回自身的函数, 即上面的it => it
  // 环境自带了identity函数，即返回自身
  function identity(val) {
    return val
  }
                                 // predicate = _.identity 返回自身的值 ,predicate谓词函数
  function intersectionBy(ary1, ary2, predicate = _.identity) {
      var res = []
      for (var i = 0; i < ary1.length; i++) {
        for (var j = 0; j < ary2.length; j++) {
          if (predicate(ary1[i]) === predicate(ary2[j])) {
            res.push(ary1[i])
          }
        }
      }
      return res
  }

  function intersectionBy(ary1, ary2, predicate) {
      var res = []
      var set = new Set(  ary2.map(predicate)  )
      for (var i = 0; i < ary1.length; i++) {
          if ( set.has(predicate(ary1[i])) ) {
            res.push(ary1[i])
          }
        }
      return res
  }

  function intersectionWith(ary1, ary2, comparor) {
    var res = []
      for (var i = 0; i < ary1.length; i++) {
        for (var j = 0; j < ary2.length; j++) {
          if (comparor(ary1[i]) === comparor(ary2[j])) {
            res.push(ary1[i])
          }
        }
      }
      return res
  }



  _.filter(users, 'active'); // 第二个参数为字符串
  _.filter(users,  _.property('active')  );
  _.filter(users, it => it.active);  // 把第二个参数转化成接函数的调用

  _.filter(users, {age: 36, active: true});  // 第二个参数为对象
  _.filter(users,  _.matches(   {age: 36, active: true}   ); // 判断一个对象是否满足匹配这个目标
  _.filter(users, it => it.age == 36 && it.active == true);

  _.filter(users, ['active', true]);   // 第二个参数为数组
  _.filter(users, _.matchesProperty(['active', true]) );
  _.filter(users, it => it.active == true);


  // 02/12探究下，为什么_.property('active')可以返回一个转化字符串的函数
  // _.matchesProperty(['active', true])又为什么可以是转化数组的

  返回给定对象特定路径下的值（浅层次不带点点属性，如father.name）

  // f = property('foo')   就相当于 f = get(_, 'foo') 
  // 即把get第二参数绑定为'foo‘，第一个参数待输入的某个对象

  function property(name) {
      return function(obj) {  // 接收一个name返回一个函数，函数能返回obj.name属性
        return obj[name]
      }
  }

  function property(name) {
    return bind(get, null, _, name)  // get函数绑定成property函数
  }

  obj = {a:{b:{c:3}}}, get(obj, 'a.b.c'),就要用下面的函数来获取路径上的值了

  function get(obj, path) {
      var names = path.split('.') // 将字符串，如a.b.c拆分成['a', 'b', 'c']数组形式
      for (var name of names) { // 遍历数组,这里就是今天问题的关键了，为什么property可以处理字符串
          obj = obj[name]       //因为这里有split可以将字符串直接转换成数组，然后再进行返回一个函数进行对比，
          if (obj == null) { 
            return obj
          }
      }
      return obj
  }

  // 写成reduce形式
  function get(obj,path) {
    var names = toPath(path)  // 用toPath函数将属性路径转化成包含属性路径的数组
    return names.reduce((obj,name) => {
      return obj && obj[name] // 左边为undefined 或者 null时走右边，?怎么感觉有问题，不应该左边非空再走右边吗？
    },obj)                    // 这里应该改为&&且且，不能是？？符号
  }                           // reduce限定条件，obj非空
  

 toPath 转化输入到值为属性路径的数组


  function toPath(path) {
    if (typeof path == 'string') {
    return path.split('[')
      .flatMap(it => it.split(']')) // 先map再flat，即flatMap
      .flatMap(it => it.split('.'))
      .filter(it => it)     // 把隔板间隔出来的空字符串‘ ’，去掉
    }                       // 但是filter it到it为什么就能过滤空字符串呢？
    return path   // 是字符串则要拆，如果传过来的直接就是数组，则无需任何操作直接返回。
  }


  function filter(ary, predicate) {
    predicate = iteratee(predicate)

    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (predicate(ary[i], i)) { // 把数组项和下标传给predicate函数，如果返回真，则把这项push进去
        result.push(ary[i])   
      }
    }
    return result
  }

  // 如果filter函数去掉predicate = iteratee(predicate)这行代码
  // 只接函数做为最后一个参数
  // 那么我可以用下面的transformiteratee在外面改造filter函数
  // 让其最后一个参数可以接string，object，Array

  var filter2 = transformIteratee(filter)

  function transformIteratee(f) {
    return function(...args) {
      var last = args.pop()  // 弹出filter最后一个参数
      var predicate = iteratee(last)  // 像原本转换非函数形式的predicate一样转换
      return f(...args, predicate)  // 重新绑定为新filter

    }
  }

// 必须要把predicate转化成一个函数？
// 和 res = res.valueOf() 类似吗？
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

  function property(path) {   // path是字符串形式的，也可以是数组？
    return function(obj) {
        return get(obj,path)
    }
  }

  function matchesProperty(path, val) {  // 这里的path是数组？
      return function(obj) {
        return isEqual(get(obj, path), val)
      }
  }

  function matches(target) {
    return function(obj) {
      for (var key in target) {
        if (obj[key] !== target[key]) {
          return false
        }
      }
      return true
    }
  }


  
  // 考虑深层次的情况，obj是不是src的子结构
  function isMatch( obj = {a:1,b:2,c: {x:1,y:2}}, src = {b:2,c:{y:2}} ) {
    
    for (var key in src) {
      if (src[key] && typeof src[key] === 'object') { // src[key]存在且为对象时
        if (!isMatch(obj[key], src[key])) {
          return false
        }
      } else {
        if (src[key] !== obj[key]) {
        return false
        }
      }
    }
    return true
  }






  _.bind(f, null, _, 2, 3)  // 绑定f函数， this的位置绑定为空，跳过第一个元素，给第二三个元素赋值
  // 在lodash中，下划线_ 为一个函数，所有的lodash方法都绑定在这个函数的上面。


  // 带占位符的bind的写法，支持跳过一些参数绑定
  // 创建一个调用func的函数，thisArg绑定func函数中的 this

  var _ = {} // 要先申明一个占位符号变量，所以下面读取到下划线占位符的时候才不会报错

  function bind(func, thisArg, ...fixedArgs) {
                              // 1, _ , 3, _ , 5 已填充的参数
    return function(...args) {  // args后续添加的参数 2， 9， 4，6，7
      var bindedArgs = fixedArgs.slice()  // 不要改变在闭包里的fixedArgs，复制出来一份出来修改添加
      var i = 0
      for (var j = 0; j < bindedArgs.length; j++) {
        if (bindedArgs[j] === _) {
          bindedArgs[j] = args[i++]
        }
      }
      bindedArgs.push(...args.slice(i))  // 最后把剩余的参数都push进去
      return func.apply(thisArg, bindedArgs)  // 参数添加好最后应该是1，2，3，9，5，4，6，7
    } // func.call(this.Arg, ...binderArgs)也行
  }


  //创建一个调用func的函数。调用func时最多接受 n个参数，忽略多出的参数。
  function ary (func, n = func.length) {
    return function(...args) {
      return func.call(this, ...args.slice(0, n))
      // 也可以写成func.call(this, ...args.slice(0, n))
    }
  }

  //创建一个调用func的函数。调用func时最多接受 1个参数，忽略多出的参数
  function unary(func) {
    return function(...args) {
      return func(...args.slice(0, 1)) 
    }
  }

  function parseInt(string, radix) {
    
  }

   // 创建一个针对断言函数 func 结果取反的函数。 
  //func 断言函数被调用的时候，this 绑定到创建的函数，并传入对应参数
  function negate(f) {
    return function(...args) {
      return !f(...args)
    }
  }

  function negate(predicate) {
        return function (...args) {
            return !predicate.call(this, ...args)
        }
    }


  function isPrime() {}

  [1,2,3,3,4].filter( negate(isPrime) )

  // 返回一个函数，可以把一个数组展开后再传入函数func
  function spread(func) {
    return function(ary) {
      return func(...ary)  // f.apply(this, ary)也可以
    }
  }

  // 可以抽面试官的写法
  function spread(func) {
   return func.apply.bind(func, null)
  }

  function flip(func) {
    return function(...args) {
      return func(...args.reverse)
    }
  }

  function before(n, func) {
    var c = 0
    var res 
    return function(...args) {
      if (c < n) {
        res = func(...args)
        c++
      }
      return res
    }
  }
  

  // 会缓存结果的函数，如果结果曾经运算过，直接返回结果。

  function memoize(func) {
      var map = new Map()  

      return function(val) {
          if (map.has(val)) {
            return map.get(val)
          }
          var result = func(val)
          map.set(val, result)
          return result
        }
  }

  // 上面的map没法保存， [2,3] -> 7， 只能单个值 -> 单个值
  // 而下面独自构造的Map和Cache接口可以解决这个问题
  

  // 记忆化函数，以后在react和Vue里面都会用到
  function memoize(func, resolver = it => it) {
    var map = new memoize.Cache()

    return function(...args) {
      var key = resolver(...args) // 用返回值 resolver 的返回值作为 key 缓存函数的结果。 
                                 //默认情况下用第一个参数作为缓存的 key
      if (map.has(key)) {   // 如Math.pow(2,5) ,传入两个参数，总不能用数组当作key吧
        return map.get(key)      // 但是只用2当key不会出现第二个参数不同的情况吗？？
      }
      var result = func(...args)
      map.set(key, result)
      return result
    }
    memoize.cache = map   // 把map映射挂回到要返回到实例上

    return memoized     // 最后返回memoized
  }
  memoize.Cache = Map    // Cache是memoize的一个属性，作为一个定制的接口存在，
                         // 这个接口可以接Map





  2022/01/25
  
  bind(f, null, 1, _, 5)    // bind的this是window，bind在这里是做为函数调用
  _.bind(f, null, 1, _, 5)  // lodash的bind的this是_.
  f.bind(null, 1, _, 5)     // 这里的bind的this就是f，bind在这里做为方法被调用（这里使用_,占位符其实是不合法的）
                         // bind把自己的this的this绑定为自己的第一个参数。因为其实这里嵌套有f和bind两个函数。


  function f1(a,b) {
    return g.call({},1,2,3,4,a,b)  // 带不带call都一样。都是f把两个参数传给带一串固定值的g函数并返回
                                  // 这就相当于g函数bind一个null,和那一串固定值。
  }
  // f1等价于f2
  f2 = g.bind({},1,2,3,4)     // ?是写成这样吗 f2(a,b) = g.bind({},1,2,3,a,b)

  // 面试题
  ancestry.filter(it => {
    return isInSet(set, it)  // set为固定值，所以这里只需要传入一个参数it就行
  })
  ancestry.filter(  isInSet.bind(null, set) ) // 把bind的this绑定为null，固定值绑定为第一个参数

  function spread(f) {
    return f.apply.bind(f, null) // bind的this是f,null是确定的参数，ary是不确定的参数
    //上面的等价于下面的
    return function(ary) {
      return f.apply(null, ary)
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
   


  哈希表

  class HashTable {

    constructor() {
      this.mapKeys = Array(32)
      this.mapVals = Array(32)
    }

    // 通过映射的key计算出一个整数
    // 期望的目标是对不同的字符串都计算出不同的值
    hashCode(key) {
      var hash = 131313131
      var seed = 131
      for (var i = 0; i < key.length; i++) {
        hash = (((hash * seed) >>> 0) + key.charCodeAt[i]) >>> 0
      }
      return code % this.mapKeys.length
    }
    set(key,val) {
      var idx = this.hashCode(key)
      this.mapKeys[idx] = key
      this,mapVals[idx] = val
      return this
    }
    get(key) {
      var idx = this.hashCode(key)
      return this.mapVals[idx]
    }
    has(key) {
      var idx = this.hashCode(key)
    }
    delete(key) {

    }
  }
  

  // 这里会出现不同字符串返回相同数字的情况
  #hashCode(key) {
    var code = 23423
    for (var i = 0; i < key.length; i++) {
      code += key.charCodeAt(i) * code
    }
    return code % this.mapKeys.length
  }



class HashTable {

    constructor() {
      this.mapKeys = Array(32)
      this.mapVals = Array(32)
    }

    // 通过映射的key计算出一个整数
    // 期望的目标是对不同的字符串都计算出不同的值
    hashCode(key) {
      var hash = 131313131
      var seed = 131
      for (var i = 0; i < key.length; i++) {
        hash = (((hash * seed) >>> 0) + key.charCodeAt(i)) >>> 0  // ？位运算，不带符号向右移0位，避免溢出的情况
      }
      return hash % this.mapKeys.length
    }

      set(key, val) {
        var idx = this.hashCode(key)
        this.mapKeys[idx] = key
        this.mapVals[idx] = val
        return this
      }
      get(key) {
        var idx = this.hashCode(key)
        return this.mapVals[idx]
      }
      has(key) {
        var idx = this.hashCode(key)
        if (this.mapKeys[idx]) {
          return true
        } else {
          return false
        }
      }
      delete(key) {
        var idx = this.hashCode(key)
        delete this.mapKeys[idx]
        delete this.mapVals[idx]
      }
}




 // 链表改良版,改良有冲突的情况

  class HashTable {
    constructor() {
      this.maps = Array(32).fill(null)
      this._size = 0
    }
   
    hashCode(key) {
      if (typeof key == 'number') {
        key = 'N-' + key
      } else if (typeof key == 'string') {
        key = 'S-' + key
      } else if (typeof key == 'boolean') {
        key = 'B-' + key
      } else if (key == null) {
        key = 'NIL-' + key
      } else {
        if ('my_hashtable_objectId' in key) {
          key = key.my_hashtable_objectId
        } else {
          key = key.my_hashtable_objectId = 'O-' + Stirng(id++)
        }
      }
      var hash = 131313131
      var seed = 131
      for (var i = 0; i < key.length; i++) {
        hash = (((hash * seed) >>> 0) + key.charCodeAt(i)) >>> 0  // ？位运算，不带符号向右移0位，避免溢出的情况
      }
      return hash % this.maps.length
    }

    set(key,val) {
      var idx = this.hashCode(key)
      var p = this.maps[idx]
        while (p) {          // 遍历p链表,寻找目标key值的p结点，找到了就将p.val覆盖为新val
          if (p.key === key) {    
            p.val = val
            return this
          }
          p = p.next   
        }
      this.maps[idx] = {    // 如果找到最后都没有符合要求的结点，那就在哈希表上某个位置创造头结点存放这个对象
        key: key,
        val: val,
        next: this.maps[idx]
      } 
      this._size++
      if (this._size / this.maps.length > 0.75) {  // 当空间被占据到75%以上的时候
        this.#扩容()
      }
      return this
    }
   
    #扩容() {
      var prevMaps = this.maps         // 把原来数组的值全都取出来
      this.maps = new Array(this.maps.length * 2).fill(null)   // 原数组扩容两倍
      this._size = 0               // 扩容后清空size 
      for (var list of prevMaps) {
        var p = list
        while (p) {
          var key = p.key
          var val = p.val
          this.set(key, val)    // this不是prevMaps的，this是hashTable
          p = p.next
        }
      }
    }
    
    #缩容() {
      if (this.maps.length <= 32) {
        return
      }
      var prevMaps = this.maps         // 把原来数组的值全都取出来
      this.maps = new Array(this.maps.length / 2).fill(null)
      this._size = 0               // 扩容后清空size 
      for (var list of prevMaps) {
        var p = list
        while (p) {
          var key = p.key
          var val = p.val
          this.set(key, val)    // this不是prevMaps的，this是hashTable
          p = p.next
        }
      }
    }
    
    get(key) {
      var idx = this.hashCode(key)
      var p = this.maps[idx]
      while (p) {
        if (p.key === key) {
          return p.val
        }
        p = p.next
      }
      return undefined
    }
    
    has(key) {
      var idx = this.hashCode(key)
      var p = this.maps[idx]
      while (p) {
        if (p.key === key) {
          return true
        }
        p = p.next
      }
      return false
    }
    
    delete(key) {
      var idx = this.hashCode(key)
      var p = this.maps[idx]
      if (p.key === key) {        // 如果头结点就是要删除的对象，则删除头结点
          this.maps[idx] = p.next
          this._size--
          if (this._size / this.maps.length < 0.2) {
            this.#缩容
          }
          return this
      }
      while (p.next) {            // 否则就遍历链表继续找要删除的那个结点
        if (p.next.key == key) {
          p.next = p.next.next
          this._size--
          if (this._size / this.maps.length < 0.2) {
            this.#缩容
          }
          break
        }
        p = p.next
      }
      return this
    }
    
    clear() {
      this.maps = Array(32).fill(null)
      this._size = 0
      return this
    }
  }
  


    // 用一个对象存储所有的东西
    class MyMap {
    constructor() {
      this.map = Object.create(null)
    }
    set(key, val) {
      if (typeof key == 'number') {
        key = 'N' + key
       }
      if (typeof key == 'string') {
        key = 'S' + key
      }
      if (typeof key == 'boolean') {
        key = 'B' + key
      } 
      if (typeof key == 'function' || typeof key == 'object' || Array.isArray(key)) {
        if (key.objectId) {
        key = key.objectId
        } else {
          key.objectId = id++
          key = key.objectId
        }
      }

      this.map[key] = val
    }
    get(key) {
      return this.map[key]
    }

  
    

   // set原本写法，未改之前
    set(key,val) {
      var idx = this.hashCode(key)
      if (this.maps[idx] === null) {
        var node = {
          key: key,
          val: val,
          next: null
        }
        this.map[idx] = node  // 如果创建结点的位置为空，就把结点放在哈希表上
      } else {                // 如果创建的结点的位置不为空，则遍历这个结点上的链表
        var p = this.maps[idx]  // 如果这个位置存在链表不为空，则把这个链表提取出来，开始遍历
        while (p) {
          if (p.key === key) {    // 如果p的key值就是要找的，则将p.val值覆盖为新的val
            p.val = val
            return this
          }
          p = p.next           // 否则继续遍历p的下一个结点
        }
        var node = {           // 如果找到最后都没有符合要求的结点，那就创造一个结点存放这个对象
            key: key,
            val: val,
            next: this.maps[idx]   // 并把这个新创造的结点做为新的头结点
          }
        this.map[idx] = node
      }
        return this 
    }
   






 堆（Heap）：
  又叫优先队列（Priority Queue）

  堆是一颗完全二叉树，所以它一般使用数组来存储：
    从上到下从左到右按顺序来存储每个结点的值
    堆也是一种有序结构：
      任何一个结点的值大于（或小于）等于其两个子结点
      大于等于的时候,这个堆称为大顶堆
      小于等于的时候,这个堆称为小顶堆
      大顶堆的最大值,是其根结点
      小顶堆的最小值,是其根结点
  堆一般用来维护只关心其最值的动态数据集合

  堆支持两个基本操作:
    pop：即将当前优先级最高的元素出堆，即将堆顶元素移出优先队列
        同时在移出后保持堆堆性质
    push（val）： 即将一个元素加入优先队列中，同时在加入后维护堆的性质。

  相对于普通队列的先进先出，
  可以说从堆里出来的下一个元素一定是其最值


 // 这里只能堆排序数字，而不能排列对象，需要加predicate才可以。

  class  PriorityQueue {
    constructor() {
      this.elements = []
    }
    #swap(i, j) {
      var a = this.elements[i]
      this.elements[i] = this.elements[j]
      this.elements[j] = a
    }
    push(val) {                               // 堆是完全二叉树，以数组形式存储。push返回的是数组加入新元素后的长度
      var idx = this.elements.push(val) - 1  // 所以，这个idx即是push的新元素下标
      this.headUp(idx)
      return this     // 不加return this，push完就不会显示push完的数组。
    }
    pop(val) {
      if (this.elements.length == 1) {    // 如果长度为一，只有一个元素，直接弹出这个元素
        return this.elements.pop()
      }
      if (this.elements.length > 1) {
        var result = this.elements[0]      // 把堆顶元素存起来，准备最后pop出去,队列的pop是出队，是第一个数出。
        this.elements[0] = this.elements.pop()   // 数组的pop是把数组最后的数弹出删除。
        this.heapDown(0) // 从根结点开始向下维护这个堆
        return result
      }
    }
    // idx位置被放入了新元素
    // 从idx位置开始向下调整并维护堆堆状态
    heapDown(idx) {
      while (true) {
        var maxIdx = idx     // 先假设idx为最大值的下标
        var leftIdx = (idx * 2) + 1
        if (leftIdx < this.elements.length && this.elements[leftIdx] > this.elements[maxIdx]) {
          maxIdx = leftIdx
        }
        var rightIdx = leftIdx + 1
        if (rightIdx < this.elements.length && this.elements[rightIdx] > this.elements[maxIdx]) {
          maxIdx = rightIdx
        }
        if (maxIdx !== idx) {    // idx是父结点的位置，如果最大值不在父结点上，就需要换值的位置
          this.#swap(maxIdx, idx)
          idx = maxIdx           // 从最大值原本位置准备开始下一次遍历
        } else {
          return
        }
      }
    }
    headUp(idx) {
      while (idx > 0) {    //如果不是根结点，就可以算出父结点
        var pIdx = (idx - 1) >> 1            // 父结点为子结点下标 - 1 / 2 下取整，即位运算，右移一位
        if (this.elements[idx] > this.elements[pIdx]) {
          this.#swap(idx, pIdx)     // 如果子结点的值大于父结点，则更换父结点和子结点上的值
        } else {
          break
        }
        idx = pIdx  // 更换完毕后，idx上的指针移动到父结点上来，继续向上对比循环，直到break或者到达根结点
      }
    }
    peek() {
      return this.elements[0]
    }
  }


  // 对对象排列的情况，需要用到predicate高阶函数

  pq = new PriorityQueue(it => it.age)

  pq.push({
    name: 'zhang',
    age: 18,
  })
  pq.push({
    name: 'wang',
    age: 16,
  })


  class  PriorityQueue {
    constructor(predicate = it => it) {  // 元素直接是数字，就it => it ,由它自己到它本身
      this.elements = []
      this.predicate = predicate  // 把predicate存起来，不是说默认就传入一个数组，啥意思？
    }
    #swap(i, j) {
      var a = this.elements[i]
      this.elements[i] = this.elements[j]
      this.elements[j] = a
    }
    push(val) {                               // 堆是完全二叉树，以数组形式存储。push返回的是数组加入新元素后的长度
      var idx = this.elements.push(val) - 1  // 所以，这个idx即是push的新元素下标
      this.headUp(idx)
      return this     // 不加return this，push完就不会显示push完的数组。
    }
    pop(val) {
      if (this.elements.length == 1) {    // 如果长度为一，只有一个元素，直接弹出这个元素
        return this.elements.pop()
      }
      if (this.elements.length > 1) {
        var result = this.elements[0]      // 把堆顶元素存起来，准备最后pop出去,队列的pop是出队，是第一个数出。
        this.elements[0] = this.elements.pop()   // 数组的pop是把数组最后的数弹出删除。
        this.heapDown(0) // 从根结点开始向下维护这个堆
        return result
      }
    }
    // idx位置被放入了新元素
    // 从idx位置开始向下调整并维护堆堆状态
    heapDown(idx) {
      while (true) {
        var maxIdx = idx     // 先假设idx为最大值的下标
        var leftIdx = (idx * 2) + 1           // 对象的元素传给predicate函数，会返回一个数，由这个数值来确认排序
        if (leftIdx < this.elements.length && this.predicate(this.elements[leftIdx]) > this.predicate(this.elements[maxIdx])) {
          maxIdx = leftIdx
        }
        var rightIdx = leftIdx + 1
        if (rightIdx < this.elements.length && this.predicate(this.elements[rightIdx]) > this.predicate(this.elements[maxIdx])) {
          maxIdx = rightIdx
        }
        if (maxIdx !== idx) {    // idx是父结点的位置，如果最大值不在父结点上，就需要换值的位置
          this.#swap(maxIdx, idx)
          idx = maxIdx           // 从最大值原本位置准备开始下一次遍历
        } else {
          return
        }
      }
    }
    headUp(idx) {
      while (idx > 0) {    //如果不是根结点，就可以算出父结点
        var pIdx = (idx - 1) >> 1            // 父结点为子结点下标 - 1 / 2 下取整，即位运算，右移一位
        if (this.predicate(this.elements[idx]) > this.predicate(this.elements[pIdx])) {
          this.#swap(idx, pIdx)     // 如果子结点的值大于父结点，则更换父结点和子结点上的值
        } else {
          break
        }
        idx = pIdx  // 更换完毕后，idx上的指针移动到父结点上来，继续向上对比循环，直到break或者到达根结点
      }
    }
    peek() {
      return this.elements[0]
    }
  }





  // 空间：n
  // 时间：logn
  function sortByHeap(ary) {
    var pq = new PriorityQueue()
    for (var i = 0; i < ary.length; i++) {
      pq.push(ary[i])      // 把数组所有元素push进堆里
    }
    var j = 0
    for (var i = 0; i < ary.length; i++) {
      ary[j++] = pq.pop()     // 把堆排好序的所有值再重新放进数组里，这时数组是从大到小顶顺序
    }
    return ary
  }

  

  function swap(ary, i, j) {
      var a = ary[i]
      ary[i] = ary[j]
      ary[j] = a
    }

  // 从数组的idx位置向下维护ary堆的性质，到stopIdx结束，不包含stopIdx
  function heapDown(ary, idx, stopIdx = ary.length) {
    while (true) {
        var maxIdx = idx     // 先假设idx为最大值的下标
        var leftIdx = (idx * 2) + 1
        if (leftIdx < stopIdx && ary[leftIdx] > ary[maxIdx]) {  //左子树子结点下标在stopIdx之内，并且值大于最大值话
          maxIdx = leftIdx       
        }
        var rightIdx = leftIdx + 1
        if (rightIdx < stopIdx && ary[rightIdx] > ary[maxIdx]) {
          maxIdx = rightIdx
        }
        if (maxIdx !== idx) {    // idx是父结点的位置，如果最大值不在父结点上，就需要换值的位置
          swap(ary, maxIdx, idx)
          idx = maxIdx           // 从最大值原本位置准备开始下一次遍历
        } else {
          return
        }
      }
  }

  // 将数组就地堆化，空间占用O1
  function heapify(ary) {
    var startIdx = (ary.length - 1) >> 1   // 位运算，除以2取整，得出最后一个结点的父结点的下标
    for (var i = startIdx; i >= 0; i--) {   // 由下往上遍历各个父结点，排列好堆的大小顺序
      heapDown(ary, i)
    }
    return ary
  }  
  

  // 时间复杂度： O（n*log(n))
  // 时间复杂度： O（1）没有创建数组，没有递归过，不会退化
  // 哦，明白了，这就是一个借用堆最上面第0位总是最大的（或最小），将数组从小到大排序的算法。
  // 先将数组就地堆化，然后第0位最大值换到数组末尾，然后再从第0位到第i位（不包括第i位）重新维护堆，
  // 这样循环下去把最大，第二大，第三大，第n大一直从数组最后一位开始往前排，直到整个数组升序排列完毕。
  function heapSort(ary) {
    heapify(ary) 
      for (var i = ary.length - 1; i > 0; i--) {
        swap(ary, 0, i)   // 总是把第0个和第i个元素换位置，换完之后i就不在堆里了，为啥不在了？
        heapDown(ary, 0, i)  // 然后再从堆顶开始向下维护
      }
    return ary
  }


  2022/01/27

  排序算法的稳定性：
    指排序前后相同元素的相对顺序是否发生变化
    
  冒泡排序：稳定
  选择排序：不稳定
  插入排序：稳定
  归并排序：稳定
  BST排序：稳定
  快速排序：不稳定
  堆排序：不稳定

  稳定性的作用：

  [
    {name: 'zang', zong: 120, yuwen: 81, shuxue: 90},
    {name: 'wang', zong: 95 , yuwen: 80, shuxue: 90},
    {name: 'leei', zong: 120, yuwen: 85, shuxue: 90},
    {name: 'zhao', zong: 120, yuwen: 85, shuxue: 60},
    {name: 'dong', zong: 105, yuwen: 80, shuxue: 90},
  ].sort((a,b) => {
    if (a.zong == b.zong) {      // if：总分相等，则看语文分数是否相等
      if (a.yuwen == b.yuwen) {  // 如果语文分数相等，
        return b.shuxue - a.shuxue   // 则以数学分数从高到低倒序排列
      } else {
        return b.yuwen - a.yuwen  // 如果语文成绩不等，则以语文分数从高到低倒序排列
      }
    } else {
      return b.zong - a.zong  // else：如果总分不相等，则按总分从高到低倒序排列
    }
  })




  function treeToHtml(root) {
    if (root) {
      `
      <section>
        <h1 style="text=align=center">${root.val}</h1>
        <div style="float:left;width:50%">${treeToHtml(root.left)}</div>
        <div style="float:left;width:50%">${treeToHtml(root.right)}></div>
      </section>
      `
    }
  }
  ancestry.find(it => it.born == 1602)
  
  ancestry.findIndex(it => it.born == 1602)

2022/02/12

静态类型：变量是有类型的，特定类型的变量只能指向相应类型的值 c，c++，java,typescript
动态类型：变量本身没有类型，任何变量随时可以指向任意类型的值，js，python，php

强类型：运算或传参不会自动执行类型转换，python，java
弱类型：语言是否会在一起情况下自动对值做类型转换，js，c，c++
  function People(name,age) {
    if (new.target !== People) {
      return new People(name,age)
    }
    this.name = name
    this.age = age
  }

  var wang = new People()
  People.call( wang )


with语句，当语句内没有相关函数或方法或变量，它会向上搜索找寻。
下面的sin,cos,还有PI都是向上从Math里搜索而来的 

  var x = 1
  var y = 2
  with(Math) {
    console.log(x * sin(x) + cos(y) * PI)
  }

Object.preventExtensions() 禁止添加属性
Object.seal()              封装属性
Object.freeze()            冻结属性


  function deepFreeze(obj) {
    if (Object.isFrozen(obj)) {
      return obj
    }
    Object.freeze(obj)
    for (var key in obj) {
      if (obj[key] && typeof(obj[key]) === 'object') {
        deepFreeze(obj[key])
      }
    }
    return obj
  }

describe('Array', function(){

}) 

describe('MyMap', function () {
  describe('构造函数')
})


try {
  xxxx
} catch (e) {
  try {
    yyyy
  } catch (e) {

  }
}


  var context = null

  function withContext(newContext, body) {
    var oldContext = context
    context = newContext
    try {
      var result = body() 
    } finally {
      context = oldContext
    }
    return result
  }

  function InputError(message) {
    Error
  }


  function primitiveMultiply(a,b) {
    if (Math.random) {
      return a * b
    } else {
      throw new MultiplyorUnitFailure()
    }
  }

  function multiple(a,b) {

  }



  var box = ........

  function withBoxUnlocked(f) {

  }





</script>



 
