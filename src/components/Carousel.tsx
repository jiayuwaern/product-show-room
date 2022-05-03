import ScrollIndicator from './ScrollIndicator';
import { useEffect, useState } from 'react';
import "react-carousel-indicator/dist/index.css";
import Pagination from './Pagination';

interface ProductProp {
  id: string,
  modelName: string, 
  bodyType: string,
  modelType: string,
  imageUrl: string,
}

type ChildProps = {
  data: ProductProp[],
  count: number,
  currentDisplay: ProductProp[],
  setCurrentDisplay: React.Dispatch<React.SetStateAction<ProductProp[]>>,
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  searchResult: ProductProp[],
}

const Carousel = ({count, data, currentDisplay, setCurrentDisplay, currentPage, setCurrentPage, searchResult } : ChildProps ) => {
  const [isDesktop, setDesktop] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 420) {
          setDesktop(true);
        } else {
          setDesktop(false);
        }
    
        const updateMedia = () => {
          if (window.innerWidth > 1024) {
            setDesktop(true);
          } else {
            setDesktop(false);
          }
        };
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
      }, [isDesktop]);

    return (
        <div>
            {isDesktop ? (
              <Pagination 
                totalPosts={count} 
                postsPerPage={4} 
                data={data} 
                currentDisplay={currentDisplay}
                setCurrentDisplay={setCurrentDisplay}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                searchResult={searchResult}/>
              ) : (
                <ScrollIndicator data={data} searchResult={searchResult}/>
              )}
        </div>
    )
}
 
export default Carousel;