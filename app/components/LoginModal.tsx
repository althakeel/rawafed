"use client";

import { useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider, signInWithEmailLink, sendSignInLinkToEmail, isSignInWithEmailLink } from "firebase/auth";
import { auth } from "../lib/firebase";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    // Check if the user is signing in with an email link
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
      }
      if (email) {
        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            window.localStorage.removeItem("emailForSignIn");
            console.log("User signed in:", result.user);
            onClose();
          })
          .catch((error) => {
            console.error("Email link sign-in error:", error);
            setError(error.message);
          });
      }
    }
  }, [onClose]);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError("");
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("User signed in:", result.user);
      onClose();
    } catch (err: any) {
      console.error("Google sign-in error:", err);
      setError(err.message || "Failed to sign in with Google");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const actionCodeSettings = {
        url: window.location.origin,
        handleCodeInApp: true,
      };
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      setEmailSent(true);
      setError("");
    } catch (err: any) {
      console.error("Email sign-in error:", err);
      setError(err.message || "Failed to send sign-in link");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-black/60 p-4">
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div className="relative z-10 mx-auto my-auto flex w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="hidden flex-1 flex-col items-center justify-center bg-slate-50 p-10 lg:flex">
          <div className="mb-6">
            <svg viewBox="0 0 200 150" className="h-40 w-52">
              <circle cx="50" cy="30" r="25" fill="#FCD34D" opacity="0.8" />
              <rect x="30" y="50" width="140" height="80" rx="8" fill="#EF4444" />
              <rect x="35" y="55" width="50" height="70" rx="4" fill="white" />
              <rect x="90" y="55" width="50" height="35" rx="4" fill="white" />
              <rect x="90" y="95" width="50" height="30" rx="4" fill="white" />
              <rect x="145" y="55" width="20" height="70" rx="4" fill="white" />
              <circle cx="60" cy="110" r="8" fill="#60A5FA" />
              <ellipse cx="60" cy="125" rx="6" ry="3" fill="#60A5FA" opacity="0.3" />
              <circle cx="115" cy="115" r="8" fill="#F472B6" />
              <ellipse cx="115" cy="130" rx="6" ry="3" fill="#F472B6" opacity="0.3" />
              <rect x="170" y="80" width="8" height="40" rx="4" fill="#10B981" />
              <ellipse cx="174" cy="125" rx="6" ry="3" fill="#10B981" opacity="0.3" />
            </svg>
          </div>
          <div className="space-y-2 text-center text-sm text-slate-700">
            <p className="font-medium">View saved properties</p>
            <p className="font-medium">Keep search history across devices</p>
            <p className="font-medium">See which properties you have contacted</p>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-8 lg:p-10">
          {emailSent ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Check your email</h3>
              <p className="text-center text-slate-600">
                We've sent a sign-in link to <strong>{email}</strong>
              </p>
              <p className="mt-4 text-center text-sm text-slate-500">
                Click the link in the email to complete your sign-in.
              </p>
            </div>
          ) : (
            <>
              <h2 className="mb-8 text-2xl font-bold text-slate-900">
                Welcome to Property Finder
              </h2>

              {error && (
                <div className="mb-4 rounded-lg bg-rose-50 px-4 py-3 text-sm text-rose-600">
                  {error}
                </div>
              )}

              <button
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#4285F4] px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-[#357ae8] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 bg-white rounded p-0.5">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                {loading ? "Signing in..." : "Continue with Google"}
              </button>

              <div className="my-6 flex items-center">
                <div className="flex-1 border-t border-slate-200"></div>
                <span className="px-4 text-sm text-slate-500">OR</span>
                <div className="flex-1 border-t border-slate-200"></div>
              </div>

              <form onSubmit={handleEmailSignIn} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    disabled={loading}
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-200 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-rose-500 px-4 py-3 font-semibold text-white shadow-md transition hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Continue"}
                </button>
              </form>

              <p className="mt-6 text-center text-xs text-slate-500">
                By registering you accept our{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms & Conditions
                </a>{" "}
                and our{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  privacy policy
                </a>
                .
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
