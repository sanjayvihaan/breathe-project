import { Layout } from 'antd';
import { theme } from 'antd';
import SearchInput from '../components/SearchInput';
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi2";



const { Header } = Layout;

const AppHeader = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header style={{padding: 0, background: colorBgContainer }} className='flex items-center p-4 justify-between'>
        <h1 className='text-black text-2xl font-semibold'>Home</h1>
        <div className='flex flex-row px-3'>
            <SearchInput />
            <IoIosNotificationsOutline className='text-3xl text-black bg-gray-200 rounded-full p-1 mx-2' />
            <HiOutlineUserCircle className='text-3xl text-black bg-gray-200 rounded-full p-1' />
        </div>
    </Header>
  );
};

export default AppHeader;
