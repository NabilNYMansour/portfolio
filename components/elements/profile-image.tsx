"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

const ProfileImage = () => {
  const [profileImage] = useState(() =>
    Math.random() < 0.5 ? "/profile.jpeg" : "/fractal.png"
  );

  return (
    <Image src={profileImage} alt="Profile" width={256} height={256} className="w-full h-full object-cover" />
  );
};

const Loading = () => <div className="flex items-center justify-center h-63">
  <Loader2 className="w-4 h-4 animate-spin" />
</div>;

export default dynamic(() => Promise.resolve(ProfileImage), { ssr: false, loading: Loading });
