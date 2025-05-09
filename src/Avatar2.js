import './main.css';

import reset from './resource/ic_cancel.svg'
import back from './resource/ic_back.svg'
import max from './resource/ic_max.svg'
import closed from './resource/closed.svg'
import thumbFace0 from './resource/site thumbnail/face/0.svg'
import thumbDress0 from './resource/site thumbnail/dress/0.svg'
import thumbDress1 from './resource/site thumbnail/dress/1.svg'
import thumbDress2 from './resource/site thumbnail/dress/2.svg'
import thumbDress3 from './resource/site thumbnail/dress/3.svg'
import thumbDress4 from './resource/site thumbnail/dress/4.svg'
import thumbDress5 from './resource/site thumbnail/dress/5.svg'

import thumbPants0 from './resource/site thumbnail/pants/0.svg'
import thumbPants1 from './resource/site thumbnail/pants/1.svg'
import thumbPants2 from './resource/site thumbnail/pants/2.svg'
import thumbPants3 from './resource/site thumbnail/pants/3.svg'
import thumbPants4 from './resource/site thumbnail/pants/4.svg'
import thumbLayered0 from './resource/site thumbnail/acc/0.svg'
import thumbAcc0 from './resource/site thumbnail/acc/0.svg'
import thumbAcc1 from './resource/site thumbnail/acc/1.svg'
import thumbAcc2 from './resource/site thumbnail/acc/2.svg'
import thumbAcc3 from './resource/site thumbnail/acc/3.svg'
import thumbAcc4 from './resource/site thumbnail/acc/4.svg'
import thumbAcc5 from './resource/site thumbnail/acc/5.svg'
import thumbHairitem0 from './resource/site thumbnail/hairitem/0.svg'
import thumbHairitem1 from './resource/site thumbnail/hairitem/1.svg'
import thumbHairitem2 from './resource/site thumbnail/hairitem/2.svg'
import thumbHairitem3 from './resource/site thumbnail/hairitem/3.svg'
import thumbHairitem4 from './resource/site thumbnail/hairitem/4.svg'
import thumbHairitem5 from './resource/site thumbnail/hairitem/5.svg'
import thumbHairitem6 from './resource/site thumbnail/hairitem/6.svg'
import thumbHairitem7 from './resource/site thumbnail/hairitem/7.svg'
import thumbHairitem8 from './resource/site thumbnail/hairitem/8.svg'
import thumbHand0 from './resource/site thumbnail/hand/0.svg'
import thumbHand1 from './resource/site thumbnail/hand/1.svg'
import thumbHand2 from './resource/site thumbnail/hand/2.svg'

import ctgrFaceOn from './resource/ctgr/faceOn.svg'
import ctgrFaceOff from './resource/ctgr/faceOff.svg'
import ctgrPetOn from './resource/ctgr/petOn.svg'
import ctgrPetOff from './resource/ctgr/petOff.svg'
import ctgrDressOn from './resource/ctgr/dressOn.svg'
import ctgrDressOff from './resource/ctgr/dressOff.svg'
import ctgrPantsOn from './resource/ctgr/pantsOn.svg'
import ctgrPantsOff from './resource/ctgr/pantsOff.svg'
import ctgrLayeredOn from './resource/ctgr/layereddressOn.svg'
import ctgrLayeredOff from './resource/ctgr/layereddressOff.svg'
import ctgrHairitemOn from './resource/ctgr/hairitemOn.svg'
import ctgrHairitemOff from './resource/ctgr/hairitemOff.svg'
import ctgrBagOn from './resource/ctgr/bagOn.svg'
import ctgrBagOff from './resource/ctgr/bagOff.svg'
import ctgrAccOn from './resource/ctgr/accOn.svg'
import ctgrAccOff from './resource/ctgr/accOff.svg'
import pants0 from './resource/site item/pants/0.svg'
import pants1 from './resource/site item/pants/1.svg'
import pants2 from './resource/site item/pants/2.svg'
import pants3 from './resource/site item/pants/3.svg'
import pants4 from './resource/site item/pants/4.svg'


import face0 from './resource/site item/face/0.svg'
import dress0 from './resource/site item/dress/0.svg'
import dress1 from './resource/site item/dress/1.svg'
import dress2 from './resource/site item/dress/2.svg'
import dress3 from './resource/site item/dress/3.svg'
import dress4 from './resource/site item/dress/4.svg'
import dress5 from './resource/site item/dress/5.svg'

