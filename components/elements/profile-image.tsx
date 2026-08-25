import Image from "next/image";

const ProfileImage = () => (
  <Image
    src="/profile.jpeg"
    alt="Profile"
    width={256}
    height={256}
    className="w-full h-full object-cover"
  />
);

export default ProfileImage;
