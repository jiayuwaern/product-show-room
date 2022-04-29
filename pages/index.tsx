import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Carousel from '../src/components/Carousel';
import styled from "styled-components";

const MainContainer = styled.div`
  @media (min-width: 420px) {
  }

  @media (min-width: 1024px) {
  }
`;

interface ProductProp {
    id: string,
    modelName: string, 
    bodyType: string,
    modelType: string,
    imageUrl: string,
}

const Homepage: NextPage = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState<number | any>();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentDisplay, setCurrentDisplay] = useState<ProductProp[] | []>([]);

  useEffect(() => {
    const fetchData =  async () => {
      const response = await fetch('./cars.json');
      const productData = await response.json();
      setData(productData);
      setCount(productData.length);
    }
    fetchData();
  }, [])

    useEffect(() => {
        setCurrentDisplay(data.slice((currentPage - 1) * 4 , currentPage * 4));
    },[data]);

    useEffect(() => {
    },[currentDisplay]);

  return (
    <div>
      <MainContainer>
          <Carousel 
            data={data} 
            count={count} 
            currentDisplay={currentDisplay} 
            setCurrentDisplay={setCurrentDisplay} 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage}/>
      </MainContainer>
    </div>
  )
}

export default Homepage;
