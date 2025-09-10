"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download } from "lucide-react";

export function DownloadForm() {
  const [videoUrl, setVideoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    if (!videoUrl) return;
    setIsLoading(true);
    // TODO: Implement download logic
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex flex-col gap-4 sm:flex-row">
        <Input
          type="url"
          placeholder="Paste Loom video URL here..."
          className="flex-1 px-6 py-6 text-base"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <Button
          size="lg"
          className="px-8 py-6 text-base font-semibold"
          onClick={handleDownload}
          disabled={isLoading}
        >
          {isLoading ? (
            <>Processing...</>
          ) : (
            <>
              <Download className="mr-2 h-5 w-5" />
              Download Video
            </>
          )}
        </Button>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">Example: https://www.loom.com/share/...</p>
    </div>
  );
}

