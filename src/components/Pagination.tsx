import styled from "styled-components";
import ChevronIcon from '../assets/ChevronIcon';
import React, { useEffect } from 'react'
import LinkButtons from "./LinkButtons";

type ChildProps = {
    postsPerPage: number,
    totalPosts: number,
    data: ProductProp[],
    currentDisplay: ProductProp[],
    setCurrentDisplay: React.Dispatch<React.SetStateAction<ProductProp[]>>,
    currentPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
    searchResult: ProductProp[]
  }

interface ProductProp {
    id: string,
    modelName: string, 
    bodyType: string,
    modelType: string,
    imageUrl: string,
}
  
const Pagination = ({ postsPerPage, totalPosts, data, currentDisplay, setCurrentDisplay, currentPage, setCurrentPage, searchResult } : ChildProps) => {
    const PageNumbers = [];
    const horizontalTransform = "scale(-1 1)";
    const int = Math.ceil(totalPosts / postsPerPage);
    
    useEffect(() => {
        setCurrentDisplay(data.slice((currentPage - 1) * 4 , currentPage * 4));
    },[currentPage]);

    if (int === 1 ) return null;
    for (let i = 1; i <= int; i++) {
        PageNumbers.push(i as never);
    };

    const prevPageHandler = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else {
            setCurrentPage(1);
        }
    }

    const nextPageHandler = () => {
        if (currentPage < PageNumbers.length) {
            setCurrentPage(currentPage + 1);
        } else {
            setCurrentPage(currentPage);
        }
    }
    
    return (
        <div>
            <PaginationContainer>
            {searchResult.length >= 1 ? 
                searchResult.map((item, index: number) => 
                <div key={index} className="carousel-info">
                    <h3>{item.bodyType}</h3>
                    <div className="carousel-intro">
                        <h1>{item.modelName}</h1>
                        <h2>{item.modelType}</h2>
                    </div>
                    <img src={item.imageUrl} className="carousel-img"/>
                    <LinkButtons item={item}/>
                </div>
                ) :
                currentDisplay.map((item, index: number) => 
                <div key={index} className="carousel-info">
                    <h3>{item.bodyType}</h3>
                    <div className="carousel-intro">
                        <h1>{item.modelName}</h1>
                        <h2>{item.modelType}</h2>
                    </div>
                    <img src={item.imageUrl} className="carousel-img"/>
                    <LinkButtons item={item}/>
                </div>
                )}
            </PaginationContainer >
            {currentDisplay.length >= 4 && searchResult.length < 1 ?
            <CarouselButtonsContainer>
                <ChevronIcon onClick={()=> prevPageHandler()} transform={horizontalTransform}/>
                <ChevronIcon onClick={()=> nextPageHandler()} transform=""/>
            </CarouselButtonsContainer>
            : ""}
            {searchResult.length > 4 ?
            <CarouselButtonsContainer>
                <ChevronIcon onClick={()=> prevPageHandler()} transform={horizontalTransform}/>
                <ChevronIcon onClick={()=> nextPageHandler()} transform=""/>
            </CarouselButtonsContainer>
            : ""}
        </div>
    )
}
export default Pagination;

const PaginationContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 0;
    .carousel-info{
        padding: 1vw;
        h3 {
            font-size: 0.8rem;
            color: #707070;
            margin-bottom: 0;
            font-weight: 100;
        }
        .carousel-intro {
            display: flex;
            flex-direction: row;
            align-items: center;
            h1 {
                font-size: 1rem;
                margin-right: 1vw;
            }
            h2 {
                font-size: 0.8rem;
                color: #707070;
                font-weight: 100;
            }
        }
    }
    .carousel-img {
        width: 22.5vw;
    }
`;

const CarouselButtonsContainer = styled.div`
    width: 6vw;
    display: flex;
    flex-direction: row;
    margin-left: 90%;
`
