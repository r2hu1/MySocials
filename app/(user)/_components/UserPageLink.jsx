"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
//2
export default function UserPageLink() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (!username) {
      fetch("/api/get")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.data !== null) {
            setUsername(data.data.username);
            setName(data.data.name);
          } else {
            setShow(true);
          }
          setShow(true);
        });
    }
  }, []);

  return (
    <div className="px-6 md:px-20 lg:px-32">
      {!username ? (
        <Alert className="p-3">
          <AlertTitle className="text-sm">Just so you know! </AlertTitle>
          <AlertDescription className="text-xs text-gray-600 dark:text-gray-400">
            Scroll down to publish your page and claim your personalized URL.
          </AlertDescription>
        </Alert>
      ) : (
        <div>
          <Alert className="p-3">
            <AlertTitle className="text-sm">
              Congrats {name?.split(" ")[0]}! your page is ready!{" "}
            </AlertTitle>
            <AlertDescription className="text-xs text-gray-600 dark:text-gray-400 underline">
              <Link
                target="_blank"
                href={`https://${location.host}/${username}`}
              >
                https://{location.host}/{username}
              </Link>
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}
