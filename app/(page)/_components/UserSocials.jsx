"use client";

import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Share2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UserSocials({ userDataName }) {
  const [loding, setLoding] = useState(true);
  const [bio, setBio] = useState("");
  const [insta, setInsta] = useState("");
  const [face, setFace] = useState("");
  const [snapchat, setSnapchat] = useState("");
  const [github, setGithub] = useState("");
  const [youtube, setYoutube] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [threads, setThreads] = useState("");
  const [reddit, setReddit] = useState("");
  const [stackoverflow, setStackoverflow] = useState("");
  const [leetcode, setLeetcode] = useState("");
  const [codeforces, setCodeforces] = useState("");
  const [hackerrank, setHackerrank] = useState("");
  const [codechef, setCodechef] = useState("");
  const [geeksForGeeks, setGeeksForGeeks] = useState("");
  const [twitch, setTwitch] = useState("");
  const [soundcloud, setSoundcloud] = useState("");
  const [spotify, setSpotify] = useState("");
  const [applemusic, setApplemusic] = useState("");
  const [discord, setDiscord] = useState("");
  const [telegram, setTelegram] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [skype, setSkype] = useState("");
  const [amazon, setAmazon] = useState("");
  const [shopify, setShopify] = useState("");
  const [kofi, setkofi] = useState("");
  const [buyMeACoffee, setBuyMeACoffee] = useState("");
  const [patreon, setPatreon] = useState("");
  const [website, setWebsite] = useState("");
  const [blog, setBlog] = useState("");
  const [emailField, setEmailField] = useState("");
  const [phone, setPhone] = useState("");
  const [accessKey, setAccessKey] = useState("");
  const [showPrivate, setShowPrivate] = useState(false);
  const [inputKey, setInputKey] = useState("");
  const [wrongKey, setWrongKey] = useState(false);

  useEffect(() => {
    if (
      !bio &&
      !insta &&
      !face &&
      !github &&
      !youtube &&
      !snapchat &&
      !linkedin &&
      !twitter &&
      !threads &&
      !reddit &&
      !stackoverflow &&
      !leetcode &&
      !codeforces &&
      !hackerrank &&
      !codechef &&
      !geeksForGeeks &&
      !twitch &&
      !soundcloud &&
      !spotify &&
      !applemusic &&
      !discord &&
      !telegram &&
      !whatsapp &&
      !skype &&
      !amazon &&
      !shopify &&
      !kofi &&
      !buyMeACoffee &&
      !patreon &&
      !website &&
      !blog &&
      !emailField &&
      !phone &&
      !showPrivate &&
      !accessKey &&
      !inputKey
    ) {
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
            setLoding(false);
            if (data.data !== null) {
              setImage(data.data.image);
              setName(data.data.name);
              setBio(data.data.bio);
              setInsta(data.data.instagram);
              setFace(data.data.facebook);
              setSnapchat(data.data.snapchat);
              setLinkedin(data.data.linkedin);
              setTwitter(data.data.twitter);
              setGithub(data.data.github);
              setYoutube(data.data.youtube);
              setThreads(data.data.threads || "");
              setReddit(data.data.reddit || "");
              setStackoverflow(data.data.stackoverflow || "");
              setLeetcode(data.data.leetcode || "");
              setCodeforces(data.data.codeforces || "");
              setHackerrank(data.data.hackerrank || "");
              setCodechef(data.data.codechef || "");
              setGeeksForGeeks(data.data.geeksForGeeks || "");
              setTwitch(data.data.twitch || "");
              setSoundcloud(data.data.soundcloud || "");
              setSpotify(data.data.spotify || "");
              setApplemusic(data.data.applemusic || "");
              setDiscord(data.data.discord || "");
              setTelegram(data.data.telegram || "");
              setWhatsapp(data.data.whatsapp || "");
              setSkype(data.data.skype || "");
              setAmazon(data.data.amazon || "");
              setShopify(data.data.shopify || "");
              setkofi(data.data.kofi || "");
              setBuyMeACoffee(data.data.buyMeACoffee || "");
              setPatreon(data.data.patreon || "");
              setWebsite(data.data.website || "");
              setBlog(data.data.blog || "");
              setEmailField(data.data.email || "");
              setPhone(data.data.phone || "");
              setAccessKey(data.data.accessKey || "");
              setInputKey(data.data.inputKey || "");
              setShowPrivate(data.data.showPrivate || "");
            } else {
              setError(true);
            }
          });
      } catch (error) {
        console.error(error);
      }
    }
  });

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
      <>
        <div className="grid place-content-center mb-14 text-center gap-1 px-2">
          <h1 className="text-3xl font-bold flex justify-center items-center text-center">
            {name}
            {name && (
              <svg
                aria-label="Verified"
                className="ml-2"
                fill="gray"
                height="16"
                role="img"
                viewBox="0 0 40 40"
                width="16"
              >
                <path
                  d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                  fillRule="evenodd"
                />
              </svg>
            )}
          </h1>

          <p className="text-sm dark:text-gray-400 text-gray-600 max-w-[320px] mx-auto sm:line-clamp-2 line-clamp-none">
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
      </>

      {!loding && (
        <div className="grid relative gap-3 grid-cols-1 max-w-[600px]">
          <div className="w-full md:w-[420px] sm:w-[300px] font-semibold mx-auto h-14 flex items-center justify-center relative gap-2 dark:text-white">
            <img
              src="/assets/socials-icon.svg"
              alt="Socials"
              className="h-5 w-5"
              draggable="false"
            />
            <h2 className="text-base text-gray-500 ">Socials</h2>
          </div>

          {!youtube ? null : (
            <Link
              href={youtube}
              target="_blank"
              className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
            >
              <img
                src="/assets/youtube-icon.svg"
                alt="YouTube"
                className="absolute left-6 h-5 w-5"
                draggable="false"
              />
              My YouTube
            </Link>
          )}

          {!insta ? null : (
            <Link
              href={insta}
              target="_blank"
              className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
            >
              <img
                src="/assets/instagram-icon.svg"
                alt="Instagram"
                className="absolute left-6 h-5 w-5"
                draggable="false"
              />
              My Instagram
            </Link>
          )}

          {!face ? null : (
            <Link
              href={face}
              target="_blank"
              className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
            >
              <img
                src="/assets/facebook-icon.svg"
                alt="Facebook"
                className="absolute left-6 h-5 w-5"
                draggable="false"
              />
              My Facebook
            </Link>
          )}

          {!snapchat ? null : (
            <Link
              href={snapchat}
              target="_blank"
              className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
            >
              <img
                src="/assets/snapchat-icon.svg"
                alt="Snapchat"
                className="absolute left-6 h-5 w-5"
                draggable="false"
              />
              My Snapchat
            </Link>
          )}

          {!twitter ? null : (
            <Link
              href={twitter}
              target="_blank"
              className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
            >
              <img
                src="/assets/twitter-icon.svg"
                alt="Twitter"
                className="absolute left-6 h-5 w-5"
                draggable="false"
              />
              My Twitter
            </Link>
          )}

          {!threads ? null : (
            <Link
              href={threads}
              target="_blank"
              className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
            >
              <img
                src="/assets/threads-icon.svg"
                alt="LinkedIn"
                className="absolute left-6 h-5 w-5"
                draggable="false"
              />
              My Threads
            </Link>
          )}

          {(linkedin ||
            github ||
            reddit ||
            stackoverflow ||
            leetcode ||
            codeforces ||
            hackerrank ||
            codechef ||
            geeksForGeeks) && (
            <>
              <div className="w-full md:w-[420px] sm:w-[300px] font-semibold mx-auto h-14 flex items-center justify-center gap-2 dark:text-white">
                <img
                  src="/assets/professional-icon.svg"
                  alt="Professional"
                  className="h-5 w-5"
                  draggable="false"
                />
                <h2 className="text-base text-gray-500 ">Professional</h2>
              </div>

              {linkedin && (
                <Link
                  href={linkedin}
                  target="_blank"
                  className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                >
                  <img
                    src="/assets/linkedin-icon.svg"
                    alt="LinkedIn"
                    className="absolute left-6 h-5 w-5"
                    draggable="false"
                  />
                  My LinkedIn
                </Link>
              )}

              {github && (
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                >
                  <img
                    src="/assets/github-icon.svg"
                    alt="GitHub"
                    className="absolute left-6 h-6 w-6"
                    draggable="false"
                  />
                  My Github
                </Link>
              )}

              {reddit && (
                <Link
                  href={reddit}
                  target="_blank"
                  className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                >
                  <img
                    src="/assets/reddit-icon.svg"
                    alt="Reddit"
                    className="absolute left-6 h-6 w-6"
                    draggable="false"
                  />
                  My Reddit
                </Link>
              )}

              {stackoverflow && (
                <Link
                  href={stackoverflow}
                  target="_blank"
                  className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                >
                  <img
                    src="/assets/stackoverflow-icon.svg"
                    alt="Stack Overflow"
                    className="absolute left-6 h-6 w-6"
                    draggable="false"
                  />
                  My Stack Overflow
                </Link>
              )}

              {leetcode && (
                <Link
                  href={leetcode}
                  target="_blank"
                  className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                >
                  <img
                    src="/assets/leetcode-icon.svg"
                    alt="LeetCode"
                    className="absolute left-6 h-6 w-6"
                    draggable="false"
                  />
                  My LeetCode
                </Link>
              )}

              {codeforces && (
                <Link
                  href={codeforces}
                  target="_blank"
                  className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                >
                  <img
                    src="/assets/codeforces-icon.svg"
                    alt="Codeforces"
                    className="absolute left-6 h-6 w-6"
                    draggable="false"
                  />
                  My Codeforces
                </Link>
              )}

              {hackerrank && (
                <Link
                  href={hackerrank}
                  target="_blank"
                  className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                >
                  <img
                    src="/assets/hackerrank-icon.svg"
                    alt="HackerRank"
                    className="absolute left-6 h-6 w-6"
                    draggable="false"
                  />
                  My HackerRank
                </Link>
              )}

              {codechef && (
                <Link
                  href={codechef}
                  target="_blank"
                  className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                >
                  <img
                    src="/assets/codechef-icon.svg"
                    alt="CodeChef"
                    className="absolute left-6 h-6 w-6"
                    draggable="false"
                  />
                  My CodeChef
                </Link>
              )}

              {geeksForGeeks && (
                <Link
                  href={geeksForGeeks}
                  target="_blank"
                  className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                >
                  <img
                    src="/assets/gfg-icon.svg"
                    alt="GeeksForGeeks"
                    className="absolute left-6 h-6 w-6"
                    draggable="false"
                  />
                  My GFG
                </Link>
              )}
            </>
          )}

          {(twitch || soundcloud || spotify || applemusic) && (
            <>
              <div className="w-full gap-2 md:w-[420px] sm:w-[300px] font-semibold mx-auto h-14 flex items-center justify-center relative dark:text-white">
                <img
                  src="/assets/music-icon.svg"
                  alt="Music"
                  className="h-5 w-5"
                  draggable="false"
                />
                <h2 className="text-base text-gray-500 ">Music</h2>
              </div>

              {twitch && (
                <Link
                  href={twitch}
                  target="_blank"
                  className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                >
                  <img
                    src="/assets/twitch-icon.svg"
                    alt="Twitch"
                    className="absolute left-6 h-6 w-6"
                    draggable="false"
                  />
                  My Twitch
                </Link>
              )}

              {soundcloud && (
                <Link
                  href={soundcloud}
                  target="_blank"
                  className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                >
                  <img
                    src="/assets/soundcloud-icon.svg"
                    alt="SoundCloud"
                    className="absolute left-6 h-6 w-6"
                    draggable="false"
                  />
                  My SoundCloud
                </Link>
              )}

              {spotify && (
                <Link
                  href={spotify}
                  target="_blank"
                  className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                >
                  <img
                    src="/assets/spotify-icon.svg"
                    alt="Spotify"
                    className="absolute left-6 h-6 w-6"
                    draggable="false"
                  />
                  My Spotify
                </Link>
              )}

              {applemusic && (
                <Link
                  href={applemusic}
                  target="_blank"
                  className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                >
                  <img
                    src="/assets/applemusic-icon.svg"
                    alt="Apple Music"
                    className="absolute left-6 h-6 w-6"
                    draggable="false"
                  />
                  My Apple Music
                </Link>
              )}
            </>
          )}

          {(discord || telegram || whatsapp || skype) && (
            <>
              <div className="w-full gap-2 md:w-[420px] sm:w-[300px] font-semibold mx-auto h-14 flex items-center justify-center relative dark:text-white">
                <img
                  src="/assets/communication-icon.svg"
                  alt="Communication"
                  className="h-5 w-5"
                  draggable="false"
                />
                <h2 className="text-base text-gray-500 ">Communication</h2>
              </div>

              {discord && (
                <Link
                  href={discord}
                  target="_blank"
                  className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                >
                  <img
                    src="/assets/discord-icon.svg"
                    alt="Discord"
                    className="absolute left-6 h-6 w-6"
                    draggable="false"
                  />
                  My Discord
                </Link>
              )}

              {telegram && (
                <Link
                  href={telegram}
                  target="_blank"
                  className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                >
                  <img
                    src="/assets/telegram-icon.svg"
                    alt="Telegram"
                    className="absolute left-6 h-6 w-6"
                    draggable="false"
                  />
                  My Telegram
                </Link>
              )}

              {whatsapp && (
                <Link
                  href={whatsapp}
                  target="_blank"
                  className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                >
                  <img
                    src="/assets/whatsapp-icon.svg"
                    alt="WhatsApp"
                    className="absolute left-6 h-6 w-6"
                    draggable="false"
                  />
                  My WhatsApp
                </Link>
              )}

              {skype && (
                <Link
                  href={skype}
                  target="_blank"
                  className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                >
                  <img
                    src="/assets/skype-icon.svg"
                    alt="Skype"
                    className="absolute left-6 h-6 w-6"
                    draggable="false"
                  />
                  My Skype
                </Link>
              )}
            </>
          )}

          {(amazon || shopify || kofi || buyMeACoffee || patreon) && (
            <>
              <div className="w-full gap-2 md:w-[420px] sm:w-[300px] font-semibold mx-auto h-14 flex items-center justify-center relative dark:text-white">
                <img
                  src="/assets/donations-icon.svg"
                  alt="Donations"
                  className="h-5 w-5"
                  draggable="false"
                />
                <h2 className="text-base text-gray-500  text-[12px]">
                  Storefront/Donations
                </h2>
              </div>

              {amazon && (
                <Link
                  href={amazon}
                  target="_blank"
                  className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                >
                  <img
                    src="/assets/amazon-icon.svg"
                    alt="Amazon"
                    className="absolute left-6 h-6 w-6"
                    draggable="false"
                  />
                  My Amazon
                </Link>
              )}

              {shopify && (
                <Link
                  href={shopify}
                  target="_blank"
                  className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                >
                  <img
                    src="/assets/shopify-icon.svg"
                    alt="Shopify"
                    className="absolute left-6 h-6 w-6"
                    draggable="false"
                  />
                  My Shopify
                </Link>
              )}

              {kofi && (
                <Link
                  href={kofi}
                  target="_blank"
                  className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                >
                  <img
                    src="/assets/kofi-icon.svg"
                    alt="Ko-Fi"
                    className="absolute left-6 h-6 w-6"
                    draggable="false"
                  />
                  Ko-fi Tip
                </Link>
              )}

              {buyMeACoffee && (
                <Link
                  href={buyMeACoffee}
                  target="_blank"
                  className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                >
                  <img
                    src="/assets/buymeacoffee-icon.svg"
                    alt="Buy Me A Coffee"
                    className="absolute left-6 h-6 w-6"
                    draggable="false"
                  />
                  Buy Me A Coffee
                </Link>
              )}

              {patreon && (
                <Link
                  href={patreon}
                  target="_blank"
                  className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                >
                  <img
                    src="/assets/patreon-icon.svg"
                    alt="Patreon"
                    className="absolute left-6 h-6 w-6"
                    draggable="false"
                  />
                  Get Perks
                </Link>
              )}
            </>
          )}

          {(accessKey || website || blog || emailField || phone) && (
            <div>
              {/* Heading */}
              <div className="w-full gap-2 md:w-[420px] sm:w-[300px] font-semibold mx-auto h-14 flex items-center justify-center relative dark:text-white">
                <img
                  src="/assets/miscellaneous-icon.svg"
                  alt="Miscellaneous"
                  className="h-5 w-7"
                  draggable="false"
                />
                <h2 className="text-base text-gray-500 ">Miscellaneous</h2>
              </div>

              {accessKey && !showPrivate && (
                <div className="flex flex-col items-center gap-3 my-6">
                  <input
                    type="password"
                    placeholder="Enter Access Key"
                    value={inputKey}
                    onChange={(e) => setInputKey(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md w-[280px] text-sm dark:bg-neutral-900 dark:text-white dark:border-neutral-700"
                  />
                  <Button
                    onClick={() => {
                      if (inputKey === accessKey) {
                        setShowPrivate(true);
                        setWrongKey(false);
                      } else {
                        setWrongKey(true);
                      }
                    }}
                    className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary text-black hover:text-white hover:scale-95 relative dark:hover:text-black"
                  >
                    Unlock Private Links
                  </Button>

                  {wrongKey && (
                    <h1 className="text-sm text-red-600 dark:text-red-400 font-medium">
                      That key didn’t match.
                    </h1>
                  )}
                </div>
              )}

              {showPrivate && (
                <>
                  {website && (
                    <Link
                      href={website}
                      target="_blank"
                      className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                    >
                      <img
                        src="/assets/website-icon.svg"
                        alt="Website"
                        className="absolute left-6 h-6 w-6"
                        draggable="false"
                      />
                      My Website
                    </Link>
                  )}

                  {blog && (
                    <Link
                      href={blog}
                      target="_blank"
                      className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                    >
                      <img
                        src="/assets/blog-icon.svg"
                        alt="Blog"
                        className="absolute left-6 h-6 w-6"
                        draggable="false"
                      />
                      Read My Blog
                    </Link>
                  )}

                  {emailField && (
                    <Link
                      href={`mailto:${emailField}`}
                      className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                    >
                      <img
                        src="/assets/email-icon.svg"
                        alt="Email"
                        className="absolute left-6 h-6 w-6"
                        draggable="false"
                      />
                      Email Me
                    </Link>
                  )}

                  {phone && (
                    <Link
                      href={`tel:${phone}`}
                      className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
                    >
                      <img
                        src="/assets/phone-icon.svg"
                        alt="Phone"
                        className="absolute left-6 h-6 w-6"
                        draggable="false"
                      />
                      Call Me
                    </Link>
                  )}
                </>
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
