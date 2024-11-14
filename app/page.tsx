"use client";

import { useState, ReactNode, useEffect } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Alli from "../public/kitsune2.jpg";
import Anna from "../public/a3.jpg";
import Jostan from "../public/Jostan-2.jpg";
import Kilans from "../public/kv.jpg";
import Graysen from "../public/graysen.jpg";
import Grays from "../public/grays.jpg";
import Cole from "../public/cole.jpg";
import Meg2 from "../public/meg2.jpg";
import Meg1 from "../public/meg1.jpg";
import Kitsune from "../public/k2.jpg";
import Skates from "../public/skates.jpg";
import Lineup from "../public/porsche.jpg";
import Kelsey from "../public/kelsey.jpg";
import GT from "../public/gt.jpg";
import K4 from "../public/kilans4.jpg";
import Fam from "../public/fam.jpg";
import Tamarack from "../public/tamarack.jpg";
import Lambo from "../public/lambo.jpg";
import Green from "../public/green.jpg";
import Muscle from "../public/muscleup-2.jpg";
import SM1 from "../public/sm1.jpg";
import SM2 from "../public/sm2.jpg";
import Maycie from "../public/maycie.jpg";
import Lex1 from "../public/lex1.jpg";
import Lax from "../public/lax.jpg";
import Lex2 from "../public/lex2.jpg";
import Davis from "../public/davis.jpg";
import John from "../public/john.jpg";
import San from "../public/san.jpg";
import Rollink1 from "../public/rollink1.jpg";
import Rollink2 from "../public/rollink2.jpg";
import Momo1 from "../public/momo.jpg";
import Momo2 from "../public/momo2.jpg";
import LC from "../public/lc.jpg";
import Charlie from "../public/charlie.jpg";
import Aniqi from "../public/aniqi.jpg";
import Aniqi2 from "../public/aq.jpg";
import Image from "next/image";
import Link from "next/link";
import { Mail, Instagram, Menu, X } from "lucide-react";
import Logo from "../public/dyllogo.png";

const images = [
  {
    src: Alli,
    alt: "Kitsune GR86",
    tags: ["Portraits", "Cars"],
  },
  {
    src: Tamarack,
    alt: "Tamarack Beach",
    tags: ["Adventure"],
  },
  {
    src: Graysen,
    alt: "Graysen",
    tags: ["Portraits"],
  },
  {
    src: Davis,
    alt: "Davis",
    tags: ["Portraits"],
  },
  {
    src: Anna,
    alt: "Arcade Anna",
    tags: ["Portraits"],
  },
  {
    src: Lex1,
    alt: "Lex",
    tags: ["Portraits"],
  },
  {
    src: Green,
    alt: "Utah",
    tags: ["Adventure"],
  },
  {
    src: Kelsey,
    alt: "Kelsey",
    tags: ["Portraits"],
  },
  {
    src: Jostan,
    alt: "Jostan",
    tags: ["Portraits"],
  },
  {
    src: Kilans,
    alt: "Viper Room",
    tags: ["Events"],
  },
  {
    src: Charlie,
    alt: "Charlie",
    tags: ["Portraits"],
  },
  {
    src: Skates,
    alt: "Skates",
    tags: ["Portraits"],
  },
  {
    src: Momo1,
    alt: "Momoyao",
    tags: ["Portraits", "Brands"],
  },
  {
    src: SM2,
    alt: "SM2",
    tags: ["Brands", "Adventure"],
  },
  {
    src: Cole,
    alt: "Cole",
    tags: ["Portraits"],
  },
  {
    src: Rollink1,
    alt: "Rollink",
    tags: ["Brands", "Adventure"],
  },
  {
    src: Meg2,
    alt: "Meg",
    tags: ["Portraits"],
  },
  {
    src: Lex2,
    alt: "Lex2",
    tags: ["Portraits"],
  },
  {
    src: GT,
    alt: "Ford GT",
    tags: ["Cars"],
  },
  {
    src: Maycie,
    alt: "Maycie",
    tags: ["Portraits"],
  },
  {
    src: Meg1,
    alt: "Meg",
    tags: ["Portraits"],
  },
  {
    src: Lineup,
    alt: "Porsche",
    tags: ["Cars", "Events"],
  },
  {
    src: Grays,
    alt: "Graysen",
    tags: ["Portraits"],
  },
  {
    src: K4,
    alt: "Kilans",
    tags: ["Events", "Portraits"],
  },
  {
    src: SM1,
    alt: "Snow1",
    tags: ["Brands", "Adventure"],
  },
  {
    src: Lambo,
    alt: "Lambo",
    tags: ["Cars", "Events", "Brands"],
  },
  {
    src: John,
    alt: "John",
    tags: ["Brands", "Adventure"],
  },
  {
    src: Rollink2,
    alt: "Rollink2",
    tags: ["Brands", "Adventure"],
  },
  {
    src: Fam,
    alt: "Fam",
    tags: ["Portraits"],
  },
  {
    src: Momo2,
    alt: "Momoyao2",
    tags: ["Brands"],
  },
  {
    src: Lax,
    alt: "Lax",
    tags: ["Brands"],
  },
  {
    src: Kitsune,
    alt: "Kitsune",
    tags: ["Portraits"],
  },
  {
    src: LC,
    alt: "Lucky Cat",
    tags: ["Brands"],
  },
  {
    src: Aniqi2,
    alt: "Aniqi",
    tags: ["Brands"],
  },
  {
    src: San,
    alt: "Sarah Ann",
    tags: ["Portraits"],
  },
  {
    src: Muscle,
    alt: "Muscle Up",
    tags: ["Brands"],
  },
  // Add more images as needed
];

