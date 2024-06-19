import * as React from 'react';
import axios from 'axios';
import { serverUrl } from '../../Helpers/Constants';

interface IAddContactProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddContact: React.FunctionComponent<IAddContactProps> = (props) => {

    const [name, setName] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [phone, setPhone] = React.useState<string>("");

    const { isOpen, onClose } = props;

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post(`${serverUrl}/contacts`, {
                name: name,
                email: email,
                phone: phone
            });
            setName("");
            setEmail("");
            setPhone("");
            onClose();
        } catch (error) {
            console.log(error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-2xl font-bold text-gray-800'>Add Contact</h2>
                    <button onClick={onClose} className='text-gray-500 hover:text-gray-700 text-2xl'>&times;</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>Name</label>
                        <input type='text' value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}  placeholder='Name' required className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
                        <input type='email' value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} placeholder='Email' required className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='phone'>Phone Number</label>
                        <input type='tel' value={phone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)} placeholder='Phone Number' required className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                    </div>
                    <div className='flex justify-end'>
                        <button type='button' onClick={onClose} className='mr-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400'>
                            Cancel
                        </button>
                        <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddContact;

