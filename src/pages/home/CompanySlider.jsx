import React, { useEffect } from "react";

const CompanySlider = () => {
  const initialStateLTR = -48 * 4; // Left-to-right initial translateX value
  const initialStateRTL = 36 * 4; // Right-to-left initial translateX value

  useEffect(() => {
    const setupIntersectionObserver = (element, isLTR, speed) => {
      if (!element) return;

      const scrollHandler = () => {
        // Use requestAnimationFrame for smoother scroll transitions
        requestAnimationFrame(() => {
          const translateX =
            (window.innerHeight - element.getBoundingClientRect().top) * speed;
          const totalTranslate = isLTR
            ? translateX + initialStateLTR
            : -(translateX + initialStateRTL);

          element.style.transform = `translateX(${totalTranslate}px)`;
        });
      };

      const observerCallback = (entries) => {
        if (entries[0].isIntersecting) {
          // Start translating only after the element is in view
          document.addEventListener("scroll", scrollHandler);
        } else {
          // Reset the transform when the element is out of view
          document.removeEventListener("scroll", scrollHandler);
          element.style.transform = "translateX(0)"; // Reset translation to 0
        }
      };

      const observer = new IntersectionObserver(observerCallback, {
        rootMargin: "0px 0px -30% 0px", // Trigger the observer a little before the element is fully visible
      });
      observer.observe(element);
    };

    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");

    setupIntersectionObserver(line1, true, 0.15);
    setupIntersectionObserver(line2, false, 0.15);
    setupIntersectionObserver(line3, true, 0.15);

    return () => {
      document.removeEventListener("scroll", () => {});
    };
  }, []);

  const logos = [
    {
      src: "https://cdn.vectorstock.com/i/1000v/41/21/microsoft-office-365-logo-vector-46834121.jpg",
      alt: "Unilever Logo",
      name: "Unilever",
    },
    {
      src: "https://i.pinimg.com/736x/da/3a/a7/da3aa7a36976feb8d8db5ad5383382cd.jpg",
      alt: "Samsung Logo",
      name: "Samsung",
    },
    {
      src: "https://i.pinimg.com/736x/d3/d5/81/d3d581d91037cbcec254dbd8c4ea558a.jpg",
      alt: "Facebook Logo",
      name: "Facebook",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpLm-s9O9xasccA1GicHyciVWEQmoVWr9Rg&s",
      alt: "Etsy Logo",
      name: "Etsy",
    },
    {
      src: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Office_Teams_Logo_512px.png",
      alt: "Apple Logo",
      name: "Apple",
    },
    {
      src: "https://static.android.com.pl/uploads/2021/06/microsoft-word-5963679_1280.png",
      alt: "Toyota Logo",
      name: "Toyota",
    },
    {
      src: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Office_PowerPoint_Logo_512px.png",
      alt: "HP Logo",
      name: "HP",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Microsoft_Office_Access_%282019-present%29.svg/2097px-Microsoft_Office_Access_%282019-present%29.svg.png",
      alt: "Spotify Logo",
      name: "Spotify",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Microsoft_Office_Visio_%282019%29.svg/512px-Microsoft_Office_Visio_%282019%29.svg.png",
      alt: "LinkedIn Logo",
      name: "LinkedIn",
    },
    {
      src: "https://banner2.cleanpng.com/20190716/tzv/kisspng-office-365-microsoft-outlook-microsoft-office-micr-1713879420361.webp",
      alt: "Google Logo",
      name: "Google",
    },
    {
      src: "https://seekvectors.com/files/download/microsoft%20office%20lens-01.png",
      alt: "Canon Logo",
      name: "Canon",
    },
    {
      src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6fb78546-ce17-44c0-8256-a22cafd40529/dfjerjb-d7590d18-a479-46d6-9e32-124a4cf4ac66.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZmYjc4NTQ2LWNlMTctNDRjMC04MjU2LWEyMmNhZmQ0MDUyOVwvZGZqZXJqYi1kNzU5MGQxOC1hNDc5LTQ2ZDYtOWUzMi0xMjRhNGNmNGFjNjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OUGBEUHz9CDg-eRu0ZvEehEvV44TXRIQMTUknf5w-c4",
      alt: "Ford Logo",
      name: "Ford",
    },
    {
      src: "https://cdn.icon-icons.com/icons2/2397/PNG/512/microsoft_office_excel_logo_icon_145720.png",
      alt: "Adobe Logo",
      name: "Adobe",
    },
    {
      src: "https://www.cdnlogo.com/logos/m/79/microsoft-office-sharepoint-2018-present.svg",
      alt: "Microsoft Logo",
      name: "Microsoft",
    },
    {
      src: "https://cdn0.iconfinder.com/data/icons/logos-microsoft-office-365/128/Microsoft_Office-03-512.png",
      alt: "IBM Logo",
      name: "IBM",
    },
    {
      src: "https://freebiehive.com/wp-content/uploads/2024/01/Microsoft-Copilot-Word-Logo-PNG-758x473.jpg",
      alt: "WhatsApp Logo",
      name: "WhatsApp",
    },
    {
      src: "https://w7.pngwing.com/pngs/135/119/png-transparent-microsoft-excel-course-visual-basic-for-applications-student-microsoft-class-rectangle-logo-thumbnail.png",
      alt: "Samsung Logo",
      name: "Samsung",
    },
    {
      src: "https://img.favpng.com/2/21/15/microsoft-powerpoint-logo-wordart-microsoft-office-shared-tools-png-favpng-iiK69r6aFArCrxvLrTf3mVb9C.jpg",
      alt: "Etsy Logo",
      name: "Etsy",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnd2TyZVMOXzrWiStnz4lliiEy3WyHulk3H51u7Mel9quFqJrG3mssPm86N6mxchhXiE&usqp=CAU",
      alt: "Samsung Logo",
      name: "Samsung",
    },
    {
      src: "https://www.microsoft.com/content/dam/microsoft/final/en-us/microsoft-brand/logo/Logo_SupplyChainManagement_scalable.png",
      alt: "Adobe Logo",
      name: "Adobe",
    },
    {
      src: "https://static-00.iconduck.com/assets.00/microsoft-edge-icon-256x256-eloac7cx.png",
      alt: "Intel Logo",
      name: "Intel",
    },
    {
      src: "https://visualstudio.microsoft.com/wp-content/uploads/2021/10/Product-Icon.svg",
      alt: "Coca-Cola Logo",
      name: "Coca-Cola",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC89qbyRl1ucpMnyTXiPOoTKGOVCCVKRlncKWEyi6U-DS3HY6787nqlO4yZY1yjxuo3B4&usqp=CAU",
      alt: "LinkedIn Logo",
      name: "LinkedIn",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Microsoft_Power_Platform_logo.svg/800px-Microsoft_Power_Platform_logo.svg.png",
      alt: "Toyota Logo",
      name: "Toyota",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/47/Chanel_logo.svg",
      alt: "Chanel Logo",
      name: "Chanel",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Sony_Logo.png",
      alt: "Sony Logo",
      name: "Sony",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/9e/WhatsApp_Logo_2023.svg",
      alt: "WhatsApp Logo",
      name: "WhatsApp",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Mercedes-Benz_logo.svg",
      alt: "Mercedes-Benz Logo",
      name: "Mercedes-Benz",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Toyota_logo_2019.svg",
      alt: "Toyota Logo",
      name: "Toyota",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/53/Intel_logo.svg",
      alt: "Intel Logo",
      name: "Intel",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Facebook_logo_2023.svg",
      alt: "Facebook Logo",
      name: "Facebook",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/WhatsApp_logo_2023.png",
      alt: "WhatsApp Logo",
      name: "WhatsApp",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/28/Ford_Logo.svg",
      alt: "Ford Logo",
      name: "Ford",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/65/CocaColaLogo.png",
      alt: "Coca-Cola Logo",
      name: "Coca-Cola",
    },
  ];

  // Ensure there are enough logos for slicing
  const line1Logos = logos.slice(0, 12);
  const line2Logos = logos.slice(12, 24);
  const line3Logos = logos.slice(24, 36);

  const renderLogos = (logos) =>
    logos.map((logo, index) => (
      <div
        key={index}
        className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-w-28 md:min-h-28 "
      >
        <img
          className="w-12 h-12 md:w-16 md:h-16"
          src={logo.src}
          alt={logo.alt}
        />
        <span className="text-[12px] md:text-[16px] font-semibold text-center">
          {logo.name}
        </span>
      </div>
    ));

  return (
    <div
      id="companies-container"
      className="flex flex-col gap-8 overflow-hidden"
    >
      <div id="companies-title" className="flex justify-center gap-2">
        <img className="translate-y-2" src="" alt="" />
        <span className="font-medium">APPS POWERED BY TODESKTOP</span>
        <img className="-scale-x-100 translate-y-2" src="" alt="" />
      </div>
      <div id="lines-group" className="flex flex-col gap-4">
        <div
          id="line1"
          className="flex gap-4 w-screen  transition-transform ease-linear"
          style={{ transform: "translateX(0)" }} // Ensuring it's initially visible
        >
          {renderLogos(line1Logos)}
        </div>
        <div
          id="line2"
          className="flex gap-4 w-screen  transition-transform ease-linear"
          style={{ transform: "translateX(0)" }} // Ensuring it's initially visible
        >
          {renderLogos(line2Logos)}
        </div>
        <div
          id="line3"
          className="flex md:hidden  gap-4 w-screen  transition-transform ease-linear"
          style={{ transform: "translateX(0)" }} // Ensuring it's initially visible
        >
          {renderLogos(line3Logos)}
        </div>
      </div>
    </div>
  );
};

export default CompanySlider;
