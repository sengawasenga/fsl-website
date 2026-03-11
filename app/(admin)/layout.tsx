import { AdminSidebar } from "@/components/admin/AdminSidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-foreground/5 flex">
      <AdminSidebar />
      <main className="flex-1 ml-72 min-h-screen relative">
        <div className="absolute inset-0 bg-primary/2 pointer-events-none" />
        <div className="relative z-10 w-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
