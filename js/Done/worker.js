

// 接收消息，触发message，运行算出result，再发回去
addEventListener('message', function(e) {
    e.data.a = 8
    console.log('worker', e.data)
   // postMessage(result) 
})












