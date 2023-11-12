import React, { useState } from 'react';
import backend_url from '../../server';
import { useSelector } from 'react-redux';
import { AiOutlineCamera, AiOutlineDelete } from 'react-icons/ai';
import styles from '../../styles/styles';

const ProfileContent = ({ active }) => {
  const { user } = useSelector((state) => state.user);
  const { name, setName } = useState("user");

  return (
    <div className='w-full'>
      {/* profile page */}
      {active === 1 && (
        <>
          <div className='flex justify-center w-full'>
            <div className='relative'>
              <img
                //na9sa src mta3 avatar
                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]  "
                alt=""
              />
              <div className='w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]'>
                <AiOutlineCamera />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className='w-full px-5'>
            <form>
              <div className='w-full flex pb-3'>
                <div className='block pb-2'>
                  <label>full name</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%]`}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='block pb-2'>
                  <label>Email Address</label>
                  <input
                    type="email"
                    className={`${styles.input} !w-[95%]`}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className='w-full flex pb-3'>
                <div className='block pb-2'>
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%]`}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='block pb-2'>
                  <label> Address</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%]`}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>
        </>
      )}

      {/* Payment Methods section */}
      {active === 8 && (
        <div>
          <PaymentMethode />
        </div>
      )}
       {/* Address */}
       {active === 7 && (
        <div>
          <Address />
        </div>
      )}
    </div>
  );
};

const PaymentMethode = () => {
  return (
    <div className='w-full px-5'>
      <div className='flex w-full items-center justify-between'>
        <h1 className='text-[25px] font-[600] text-[#000000ba] pb-2'>
          Payment Methods
        </h1>
        <div className={`${styles.button} !rounded-md`}>
            <span className='text-[#fff]'>Add New</span>

        </div>
      </div>
      <br />
      <div className='w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 
      shadow justify-between pr-10'>
        <div className='flex items-center'>
            <img src="https://bonik-react.vercel.app/assets/images/payment-methods/Visa.svg" 
            alt="" />
<h5 className='pl-4 font-[500]'>Souha mlaihi </h5>
        </div>
<div className='pl-8 flex items-center'>
<h6>123**** *** ****</h6>
<h5 className='pl-6'>11/2023</h5>
</div>
<div className='min-w-[10%] flex items-center justify-between pl-8'>
    <AiOutlineDelete size={25} className='cursor-pointer '  />

</div>
      </div>
    </div>
  );
};
const Address =()=> {
    return (
        <div className='w-full px-5'>
        <div className='flex w-full items-center justify-between'>
          <h1 className='text-[25px] font-[600] text-[#000000ba] pb-2'>
            my address  </h1>
          <div className={`${styles.button} !rounded-md`}>
              <span className='text-[#fff]'>Add New</span>
  
          </div>
        </div>
        <br />
        <div className='w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 
        shadow justify-between pr-10'>
          <div className='flex items-center'>
              
  <h5 className='pl-4 font-[500]'>Default </h5>
          </div>
  <div className='pl-8 flex items-center'>
  <h6> ben arous mhamdia</h6>
 
  </div>
  <div className='pl-8 flex items-center'>
  <h6> (216) 55555555</h6>
 
  </div>
  <div className='min-w-[10%] flex items-center justify-between pl-8'>
      <AiOutlineDelete size={25} className='cursor-pointer '  />
  
  </div>
        </div>
      </div>  
    )
}
export default ProfileContent;
