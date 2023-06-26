import { useMutation } from '@apollo/client';
import { IMAGE_PRESIGN } from '@/apollo/mutations';
import { imageType } from '@/utils/constants/imageType';

interface UseImagePresignProps {
  imageData: File;
}

const useImagePresign = ({ imageData }: UseImagePresignProps) => {
  return useMutation(IMAGE_PRESIGN, {
    variables: {
      presignedUrlInput: {
        fileName: `${Date.now()} ${imageData.name}`,
        type: imageType[imageData.type]
      }
    },
    onCompleted: (data) => {
      return data;
    },
    onError: (err) => {
      console.warn('image presigned error: ', err);
    }
  });
};

export default useImagePresign;
