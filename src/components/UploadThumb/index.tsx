import React, { ImgHTMLAttributes, useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Upload, message } from 'antd';
import { FiLoader, FiPlus } from 'react-icons/fi';

const Thumbnail: React.FC = () => {
  const [imageUrl, setimageUrl] = useState();

  const handleChange = (info: any): any => {
    console.log(info.originFileObj);
  };

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action=""
      beforeUpload={() => true}
      onChange={event => handleChange(event.file)}
    >
      {imageUrl ? (
        <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
      ) : (
        <>
          <div>
            {false ? <FiLoader /> : <FiPlus />}
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </>
      )}
    </Upload>
  );
};

export default Thumbnail;
