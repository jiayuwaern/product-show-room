import Link from 'next/link';
import ArrowIcon from '../assets/ArrowIcon';
import styled from "styled-components";

export default function LinkButtons({ item }) {

    return (
        <LinksContainer>
            <div className='links-button'>        
                <Link href={`/learn/${item.id}`}>
                    <p>learn</p>
                </Link>
                <ArrowIcon className='links-icon'/>
            </div>
            <div className='links-button'>        
                <Link href={`/shop/${item.id}`}>
                    <p>shop</p>
                </Link>
                <ArrowIcon className='links-icon'/>
            </div>
        </LinksContainer>
    )
}

const LinksContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-top: 2vh;
    .links-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 30vw;
        p {
            color: #326bb4;
            font-weight: Bold;
            text-transform: uppercase;
            margin-left: 20px;
        }
        .links-icon {
            width: 4vw;
            margin-left: 2vw;
        }
    }

    @media (min-width: 1024px) {
        margin-top: 10vh;
        .links-button {
            p {
                font-size: 3.5vw;
            }
        }
    }
`