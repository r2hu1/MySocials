"use client";

import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Share2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import LinkCard from "./card";

import { Icons } from "./icons";
import { FaCheckCircle } from "react-icons/fa";

export default function UserSocials({ userDataName }) {
  const [loding, setLoding] = useState(true);

  const [image, setImage] = useState("");
  const [bio, setBio] = useState("");
  const [name, setName] = useState("");

  const [links, setLinks] = useState([]);

  const [showPrivate, setShowPrivate] = useState(false);
  const [inputKey, setInputKey] = useState("");
  const [error, setError] = useState(false);
  const [accessError, setAccessError] = useState(false);

  const handleInput = () => {
    if (!inputKey) return;

    if (inputKey === links.accessKey) {
      setShowPrivate(true);
      setAccessError(false);
    } else {
      setAccessError(true);
      setShowPrivate(false);
    }
  };

  useEffect(() => {
    let username = userDataName;
    try {
      fetch("/api/page/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLoding(false);
          if (data.data !== null) {
            setImage(data.data.image);
            setName(data.data.name);
            setBio(data.data.bio);
            setLinks(data.data);
          } else {
            setError(true);
          }
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoding(false);
    }
  }, []);

  const proffesional = [
    "linkedIn",
    "gitHub",
    "stackoverflow",
    "leetcode",
    "codeforces",
    "hackerrank",
    "codechef",
    "geeksforgeeks",
  ];
  const social = [
    "youtube",
    "instagram",
    "facebook",
    "snapchat",
    "twitter",
    "threads",
    "reddit",
  ];
  const creative = ["twitch", "soundcloud", "spotify", "apple music"];
  const messaging = ["discord", "telegram", "whatsapp", "skype"];
  const storefront = [
    "amazon storefront",
    "shopify",
    "ko-fi",
    "buy me a coffee",
    "patreon",
  ];
  const miscellaneous = ["website", "blog", "email", "phone"];

  return (
    <div className="relative overflow-x-hidden px-6 md:px-20 lg:px-32 py-20 grid place-content-center">
      <div className="absolute top-0 z-[-2] h-screen w-screen dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div
        onClick={() => {
          navigator.share({ url: location.href, title: name, text: name });
        }}
        className="fixed top-5 right-5 md:top-10 md:right-32"
      >
        <Button
          variant="pulseBtn"
          className="w-10 h-10 rounded-full p-0 flex items-center justify-center"
        >
          <Share2 className="w-4 h-4" />
        </Button>
      </div>
      <div className="grid place-content-center mb-5 mt-14">
        {!image && <Skeleton className="h-24 w-24 rounded-full" />}

        {image && (
          <div className="relative w-32 h-32 rounded-full flex items-center justify-center bg-transparent">
            <img
              src={image}
              alt={name}
              className="w-24 h-24 rounded-full z-10 bg-background"
            />
          </div>
        )}
      </div>
      <div className="grid place-content-center mb-6 text-center gap-3 px-2">
        <h1 className="text-3xl font-bold flex justify-center items-center text-center">
          {name}
          {name && <FaCheckCircle className="!h-4 !w-4 opacity-50 ml-2" />}
        </h1>

        <p className="text-base dark:text-gray-400 text-foreground/80 max-w-[320px] mx-auto sm:line-clamp-2 line-clamp-none">
          {bio?.length > 70 ? bio.slice(0, 70) : bio}
        </p>
      </div>

      {loding && <Skeleton className="h-8 mb-5 w-40 mx-auto" />}
      {loding && <Skeleton className="h-14 mb-5 w-[300px] mx-auto" />}

      {loding && (
        <div className="grid gap-3 max-w-[600px]">
          <Skeleton className="h-14 w-[300px] mx-auto" />
          <Skeleton className="h-14 w-[300px] mx-auto" />
          <Skeleton className="h-14 w-[300px] mx-auto" />
          <Skeleton className="h-14 w-[300px] mx-auto" />
        </div>
      )}

      {!loding && (
        <div className="grid mt-10 gap-3">
          {Object.entries(links)
            .filter(([key]) => social.includes(key))
            .map(([key, value]) => {
              const Icon = Icons[key];
              return typeof value === "string" ? (
                <LinkCard
                  key={key}
                  title={key.charAt(0).toUpperCase() + key.slice(1)}
                  href={value}
                  icon={Icons[key]}
                />
              ) : null;
            })}
          {Object.entries(links)
            .filter(([key]) => proffesional.includes(key))
            .map(([key, value]) => {
              const Icon = Icons[key];
              return typeof value === "string" ? (
                <LinkCard
                  key={key}
                  title={key.charAt(0).toUpperCase() + key.slice(1)}
                  href={value}
                  icon={Icons[key]}
                />
              ) : null;
            })}
          {Object.entries(links)
            .filter(([key]) => creative.includes(key))
            .map(([key, value]) => {
              const Icon = Icons[key];
              return typeof value === "string" ? (
                <LinkCard
                  key={key}
                  title={key.charAt(0).toUpperCase() + key.slice(1)}
                  href={value}
                  icon={Icons[key]}
                />
              ) : null;
            })}
          {Object.entries(links)
            .filter(([key]) => messaging.includes(key))
            .map(([key, value]) => {
              const Icon = Icons[key];
              return typeof value === "string" ? (
                <LinkCard
                  key={key}
                  title={key.charAt(0).toUpperCase() + key.slice(1)}
                  href={value}
                  icon={Icons[key]}
                />
              ) : null;
            })}
          {Object.entries(links)
            .filter(([key]) => storefront.includes(key))
            .map(([key, value]) => {
              const Icon = Icons[key];
              return typeof value === "string" ? (
                <LinkCard
                  key={key}
                  title={key.charAt(0).toUpperCase() + key.slice(1)}
                  href={value}
                  icon={Icons[key]}
                />
              ) : null;
            })}

          {links.accessKey && (
            <div className="border mt-10 px-4 py-3 rounded-lg mx-auto max-w-[420px]">
              <p className="text-sm text-foreground/80 mb-2">Private Links</p>
              <div className="flex items-center gap-2">
                <Input
                  value={inputKey}
                  onChange={(e) => setInputKey(e.target.value)}
                  placeholder="Enter Access Key"
                />
                <Button onClick={handleInput}>Unlock</Button>
              </div>
              {accessError && (
                <p className="text-red-500 text-sm mt-2">Invalid Access Key</p>
              )}
              {showPrivate && (
                <div className="mt-4 grid gap-3">
                  {Object.entries(links)
                    .filter(([key]) => miscellaneous.includes(key))
                    .map(([key, value]) => {
                      const Icon = Icons[key];
                      return typeof value === "string" ||
                        typeof value === "number" ? (
                        <LinkCard
                          className="!w-full !h-12"
                          key={key}
                          title={key.charAt(0).toUpperCase() + key.slice(1)}
                          href={
                            key == "email"
                              ? `mailto:${value}`
                              : key == "phone"
                                ? `tel:${value}`
                                : key == "website"
                                  ? value
                                  : key == "blog" && value
                          }
                          icon={Icons[key]}
                        />
                      ) : null;
                    })}
                </div>
              )}
            </div>
          )}
        </div>
      )}
      {error && (
        <div className="-mt-20 mb-20 grid place-content-center">
          <h1 className="font-bold text-center text-3xl mt-5">
            User not found.<span className="text-blue-600">.</span>
          </h1>
          <p className="text-center text-sm mt-2">
            Please double-check the username <br /> and try again.
          </p>
          <Button
            href="https://mysocialz.vercel.app/"
            className="mt-5 w-full max-w-sm mx-auto"
          >
            Back
          </Button>
        </div>
      )}
      <div className="mt-20 -mb-20">
        <Footer />
      </div>
    </div>
  );
}
