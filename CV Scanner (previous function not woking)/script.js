console.log('CV Scanner App');


function fetchApi(){
    
    console.log("fetchApi function is call");
    fetch('./data2.json').then((response)=>{
        console.log('this is response section');
        return response.json()
    }).then((data)=>{
        console.log('this is data sections');
        // console.log(JSON.stringify(data));
        // console.log(JSON.parse(data));
        let d = data.result;
        console.log(d[0].name);
        // document.write(d[0].name);

        function dataIterate(collection){
            let nextValue=0;
            console.log('under dataIterate function');
            return {
                next:function(){
                    console.log("nextValue : ",nextValue)
                    if(nextValue < collection.length) {
                        
                        return {
                            value:collection[nextValue++],
                            done:false
                        }
                    }
                    else{
                        done:true
                    }
                },
                prev:function(){
                    console.log("nextValue : ",nextValue)
                    if(nextValue > 0) {
                        if(nextValue>collection.length){
                            nextValue--;
                            return {

                                value:collection[--nextValue],
                                done:false
                            }
                        }else{

                            return {
                                value:collection[nextValue--],
                                done:false
                            }
                        }
                    }
                    else{
                        done:true
                    }
                }
            }
        }
        // console.log(val.image);
        let iter = dataIterate(d);
        nextCV();
        let next = document.getElementById('next');
        next.addEventListener('click',nextCV);
        function nextCV(){
            let val = iter.next().value;
            let img = document.getElementById('img');
            img.innerHTML=`<img src="${val.image}"/>`;

            let content = document.getElementById('content');
            content.innerHTML=`<div class="card col-mb-6 mx-auto text-center" style="width: 18rem;" >
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name : ${val.name}</li>
              <li class="list-group-item">Age : ${val.age}</li>
              <li class="list-group-item">City : ${val.city}</li>
              <li class="list-group-item">Language : ${val.language}</li>
              <li class="list-group-item">framework : ${val.framework}</li>
            </ul>
            `;
        }

        let prev = document.getElementById('prev');
        prev.addEventListener('click',prevCV);
        function prevCV(){
            console.log("this is prevCV function");
            let val = iter.prev().value;
            let img = document.getElementById('img');
            img.innerHTML=`<img src="${val.image}"/>`;

            let content = document.getElementById('content');
            content.innerHTML=`<div class="card col-mb-6 mx-auto text-center" style="width: 18rem;" >
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name : ${val.name}</li>
              <li class="list-group-item">Age : ${val.age}</li>
              <li class="list-group-item">City : ${val.city}</li>
              <li class="list-group-item">Language : ${val.language}</li>
              <li class="list-group-item">framework : ${val.framework}</li>
            </ul>
            `;
        }

    })

    // let api = fetchApi();
}
fetchApi();