let inputFields;
let updateImgUrl;
let showModaal = document.getElementById('showModaal')
let modalDivShow = document.getElementById('modal-main')

function showModaalDiv(){
    modalDivShow.classList.add('show')
}

const cvCreate = () => {
     inputFields = {
      fName     : document.getElementById('fullName').value,
      jobT      : document.getElementById('jobTitle').value,
      imgL      : document.getElementById('ImgLink'),
      phoneNu   : document.getElementById('phone').value,
      email     : document.getElementById('email').value,
      addres    : document.getElementById('address').value,
      degreeN   : document.getElementById('degree').value,
      univerN   : document.getElementById('university').value,
      skills    : document.getElementById('skills').value,
      lanuage   : document.getElementById('Lanuages').value,
      AboutMe  : document.getElementById('Profile').value,
      workExperience: document.getElementById('Experince').value
   }
  
   let descison = false;
   for(let key in inputFields){
     if(inputFields[key]){
        descison = true
     }
     else{
        descison = false
        break
     }
    }
    console.log(descison);
    
    if(!descison){      // user bina inputs fields bare aga nhi ja skta
        alert('all Fields cumplsory')
    }
    else{   // Aur jb brhe to ja skta
        showModaal.style.display = 'none'  // User jhn se modal open kr rha wo none
        document.getElementById('userCV').style.display = 'block'     // user cv add div block
        modalDivShow.classList.remove('show')// Modaaal input fields none

    updateImgUrl = URL.createObjectURL(inputFields.imgL.files[0])
    
     let userCv = document.getElementById('userCV')
     // Main div jis ka andr Full Cv  push krwa rha -->
         userCv.innerHTML = `
               <div class="cv-header">
                    <div class="cv-logo">
                      <img src="${updateImgUrl}" alt="">
                    </div>
                    <div class="cvnav">
                        <h1>${inputFields.fName}</h1>
                        <p>${inputFields.jobT}e</p>
                    </div>
              </div>
               <div class="cvlRmain-flex">     
                   <div class="cvleft">
                     <div class="contacts">
                       <h1>Contact</h1>
                        <p>
                            <span class="cvicon1"><i class="fa-solid fa-phone"></i></span>
                            <span class="cvtext1">${inputFields.phoneNu}</span>
                        </p>
                        <p>
                            <span class="cvicon1"><i class="fa-solid fa-envelope"></i></span>
                            <span class="cvtext1">${inputFields.email}</span>
                        </p>
                        <p>
                            <span class="cvicon1"><i class="fa-solid fa-location-dot"></i></span>
                            <span class="cvtext1">${inputFields.addres}</span>
                        </p>
                     </div>
                     <div class="educations">
                          <h1>Eduction</h1>
                          <p>${inputFields.degreeN}</p>
                          <p>${inputFields.univerN}</p>
                     </div>
                        <div class="skills">
                               <h1>Skills</h1>
                             <ul id = 'skillUl'>
                                 <li>
                                     <span class="Skillcheckbox"><input type="checkbox" class = 'SkillCheckbox'></span><span class="SkillName">${inputFields.skills}</span>
                                 </li>
                             </ul>
                             <div class="skillsbuttonsbox">
                                 <button class="skilladdbtn"   onClick='skillAdd(this)'><i class="fa-solid fa-plus"></i> Skill</button>
                                 <button class="skillremovebtn"onClick='skillRemove(this)'><i class="fa-solid fa-minus"></i> Skill</button>
                             </div>
                        </div>
                   </div>
                   <div class="cvright">
                        <div class="About circle1">
                              <h1>About Me</h1>
                                <p>${inputFields.AboutMe}</p>
                        </div>
                          <div class="Work-Experience circle2">
                              <h1>Work Experience</h1>
                               <p>${inputFields.workExperience}</p>
                          </div>
                            <div class="lanuages circle3">
                               <h1>Lanuage</h1>
                                <ul id="lanuagesUl">
                                    <li>
                                        <span class="lanuagecheckbox"><input type="checkbox" class="lanuageCheckbox"></span><span class="lanuageName">${inputFields.lanuage}</span>
                                    </li>
                                </ul>
                                <div class="lanuagebuttonsbox">
                                    <button class="lanuageaddbtn"  onClick='skillAdd(this)'><i class="fa-solid fa-plus"></i> lanuage</button>
                                    <button class="lanuageremovebtn"onClick='skillRemove(this)' ><i class="fa-solid fa-minus"></i> lanuage</button>
                                </div>
                            </div>
                   </div>
               </div>
         `

 let navUl = document.getElementById('navul')       // Navbar ma Style ka liye li appendkrwa rha  
 navUl.innerHTML += `
      <select  id="Select" onchange="styles()">
           <option value="Style1">Design1</option>
           <option value="Style2">Design2</option>
           <option value="Style3">Design3</option>
           <option value="Style4">Design4</option>
           <option value="Style5">Design5</option>
           <option value="Style6">Design6</option>
           <option value="Style7">Design7</option>
           <option value="Style8">Design8</option>
           <option value="Style9">Design9</option>
           <option value="Style10">Design10</option>
       </select>
 `
 
let idInputs = [
    'fullName','jobTitle','ImgLink','phone','email','address','degree',   // Inputs ko khale kr rha 
    'university','skills','Lanuages', 'Profile', 'Experince'
]
idInputs.forEach(val => {
    document.getElementById(val).value = ''
   
})
 let dow = document.querySelector('.downloaddiv')
      dow.classList.add('downloadBtnShow')                                 // Download Cv button ko enable kr rha  
                

//       let cvCon = document.createElement('div')      //  Main Cv Con Jis ka andr header contact div push kr ka cv Complete kroga
//           cvCon.setAttribute('class', 'Cv-conatiner')

//           //  Header Work Start
//       let header = document.createElement('div')
//           header.setAttribute('class', 'Cv-header')
//       let hrH1 = document.createElement('h1')
//       let hrH1Txt = document.createTextNode(inputFields.fName)
//           hrH1.appendChild(hrH1Txt)
//       let hrp = document.createElement('p')
//       let hrpTxt = document.createTextNode(inputFields.jobT)
//           hrp.appendChild(hrpTxt)
//           header.appendChild(hrH1)
//           header.appendChild(hrp)
//           cvCon.appendChild(header)
//           //   Header Work Complete

//          //   Left Right Cv Container Div Start
//       let cvLeftRightDiv = document.createElement('div')
//           cvLeftRightDiv.setAttribute('class', 'CvLeftRightCon')
//       let cvLeftDiv = document.createElement('div')
//           cvLeftDiv.setAttribute('class', 'CvLeftMain')
//         //   Contact Box Start
//       let contactDiv = document.createElement('div')
//           contactDiv.setAttribute('class', 'ContactBox')
//       let cH1 = document.createElement('h1')
//       let cH1Txt = document.createTextNode('Contact')
//           cH1.appendChild(cH1Txt)
//       let ulCon = document.createElement('ul')
//       let li1 = document.createElement('li')
//       let li1Txt = document.createTextNode("Phone: " + inputFields.phoneNu)
//           li1.appendChild(li1Txt)
//       let li2 = document.createElement('li')
//       let li2Txt = document.createTextNode("Email: " +inputFields.email)
//           li2.appendChild(li2Txt)
//       let li3 = document.createElement('li')
//       let li3Txt = document.createTextNode("Addres: " + inputFields.addres)
//           li3.appendChild(li3Txt)

//           ulCon.appendChild(li1)
//           ulCon.appendChild(li2)
//           ulCon.appendChild(li3)

//           contactDiv.appendChild(cH1)
//           contactDiv.appendChild(ulCon)
//           cvLeftDiv.appendChild(contactDiv)
//            //   Contact Box End

//           // Education Box Start
          
//       let educationDiv = document.createElement('div')
//           educationDiv.setAttribute('class', 'EductaionBox')        
//       let eH1 = document.createElement('h1')
//       let eH1Txt = document.createTextNode('Eduction')
//               eH1.appendChild(eH1Txt)
//      let ul2 = document.createElement('ul')
//      let eli1 = document.createElement('li')
//      let eli1Txt = document.createTextNode("Degre: " + inputFields.degreeN)
//          eli1.appendChild(eli1Txt)  

//      let eli2 = document.createElement('li')
//      let eli2Txt = document.createTextNode("Unive: " + inputFields.univerN)
//          eli2.appendChild(eli2Txt)  
//          ul2.appendChild(eli1)
//          ul2.appendChild(eli2)
      
//               educationDiv.appendChild(eH1)
//               educationDiv.appendChild(eH1)
//               educationDiv.appendChild(ul2)
//               cvLeftDiv.appendChild(educationDiv)
//           // Education Box End 
//         //   Skills Box Start

//      let skillsDiv = document.createElement('div')
//          skillsDiv.setAttribute('class', 'SkillsBox') 
//      let sH1 = document.createElement('h1')
//      let sH1Txt = document.createTextNode('Skills')       
//          sH1.appendChild(sH1Txt)



//          skillsDiv.appendChild(sH1)
//          cvLeftDiv.appendChild(skillsDiv)
//         //   Skills Box End
          
//           cvLeftRightDiv.appendChild(cvLeftDiv)

//         //   let cvRightDiv = document.createElement('div')
//         //       cvRightDiv.setAttribute('class', 'CvRightMain')
//         //   cvLeftRightDiv.appendChild(cvRightDiv)

//           cvCon.appendChild(cvLeftRightDiv)
//          //   Left Right Cv Container Div End

          
//        allConatinerDiv.appendChild(cvCon)
    }
   
}
createCvBtn.addEventListener('click', cvCreate)

