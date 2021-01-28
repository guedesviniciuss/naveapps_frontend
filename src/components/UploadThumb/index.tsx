import React, { ImgHTMLAttributes, useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Upload, message } from 'antd';
import { FiLoader, FiPlus } from 'react-icons/fi';

interface GetBase64Params {
  img: File;
  callback(reader: string | null | ArrayBuffer): void;
}

function getBase64({ img, callback }: GetBase64Params): void {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file: File): boolean {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

const Thumbnail: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setimgageUrl] = useState();

  const handleChange = (info: any): any => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      /* getBase64(info.file.originFileObj, imageUrl => {
        console.log('teucu');
      }); */
    }
  };

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={beforeUpload}
      onChange={event => handleChange(event.file)}
    >
      {imageUrl ? (
        <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
      ) : (
        <>
          <div>
            {loading ? <FiLoader /> : <FiPlus />}
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </>
      )}
    </Upload>
  );
};

export default Thumbnail;
