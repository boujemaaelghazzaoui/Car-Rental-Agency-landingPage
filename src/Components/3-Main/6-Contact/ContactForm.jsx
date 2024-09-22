import React, { useRef, useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineMailOutline } from 'react-icons/md'
import { RiMessage3Line } from 'react-icons/ri'
import { TbPhone } from 'react-icons/tb'

export default function ContactForm() {
    const name = useRef()
    const phone = useRef()
    const email = useRef()
    const message = useRef()
    const [isFormSent,SetIsformSent]= useState(false)
    const [errors,SetErrors] = useState([])
    const [isFormValid , SetIsFormValid] = useState(false)
    const validateform = () =>{
        const namevalue = name.current.value
        const phonevalue = phone.current.value
        const emailvalue = email.current.value
        const messagevalue = message.current.value
        let isFormValid = true
        SetErrors([])
        if (namevalue.trim() === '') {
            SetErrors(prevState =>  { 
                return {
                ...prevState ,
                ...{name : '* Champ requis !'}
                }
            })
            isFormValid = false   
        }
        if (phonevalue.trim() === '') {
            SetErrors(prevState =>  { 
                return {
                ...prevState ,
                ...{phone : '* Champ requis !'}
                }
            })
            isFormValid = false   
          } else if (!phonevalue.match(/^\d{10}$/)) {
            SetErrors(prevState =>  { 
              return {
              ...prevState ,
              ...{phone : '* Numéro de téléphone incorrect !'}
              }
          })
          isFormValid = false
          }
        if (emailvalue.trim() === '') {
            SetErrors(prevState =>  { 
                return {
                ...prevState ,
                ...{email : '* Champ requis !'}
                }
            })
            isFormValid = false  
      
        } else if(!emailvalue.match(/^\S+@\S+\.\S+$/)) {
            SetErrors(prevState =>  { 
                return {
                ...prevState ,
                ...{email : '* Email incorrect !'}
                }
            })
            isFormValid = false
        }
        if (messagevalue.trim() === '') {
            SetErrors(prevState =>  { 
                return {
                ...prevState ,
                ...{message : '* Champ requis !'}
                }
            })
            isFormValid = false        
        }
        SetIsFormValid(isFormValid)
        return isFormValid
        
    }
    
    const resetform =() => {
        name.current.value = ''
        email.current.value = ''
        message.current.value = ''
    }
    const submitForm = (e) =>{
            e.preventDefault()
            SetIsformSent(false)
            if(validateform()){
                SetIsformSent(true)
                resetform()
            }
    
    }
    const handelChange = () => {
        validateform()
    }
    
    const displayError = (fieldName) => {
        const field = document.getElementById(fieldName)
        const error = errors[fieldName]
        if (error  !== undefined) {
            return <div className='text-red-600'>{error}</div>
        }
        if (field !== null) {
            field.removeAttribute('style')
        } 
    }
    
  return (
    <>
        <div className='max-w-7xl  mx-auto '>
            { isFormSent?
                <div className="  my-auto">
                    <h1 className="md:text-3xl lg:text-3xl text-2xl leading-7 font-medium text-lime-500 text-center mt-5 ">Message a bien été envoyée.</h1>
                    <p className="text-sm md:text-lg lg:text-lg  text-center">Nous vous contacterons bientôt.</p>
                    <hr className="h-1 mt-3 w-1/12 mx-auto  bg-[#F2A819]" />
                    <div className='mx-auto w-32 md:w-1/6 lg:w-1/6 mt-3'><button className="w-full mx-auto h-9 md:h-12 lg:h-12 text-white bg-[#F2A819] rounded-lg font-medium	text-sm md:text-lg lg:text-lg hover:duration-300 hover:bg-[#ffbb32]"><a  href="." role="button">Retour à l'accueil</a></button></div>
                </div>
                :<form onSubmit={submitForm} onChange={handelChange} className='grid grid-cols-1 mx-auto'>
                <div className=" flex items-center border-b-2 border-[#F2A819] py-2">
                    <CgProfile className='text-gray-400 size-8 opacity-60'/>                    
                    <input type="text" id="name" placeholder='Nom' className="appearance-none bg-transparent border-none w-full text-gray-700 ml-3 py-1 leading-tight focus:outline-none" ref={name} />
                </div>
                {displayError('name')}
                <div className=" flex items-center border-b-2 border-[#F2A819] py-2 mt-3 ">
                    <TbPhone className="text-gray-400 size-8 opacity-60" />
                    <input type="text" id="phone" placeholder='Téléphone' className="appearance-none bg-transparent border-none w-full text-gray-700 ml-3 py-1 leading-tight focus:outline-none" ref={phone} />
                </div>
                {displayError('phone')}
                <div className=" flex items-center border-b-2 border-[#F2A819] py-2 mt-3 ">
                    <MdOutlineMailOutline className="text-gray-400 size-8 opacity-60"  />
                    <input type="text" id="email" placeholder='Email' className="appearance-none bg-transparent border-none w-full text-gray-700 ml-3 py-1 leading-tight focus:outline-none" ref={email}/>
                    
                </div>
                {displayError('email')}

                <div className="flex  border-b-2 border-[#F2A819] py-2 ">
                    <RiMessage3Line className="text-gray-400 size-8 opacity-60 mt-[5px] mr-[11px] " />
                    <textarea placeholder='Message' className="  appearance-none bg-transparent  border-[#F2A819] w-full text-gray-700 mt-2 py-1 leading-tight focus:outline-none" id="message" rows="4" ref={message} ></textarea>
                </div>
                {displayError('message')}


                <button  type="submit" className="w-full mt-2 bg-[#F2A819] cursor-pointer text-white font-bold py-2 px-4 rounded hover:duration-300 hover:bg-[#ffbb32]	" >Envoyez</button>
                
            </form>
            }
        </div>
            
        
    </>
  )
}