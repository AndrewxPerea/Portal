import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Header } from "./components/Header/Header";
import { CompanyInformation } from "./components/CompanyInformation";

export default async function CompanyIdPage({
  params,
}: {
  params: { companyId: string };
}) {
  const { userId } = auth();
  if (!userId) {
    return redirect("/sign-in");
  }
  const company = await db.company.findUnique({
    where: {
      id: params.companyId,
      userId,
    },
  });
  if (!company) {
    return "/";
  }

  return (
    <div>
      <Header />
      <CompanyInformation company={company} />
      <p>Foother</p>
    </div>
  );
}
