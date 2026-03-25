interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  aspectRatio?: string;
  crop?: "fill" | "scale" | "fit" | "limit" | "thumb";
  gravity?: "auto" | "face" | "center";
}

/**
 * Reusable component for Cloudinary images with advanced auto-optimization.
 */
export const CloudinaryImage = ({ 
  publicId, 
  alt, 
  width = 800, 
  height,
  className = "", 
  aspectRatio = "auto",
  crop = "fill",
  gravity = "auto"
}: CloudinaryImageProps) => {
  // Use the user's cloud name (dc6hniypp) as fallback
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "dc6hniypp";
  
  // f_auto: best format (WebP/AVIF)
  // q_auto: best quality/compression ratio
  // dpr_auto: resolution based on device pixel density
  // c_fill: crop to fill dimensions
  // g_auto: smart focus on important parts
  const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;
  const transformationParts = [
    "f_auto",
    "q_auto",
    "dpr_auto",
    `w_${width}`,
    height ? `h_${height}` : "",
    `c_${crop}`,
    gravity !== "center" ? `g_${gravity}` : ""
  ].filter(Boolean);

  const transformations = transformationParts.join(",");
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