function closeModaalDiv(){
    modalDivShow.classList.remove('show')
    let idInputs = [
        'fullName','jobTitle','ImgLink','phone','email','address','degree',   // Inputs ko khale kr rha 
        'university','skills','Lanuages', 'Profile', 'Experince'
    ]
    idInputs.forEach(val => {
        document.getElementById(val).value = ''
       
    })  
}

function skillAdd(e){
    let newVlaue = prompt('Enter a skill name..')

  if(newVlaue.length >=3){    
    let btnValue = (e.childNodes[1].nodeValue).trim();
    console.log(btnValue);
    
    let ul;
       if(btnValue === 'Skill'){
        ul = document.getElementById('skillUl')
       }
       else{
        ul = document.getElementById('lanuagesUl')
       }
    
    let li = document.createElement('li')
    let span1 = document.createElement('span')
        span1.setAttribute('class', `${btnValue}checkbox`)
    let checkbx = document.createElement('input')
       checkbx.setAttribute('type', 'checkbox')
       checkbx.setAttribute('class', `${btnValue}Checkbox`)
       console.log(checkbx);
       
       span1.appendChild(checkbx)

    let span2 = document.createElement('span')
        span2.setAttribute('class', `${btnValue}Name`)
    let span2txt = document.createTextNode(newVlaue)
      span2.appendChild(span2txt)

      li.appendChild(span1)
      li.appendChild(span2)

  ul.appendChild(li)
  let allCheckboxes = document.querySelectorAll(`.${btnValue}Checkbox`)
  let allValueNames = document.querySelectorAll(`.${btnValue}Name`)
  console.log(allCheckboxes);
  console.log(allValueNames);
  
}
}
function skillRemove(e){
    let btnValue = (e.childNodes[1].nodeValue).trim();
    // console.log(btnValue);
    
    let ul;
       if(btnValue === 'Skill'){
        ul = document.getElementById('skillUl')
       }
       else{
        ul = document.getElementById('lanuagesUl')
       }
       let inputs = ul.getElementsByTagName('input')
       console.log(inputs);
       
      for(var i = inputs.length -1; i >= 0; i--){
        console.log(i);
        
         if(inputs[i].checked){
            console.log(inputs[i]);
          var del =   inputs[i].parentNode.parentNode
          del.remove()
         }
      }
       
}

