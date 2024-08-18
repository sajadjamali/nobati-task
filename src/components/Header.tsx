import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Battery50OutlinedIcon from '@mui/icons-material/Battery50Outlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import SignalCellular4BarOutlinedIcon from '@mui/icons-material/SignalCellular4BarOutlined';
import SignalWifiStatusbar4BarOutlinedIcon from '@mui/icons-material/SignalWifiStatusbar4BarOutlined';
import backGroundImage from "../assets/images/backGroundImage.png";
import ValletIcon from './icons/ValletIcon';

function Header() {
  return (
    <div
      style={{
        backgroundImage: `url(${backGroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="bg-[#9086bf] flex justify-between py-2 px-4">

        <div className="flex">
          <Battery50OutlinedIcon />
          <SignalCellular4BarOutlinedIcon />
          <SignalWifiStatusbar4BarOutlinedIcon />
        </div>
        <p className='text-[#000000CC] font-semibold'>9:30</p>
      </section>

      <section className='flex pb-20 justify-between items-center text-white p-3'>
        <ArrowForwardOutlinedIcon fontSize='large' />
        <div className='flex gap-x-5'>
          <ValletIcon />
          <MoreVertOutlinedIcon fontSize='medium' />
        </div>
      </section>

    </div>
  )
}

export default Header