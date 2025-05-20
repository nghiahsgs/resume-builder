import { redirect } from "../i18n/navigation";

// Đây là một Server Component nên không thể truy cập window
export default function RootPage() {
  // Luôn redirect về language mặc định
  // Host app sẽ quản lý đúng đường dẫn locale
  redirect({ href: "/en", locale: "en" });
}
