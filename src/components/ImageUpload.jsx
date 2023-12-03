import {useState, useRef} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 1039px;
  height: 493px;
  left: 213px;
  top: 237px;
  background: #FFFFFF;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content: center;

`;

const SelectButton = styled.button`
  height: 115px;
  left: 213px;
  position: absolute;
  top: 940px;
  width: 452px;
  border-radius: 50px;
  background-color: #c5dbfc;
  font-family: Inter;
  font-size: 60.5px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;
  color: #000;

`;

const SendButton = styled.button`
  height: 115px;
  left: 775px;
  position: absolute;
  top: 940px;
  width: 452px;
  border-radius: 50px;
  background-color: #fbcccc;
  font-family: Inter;
  font-size: 60.5px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;
  color: #000;
`;

const Icon = styled.img`
  position: absolute;
  width: 150px;
  height: 170.21px;
  left: 450px;
  bottom:450px;
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
                <img src={URL.createObjectURL(Image)} alt="SelectedImage" width="1039" height="493" />
                <SendButton onClick={onUpload}>Send Image</SendButton>
            </div>
        ): (
            <Container><Icon src={uploadicon} alt=""/></Container>
        )}
        </>
    );
};

export default ImageUpload;