const fetchs = async () => {
   const res = await fetch(' https://openapi.programming-hero.com/api/videos/categories');
   const data = await res.json();
   const phone = data.data;
   console.log(phone)
  
 

  
   const tabContainer = document.getElementById('tab-container')
   phone.forEach((ctr) => {
      const div = document.createElement('div')
      div.innerHTML = `
       <a class="btn  active:bg-red-400" onclick="handleLoad(${ctr.category_id}) "  >${ctr.category}</a>
  
      `;
   
      tabContainer.appendChild(div)
   
  
        
        
      
   });
   handleLoad(1000);
   
   
  
  
}
const handleLoad = async (id) => {
   const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
   const data = await response.json()
   const datas = data.data;
   const noData = document.getElementById('no-data');
   noData.innerHTML =''
   if (datas.length <= 0) {
    
      const di = document.createElement('div');
      di.innerHTML = `
<div class="text-center mt-20">
<p><img class = "mx-auto" src="Icon.png"></p>
<p class="text-3xl font-bold">Oops!!sorry, There is no <br> content here</p>
</div>
`;
      noData.appendChild(di)
   }

   
      const screen = document.getElementById('screen')
      screen.innerHTML = ''
      datas.forEach((blg) => {
     
         console.log(blg)
     
    
         screen.innerHTML += `
       <div class="video-preview">
               <div class="thumbnail-row">
                  <img class="thumbnail w-[300px] h-[200px] " src="${blg.thumbnail}">
               </div>
               <div>
                  <div class="channel-picture  w-[50px] inline-block align-top ">
                     <img class="profile-picture w-[40px] h-[40px]  rounded-full" src="${blg.authors[0].profile_picture}">
                  </div>
                  <div class="video-info inline-block w-[200px]  ">
                     <p class="video-title font-bold">
                       ${blg.title}
                     </p>
                     <p class="video-author flex">
                        ${blg.authors[0].profile_name} <span class = ""> ${blg.authors[0].verified ? '<img src="act.svg"/>' :' '} </span>
                     </p>
                   
                     <p class="video-stats">
                      ${blg.others.views} views
                     </p>
                  </div>
               </div>
            </div>
   
      `;
      

      })
   
   
}


fetchs();


const handleSort = async (id) => {
   
 const response = await fetch('https://openapi.programming-hero.com/api/videos/category/1000')
   const data =await response.json()
   const dats = data.data;
    dats.sort((a, b) => parseInt(a.others.views.replace("k", ""))*1000 - parseInt(b.others.views.replace("k", ""))*1000);
   console.log(dats)
    const screen = document.getElementById('screen')
   screen.innerHTML = ''
   dats.forEach((blg) => {
      screen.innerHTML +=`
       <div class="video-preview">
               <div class="thumbnail-row">
                  <img class="thumbnail w-[300px] h-[200px] " src="${blg.thumbnail}">
               </div>
               <div>
                  <div class="channel-picture  w-[50px] inline-block align-top ">
                     <img class="profile-picture w-[40px] h-[40px]  rounded-full" src="${blg.authors[0].profile_picture}">
                  </div>
                  <div class="video-info inline-block w-[200px]  ">
                     <p class="video-title font-bold">
                       ${blg.title}
                     </p>
                     <p class="video-author flex">
                        ${blg.authors[0].profile_name} <span class = ""> ${blg.authors[0].verified ? '<img src="act.svg"/>' :' '} </span>
                     </p>
                   
                     <p class="video-stats">
                      ${blg.others.views} views
                     </p>
                  </div>
               </div>
            </div>
   
      `;
   })

}
handleSort();
