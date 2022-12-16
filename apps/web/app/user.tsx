"use client";

import { useTransition } from "react";
import React from "react";
import { Button } from "ui";
import { useRouter } from "next/navigation";
import useSWRMutation from 'swr/mutation'

async function sendReq(url: string, { arg }: Record<string, unknown>) {
  return fetch(url, {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(arg)
  })
}

export default function UserUi() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [name, setName] = React.useState("");
  const [err, setErr] = React.useState<unknown>();
  // Create inline loading UI
  const req = useSWRMutation('/api/user', sendReq)

  const isMutating = isPending || req.isMutating;
  
  async function updateUser() {
    // Mutate external data source
    try {
      await req.trigger({name})
    } catch (e) {
      setErr(e)
    }
    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
  }

  return (
    <>
    <input placeholder="name" onChange={(e)=>{setName(e.target.value), setErr("")}}/>
    <Button onClick={updateUser} disabled={isMutating}>
      {isMutating ? "...": "Submit"}
    </Button>
    {err && <text style={{color: "red"}}>{JSON.stringify(err)}</text>}
    </>
  )
}
