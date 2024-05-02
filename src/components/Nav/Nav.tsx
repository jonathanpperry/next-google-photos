import Link from "next/link";

import Container from "@/components/Container";
import UploadButton from "@/components/UploadButton";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex items-center h-16 border border-zinc-200">
      <Container className="flex items-center flex-row">
        <Link className="flex items-center flex-row" href="/">
          <p className="flex-grow-0 mb-0 mr-4 flex-row">
            <Image
              width={50}
              height={50}
              src="/Google-Photos.png"
              alt="brand-image"
            />
          </p>
          <p>Jonny Ramen Photos</p>
        </Link>
        <ul className="flex flex-grow justify-end gap-6 m-0">
          <li>
            <UploadButton />
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Nav;
