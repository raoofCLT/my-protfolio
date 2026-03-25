interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  width?: number;
  className?: string;
  aspectRatio?: string;
}

/**
 * Reusable component for Cloudinary images with auto-optimization.
 */
export const CloudinaryImage = ({ 
  publicId, 
  alt, 
  width = 800, 
  className = "", 
  aspectRatio = "auto" 
}: CloudinaryImageProps) => {
  // Replace with your actual Cloudinary Cloud Name in .env
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "demo";
  
  // f_auto: best format
  // q_auto: best quality
  const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;
  const transformations = `f_auto,q_auto,w_${width}`;
  
  const src = `${baseUrl}/${transformations}/${publicId}`;

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={{ aspectRatio }}
      className={`block w-full h-full object-cover ${className}`}
    />
  );
};
