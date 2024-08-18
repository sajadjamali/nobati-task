import Map from './Map';
import profile from '../assets/images/profile.png';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { useState } from 'react';

function Main() {

  const [tab, setTab] = useState<Number>(0);

  return (
    <div className='pt-3 px-7 bg-slate-100 relative rounded-xl bottom-3'>

      <section className='flex'>
        <img src={profile} className='border-8 absolute top-[-60px] rounded-full border-white' alt="profile" />
        <p className="text-[#424242DE] relative mt-2 right-14 mx-auto text-xl text-center font-bold">پیرایش معین</p>
      </section>

      <section className='mt-12 font-bold'>
        <div className='flex justify-evenly items-center'>
          <div className='flex items-center'>
            <span className='text-[#424242] me-2'>4.8</span>
            <StarBorderRoundedIcon fontSize='large' sx={{ color: "#F8B300" }} />
          </div>
          <div className='w-0.5 h-10 bg-gray-300'></div>
          <div className='flex items-center'>
            <span className='text-[#424242] me-1'>215</span>
            <PersonOutlineRoundedIcon fontSize='large' sx={{ color: "#200E32" }} />
          </div>
          <div className='w-0.5 h-10 bg-gray-300'></div>
          <VerifiedUserOutlinedIcon sx={{ color: "#200E32" }} />
        </div>
        <button className='bg-[#5A3BF1] text-white w-full mt-4 rounded-md p-3'>
          دریافت نوبت
          <CheckBoxOutlinedIcon className='float-start' />
        </button>
      </section>

      <section className='mt-4 pb-2'>
        <div className='flex justify-between text-[#424242]
         [&>button]:rounded-t-xl [&>button]:transition-colors
         [&>button]:duration-200 [&>button]:py-3 [&>button]:px-8'>
          <button onClick={() => setTab(0)} className={`${tab == 0 ? "bg-slate-300" : ''}`}>مشخصات</button>
          <button onClick={() => setTab(1)} className={`${tab == 1 ? "bg-slate-300" : ''}`}>نظرات</button>
          <button onClick={() => setTab(2)} className={`${tab == 2 ? "bg-slate-300" : ''}`}>پست</button>
        </div>
        <div className='text-[#424242] bg-slate-200 p-3'>
          {
            tab == 0 &&
            <div className='text-sm space-y-3'>
              <p className='p-2 rounded-lg bg-white text-justify leading-6'>
                ولورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم استم
              </p>
              <p className='p-2 rounded-lg bg-white leading-6'>
                شبکه اجتماعی:
              </p>
              <p className='p-2 rounded-lg bg-white'>
                ساعت کاری : 09:00 الی 21:30
              </p>
              <p className='p-2 rounded-lg bg-white'>
                آدرس: قزوین خانه خلاق نوآوری سعدالسلطنه
              </p>
              <Map
                position={[35.6, 51.4]}
                center={[35.6, 51.4]}
              />
            </div>
          }
          {
            tab == 1 &&
            <div>
              فعلا محتوایی وجود ندارد
            </div>
          }
          {
            tab == 2 &&
            <div>
              فعلا خالیه
            </div>
          }
        </div>
      </section>

    </div>
  )
}

export default Main;