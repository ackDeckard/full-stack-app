import GlassPane from "@/components/GlassPane";
import "@/styles/global.css";

export default function AuthRootLayout({ children }) {
  return (
    <html lang="en">
      <head />

      <body className="rainbow-mesh h-screen w-screen p-6">
        <GlassPane className="flex h-full w-full place-items-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
