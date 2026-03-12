"use client";

import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import logoFSL from "@/public/img/fsl-logo.png";

const LoginPage = () => {
  const router = useRouter();
  const supabase = createClient();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError(signInError.message);
        return;
      }

      router.push("/admin/home");
      router.refresh();
    } catch (err) {
      setError("Une erreur inattendue est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />

      <div className="w-full max-w-md relative z-10">
        {/* Logo and Header */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block mb-6">
            <div className="h-16 w-auto relative">
              <Image
                src={logoFSL}
                alt="Logo FSL"
                className="h-full w-auto mx-auto"
                priority
              />
            </div>
          </Link>
          <h1 className="text-3xl font-ashigea text-foreground">
            Connexion Admin
          </h1>
          <p className="text-foreground/60 mt-2 font-light">
            Accédez à votre espace d'administration
          </p>
        </div>

        {/* Login Form Card */}
        <div className="bg-foreground/5 rounded-[2.5rem] p-8 md:p-10 border border-foreground/5 backdrop-blur-sm shadow-xl shadow-black/5">
          <form className="space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl text-sm font-medium flex items-center gap-3">
                <Icon icon="solar:danger-bold-duotone" className="text-xl shrink-0" />
                {error === "Invalid login credentials" ? "Identifiants invalides." : error}
              </div>
            )}

            {/* Email Input */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground/70 px-2"
              >
                Adresse Email <span className="text-primary">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-background rounded-2xl px-6 py-4 outline-none border border-foreground/10 focus:border-primary transition-all text-foreground"
                  placeholder="exemple@email.com"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-foreground/70"
                >
                  Mot de passe <span className="text-primary">*</span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-primary hover:underline font-medium"
                >
                  Oublié ?
                </Link>
              </div>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-background rounded-2xl px-6 py-4 outline-none border border-foreground/10 focus:border-primary transition-all text-foreground"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2 px-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded-lg border-foreground/20 text-primary focus:ring-primary bg-background cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="text-sm text-foreground/60 cursor-pointer select-none"
              >
                Se souvenir de moi
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              isDisabled={loading}
              className="bg-primary text-background w-full h-14 rounded-2xl text-lg mt-2 font-medium shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <Icon icon="solar:refresh-bold-duotone" className="animate-spin text-2xl" />
                  Connexion...
                </div>
              ) : (
                "Se connecter"
              )}
            </Button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors text-sm font-medium"
          >
            <Icon icon="solar:arrow-left-linear" className="text-lg" />
            Retour au site
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
