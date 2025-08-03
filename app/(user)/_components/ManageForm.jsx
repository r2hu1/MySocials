"use client";

import { useState, useEffect, useRef } from "react";
import party from "party-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LoaderIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Skeleton } from "@/components/ui/skeleton";


export default function ManageForm() {
  const { toast } = useToast();

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [insta, setInsta] = useState("");
  const [face, setFace] = useState("");
  const [github, setGithub] = useState("");
  const [snapchat, setSnapchat] = useState("");
  const [youtube, setYoutube] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
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
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [accessKey, setAccessKey] = useState("");

  const [loading, setLoading] = useState(true);
  const [isPublished, setIsPublished] = useState(false);


  const publishRef = useRef(null);


  useEffect(() => {
    if (loading) {
      fetch("/api/get")
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          if (data.data) {
            const d = data.data;
            setUsername(d.username || "");
            setName(d.name || "");
            setBio(d.bio || "");
            setInsta(d.instagram || "");
            setFace(d.facebook || "");
            setGithub(d.github || "");
            setSnapchat(d.snapchat || "");
            setLinkedin(d.linkedin || "");
            setTwitter(d.twitter || "");
            setYoutube(d.youtube || "");
            setThreads(d.threads || "");
            setReddit(d.reddit || "");
            setStackoverflow(d.stackoverflow || "");
            setLeetcode(d.leetcode || "");
            setCodeforces(d.codeforces || "");
            setHackerrank(d.hackerrank || "");
            setCodechef(d.codechef || "");
            setGeeksForGeeks(d.geeksForGeeks || "");
            setTwitch(d.twitch || "");
            setSoundcloud(d.soundcloud || "");
            setSpotify(d.spotify || "");
            setApplemusic(d.applemusic || "");
            setDiscord(d.discord || "");
            setTelegram(d.telegram || "");
            setWhatsapp(d.whatsapp || "");
            setSkype(d.skype || "");
            setAmazon(d.amazon || "");
            setShopify(d.shopify || "");
            setkofi(d.kofi || "");
            setBuyMeACoffee(d.buyMeACoffee || "");
            setPatreon(d.patreon || "");
            setWebsite(d.website || "");
            setBlog(d.blog || "");
            setEmail(d.email || "");
            setPhone(d.phone || "");
            setAccessKey(d.accessKey || "");

          }
        })
        .catch(() => setLoading(false));
    }
  }, [loading]);


  useEffect(() => {
    const flag = localStorage.getItem("celebratedProfile");
    if (flag) {

      party.confetti(document.body, {
        count: party.variation.range(80, 220),
        spread: 150,
      });
      localStorage.removeItem("celebratedProfile");
    }
  }, []);


  const handlePublishEvent = async (e) => {
    e.preventDefault();
    setIsPublished(true);


    if (username.length < 5) {
      toast({ title: "Username must be at least 5 characters long." });
      setIsPublished(false);
      return;
    }

    try {
      const res = await fetch("/api/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          name,
          bio,
          instagram: insta,
          facebook: face,
          github,
          snapchat,
          youtube,
          linkedin,
          twitter,
          threads,
          reddit,
          stackoverflow,
          leetcode,
          codeforces,
          hackerrank,
          codechef,
          geeksForGeeks,
          twitch,
          soundcloud,
          spotify,
          applemusic,
          discord,
          telegram,
          whatsapp,
          skype,
          amazon,
          shopify,
          kofi,
          buyMeACoffee,
          patreon,
          website,
          blog,
          email,
          phone,
          accessKey
        }),

      });
      const data = await res.json();

      if (data.error) {
        toast({ title: data.error });
        setIsPublished(false);
        return;
      }


      toast({ title: "Successfully published your profile!" });


      localStorage.setItem("celebratedProfile", "true");

      setTimeout(() => location.reload(), 1000);
    } catch (err) {
      toast({ title: "Something went wrong. Please try again." });
      setIsPublished(false);
    }
  };


  useEffect(() => {
    if (loading) {
      fetch("/api/get")
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);

          if (data.data !== null) {
            console.log("Fetched user data:", data);
            const d = data.data;

            setUsername(d.username || "");
            setName(d.name || "");
            setBio(d.bio || "");
            setInsta(d.instagram || "");
            setFace(d.facebook || "");
            setGithub(d.github || "");
            setSnapchat(d.snapchat || "");
            setLinkedin(d.linkedin || "");
            setTwitter(d.twitter || "");
            setYoutube(d.youtube || "");
            setThreads(d.threads || "");
            setReddit(d.reddit || "");
            setStackoverflow(d.stackoverflow || "");
            setLeetcode(d.leetcode || "");
            setCodeforces(d.codeforces || "");
            setHackerrank(d.hackerrank || "");
            setCodechef(d.codechef || "");
            setGeeksForGeeks(d.geeksForGeeks || "");
            setTwitch(d.twitch || "");
            setSoundcloud(d.soundcloud || "");
            setSpotify(d.spotify || "");
            setApplemusic(d.applemusic || "");
            setDiscord(d.discord || "");
            setTelegram(d.telegram || "");
            setWhatsapp(d.whatsapp || "");
            setSkype(d.skype || "");
            setAmazon(d.amazon || "");
            setShopify(d.shopify || "");
            setkofi(d.kofi || "");
            setBuyMeACoffee(d.buyMeACoffee || "");
            setPatreon(d.patreon || "");
            setWebsite(d.website || "");
            setBlog(d.blog || "");
            setEmail(d.email || "");
            setPhone(d.phone || "");
            setAccessKey(d.accessKey || "");
          } else {
            console.warn("No user data found.");
          }
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
          setLoading(false);
        });
    }
  }, [loading]);

  return (
    <form
      className="grid gap-2 mt-5 lg:px-40"
      onSubmit={handlePublishEvent}
    >
      {loading ? (
        <div className="grid gap-2 mt-5">
          <Skeleton className="h-5 w-20 mt-2" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-5 w-20 mt-2" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-5 w-20 mt-2" />
          <Skeleton className="h-20 w-full mb-8" />
          <Skeleton className="h-5 w-20 mt-2" />
          <Skeleton className="h-10 w-full" />
        </div>
      ) : (
        <div className="grid gap-3 mt-5 text-gray-600">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value.trim().toLowerCase())}
            placeholder="Username"
            maxLength={10}
            className="placeholder:text-gray-400 placeholder:text-sm text-gray-700 text-[13px]"
          />

          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            maxLength={40}
            className="placeholder:text-gray-400 placeholder:text-sm text-gray-700 text-[13px]"
          />

          <Label htmlFor="bio">About</Label>
          <Textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell others about yourself"
            maxLength={500}
            className="placeholder:text-gray-400 placeholder:text-sm text-gray-700 text-[13px]"
          />

          {/* Social Links */}
          <p className="text-[13px] mt-4 text-red-500">
            Add your social links. Skip any you don't have.
          </p>
          <p className="text-[15px] mt-4 font-semibold text-gray-900">
            Social Media
          </p>

          <Label htmlFor="youtube">YouTube</Label>
          <Input
            id="youtube"
            type="url"
            value={youtube}
            onChange={(e) => setYoutube(e.target.value)}
            placeholder="https://youtube.com/@username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600 "
          />

          <Label htmlFor="insta">Instagram</Label>
          <Input
            id="insta"
            type="url"
            value={insta}
            onChange={(e) => setInsta(e.target.value)}
            placeholder="https://instagram.com/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="face">Facebook</Label>
          <Input
            id="face"
            type="url"
            value={face}
            onChange={(e) => setFace(e.target.value)}
            placeholder="https://facebook.com/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="snapchat">Snapchat</Label>
          <Input
            id="snapchat"
            type="url"
            value={snapchat}
            onChange={(e) => setSnapchat(e.target.value)}
            placeholder="https://snapchat.com/add/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="twitter">Twitter</Label>
          <Input
            id="twitter"
            type="url"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            placeholder="https://twitter.com/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="threads">Threads</Label>
          <Input
            id="threads"
            type="url"
            value={threads}
            onChange={(e) => setThreads(e.target.value)}
            placeholder="https://threads.net/@username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="reddit">Reddit</Label>
          <Input
            id="reddit"
            type="url"
            value={reddit}
            onChange={(e) => setReddit(e.target.value)}
            placeholder="https://reddit.com/user/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <p className="text-[15px] mt-4 font-semibold text-gray-900">Professional</p>

          <Label htmlFor="linkedin">LinkedIn</Label>
          <Input
            id="linkedin"
            type="url"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="https://linkedin.com/in/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="github">GitHub</Label>
          <Input
            id="github"
            type="url"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            placeholder="https://github.com/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="stackoverflow">Stack Overflow</Label>
          <Input
            id="stackoverflow"
            type="url"
            value={stackoverflow}
            onChange={(e) => setStackoverflow(e.target.value)}
            placeholder="https://stackoverflow.com/users/userid/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="leetcode">LeetCode</Label>
          <Input
            id="leetcode"
            type="url"
            value={leetcode}
            onChange={(e) => setLeetcode(e.target.value)}
            placeholder="https://leetcode.com/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="codeforces">Codeforces</Label>
          <Input
            id="codeforces"
            type="url"
            value={codeforces}
            onChange={(e) => setCodeforces(e.target.value)}
            placeholder="https://codeforces.com/profile/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="hackerrank">HackerRank</Label>
          <Input
            id="hackerrank"
            type="url"
            value={hackerrank}
            onChange={(e) => setHackerrank(e.target.value)}
            placeholder="https://www.hackerrank.com/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="codechef">CodeChef</Label>
          <Input
            id="codechef"
            type="url"
            value={codechef}
            onChange={(e) => setCodechef(e.target.value)}
            placeholder="https://www.codechef.com/users/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="geeksForGeeks">GeeksforGeeks</Label>
          <Input
            id="geeksForGeeks"
            type="url"
            value={geeksForGeeks}
            onChange={(e) => setGeeksForGeeks(e.target.value)}
            placeholder="https://auth.geeksforgeeks.org/user/username/profile"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <p className="text-[15px] mt-4 font-semibold text-gray-900">Creative/Music/Streaming</p>

          <Label htmlFor="twitch">Twitch</Label>
          <Input
            id="twitch"
            type="url"
            value={twitch}
            onChange={(e) => setTwitch(e.target.value)}
            placeholder="https://twitch.tv/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="soundcloud">SoundCloud</Label>
          <Input
            id="soundcloud"
            type="url"
            value={soundcloud}
            onChange={(e) => setSoundcloud(e.target.value)}
            placeholder="https://soundcloud.com/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="spotify">Spotify</Label>
          <Input
            id="spotify"
            type="url"
            value={spotify}
            onChange={(e) => setSpotify(e.target.value)}
            placeholder="https://open.spotify.com/user/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="applemusic">Apple Music</Label>
          <Input
            id="applemusic"
            type="url"
            value={applemusic}
            onChange={(e) => setApplemusic(e.target.value)}
            placeholder="https://music.apple.com/profile/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <p className="text-[15px] mt-4 font-semibold text-gray-900">Messaging/Communication</p>

          <Label htmlFor="discord">Discord</Label>
          <Input
            id="discord"
            type="url"
            value={discord}
            onChange={(e) => setDiscord(e.target.value)}
            placeholder="https://discord.com/users/discordID"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="telegram">Telegram</Label>
          <Input
            id="telegram"
            type="url"
            value={telegram}
            onChange={(e) => setTelegram(e.target.value)}
            placeholder="https://t.me/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="whatsapp">WhatsApp</Label>
          <Input
            id="whatsapp"
            type="url"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="https://wa.me/919876543210"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="skype">Skype</Label>
          <Input
            id="skype"
            type="url"
            value={skype}
            onChange={(e) => setSkype(e.target.value)}
            placeholder="skype:username?chat"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <p className="text-[15px] mt-4 font-semibold text-gray-900">
            Storefront/Donations
          </p>
          <Label htmlFor="amazon" className="mt-2">Amazon Storefront</Label>
          <Input
            id="amazon"
            type="url"
            value={amazon}
            onChange={(e) => setAmazon(e.target.value)}
            placeholder="https://amazon.com/shop/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />


          <Label htmlFor="shopify" className="mt-2">Shopify</Label>
          <Input
            id="shopify"
            type="url"
            value={shopify}
            onChange={(e) => setShopify(e.target.value)}
            placeholder="https://username.myshopify.com"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />



          <Label htmlFor="kofi" className="mt-2">Ko-fi</Label>
          <Input
            id="kofi"
            type="url"
            value={kofi}
            onChange={(e) => setkofi(e.target.value)}
            placeholder="https://ko-fi.com/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="buyMeACoffee" className="mt-2">Buy Me a Coffee</Label>
          <Input
            id="buyMeACoffee"
            type="url"
            value={buyMeACoffee}
            onChange={(e) => setBuyMeACoffee(e.target.value)}
            placeholder="https://buymeacoffee.com/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="patreon" className="mt-2">Patreon</Label>
          <Input
            id="patreon"
            type="url"
            value={patreon}
            onChange={(e) => setPatreon(e.target.value)}
            placeholder="https://patreon.com/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />


          <p className="text-[15px] mt-4 font-semibold text-gray-900">
            Miscellaneous
          </p>
          <Label htmlFor="website" className="mt-2">Personal Website</Label>
          <Input
            id="website"
            type="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="https://yourdomain.com"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="blog" className="mt-2">Blog</Label>
          <Input
            id="blog"
            type="url"
            value={blog}
            onChange={(e) => setBlog(e.target.value)}
            placeholder="https://yourblog.com"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="email" className="mt-2">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="mailto:you@example.com"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="phone" className="mt-2">Phone</Label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="tel:+919876543210"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <div>
            <Label htmlFor="phone" className="mt-2 block text-red-600">Set Access Key(Optional)</Label>
            <Label htmlFor="phone" className="mt-1">Set a key to hide private miscellaneous links.</Label>
          </div>
          <Input
            type="text"
            id="accessKey"
            value={accessKey}
            onChange={(e) => setAccessKey(e.target.value)}
            placeholder="Set a access key"
            className="placeholder:text-gray-400 placeholder:text-sm placeholder:font-normal font-semibold text-red-600"
          />

          <div className="grid mt-5">
            <Button
              ref={publishRef}
              type="submit"
              disabled={isPublished}
              className="w-full"
            >
              {isPublished ? (
                <LoaderIcon className="w-4 h-4 animate-spin" />
              ) : (
                "Publish"
              )}
            </Button>
          </div>
        </div>
      )}
    </form>
  );
}
