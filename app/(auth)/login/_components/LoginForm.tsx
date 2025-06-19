"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GithubIcon, Send } from "lucide-react";
import GoogleSVG from "@/public/svgs/GoogleSVG";
import GithubSVG from "@/public/svgs/GithubSVG";
const LoginForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Welcome Back!</CardTitle>
        <CardDescription>
          Login with your Github or Email Account
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <Button className="w-full" variant="outline">
          <GoogleSVG />
          Sign in with Google
        </Button>
        <Button className="w-full" variant="outline">
          <GithubSVG/>
          Sign in with GitHub
        </Button>

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-card px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="john@example.com" required />
          </div>

          <Button>
            <Send className="size-4" />
            <span>Continue with Email</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
