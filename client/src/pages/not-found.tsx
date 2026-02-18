import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/lib/i18n";
import { T } from "@/lib/translations";

export default function NotFound() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">{T("notfound.title", lang)}</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            {T("notfound.desc", lang)}
          </p>

          <Link href="/">
            <a className="mt-4 inline-block text-primary hover:underline text-sm font-medium">
              {T("notfound.home", lang)}
            </a>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