//@ts-ignore
const allTags = ["All", ...new Set(images.flatMap((img) => img.tags))];

// Button component
const Button = ({
  children,
  onClick,
  variant = "default",
  size = "default",
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "default" | "outline";
  size?: "default" | "icon";
  className?: string;
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  };
  const sizeStyles = {
    default: "h-10 py-2 px-4",
    icon: "h-10 w-10",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Sheet components
const Sheet = ({
  children,
  open,
  onOpenChange,
}: {
  children: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  return (
    <div className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "15px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

const SheetTrigger = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <div id="sheet-trigger-div" onClick={onClick}>
      {children}
    </div>
  );
};

const SheetContent = ({
  children,
  open,
  onClose,
}: {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50"
          onClick={onClose}
          style={{ background: "rgba(0,0,0,.5" }}
        />
      )}
      <div
        style={{ background: "white" }}
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
        >
          <X className="h-8 w-8" />
          <span className="sr-only">Close</span>
        </button>
        {children}
      </div>
    </>
  );
};

export default function PhotographyPortfolio() {
  const [filter, setFilter] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const [columns, setColumns] = useState(1); // Default to 1 column

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setColumns(4); // Large screens
      } else if (width >= 768) {
        setColumns(3); // Medium screens
      } else if (width >= 640) {
        setColumns(2); // Small screens
      } else {
        setColumns(1); // Extra small screens
      }
    };

    // Set initial column count
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredImages =
    filter === "All"
      ? images
      : images.filter((img) => img.tags.includes(filter));

  const handleFilterClick = (tag: string) => {
    setFilter(tag);
    setIsOpen(false);
  };

  const FilterButton = ({
    tag,
    onClick,
  }: {
    tag: string;
    onClick: (tag: string) => void;
  }) => (
    //@ts-ignore
    <button
      style={
        filter === tag
          ? { color: "white", backgroundColor: "black" }
          : { color: "black" }
      }
      onClick={() => {
        console.log("tag:", tag, typeof tag, typeof filter);
        console.log(tag === filter);
        onClick(tag);
      }}
      className={`px-4 py-2 text-left text-blue ${
        filter === tag ? "bg-black text-white" : "text-blue hover:bg-gray-200"
      }`}
    >
      {tag}
    </button>
  );

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* Mobile Header */}
      <header className="md:hidden bg-white p-4 flex justify-between items-center">
        <Image
          src={Logo}
          alt="Your Logo"
          width={200}
          height={50}
          className="h-12 w-auto"
        />
        <SheetTrigger onClick={() => setIsOpen(true)}>
          <Button variant="outline" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="flex flex-col space-y-4 mt-8">
              {allTags.map((tag) => (
                <FilterButton key={tag} tag={tag} onClick={handleFilterClick} />
              ))}
              <div className="flex space-x-4 mt-4">
                <Link
                  href="mailto:dylan.wiseman22@gmail.com"
                  className="text-black hover:text-gray-700"
                >
                  <Mail className="w-6 h-6" />
                </Link>
                <Link
                  href="https://instagram.com/dylwiseman"
                  className="text-black hover:text-gray-700"
                >
                  <Instagram className="w-6 h-6" />
                </Link>
              </div>
              <div className="mt-4 text-sm">
                <p>DM or email to book a shoot :)</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 p-6 bg-white">
        <div className="mb-8">
          <Image
            src={Logo}
            alt="Your Logo"
            width={400}
            height={100}
            // className="h-12 w-auto"
          />
        </div>
        <nav className="flex flex-col space-y-2 mb-8">
          {allTags.map((tag) => (
            <FilterButton key={tag} tag={tag} onClick={setFilter} />
          ))}
        </nav>
        <div className="flex space-x-4 mb-4">
          <Link
            href="mailto:dylan@example.com"
            className="text-black hover:text-gray-700"
          >
            <Mail className="w-6 h-6" />
          </Link>
          <Link
            href="https://instagram.com/dylwiseman"
            className="text-black hover:text-gray-700"
          >
            <Instagram className="w-6 h-6" />
          </Link>
        </div>
        <div className="text-sm">
          <p>DM or email to book a shoot :)</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        <Box sx={{ minHeight: 829 }}>
          <Masonry columns={columns} spacing={1}>
            {filteredImages.map((img, index) => (
              <div key={index}>
                <Image key={index} src={img.src} alt={img.alt} />
              </div>
            ))}
          </Masonry>
        </Box>
      </main>
    </div>
  );
}
