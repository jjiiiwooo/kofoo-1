import styled from "styled-components";

const Box = styled.div`

    display: flex;
    width: 1175px;
    height: 170px;
    left: 99px;
    top: 484px;
    margin:0 auto;

    background: #F4F2F2;
    border-radius: 30px;

    //컴포넌트간 간격
    &+& {
        border-top: 1px solid #dee2e6;
        margin-bottom:3rem;
    }
`;

const Thumbnail = styled.div`
        margin-right: 1rem;
        img {
            margin-top:1rem;
            margin-left:1rem;
            border-radius: 30px;
            display:block;
            width: 299px;
            height:132px;
            object-fit: cover;
        }
    `;

const Content = styled.div`
        p {
            margin:0;
            margin-top:3rem;
            margin-left:3rem;
            white-space: normal;
            font-family: 'IBM Plex Mono';
            font-style: normal;
            font-weight: 700;
            font-size: 40px;
            line-height: 1.5rem;
        }
    `;




const MenuItem = ({food}) => {
    const {id, FoodImage, FoodName, caption} = food;


    return (
        <Box> 
            <Thumbnail>
                <div key={id}>
                <img src={FoodImage} alt={caption} />
                </div>
            </Thumbnail>
            <Content>
                <p>{FoodName}</p>
            </Content>
        </Box>
    );
};

export default MenuItem;