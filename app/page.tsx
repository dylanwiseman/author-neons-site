"use client";

import { useState, ReactNode } from "react";
import PlaceholderJPG from "../public/Neons Mockup 2.jpg";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import ImageMasonry from "../components/ImageMasonry";
import Alli from "../public/kitsune2.jpg";
import Anna from "../public/a3.jpg";
import Jostan from "../public/Jostan.jpg";
import Kilans from "../public/kv.jpg";
import Graysen from "../public/graysen.jpg";
import Grays from "../public/grays.jpg";
import Cole from "../public/cole.jpg";
import Meg2 from "../public/meg2.jpg";
import Meg1 from "../public/meg1.jpg";
import Kitsune from "../public/k2.jpg";
import Skates from "../public/skates.jpg";
import Lineup from "../public/porsche.jpg";
import GT from "../public/gt.jpg";
import K4 from "../public/kilans4.jpg";
import Fam from "../public/fam.jpg";
import Tamarack from "../public/tamarack.jpg";
import Lambo from "../public/lambo.jpg";
import Green from "../public/green.jpg";
import Muscle from "../public/muscleup-2.jpg";
import Image from "next/image";
import Link from "next/link";
import { Mail, Instagram, Menu, X } from "lucide-react";
import Logo from "../public/dyllogo.png";

// Sample image data - replace with your actual image data
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
    src: Anna,
    alt: "Arcade Anna",
    tags: ["Portraits"],
  },
  {
    src: Green,
    alt: "Utah",
    tags: ["Adventure"],
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
    src: Skates,
    alt: "Skates",
    tags: ["Portraits"],
  },
  {
    src: Cole,
    alt: "Cole",
    tags: ["Portraits"],
  },
  {
    src: Meg2,
    alt: "Meg",
    tags: ["Portraits"],
  },
  {
    src: GT,
    alt: "Ford GT",
    tags: ["Cars"],
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
    src: Lambo,
    alt: "Lambo",
    tags: ["Cars", "Events", "Brands"],
  },
  {
    src: Fam,
    alt: "Fam",
    tags: ["Portraits"],
  },
  {
    src: Kitsune,
    alt: "Kitsune",
    tags: ["Portraits", "Cars"],
  },
  {
    src: Muscle,
    alt: "Muscle Up",
    tags: ["Brands"],
  },
  // Add more images as needed
];

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
  const [isOpen, setIsOpen] = useState(true);

  const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  console.log(filter);

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
                  href="https://instagram.com/dylanwiseman"
                  className="text-black hover:text-gray-700"
                >
                  <Instagram className="w-6 h-6" />
                </Link>
              </div>
              <div className="mt-4 text-sm">
                <p>
                  [Your "About Me" information goes here. Write a brief
                  description about yourself, your photography style, and your
                  experience.]
                </p>
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
            href="https://instagram.com/dylanwiseman"
            className="text-black hover:text-gray-700"
          >
            <Instagram className="w-6 h-6" />
          </Link>
        </div>
        <div className="text-sm">
          <p>
            [I like my pics to pack a punch, whatever that means. DM or email to
            book :)]
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        <Box sx={{ minHeight: 829 }}>
          <Masonry columns={3} spacing={2}>
            {images.map((img, index) => (
              <div key={index}>
                {/* <img
                  srcSet={`${img.src}?w=162&auto=format&dpr=2 2x`}
                  src={`${img.src}?w=162&auto=format`}
                  loading="lazy"
                  style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: "block",
                    width: "100%",
                  }}
                /> */}
                <Image
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  // // fill
                  // sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  // className="object-contain"
                  // style={{ maxHeight: "100%", minHeight: "100%", margin: "2px" }}
                  // height={400}
                />
              </div>
            ))}
          </Masonry>
        </Box>
        {/* <div
          style={{
            width: "100%",
            maxHeight: "400px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {filteredImages.map((img, index) => (
            <Image
              key={index}
              src={img.src}
              alt={img.alt}
              // fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-contain"
              style={{ maxHeight: "100%", minHeight: "100%", margin: "2px" }}
              height={400}
            />
          ))}
        </div> */}
      </main>

      {/* <main className="flex-1 p-4 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((img, index) => (
            <div key={index} className="relative aspect-square overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </main> */}
    </div>
  );
}