import layered0 from './resource/site thumbnail/acc/0.svg'
import acc0 from './resource/site item/acc/0.svg'
import acc1 from './resource/site item/acc/1.svg'
import acc2 from './resource/site item/acc/2.svg'
import acc3 from './resource/site item/acc/3.svg'
import acc4 from './resource/site item/acc/4.svg'
import acc5 from './resource/site item/acc/5.svg'
import hairitem0 from './resource/site item/hairitem/0.svg'
import hairitem1 from './resource/site item/hairitem/1.svg'
import hairitem2 from './resource/site item/hairitem/2.svg'
import hairitem3 from './resource/site item/hairitem/3.svg'
import hairitem4 from './resource/site item/hairitem/4.svg'
import hairitem5 from './resource/site item/hairitem/5.svg'
import hairitem6 from './resource/site item/hairitem/6.svg'
import hairitem7 from './resource/site item/hairitem/7.svg'
import hairitem8 from './resource/site item/hairitem/8.svg'
import hand0 from './resource/site item/hand/0.svg'
import hand1 from './resource/site item/hand/1.svg'
import hand2 from './resource/site item/hand/2.svg'

 


 

import React, { useEffect, useState } from 'react';

const Avatar2 = (() => {

  const [ctgr,setCtgr] = useState(1) 
  const [initDialog,setInitDialog] = useState(false)
  const [backDialog,setBackDialog] = useState(false)
  const [fullDialog,setFullDialog] = useState(false)
  const [toast,setToast] = useState(false)
  const [itemList,setItemList] = useState([
    {ctgr:'face',list:[face0]},
    {ctgr:'hairitem',list:[hairitem0,hairitem1,hairitem2,hairitem3,hairitem4,hairitem5,hairitem6,hairitem7,hairitem8]},
    {ctgr:'dress',list:[dress0,dress1,dress2,dress3,dress4,dress5,]},
    {ctgr:'pants',list:[pants0,pants1,pants2,pants3,pants4]},
    {ctgr:'acc',list:[acc0,acc1,acc2,acc3,acc4,acc5]},
    {ctgr:'hand',list:[hand0,hand1,hand2]}  
  ])

  const [myAvatar,setMyAvatar] = useState([])

  const handleCkItem = (ctgr,item) => {

    for(let i = 0; i < myAvatar.length; i++){
      myAvatar[ctgr]=item
    }

    setItemList([...itemList])

  }

  useEffect(()=>{
    if(!toast) return;

    const timerId = setTimeout(() => {
        handleClosed()
      }, 3000);
    
      return () => clearTimeout(timerId);

  },[toast])

  const handleClosed = (event, reason) => {

    if (reason === 'clickaway') {
        return;
    }

    setToast(false)
  }

  const thumbList = [
    [thumbFace0],
    [thumbHairitem0,thumbHairitem1,thumbHairitem2,thumbHairitem3,thumbHairitem4,thumbHairitem5,thumbHairitem6,thumbHairitem7,thumbHairitem8], 
    [thumbDress0,thumbDress1,thumbDress2,thumbDress3,thumbDress4,thumbDress5,],
    [thumbPants0,thumbPants1,thumbPants2,thumbPants3,thumbPants4],
    [thumbAcc0,thumbAcc1,thumbAcc2,thumbAcc3,thumbAcc4,thumbAcc5], 
    [thumbHand0,thumbHand1,thumbHand2]
  ]
 
  useEffect(()=>{
    const handleSetInit = ()=>{   
      let initList = [0,0,0,0,0,0]
      window.localStorage.setItem("myAvatarList",JSON.stringify(initList))
      return JSON.stringify([])
    }

    let it = JSON.parse(window.localStorage.getItem("myAvatarList")??handleSetInit());
     
    setMyAvatar(it)
    return(()=>{
      window.onpopstate = {}
    })
  },[])

  useEffect(()=>{
    if(fullDialog){
        window.history.pushState({ page: 1 }, "title 1", "?page=1")
    }
    window.onpopstate = handleOnBack
  },[fullDialog])
  const handleOnBack = ()=>{
    setFullDialog(false)
  }


  const handleSave = () => {
    let item = [...myAvatar]  
    window.localStorage.setItem("myAvatarList",JSON.stringify(item));
    setMyAvatar(item) 

    setToast(true)
  }
  const handleInit = () => {
    let item = [0,0,0,0,0,0]   
    setMyAvatar(item) 
  }
  const handleBack = () => {  
    let it = JSON.parse(window.localStorage.getItem("myAvatarList"));
    setMyAvatar(it) 
  }

  

  return (
    <div className="mainLayout">
      <div className='avatarLayout'>
        <div className='avatarButtonTop'>
          <div onClick={()=>handleSave()} >저장</div>
          {/* <img src={save} alt='' onClick={()=>handleSave()}/> */}
        </div>
        
        <div className='avatarButtonBottom'> 
          <div onClick={()=>setBackDialog(true)}>
            <img src={back} alt='' />
          </div>
          <div onClick={()=>setInitDialog(true)}>
            <img src={reset} alt='' />
          </div>
        </div>
        
        <div className='avatarButtonBottom2'> 
          <img src={max} alt='' onClick={()=>setFullDialog(true)}/>
        </div>
        
        {itemList.map((val,idx)=>
          <img key={idx} className={`${val.ctgr} avatarimg`} src={val.list[myAvatar[idx]]} alt=''/>
        )}
      </div>

      <div className='ctgrLayout'>
        {/* <img onClick={()=>{setCtgr(0);}} className={ctgr===0?'ctgrOn':'ctgrOff'} 
             src={ctgr===0?ctgrFaceOn:ctgrFaceOff} alt=''/>       */}
        <img onClick={()=>setCtgr(1)} className={ctgr===1?'ctgrOn':'ctgrOff'} 
          src={ctgr===1?ctgrHairitemOn:ctgrHairitemOff} alt=''/>
        <img onClick={()=>{setCtgr(2);}} className={ctgr===2?'ctgrOn':'ctgrOff'} 
             src={ctgr===2?ctgrDressOn:ctgrDressOff} alt=''/>        
        {/* <img onClick={()=>setCtgr(3)} className={ctgr===3?'ctgrOn':'ctgrOff'} 
             src={ctgr===3?ctgrPantsOn:ctgrPantsOff} alt=''/> */}
     
        <img onClick={()=>setCtgr(4)} className={ctgr===4?'ctgrOn':'ctgrOff'} 
             src={ctgr===4?ctgrPetOn:ctgrPetOff} alt=''/>
        {/* <img onClick={()=>setCtgr(5)} className={ctgr===5?'ctgrOn':'ctgrOff'} 
             src={ctgr===5?ctgrPetOn:ctgrPetOff} alt=''/> */}
      </div>

      <div className='itemLayout'> 
        {thumbList[ctgr].map((val,idx)=>
          <div key={idx}>
            <img src={val} onClick={()=>handleCkItem(ctgr,idx)} 
            className={myAvatar[ctgr]===idx?'avatar-selected-on':'avatar-selected-off'} alt=''/>
          </div>
        )}
      </div>

      <div style={{display:backDialog?'flex':'none'}} className='dialog' onClick={()=>setBackDialog(false)}>
        <div className='dialogButtonList'>
          <div onClick={()=>handleBack()}>이전 코디로 돌아가기</div> 
          <div onClick={()=>setBackDialog(false)}>코디 계속하기</div>
        </div>
      </div>

      
      <div style={{display:initDialog?'flex':'none'}} className='dialog' onClick={()=>setInitDialog(false)}>
        <div className='dialogButtonList'>
          <div onClick={()=>handleInit()}>코디 초기화 하기</div>
          <div onClick={()=>setInitDialog(false)}>코디 계속하기</div>
        </div>
      </div>


      <div style={{display:toast?'flex':'none'}} className='toast' onClick={()=>setToast(false)}>
        <div className='toastBox'>
         코디가 저장되었습니다
        </div>
      </div>


      <div style={{display:fullDialog?'flex':'none',backgroundColor:'#fff'}} className='fullDialog'>
        <img className='dialogClosed' src={closed} alt=''  onClick={()=>setFullDialog(false)}/>
        
        <div className='fullAvatar'>
        {itemList.map((val,idx)=>
          <img key={idx} className={`${val.ctgr} fullAvatarimg`} src={val.list[myAvatar[idx]]} alt=''/>
        )}
        </div>
      </div>

    </div>
  );
})

export default Avatar2;
