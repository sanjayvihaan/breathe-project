import { IoSearchOutline } from "react-icons/io5";
import { Input } from 'antd';

const SearchInput = () => {
    return (
        <Input
            placeholder=' Search...'
            prefix={<IoSearchOutline className='site-form-item-icon text-2xl bg-gray-200 rounded-full p-1' />}
            style={{
                width: '280px',
                margin: '0 10px',
                
            }}
            className=" has-[:focus] border-b-2 border-gray-200"
        />
    );
}

export default SearchInput;