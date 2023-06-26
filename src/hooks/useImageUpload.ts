const useImageUpload = () => {
  const handleImageUpload = async (imageData: File, presignedUrl: string) => {
    try {
      const response = await fetch(presignedUrl, {
        method: 'PUT',
        body: imageData,
        headers: {
          'Content-type': imageData.type
        }
      });
      return response;
    } catch (err) {
      console.log('s3에 이미지 업로드 실패: ', err);
    }
  };

  return { handleImageUpload };
};

export default useImageUpload;
