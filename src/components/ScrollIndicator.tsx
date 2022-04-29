import styled from "styled-components";
import Indicator from "react-carousel-indicator";
import "react-carousel-indicator/dist/index.css";
import LinkButtons from "./LinkButtons";

interface ProductProp {
    id: string,
    modelName: string, 
    bodyType: string,
    modelType: string,
    imageUrl: string,
  }

type ChildProps = {
    data: ProductProp[]
  }

export default function ScrollIndicator({ data }: ChildProps) {

    return (
        <ScrollIndicatorContainer>
            <Indicator itemsPerSlide={1} itemGap={10}>    
            {data.map((item, index: number) => 
                <div key={index} className="carousel-info">
                    <p className="carousel-type">{item.bodyType}</p>
                    <div className="carousel-intro">
                        <h3>{item.modelName}</h3>
                        <p>{item.modelType}</p>
                    </div>
                    <img src={item.imageUrl} className="carousel-img"/>
                    <LinkButtons item={item}/>
                </div>
            )}
            </Indicator>
        </ScrollIndicatorContainer>
    );

}

const ScrollIndicatorContainer = styled.div`
  @media (max-width: 420px) {
      display: flex;
      flex-direction: row;
      overflow: visible;
      overflow-x: auto;
      ::-webkit-scrollbar {
        display: none;
      }
      .carousel-info {
        .carousel-type {
            color: #707070;
            font-size: 5vw;
            margin-bottom: 0;
            font-weight: 500;
        }
        .carousel-intro {
            h3 {
                margin: 1vh auto 0 auto;
            }
            p {
                margin-top: 1vh;
                color: #707070;
            }
        }
        .carousel-img {
            width: 100%;
        }
      }
      .carousel-buttons {
          display: flex;
          flex-direction: row;
          justify-content: center;
      }
    }
`;