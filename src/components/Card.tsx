import styled from "styled-components"
import { Link } from 'react-router-dom'


interface CardProps {
    imageUrl: string,
    imageDescription: string,
    projectUrl: string;
}

const Box = styled.div`
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    background-color: #FFFFFF;
    width: 250px;
    height: 300px;
    border-radius: 24px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        transition: 0.3s;
        scale: 1.2;
    }
`


const CompanyPhoto = styled.img`
    height: 100%;
    width: 100%;
`

const Card: React.FC<CardProps> = ({ imageUrl, imageDescription, projectUrl }) => {


    return (
        <Link to={projectUrl} target="_blank">
            <Box>
                <CompanyPhoto src={imageUrl} alt={imageDescription}>
                </CompanyPhoto>
            </Box>
        </Link>

    )
}

export default Card;