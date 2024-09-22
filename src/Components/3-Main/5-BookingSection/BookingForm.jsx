import React, { useRef, useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { MdDateRange, MdOutlineMailOutline } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { TbPhone } from 'react-icons/tb';
import { PiMapPinAreaBold } from 'react-icons/pi';
import { RiArrowDropDownLine } from 'react-icons/ri';


const BookingForm = () => {
  const name = useRef()
  const phone = useRef()
  const email = useRef()
  const country = useRef()
  const dateReservation = useRef()
  const dateRetour = useRef()
  const lieuD = useRef()
  const lieuR = useRef()  
  const [isFormSent,SetIsformSent]= useState(false)
  const [isFormValid , SetIsFormValid] = useState(false)
  const [errors,SetErrors] = useState([])
  const validateform = () =>{
      const namevalue = name.current.value
      const phonevalue = phone.current.value
      const emailvalue = email.current.value
      const countryvalue = country.current.value
      const dateReservationvalue = dateReservation.current.value
      const dateRetourvalue = dateRetour.current.value
      const lieuDvalue = lieuD.current.value
      const lieuRvalue = lieuR.current.value
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
        if (countryvalue.trim() === '') {
          SetErrors(prevState =>  { 
              return {
              ...prevState ,
              ...{country : '* Champ requis !'}
              }
          })
          isFormValid = false  
        }
        if (dateReservationvalue.trim() === '') {
          SetErrors(prevState =>  { 
            return {
            ...prevState ,
            ...{dateReservation : '* Champ requis !'}
            }
        })
        isFormValid = false
        }else if (!dateReservationvalue.match(/^\d{4}-\d{2}-\d{2}$/)) {
          SetErrors(prevState =>  { 
            return {
            ...prevState ,
            ...{dateReservation : '* Date invalide !'}
            }
        })
        isFormValid = false
        }
        if (dateRetourvalue.trim() === '') {
          SetErrors(prevState =>  { 
            return {
            ...prevState ,
            ...{dateRetour : '* Champ requis !'}
            }
        })
        isFormValid = false
        }else if (!dateRetourvalue.match(/^\d{4}-\d{2}-\d{2}$/)) {
          SetErrors(prevState =>  { 
            return {
            ...prevState ,
            ...{dateRetour : '* Date invalide !'}
            }
        })
        isFormValid = false
        }
        if (lieuDvalue.trim() === '') {
          SetErrors(prevState =>  { 
            return {
            ...prevState ,
            ...{lieuD : '* Champ requis !'}
            }
        })
        isFormValid = false
        }
        if (lieuRvalue.trim() === '') {
          SetErrors(prevState =>  { 
            return {
            ...prevState ,
            ...{lieuR : '* Champ requis !'}
            }
        })
        isFormValid = false
        }
        SetIsFormValid(isFormValid)
        return isFormValid
    }
    const resetform =() => {
      name.current.value = ''
      phone.current.value = ''
      email.current.value = ''
      country.current.value = ''
      dateReservation.current.value = ''
      dateRetour.current.value = ''
      lieuD.current.value = ''
      lieuR.current.value = ''
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
    <div className="max-w-6xl mt-1 mx-auto bg-white shadow-xl rounded-lg p-6">
      {isFormSent ?
        <div className="  my-auto">
          <h1 className="md:text-3xl lg:text-3xl text-2xl leading-7 font-medium text-lime-500 text-center mt-5 ">Votre réservation a bien été envoyée.</h1>
          <p className="text-sm md:text-lg lg:text-lg  text-center">Nous vous contacterons bientôt pour la confirmation.</p>
          <hr className="h-1 mt-3 w-1/12 mx-auto  bg-[#F2A819]" />
          <div className='mx-auto w-32 md:w-1/6 lg:w-1/6 mt-3'><button className="w-full mx-auto h-9 md:h-12 lg:h-12 text-white bg-[#F2A819] rounded-lg font-medium	text-sm md:text-lg lg:text-lg hover:duration-300 hover:bg-[#ffbb32]	"><a  href="." role="button">Retour à l'accueil</a></button></div>
        </div>
      :
          <form onSubmit={e => submitForm(e)} onChange={handelChange}  >
          <div className="grid grid-cols-2 gap-4 mx-auto ">
            {/* Name Field */}
            <div>
              <div className='flex items-center border-b-2 border-[#F2A819] py-2'>
                <CgProfile className='text-gray-400 size-8 opacity-60'/>
                  <input
                  type="text"
                  placeholder="Nom"
                  ref={name}
                  className="appearance-none bg-transparent border-none w-full text-gray-700 ml-3 py-1 leading-tight focus:outline-none"/>
              </div>
              {displayError('name')}
            </div>
            <div>
              <div className="flex items-center border-b-2 border-[#F2A819] py-2">
                <TbPhone className="text-gray-400 size-8 opacity-60" />
                <input
                  type="text"
                  placeholder="Téléphone"
                  ref={phone}
                  className="appearance-none bg-transparent border-none w-full text-gray-700 ml-3 py-1 leading-tight focus:outline-none"
                />
              </div>
              {displayError('phone')}
            </div>
            
            <div>
              <div className="flex items-center border-b-2 border-[#F2A819] py-2">
                <MdOutlineMailOutline className="text-gray-400 size-8 opacity-60"  />
                <input
                  type="text"
                  placeholder="Email"
                  ref={email}
                  className="appearance-none bg-transparent border-none w-full text-gray-700 ml-3 py-1 leading-tight focus:outline-none"
                />
              </div>
              {displayError('email')}
            </div>
            
            <div>
              <div className="flex items-center border-b-2 border-[#F2A819] py-2">
                <PiMapPinAreaBold className='text-gray-400 size-8 opacity-60'/>
                <input
                  type="text"
                  placeholder="Pays"
                  ref={country}
                  className="appearance-none bg-transparent border-none w-full text-gray-700 ml-3 py-1 leading-tight focus:outline-none"
                />
            </div>
            {displayError('country')}
            </div>
            
            <div>
              <div className="flex items-center border-b-2 border-[#F2A819] py-2">
                <MdDateRange className='text-gray-400 size-8 opacity-60'/>
                <input
                  type="date"
                  placeholder="Date de réservation"
                  ref={dateReservation}
                  className="  appearance-none font-medium opacity-55 select-none bg-transparent border-none w-full text-gray-700 ml-3 py-1 leading-tight focus:outline-none"
                />
              </div>
              {displayError('dateReservation')}
            </div>
            
            <div>
              <div className="flex items-center border-b-2  border-[#F2A819] py-2">
                <MdDateRange className='text-gray-400 size-8 opacity-60'/>
                <input
                  type="date"
                  placeholder="Date de retour"
                  ref={dateRetour}
                  className="appearance-none font-medium opacity-55 bg-transparent border-none w-full text-gray-700 ml-3 py-1 leading-tight focus:outline-none"
                />
              </div>
              {displayError('dateRetour')}
            </div>
            
    
            <div className="flex items-center border-b-2 border-[#F2A819] py-2">
              <FaCar className='text-gray-400 size-8 opacity-60'/>
              < select
                className="appearance-none bg-transparent gap-8 border-none w-full  text-gray-400 ml-[-16px] font-medium  py-1 px-7 leading-tight focus:outline-none"
              >
                <option className='w-96 font-medium p-2 selection:bg-[#F2A819]'>Choisir une voiture</option>
                <option className='w-96 font-medium p-2 selection:bg-[#F2A819] '>Mercedes-AMG Classe G</option>
                <option className='w-96 font-medium p-2 selection:bg-[#F2A819]'>Mercedes-AMG-Classe-A-Berline</option>
                <option className='w-96 font-medium p-2 selection:bg-[#F2A819]'>Mercedes-AMG-Classe-A</option>
                <option className='w-96 font-medium p-2 selection:bg-[#F2A819]'>Audi-Q8-2023</option>
                <option className='w-96 font-medium p-2 selection:bg-[#F2A819]'>Touareg-2023</option>
                <option className='w-96 font-medium p-2 selection:bg-[#F2A819]'>T-roc-2023</option>
                <option className='w-96 font-medium p-2 selection:bg-[#F2A819]'>Porsche-Macan-2023</option>
                <option className='w-96 font-medium p-2 selection:bg-[#F2A819]'>Range-Rover-Sport-2020</option>
                <option className='w-96 font-medium p-2 selection:bg-[#F2A819]'>Range-Rover-Evoque</option>
                <option className='w-96 font-medium p-2 selection:bg-[#F2A819]'>Jeep-Grand-Cherokee</option>
              </select>
              <RiArrowDropDownLine className='text-gray-800 size-8' />
            </div>
            <div>
              <div className="flex items-center border-b-2 border-[#F2A819] py-2">
                <PiMapPinAreaBold  className='text-gray-400 size-8 opacity-60'/>
                <input
                  type="text"
                  placeholder="Lieu de départ"
                  ref={lieuD}
                  className="appearance-none bg-transparent border-none w-full text-gray-700 ml-3 py-1 leading-tight focus:outline-none"
                />
              </div>
              {displayError('lieuD')}
            </div>
            
            <div>
              <div className="flex items-center border-b-2 border-[#F2A819] py-2">
                <PiMapPinAreaBold  className='text-gray-400 size-8 opacity-60'/>
                <input
                  type="text"
                  placeholder="Lieu de retour"
                  ref={lieuR}
                  className="appearance-none bg-transparent border-none w-full text-gray-700 ml-3 py-1 leading-tight focus:outline-none"
                />
              </div>
              {displayError('lieuR')}
            </div>
            
    
            {/* Submit Button */}
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full bg-[#F2A819] cursor-pointer text-white font-bold py-2 px-4 rounded hover:duration-300 hover:bg-[#ffbb32]	 focus:outline-none focus:shadow-outline"
              >
                Réservez
              </button>
            </div>
          </div>
        </form>
      }
    </div>
  );
};

export default BookingForm;