function styles(){
  let userCv = document.getElementById('userCV')    

let select = document.getElementById('Select')
let option = select.value

   if(option === 'Style1'){
    userCv.innerHTML = `
               <div class="cv-header">
                    <div class="cv-logo">
                      <img src="${updateImgUrl}" alt="">
                    </div>
                    <div class="cvnav">
                        <h1>${inputFields.fName}</h1>
                        <p>${inputFields.jobT}e</p>
                    </div>
              </div>
               <div class="cvlRmain-flex">     
                   <div class="cvleft">
                     <div class="contacts">
                       <h1>Contact</h1>
                        <p>
                            <span class="cvicon1"><i class="fa-solid fa-phone"></i></span>
                            <span class="cvtext1">${inputFields.phoneNu}</span>
                        </p>
                        <p>
                            <span class="cvicon1"><i class="fa-solid fa-envelope"></i></span>
                            <span class="cvtext1">${inputFields.email}</span>
                        </p>
                        <p>
                            <span class="cvicon1"><i class="fa-solid fa-location-dot"></i></span>
                            <span class="cvtext1">${inputFields.addres}</span>
                        </p>
                     </div>
                     <div class="educations">
                          <h1>Eduction</h1>
                          <p>${inputFields.degreeN}</p>
                          <p>${inputFields.univerN}</p>
                     </div>
                        <div class="skills">
                               <h1>Skills</h1>
                             <ul id = 'skillUl'>
                                 <li>
                                     <span class="Skillcheckbox"><input type="checkbox" class = 'SkillCheckbox'></span><span class="SkillName">${inputFields.skills}</span>
                                 </li>
                             </ul>
                             <div class="skillsbuttonsbox">
                                 <button class="skilladdbtn"   onClick='skillAdd(this)'><i class="fa-solid fa-plus"></i> Skill</button>
                                 <button class="skillremovebtn"onClick='skillRemove(this)'><i class="fa-solid fa-minus"></i> Skill</button>
                             </div>
                        </div>
                   </div>
                   <div class="cvright">
                        <div class="About circle1">
                              <h1>About Me</h1>
                                <p>${inputFields.AboutMe}</p>
                        </div>
                          <div class="Work-Experience circle2">
                              <h1>Work Experience</h1>
                               <p>${inputFields.workExperience}</p>
                          </div>
                            <div class="lanuages circle3">
                               <h1>Lanuage</h1>
                                <ul id="lanuagesUl">
                                    <li>
                                        <span class="lanuagecheckbox"><input type="checkbox" class="lanuageCheckbox"></span><span class="lanuageName">${inputFields.lanuage}</span>
                                    </li>
                                </ul>
                                <div class="lanuagebuttonsbox">
                                    <button class="lanuageaddbtn"  onClick='skillAdd(this)'><i class="fa-solid fa-plus"></i> lanuage</button>
                                    <button class="lanuageremovebtn"onClick='skillRemove(this)' ><i class="fa-solid fa-minus"></i> lanuage</button>
                                </div>
                            </div>
                   </div>
               </div>
         `
   }
   else if(option === 'Style2'){
    console.log(document.querySelector('.cv-header'));
    if(document.querySelector('.cv-header'))
        {   // ye condition ais liye ka jb me third sytle select ho rha to whn 
    let circle1 = document.querySelector('.circle1')         // pr pori cv he change horhi jis wja se jb style 3 ma khre ho kr 
        circle1.classList.remove('circle1')                  // style 2 select kr rhe to use ye div nhi mil rha tha ais wja se condition lgai
    let circle3 = document.querySelector('.circle3')
        circle3.classList.remove('circle3')
      }
    userCv.innerHTML = `
    <div class="cv-header cvStyle2">
         <div class="cv-logo">
           <img src="${updateImgUrl}" alt="">
         </div>
         <div class="cvnav">
             <h1>${inputFields.fName}</h1>
             <p>${inputFields.jobT}e</p>
         </div>
   </div>
    <div class="cvlRmain-flex">     
        <div class="cvleft">
          <div class="contacts">
            <h1>Contact</h1>
             <p>
                 <span class="cvicon1"><i class="fa-solid fa-phone"></i></span>
                 <span class="cvtext1">${inputFields.phoneNu}</span>
             </p>
             <p>
                 <span class="cvicon1"><i class="fa-solid fa-envelope"></i></span>
                 <span class="cvtext1">${inputFields.email}</span>
             </p>
             <p>
                 <span class="cvicon1"><i class="fa-solid fa-location-dot"></i></span>
                 <span class="cvtext1">${inputFields.addres}</span>
             </p>
          </div>
            <div class="About">
                   <h1>About Me</h1>
                     <p>${inputFields.AboutMe}</p>
             </div>
          
              <div class="lanuages">
                      <h1>Lanuage</h1>
                     <ul id="lanuagesUl">
                         <li>
                             <span class="lanuagecheckbox"><input type="checkbox" class="lanuageCheckbox"></span><span class="lanuageName">${inputFields.lanuage}</span>
                         </li>
                     </ul>
                     <div class="lanuagebuttonsbox">
                         <button class="lanuageaddbtn"  onClick='skillAdd(this)'><i class="fa-solid fa-plus"></i> lanuage</button>
                         <button class="lanuageremovebtn"onClick='skillRemove(this)' ><i class="fa-solid fa-minus"></i> lanuage</button>
                     </div>
                 </div>
             
        </div>
        <div class="cvright">
             <div class="educations circle1">
               <h1>Eduction</h1>
               <p>${inputFields.degreeN}</p>
               <p>${inputFields.univerN}</p>
          </div>
               <div class="Work-Experience circle2">
                   <h1>Work Experience</h1>
                    <p>${inputFields.workExperience}</p>
               </div>
                <div class="skills circle3">
                    <h1>Skills</h1>
                  <ul id = 'skillUl'>
                      <li>
                          <span class="Skillcheckbox"><input type="checkbox" class = 'SkillCheckbox'></span><span class="SkillName">${inputFields.skills}</span>
                      </li>
                  </ul>
                  <div class="skillsbuttonsbox">
                      <button class="skilladdbtn"   onClick='skillAdd(this)'><i class="fa-solid fa-plus"></i> Skill</button>
                      <button class="skillremovebtn"onClick='skillRemove(this)'><i class="fa-solid fa-minus"></i> Skill</button>
                  </div>
             </div>
        </div>
    </div>
`
   }

  else if(option === 'Style3'){
   userCv.innerHTML = `
   <div class = 'mainLeftRightCvStyle3'>
       <div class = 'cvLeftStyle3'>
          <div class = 'divimgS3'>
             <img src="${updateImgUrl}">
          </div>
           <div class="contactsS3">
              <h1>Contact</h1>
              <hr />
               <p>
                   <span class="cvicon1"><i class="fa-solid fa-phone"></i></span>
                   <span class="cvtext1">${inputFields.phoneNu}</span>
               </p>
               <p>
                   <span class="cvicon1"><i class="fa-solid fa-envelope"></i></span>
                   <span class="cvtext1">${inputFields.email}</span>
               </p>
               <p>
                   <span class="cvicon1"><i class="fa-solid fa-location-dot"></i></span>
                   <span class="cvtext1">${inputFields.addres}</span>
               </p>
           </div>
            <div class="educationsS3">
              <h1>Eduction</h1>
              <hr />
              <p>${inputFields.degreeN}</p>
              <p>${inputFields.univerN}</p>
            </div>
             <div class="skills S3">
                 <h1>Skills</h1>
                 <hr />
                 <ul id = 'skillUl'>
                     <li>
                         <span class="Skillcheckbox"><input type="checkbox" class = 'SkillCheckbox'></span><span class="SkillName">${inputFields.skills}</span>
                     </li>
                 </ul>
                 <div class="skillsbuttonsbox">
                     <button class="skilladdbtn"   onClick='skillAdd(this)'><i class="fa-solid fa-plus"></i> Skill</button>
                     <button class="skillremovebtn"onClick='skillRemove(this)'><i class="fa-solid fa-minus"></i> Skill</button>
                 </div>
            </div>
       </div>
       <div class = 'cvRightStyle3'>
          <div class='NameRoleS3'>
              <h1> ${inputFields.fName} </h1>
              <p> ${inputFields.jobT} </p>
           </div>
           <div class='AboutMeS3'> 
           <h1>About Me</h1>
           <hr/>
              <p> ${inputFields.AboutMe} </p>
           </div>
           <div class='WExperienceS3'> 
            <h1>Work Experience</h1>
           <hr/>
              <p> ${inputFields.workExperience} </p>
           </div>
            <div class="lanuages S3">
              <h1>Lanuage</h1>
              <hr />
               <ul id="lanuagesUl">
                   <li>
                       <span class="lanuagecheckbox"><input type="checkbox" class="lanuageCheckbox"></span><span class="lanuageName">${inputFields.lanuage}</span>
                   </li>
               </ul>
               <div class="lanuagebuttonsbox">
                   <button class="lanuageaddbtn"  onClick='skillAdd(this)'><i class="fa-solid fa-plus"></i> lanuage</button>
                   <button class="lanuageremovebtn"onClick='skillRemove(this)' ><i class="fa-solid fa-minus"></i> lanuage</button>
               </div>
            </div>
       </div>
   </div>    
   ` 
    
  }
  else if(option === 'Style4'){
    userCv.innerHTML = `
       <div class = 'headerS4'> 
          <img src = '${updateImgUrl}'>
          <div class='NameTitleS4'>
             <h1>${inputFields.fName}</h1> 
             <p> ${inputFields.jobT} </p>
          </div>
       </div>
       <div class='LeftRightMainS4'>
          <div class="LeftS4">
           <div class="contactsS4">
              <h1>Contact</h1>
              <hr />
               <p>
                   <span class="cvicon1"><i class="fa-solid fa-phone"></i></span>
                   <span class="cvtext1">${inputFields.phoneNu}</span>
               </p>
               <p>
                   <span class="cvicon1"><i class="fa-solid fa-envelope"></i></span>
                   <span class="cvtext1">${inputFields.email}</span>
               </p>
               <p>
                   <span class="cvicon1"><i class="fa-solid fa-location-dot"></i></span>
                   <span class="cvtext1">${inputFields.addres}</span>
               </p>
           </div>
            <div class="skills S4">
                 <h1>Skills</h1>
                 <hr />
                 <ul id = 'skillUl'>
                     <li>
                         <span class="Skillcheckbox"><input type="checkbox" class = 'SkillCheckbox'></span><span class="SkillName">${inputFields.skills}</span>
                     </li>
                 </ul>
                 <div class="skillsbuttonsbox">
                     <button class="skilladdbtn"   onClick='skillAdd(this)'><i class="fa-solid fa-plus"></i> Skill</button>
                     <button class="skillremovebtn"onClick='skillRemove(this)'><i class="fa-solid fa-minus"></i> Skill</button>
                 </div>
            </div>
             <div class="educationsS4">
              <h1>Eduction</h1>
              <hr />
              <p>${inputFields.degreeN}</p>
              <p>${inputFields.univerN}</p>
            </div>

        </div>
          <div class="RightS4"> 
              <div class='WExperienceS4'> 
                <h1>Work Experience</h1>
                 <hr/>
                 <p> ${inputFields.workExperience} </p>
             </div>
              <div class="lanuages S4">
              <h1>Lanuage</h1>
              <hr />
               <ul id="lanuagesUl">
                   <li>
                       <span class="lanuagecheckbox"><input type="checkbox" class="lanuageCheckbox"></span><span class="lanuageName">${inputFields.lanuage}</span>
                   </li>
               </ul>
               <div class="lanuagebuttonsbox">
                   <button class="lanuageaddbtn"  onClick='skillAdd(this)'><i class="fa-solid fa-plus"></i> lanuage</button>
                   <button class="lanuageremovebtn"onClick='skillRemove(this)' ><i class="fa-solid fa-minus"></i> lanuage</button>
               </div>
            </div>
             <div class='AboutMeS4'> 
                <h1>About Me</h1>
                <hr/>
                <p> ${inputFields.AboutMe} </p>
           </div>
          </div>
       </div>
    `
  }
  else if(option === 'Style5'){
    userCv.innerHTML = `
       <div class = 'headerS4 S5'> 
          <img src = '${updateImgUrl}'>
          <div class='NameTitleS4'>
             <h1>${inputFields.fName}</h1> 
             <p> ${inputFields.jobT} </p>
          </div>
       </div>
       <div class='LeftRightMainS4'>
          <div class="LeftS4 S5">
           <div class="contactsS4">
              <h1>Contact</h1>
              <hr />
               <p>
                   <span class="cvicon1"><i class="fa-solid fa-phone"></i></span>
                   <span class="cvtext1">${inputFields.phoneNu}</span>
               </p>
               <p>
                   <span class="cvicon1"><i class="fa-solid fa-envelope"></i></span>
                   <span class="cvtext1">${inputFields.email}</span>
               </p>
               <p>
                   <span class="cvicon1"><i class="fa-solid fa-location-dot"></i></span>
                   <span class="cvtext1">${inputFields.addres}</span>
               </p>
           </div>
            <div class="skills S4">
                 <h1>Skills</h1>
                 <hr />
                 <ul id = 'skillUl'>
                     <li>
                         <span class="Skillcheckbox"><input type="checkbox" class = 'SkillCheckbox'></span><span class="SkillName">${inputFields.skills}</span>
                     </li>
                 </ul>
                 <div class="skillsbuttonsbox">
                     <button class="skilladdbtn"   onClick='skillAdd(this)'><i class="fa-solid fa-plus"></i> Skill</button>
                     <button class="skillremovebtn"onClick='skillRemove(this)'><i class="fa-solid fa-minus"></i> Skill</button>
                 </div>
            </div>
             <div class="educationsS4">
              <h1>Eduction</h1>
              <hr />
              <p>${inputFields.degreeN}</p>
              <p>${inputFields.univerN}</p>
            </div>

        </div>
          <div class="RightS4"> 
              <div class='WExperienceS4'> 
                <h1>Work Experience</h1>
                 <hr/>
                 <p> ${inputFields.workExperience} </p>
             </div>
              <div class="lanuages S4">
              <h1>Lanuage</h1>
              <hr />
               <ul id="lanuagesUl">
                   <li>
                       <span class="lanuagecheckbox"><input type="checkbox" class="lanuageCheckbox"></span><span class="lanuageName">${inputFields.lanuage}</span>
                   </li>
               </ul>
               <div class="lanuagebuttonsbox">
                   <button class="lanuageaddbtn"  onClick='skillAdd(this)'><i class="fa-solid fa-plus"></i> lanuage</button>
                   <button class="lanuageremovebtn"onClick='skillRemove(this)' ><i class="fa-solid fa-minus"></i> lanuage</button>
               </div>
            </div>
             <div class='AboutMeS4'> 
                <h1>About Me</h1>
                <hr/>
                <p> ${inputFields.AboutMe} </p>
           </div>
          </div>
       </div>
    `
  }
   else{
    let dow = document.querySelector('.downloaddiv')
  dow.classList.remove('downloadBtnShow')  
    userCv.innerHTML = `
      <h1 class='WorkingOnItH1'>Working on it...</h1>
    `
   }
}

function cvBuilder(){
  showModaal.style.display = 'block'  // User jhn se modal open kr rha wo none
  let userCv = document.getElementById('userCV')  // user cv add div block
  userCv.innerHTML = ''  
  userCv.style.display = 'none'
  document.getElementById('Select').remove()
  let dow = document.querySelector('.downloaddiv')
  dow.classList.remove('downloadBtnShow')                                 // Download Cv button ko enable kr rha  
              
}

const downloadCv = () => {
   
  
        const cvElement = document.getElementById("userCV"); // CV ka section select karein
      
        // HTML2Canvas se screenshot lein
        html2canvas(cvElement).then((canvas) => {
          // Canvas ko image mein convert karein
          const image = canvas.toDataURL("image/png");
      
          // Image ko download karwane ke liye anchor tag banayein
          const link = document.createElement("a");
          link.href = image;
          link.download = "MzPro.png"; // Download file ka naam
          link.click(); // Click event trigger karein
        });
      
      
    
    
}


// NavBar On OFF 

function navbar(){
    let navbar = document.querySelector('.navbar')
    
  if(window.getComputedStyle(navbar).display === "block"){
    navbar.style.display = 'none'
  }
  else{
    navbar.style.display = 'block'
  }
   
}

