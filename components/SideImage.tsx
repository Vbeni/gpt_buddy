// components/SideImage.tsx
import Image from 'next/image';

export default function SideImage() {
    return (
        <div className='sidebar-image'>
      <Image src="/images/black-n-white.png" alt="Description of Image" className="sidebar-image"
      width={500} 
      height={300} 
      />
      </div>
    );
  }
  