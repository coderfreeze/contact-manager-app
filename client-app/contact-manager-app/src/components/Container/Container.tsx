import * as React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import DataTable from '../DataTable/DataTable';
import { ContactData } from '../../interface/ContactData';
import { serverUrl } from '../../Helpers/Constants';
import axios from 'axios';

interface IContainerProps {
}

const Container: React.FunctionComponent<IContainerProps> = () => {

  const [data, setData] = React.useState<ContactData[]>([]);

  const fetchTableData = async() => {
    const response = await axios.get(`${serverUrl}/contacts`);
    console.log("The response from the server is: ", response);
    setData(response.data);
    console.log("Data: ", data);
  };

  React.useEffect(() => {
    fetchTableData();
  });

  return (
    <div className='flex-grow'>
      <FormContainer/>
      <DataTable data={data}/>
    </div>
  );
};

export default Container;
