interface ImageType {
  [key: string]: string;
}

export const imageType: ImageType = {
  'image/png': 'PNG',
  'image/jpeg': 'JPG',
  'image/svg': 'SVG',
  'image/gif': 'GIF',
  'image/webp': 'WEBP',
  'image/tiff': 'TIFF',
  'image/bmp': 'BMP',
  'image/vnd.microsoft.icon': 'ICO'
};
