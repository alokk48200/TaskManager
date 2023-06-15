
const task=document.getElementsByClassName('task');
   const start=async()=>{
        const raw=await axios.get('/api/task');
         const data=raw.data;
        

           const alltask=data.map((element)=>{
                  const {task, _id, completed}=element;
                    console.log(element);
                  return `<div class="flex flex-nowrap m-2 p-2 space-x-0.5 w-96 ">
                            <div><input type="radio" onclick="complete('${_id}', '${completed}')"></div>
                             <div> <h1 id="${_id}" class="">${task}</h1></div>
                          
                         <div   ><button onclick="deletethat('${_id}' )" class="bg-sky-950 text-white hover:text-blue-600"}>Delete</button></div>
                          
                      </div>`;

             }).join('');

        
         /*data.forEach((element) => {
            list.push(element);
             
            const li=document.createElement('li');
            const btn=document.createElement('button');
            btn.innerText="Delete",
            
            

                        
            li.classList.add(element._id);
            li.innerText   =element.task;
            
            

            li.appendChild(btn);
            ul.appendChild(li);
          
      
           
           });

         
           task[0].innerHTML='';
           task[0].appendChild(ul);
           */
          
         
           task[0].innerHTML=alltask;
   }
   start();




   const btn=document.getElementById("btn");
   console.log(btn);
   console.log("alok");
   
    btn.addEventListener("click", async()=>{
        console.log("alok");
        const inp=  document.getElementById('inp').value;
       await  axios.post('/api/task', {
            task:inp,
            completed:false
        });
        
             start();


    })
   
   const deletethat=async(id)=>{
      console.log(id);
     
     const res= await axios.delete('/api/task/'+id);
     console.log(res);
        start();
   }

   const complete=async(id, val)=>{
    console.log(typeof val)
   val=!!val;
   console.log(typeof val)

        val=true;
        console.log("shivani hai mere sath", id, val);
        
       const u= document.getElementById(id);
       u.classList.add("line-through");
    
       const res= await axios.patch('/api/task/'+id+'/'+val);
      
        console.log(res);
       
 }
   console.log(data);
   
