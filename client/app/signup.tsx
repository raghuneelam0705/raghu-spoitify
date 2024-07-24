"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {signUp} from "../firebase_setup/firebase"


interface SignupFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Signup({ className, ...props }: SignupFormProps) {

  async function onSubmit(event: React.SyntheticEvent) {
    console.log(event.target.elements["email"]["value"])
    const email = event.target.elements["email"]["value"]
    const password = event.target.elements["password"]["value"]
    event.preventDefault()
    const res = await signUp(email, password);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Password
            </Label>
            <Input
              id="password"
              placeholder=""
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
            />
          </div>
          <Button >
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  )
}