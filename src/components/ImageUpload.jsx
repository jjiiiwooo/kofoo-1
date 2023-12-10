import {useState, useRef} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width:100%;
  height:25vh;
  display:flex;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  

`;

const ImContainer = styled.div`
  width:100%;
  height:25vh;

  img{
    width:100%;
    height:25vh;
  }
`;

const SelectButton = styled.button`
  position: relative;
  top:40vh;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 3vh;
  line-height: 27px;
  background: #C5DBFC;
  border-radius: 15px;


`;

const SendButton = styled.button`
  float:left;
  margin-right:10vw;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 3vh;
  line-height: 27px;
  background: #FBCCCC;
  border-radius: 15px;
`;



const ImageUpload = () => {
    const [Image, setImage] = useState(null); 
    const InputRef = useRef(null);
    const navigate = useNavigate();
    const uploadicon = "/img/upload.png";

    const onImageUpload = (e) => {
      setImage(e.target.files[0]);
    };

    //이미지 파일 서버로 전송
    const onUpload = async () => {
        try {
            const formData = new FormData(); 
            formData.append("image", Image);
            await axios.post('http://localhost:3001/images',formData);
            console.log(Image);
            navigate('/login/main/picture/menu');
        } catch(error) {
            console.error(error);
        }
    };

    return (
        <> 
        <input type="file"
        accept=".jpg,.png,.jpeg"
        onChange={onImageUpload} 
        ref={InputRef}
        style={{display:"none"}}/>

        <SelectButton onClick={()=> InputRef.current.click()}>Select Image</SelectButton>
        {Image?(
            <div>
                <ImContainer> <img src={URL.createObjectURL(Image)} alt="SelectedImage"/></ImContainer>
                <SendButton onClick={onUpload}>Send Image</SendButton>
            </div>
        ): (
            <Container><img src={uploadicon} alt=""/></Container>
        )}
        </>
    );
};

export default ImageUpload;